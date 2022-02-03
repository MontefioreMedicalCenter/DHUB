import { AxiosPromise } from 'axios'
import { toast } from 'react-toastify'
import ServiceProxyBase from '../../../../../../../service/cfc/ServiceProxyBase'
import GlobalEventDispatcher from '../../../../../../../service/utils/GlobalEventDispatcher'
import ArrayCollection from '../../../../../../../vo/ArrayCollection'
import RemitsModel from '../model/RemitsModel.ts'

export class RemitsService extends ServiceProxyBase {
	/**
	 * Name of the Remote Service Destination
	 */
	/** to make getInstance  */
	dispatch(evt) {
		GlobalEventDispatcher.instance().dispatchEvent(evt)
	}

	static instance: any
	static getInstance: () => any
	/** to make getInstance  */
	public static REMOTE_DESTINATION: string = 'RemitsDataService'

	/**
	 * The RemoteObject will be injected in by the framework.
	 * This is configured in ConfigureServicesCommand.
	 */
	/*[Inject(name="RemitsDataService")]*/
	public service: RemoteObject

	/*[Inject]*/
	public remitsModel: RemitsModel = RemitsModel.getInstance()

	private searchStartDt: Date = null
	private searchEndDt: Date = null
	private _editor: boolean = false

	public findRemitHeader(): AxiosPromise<any> {
		// var rpcCall: AsyncToken = this.service.findRemitHeader()
		// rpcCall.addResponder(new AsyncResponder(this.headerResultEvent, this.failureFaultEvent))
		return this.callServiceMethod('post', 'DHub/api/remitssvc/findRemitHeader', null, null, this.headerResultEvent.bind(this), this.failureFaultEvent.bind(this), 'form', this.getHeaderFormData())
	}

	protected headerResultEvent(event: ResultEvent, token: Object = null): void {
		this.remitsModel.remitHeader = event.result
		this.findRemitsProcesses()
	}

	public findRemitsProcesses(startDate: Date = null, endDate: Date = null): void {
		if (this.remitsModel.remitHeader === null) {
			this.findRemitHeader()
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

			toast.warning("Need findRemitsProcesses service call")
			// var rpcCall: AsyncToken = this.service.findRemitsProcesses(startDate, endDate)
			// rpcCall.addResponder(new AsyncResponder(this.successResultEvent, this.failureFaultEvent))
		}
	}

	public runRemitsReport(ediFile: EdiFileBase, editor: boolean = true): void {
		this._editor = editor
		var rpcCall: AsyncToken = this.service.runRemitsReport(ediFile)
		rpcCall.addResponder(new AsyncResponder(this.remitsReportsuccessResultEvent, this.remitsReportfailureResultEvent))
	}

	public splitRemitsByBillingSystems(file: EdiFileBase): void {
		var rpcCall: AsyncToken = this.service.splitRemitsByBillingSystems(file)
		rpcCall.addResponder(new AsyncResponder(this.x12SplitsuccessResultEvent, this.x12SplitfailureFaultEvent))
	}

	public getDupFile(fileIds: string): void {
		var rpcCall: AsyncToken = this.service.getDupFile(fileIds)
		rpcCall.addResponder(new AsyncResponder(this.x12SplitsuccessResultEvent, this.x12SplitfailureFaultEvent))
	}

	protected remitsReportsuccessResultEvent(event: ResultEvent, token: Object = null): void {
		var remitsReportEvent: RemitsReportEvent
		if (this._editor) {
			remitsReportEvent = new RemitsReportEvent(RemitsReportEvent.REMITS_REPORT_EDITOR, event.result)
			this.dispatch(remitsReportEvent)
		} else {
			remitsReportEvent = new RemitsReportEvent(RemitsReportEvent.REMITS_REPORT, event.result)
			this.dispatch(remitsReportEvent)
		}
	}

	protected remitsReportfailureResultEvent(event: FaultEvent, token: Object = null): void {
		var msg: ErrorMessage = <ErrorMessage>event.message
		var remitsReportEvent: RemitsReportEvent
		if (this._editor) {
			remitsReportEvent = new RemitsReportEvent(RemitsReportEvent.REPORT_ERROR_EDITOR, null, msg.faultString)
			this.dispatch(remitsReportEvent)
		} else {
			remitsReportEvent = new RemitsReportEvent(RemitsReportEvent.REPORT_ERROR, null, msg.faultString)
			this.dispatch(remitsReportEvent)
		}
	}

