import { AxiosPromise } from 'axios'
import ServiceProxyBase from '../../../../../../../service/cfc/ServiceProxyBase'
import GlobalEventDispatcher from '../../../../../../../service/utils/GlobalEventDispatcher'
import qs from 'qs'
import ArrayCollection from '../../../../../../../vo/ArrayCollection'
import { BankEFTReportEvent } from '../model/events/BankEFTReportEvent.ts'
import { BankEFTModel } from '../model/BankEFTModel.ts'
import { toast } from 'react-toastify'
import { stringifyCircularObjectWithModifiedKeys } from '../../../../../../../shared/utils'

export class BankEFTService extends ServiceProxyBase {
	public static REMOTE_DESTINATION: string = 'BankEFTService'

	dispatch(evt) {
		GlobalEventDispatcher.instance().dispatchEvent(evt)
	}

	static instance: any
	static getInstance: () => any
	public service: RemoteObject

	public bankEFTModel: BankEFTModel = BankEFTModel.getInstance()

	private searchStartDt: Date = null
	private searchEndDt: Date = null
	private _editor: boolean = false

	public findbankEFTHeader(): AxiosPromise<any> {
		// var rpcCall: AsyncToken = this.service.findBankEFTHeader()
		// rpcCall.addResponder(new AsyncResponder(this.headerResultEvent, this.failureFaultEvent))
		return this.callServiceMethod('post', 'DHub/api/bankEFTsvc/findBankEFTHeader', null, null, this.headerResultEvent.bind(this), this.failureFaultEvent.bind(this), 'form', this.getHeaderFormData())
	
	}

	protected headerResultEvent(event: ResultEvent, token: Object = null): void {
		this.bankEFTModel.bankEFTHeader = event.result
		this.findBankEFTProcesses()
	}

	public findBankEFTProcesses(startDate: Date = null, endDate: Date = null): AxiosPromise<any> {
		if (this.bankEFTModel.bankEFTHeader === null) {
			this.findbankEFTHeader()
		} else {
			var now: Date = new Date()
			var currentDate: number = now.getDate()
			var currentMonth: number = now.getMonth()
			var currentYear: number = now.getFullYear()
			var lastWeek: Date = new Date(currentYear, currentMonth, currentDate - 3)
			startDate = startDate == null && this.searchStartDt == null ? lastWeek : startDate != null ? startDate : this.searchStartDt
			endDate = endDate == null && this.searchEndDt == null ? now : endDate != null ? endDate : this.searchEndDt

			this.searchStartDt = startDate
			this.searchEndDt = endDate

			// var formData = qs.stringify({
			// 	startDate: startDate,
			// 	endDate: endDate
			// })
			var formData = qs.stringify({
				startDate: new Date('02/10/2021'),
				endDate: endDate
			})
			// var rpcCall: AsyncToken = this.service.findBankEFTProcesses(startDate, endDate)
			// rpcCall.addResponder(new AsyncResponder(this.successResultEvent, this.failureFaultEvent))
			return this.callServiceMethod('post', 'DHub/api/bankEFTsvc/findBankEFTProcesses', formData, null, this.successResultEvent.bind(this), this.failureFaultEvent.bind(this), 'form', this.getHeaderFormData())

		}
	}

	public runBankEFTReport(instanceId: number, checkNo: string, trnNo: string, payer: string, startDate: Date, endDate: Date, dataSearch: number): AxiosPromise<any> {
		//var rpcCall:AsyncToken=service.runEdiEFTReport(ediFile);commented in Flex
		// var rpcCall: AsyncToken = this.service.runEdiRemitEFTReport(instanceId, checkNo, trnNo, payer, startDate, endDate, dataSearch)
		// rpcCall.addResponder(new AsyncResponder(this.eftReportsuccessResultEvent, this.eftReportfailureResultEvent))
		var formData = qs.stringify({
			instanceId: stringifyCircularObjectWithModifiedKeys(instanceId),
			checkTraceNum: checkNo,
			trnNo: trnNo,
			payer: payer,
			startDate: startDate,
			endDate: endDate,
			dateSearch: dataSearch
		})
		return this.callServiceMethod('post', 'DHub/api/bankEFTsvc/runEdiRemitEFTReport', formData, null,  this.eftReportsuccessResultEvent.bind(this), this.eftReportfailureResultEvent.bind(this), 'form', this.getHeaderFormData())
	}

