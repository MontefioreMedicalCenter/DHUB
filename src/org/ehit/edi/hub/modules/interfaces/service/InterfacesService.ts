import { AxiosPromise } from 'axios'
import ServiceProxyBase from '../../../../../../../service/cfc/ServiceProxyBase'
import GlobalEventDispatcher from '../../../../../../../service/utils/GlobalEventDispatcher'
import { InterfacesModel } from '../model/InterfacesModel.ts'
import qs from 'qs'
import ArrayCollection from '../../../../../../../vo/ArrayCollection'
import { InterfacesEvent } from '../model/events/InterfacesEvent.ts'
import store from '../../../../../../../AppConfig/store/configureStore'
import { showMessage } from '../../../../../../../AppConfig/store/actions/homeAction'
//import { ProcessInstance } from '../model/vo/ProcessInstance.ts'

export class InterfacesService extends ServiceProxyBase {
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
	public static REMOTE_DESTINATION: string = 'InterfaceService'

	/**
	 * The RemoteObject will be injected in by the framework.
	 * This is configured in ConfigureServicesCommand.
	 */
	/*[Inject(name="ClaimsDataService")]*/
	public service: RemoteObject

	/*[Inject]*/
	public interfacesModel: InterfacesModel  = InterfacesModel.getInstance()
	private searchStartDt: Date = null
	private searchEndDt: Date = null

	public getInterfaces(): AxiosPromise<any> {
		// var rpcCall: AsyncToken = this.service.findClaimHeader()
		// rpcCall.addResponder(new AsyncResponder(this.headerResultEvent, this.failureFaultEvent))
		return this.callServiceMethod('post', 'DHub/api/interfacessvc/getInterfaces', null, null, this.interfacesResultEvent.bind(this), this.failureFaultEvent.bind(this), 'form', this.getHeaderFormData())
	}

	protected interfacesResultEvent(event: ResultEvent, token: Object = null): void {
		this.interfacesModel.interfaces = event.result
		this.dispatch(new InterfacesEvent(InterfacesEvent.INTERFACES))
	}

	/*
	protected headerResultEvent(event: ResultEvent, token: Object = null): void {
		this.claimsModel.claimHeader = event.result
	}
	*/

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

		this.searchStartDt = new Date(new Date(Date.parse(startDate)).getTime() - new Date(Date.parse(startDate)).getTimezoneOffset()* 60000)
		this.searchEndDt = new Date(new Date(Date.parse(endDate)).getTime() - new Date(Date.parse(endDate)).getTimezoneOffset()* 60000)
		
		

		var formData = qs.stringify({
			startDate: this.searchStartDt,
			endDate: this.searchEndDt
		})

		return this.callServiceMethod('post', 'DHub/api/claimsvc/findClaimProcesses', formData, null, this.successResultEvent.bind(this), this.failureFaultEvent.bind(this), 'form', this.getHeaderFormData())
	}

	public ping(channelId: string): void{
		var formData = qs.stringify({
			channelId: channelId
		})

		return this.callServiceMethod('post', 'DHub/api/interfacessvc/ping', formData, null, this.pingSuccessResultEvent.bind(this), this.failureFaultEvent.bind(this), 'form', this.getHeaderFormData())
	}

	protected pingSuccessResultEvent(event: ResultEvent, token: Object = null): void {
		//Window.Alert.show(event.result as String, "Ping!", Alert.OK, null)
		// alert(event.result as String)
		store.dispatch(showMessage('Ping!', event.result as String, 'Ok', () => {}))
		// console.log(event.result as String)
		this.dispatch(new InterfacesEvent(InterfacesEvent.GET_INTERFACES))
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
		this.interfacesModel.errMsg = 'Error finding Interfaces'
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

InterfacesService.prototype.typeName = InterfacesService.typeName = 'InterfacesService' //for quick inspection
InterfacesService.instance = null
InterfacesService.getInstance = () => {
	if (InterfacesService.instance == null) {
		InterfacesService.instance = new InterfacesService()
	}
	return InterfacesService.instance
}
