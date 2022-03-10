import { AxiosPromise } from 'axios'
import ServiceProxyBase from '../../../../../../../service/cfc/ServiceProxyBase'
import GlobalEventDispatcher from '../../../../../../../service/utils/GlobalEventDispatcher'
import { ClaimsModel } from '../model/ClaimsModel.ts'
import qs from 'qs'
import ArrayCollection from '../../../../../../../vo/ArrayCollection'
import { ProcessInstance } from '../model/vo/ProcessInstance.ts'

export class ClaimsService extends ServiceProxyBase {
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
	public static REMOTE_DESTINATION: string = 'ClaimsDataService'

	/**
	 * The RemoteObject will be injected in by the framework.
	 * This is configured in ConfigureServicesCommand.
	 */
	/*[Inject(name="ClaimsDataService")]*/
	public service: RemoteObject

	/*[Inject]*/
	public claimsModel: ClaimsModel  = ClaimsModel.getInstance()
	private searchStartDt: Date = null
	private searchEndDt: Date = null

	public findClaimHeader(): AxiosPromise<any> {
		// var rpcCall: AsyncToken = this.service.findClaimHeader()
		// rpcCall.addResponder(new AsyncResponder(this.headerResultEvent, this.failureFaultEvent))
		return this.callServiceMethod('post', 'DHub/api/claimsvc/findClaimHeader', null, null, this.headerResultEvent.bind(this), this.failureFaultEvent.bind(this), 'form', this.getHeaderFormData())
	}

	protected headerResultEvent(event: ResultEvent, token: Object = null): void {
		this.claimsModel.claimHeader = event.result
	}

	/**
	 *
	 * @param startDate endDate
	 *
	 */
	public findClaimProcesses(startDate: Date = null, endDate: Date = null): AxiosPromise<any> {
		var now: Date = new Date()
		var currentDate: number = now.getDate()
		var currentMonth: number = now.getMonth()
		var currentYear: number = now.getFullYear()
		var lastWeek: Date = new Date(currentYear, currentMonth, currentDate - 3)

		startDate = startDate == null && this.searchStartDt == null ? lastWeek : startDate != null ? startDate : this.searchStartDt
		endDate = endDate == null && this.searchEndDt == null ? now : endDate != null ? endDate : this.searchEndDt

		this.searchStartDt = startDate
		this.searchEndDt = endDate

		var formData = qs.stringify({
			startDate: startDate,
			endDate: endDate
		})

		// var rpcCall: AsyncToken = this.service.findClaimProcesses(startDate, endDate)
		// rpcCall.addResponder(new AsyncResponder(this.successResultEvent, this.failureFaultEvent))
		return this.callServiceMethod('post', 'DHub/api/claimsvc/findClaimProcesses', formData, null, this.successResultEvent.bind(this), this.failureFaultEvent.bind(this), 'form', this.getHeaderFormData())
	}

	public searchInvoice(invoice: string): void {
		if (invoice == null || invoice.length == 0) {
			this.findClaimProcesses()
			return
		}

		var rpcCall: AsyncToken = this.service.searchInvoice(invoice)
		rpcCall.addResponder(new AsyncResponder(this.successResultEvent, this.failureFaultEvent))
	}

	protected successResultEvent(event: ResultEvent, token: Object = null): void {
		let data = event.result.map(item => new ProcessInstance().fromJson(item)) 
		this.claimsModel.claims = ArrayCollection.from(data)
	}

	/**
	 * Handles the login fault event
	 * @param event
	 * @param token
	 */
	protected failureFaultEvent(event: FaultEvent, token: Object = null): void {
		var msg: ErrorMessage = <ErrorMessage>event.message
		this.claimsModel.errMsg = 'Error finding Claims'
	}

	private messageHandler(event: MessageEvent): void {
		//claims.grid.dataProvider = event.message.body as ArrayCollection;
	}

	private ack(event: MessageAckEvent): void {
		//	claims.grid.dataProvider = event.message.body as ArrayCollection;
	}

	private faultHandler(event: MessageFaultEvent): void {
		//	claims.errTxt.text = "Error finding Claims";
	}
}

ClaimsService.prototype.typeName = ClaimsService.typeName = 'ClaimsService' //for quick inspection
ClaimsService.instance = null
ClaimsService.getInstance = () => {
	if (ClaimsService.instance == null) {
		ClaimsService.instance = new ClaimsService()
	}
	return ClaimsService.instance
}