	/**
	 * Handles the remits success event
	 * @param event
	 * @param token
	 */
	protected successResultEvent(event: ResultEvent, token: Object = null): void {
		this.remitsModel.remits = ArrayCollection.from(event.result)
	}

	/**
	 * Handles the remits fault event
	 * @param event
	 * @param token
	 */
	protected failureFaultEvent(event: FaultEvent, token: Object = null): void {
		var msg: ErrorMessage = <ErrorMessage>event
		// this.remitsModel.errMsg = msg.error.message
		toast.error(msg.error.message)
	}

	protected x12SplitsuccessResultEvent(event: ResultEvent, token: Object = null): void {
		var remitsReportEvent: RemitsReportEvent = new RemitsReportEvent(RemitsReportEvent.REMITS_X12SPLIT_RESULT, event.result)
		this.dispatch(remitsReportEvent)
	}

	/**
	 * Handles the login fault event
	 * @param event
	 * @param token
	 */
	protected x12SplitfailureFaultEvent(event: FaultEvent, token: Object = null): void {
		var msg: ErrorMessage = <ErrorMessage>event.message
	}

	public remitQuickSearch(): void {
		var rpcCall: AsyncToken = this.service.remitQuickSearch()
		rpcCall.addResponder(new AsyncResponder(this.searchSuccessResultEvent, this.failureFaultEvent))
	}

	protected searchSuccessResultEvent(event: ResultEvent, token: Object = null): void {
		var remitsEvent: RemitsEvent = new RemitsEvent(RemitsEvent.REMITS_SEARCH)
		remitsEvent.searchdata = event.result
		this.dispatch(remitsEvent)
	}

	public getAllRemits(): void {
		var rpcCall: AsyncToken = this.service.getAllRemits()
		rpcCall.addResponder(new AsyncResponder(this.rptSuccessResultEvent, this.failureFaultEvent))
	}

	protected rptSuccessResultEvent(event: ResultEvent, token: Object = null): void {
		var remitsEvent: RemitsEvent = new RemitsEvent(RemitsEvent.REMIT_RPT_PP)
		remitsEvent.rrptdata = <ArrayCollection>event.result
		this.dispatch(remitsEvent)
	}

	public searchRemitsRpt(payerName: string, remitMonth: string): void {
		var rpcCall: AsyncToken = this.service.remitMonth(payerName, remitMonth)
		rpcCall.addResponder(new AsyncResponder(this.rptSuccessResultEvent, this.failureFaultEvent))
	}
	protected rptMonSuccessResultEvent(event: ResultEvent, token: Object = null): void {
		var remitsEvent: RemitsEvent = new RemitsEvent(RemitsEvent.RPT_MONTH_PP)
		remitsEvent.rptmondata = <ArrayCollection>event.result
		this.dispatch(remitsEvent)
	}

	public getRptMonth(): void {
		var rpcCall: AsyncToken = this.service.getRptMonth()
		rpcCall.addResponder(new AsyncResponder(this.rptMonSuccessResultEvent, this.failureFaultEvent))
	}
	//getRptPayers
	public getRptPayers(): void {
		var rpcCall: AsyncToken = this.service.getRptPayers()
		rpcCall.addResponder(new AsyncResponder(this.rptPayerSuccessResultEvent, this.failureFaultEvent))
	}
	protected rptPayerSuccessResultEvent(event: ResultEvent, token: Object = null): void {
		var remitsEvent: RemitsEvent = new RemitsEvent(RemitsEvent.RPT_PAYER_PP)
		remitsEvent.rptPayers = <ArrayCollection>event.result
		this.dispatch(remitsEvent)
	}

	public getRptHeader(): void {
		var rpcCall: AsyncToken = this.service.getRemitReportMaps('Monthly')
		rpcCall.addResponder(new AsyncResponder(this.rptMapSuccessResultEvent, this.failureFaultEvent))
	}

	protected rptMapSuccessResultEvent(event: ResultEvent, token: Object = null): void {
		var remitsEvent: RemitsEvent = new RemitsEvent(RemitsEvent.RPT_HEADER_PP)
		remitsEvent.rrptdata = <ArrayCollection>event.result
		this.dispatch(remitsEvent)
	}
}

RemitsService.prototype.typeName = RemitsService.typeName = 'RemitsService' //for quick inspection
RemitsService.instance = null
RemitsService.getInstance = () => {
	if (RemitsService.instance == null) {
		RemitsService.instance = new RemitsService()
	}
	return RemitsService.instance
}