	protected eftReportsuccessResultEvent(event: ResultEvent, token: Object = null): void {
		var bankEFTReportEvent: BankEFTReportEvent
		bankEFTReportEvent = new BankEFTReportEvent(BankEFTReportEvent.BANKEFT_REPORT, event.result)
		this.dispatch(bankEFTReportEvent)
	}

	protected eftReportfailureResultEvent(event: FaultEvent, token: Object = null): void {
		var msg: ErrorMessage = <ErrorMessage>event.message
		var bankEFTReportEvent: BankEFTReportEvent

		if (this._editor) {
			bankEFTReportEvent = new BankEFTReportEvent(BankEFTReportEvent.REPORT_ERROR_EDITOR, null, msg.faultString)
			this.dispatch(bankEFTReportEvent)
		} else {
			bankEFTReportEvent = new BankEFTReportEvent(BankEFTReportEvent.REPORT_ERROR, null, msg.faultString)
			this.dispatch(bankEFTReportEvent)
		}
	}
	protected successResultEvent(event: ResultEvent, token: Object = null): void {
		this.bankEFTModel.bankEFT = ArrayCollection.from(event.result)
	}

	protected failureFaultEvent(event: FaultEvent, token: Object = null): void {
		var msg: ErrorMessage = <ErrorMessage>event
		// this.bankEFTModel.errMsg = msg.faultString
		toast.error(msg.error.message);
		
	}

	public getTxnNoList(): void {
		var rpcCall: AsyncToken = this.service.findUniqueTxn()
		rpcCall.addResponder(new AsyncResponder(this.txnNumberResultEvent, this.failureFaultEvent))
	}

	protected txnNumberResultEvent(event: ResultEvent, token: Object = null): void {
		var bankEFTSearchEvent: BankEFTSearchEvent = new BankEFTSearchEvent(BankEFTSearchEvent.TXN_LS)
		bankEFTSearchEvent.txnList = <ArrayCollection>event.result
		this.dispatch(bankEFTSearchEvent)
	}

	public getPayerList(): void {
		var rpcCall: AsyncToken = this.service.findUniquePayer()
		rpcCall.addResponder(new AsyncResponder(this.PayerResultEvent, this.failureFaultEvent))
	}

	protected PayerResultEvent(event: ResultEvent, token: Object = null): void {
		var bankEFTSearchEvent: BankEFTSearchEvent = new BankEFTSearchEvent(BankEFTSearchEvent.PAYER_LS)
		bankEFTSearchEvent.payerList = <ArrayCollection>event.result
		this.dispatch(bankEFTSearchEvent)
	}

	public getTraceNumberList(): void {
		var rpcCall: AsyncToken = this.service.findUniqueTraceNumber()
		rpcCall.addResponder(new AsyncResponder(this.traceNumberResultEvent, this.failureFaultEvent))
	}

	protected traceNumberResultEvent(event: ResultEvent, token: Object = null): void {
		var bankEFTSearchEvent: BankEFTSearchEvent = new BankEFTSearchEvent(BankEFTSearchEvent.TRACENUMBER_LS)
		bankEFTSearchEvent.traceNumberList = <ArrayCollection>event.result
		this.dispatch(bankEFTSearchEvent)
	}
}

BankEFTService.prototype.typeName = BankEFTService.typeName = 'BankEFTService' //for quick inspection
BankEFTService.instance = null
BankEFTService.getInstance = () => {
	if (BankEFTService.instance == null) {
		BankEFTService.instance = new BankEFTService()
	}
	return BankEFTService.instance
}
