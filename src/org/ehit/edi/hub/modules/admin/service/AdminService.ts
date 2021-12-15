import { AxiosPromise } from 'axios'
import { toast } from 'react-toastify'
import ServiceProxyBase from '../../../../../../../service/cfc/ServiceProxyBase'
import GlobalEventDispatcher from '../../../../../../../service/utils/GlobalEventDispatcher'
import qs from 'qs'
import { stringifyCircularObjectWithModifiedKeys } from '../../../../../../../shared/utils'
import { AdminModel } from '../model/AdminModel.ts'
import ArrayCollection from '../../../../../../../vo/ArrayCollection'
import { DispatchPollEvent } from '../model/events/DispatchPollEvent.ts'

export class AdminService extends ServiceProxyBase {
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
	public static REMOTE_DESTINATION: string = 'AdminService'

	/*[Inject(name="AdminService")]*/
	public service: RemoteObject

	/*[Inject]*/
	public adminModel: AdminModel = AdminModel.getInstance()
	private pollStartDt: Date = null
	private pollEndDt: Date = null
	private deliveryStartDt: Date = null
	private deliveryEndDt: Date = null

	public findPollLog(startDate: Date = null, endDate: Date = null): void {
		var now: Date = new Date()
		var currentDate: number = now.date
		var currentMonth: number = now.month
		var currentYear: number = now.fullYear
		var twoDays: Date = new Date(currentYear, currentMonth, currentDate - 2)
		startDate = startDate == null && this.pollStartDt == null ? twoDays : startDate != null ? startDate : this.pollStartDt
		endDate = endDate == null && this.pollEndDt == null ? now : endDate != null ? endDate : this.pollEndDt

		this.pollStartDt = startDate
		this.pollEndDt = endDate
		var rpcCall: AsyncToken = this.service.findPollLog(startDate, endDate)
		rpcCall.addResponder(new AsyncResponder(this.pollLogResultEvent, this.failureFaultEvent))
	}

	public findPollLogById(logId: string): void {
		var rpcCall: AsyncToken = this.service.findPollLogById(logId)
		rpcCall.addResponder(new AsyncResponder(this.pollLogResultEvent, this.failureFaultEvent))
	}

	public findDeliveryLog(startDate: Date = null, endDate: Date = null): void {
		var now: Date = new Date()
		var currentDate: number = now.date
		var currentMonth: number = now.month
		var currentYear: number = now.fullYear
		var twoDays: Date = new Date(currentYear, currentMonth, currentDate - 2)
		startDate = startDate == null && this.deliveryStartDt == null ? twoDays : startDate != null ? startDate : this.deliveryStartDt
		endDate = endDate == null && this.deliveryEndDt == null ? now : endDate != null ? endDate : this.deliveryEndDt

		this.deliveryStartDt = startDate
		this.deliveryEndDt = endDate
		var rpcCall: AsyncToken = this.service.findDeliveryLog(startDate, endDate)
		rpcCall.addResponder(new AsyncResponder(this.deliveryLogResultEvent, this.failureFaultEvent))
	}

	public findDeliveryLogById(logId: string): void {
		var rpcCall: AsyncToken = this.service.findDeliveryLogById(logId)
		rpcCall.addResponder(new AsyncResponder(this.deliveryLogResultEvent, this.failureFaultEvent))
	}

	public getPollControl(triggerOnly: boolean = false): AxiosPromise<any> {
		var formData = qs.stringify({
			triggerOnly: stringifyCircularObjectWithModifiedKeys(triggerOnly)
		})
		// var rpcCall: AsyncToken = this.service.getPollControl(triggerOnly)
		// if (triggerOnly) rpcCall.addResponder(new AsyncResponder(this.combineTriggerResultEvent, this.failureFaultEvent))
		// else rpcCall.addResponder(new AsyncResponder(this.pollControlResultEvent, this.failureFaultEvent))
		if (triggerOnly) {
			return this.callServiceMethod('post', 'DHub/api/adminsvc/getPollControl', formData, null, this.combineTriggerResultEvent.bind(this), this.failureFaultEvent.bind(this), 'form', this.getHeaderFormData())
		} else {
			return this.callServiceMethod('post', 'DHub/api/adminsvc/getPollControl', formData, null, this.pollControlResultEvent.bind(this), this.failureFaultEvent.bind(this), 'form', this.getHeaderFormData())
		}
	}

	public getPollerStatus(): AxiosPromise<any> {
		// var rpcCall: AsyncToken = this.service.getPollerStatus()
		// rpcCall.addResponder(new AsyncResponder(this.pollerStatusResultEvent, this.failureFaultEvent))
		return this.callServiceMethod('post', 'DHub/api/adminsvc/getPollerStatus', null, null, this.pollerStatusResultEvent.bind(this), this.failureFaultEvent.bind(this), 'form', this.getHeaderFormData())
	}

	public activatePoller(active: boolean): AxiosPromise<any> {
		var formData = qs.stringify({
			active: active
		})
		// var rpcCall: AsyncToken = this.service.activatePoller(active)
		// rpcCall.addResponder(new AsyncResponder(this.pollerStatusResultEvent, this.failureFaultEvent))
		// toast.warning("Need to Implement have a issue")
		return this.callServiceMethod('post', 'DHub/api/adminsvc/activatePoller', formData, null, this.pollerStatusResultEvent.bind(this), this.failureFaultEvent.bind(this), 'form', this.getHeaderFormData())
	}

	public dispatchPoll(pollControlId: string): AxiosPromise<any> {
		var formData = qs.stringify({
			pollControlId: stringifyCircularObjectWithModifiedKeys(pollControlId)
		})
		// var rpcCall: AsyncToken = this.service.dispatchPoll(pollControlId)
		// rpcCall.addResponder(new AsyncResponder(this.successEvent, this.failureFaultEvent))
		return this.callServiceMethod('post', 'DHub/api/adminsvc/dispatchPoll', formData, null, this.successEvent.bind(this), this.failureFaultEvent.bind(this), 'form', this.getHeaderFormData())
	}

	/*	public function getRemoteDirListing(event:DispatchPollEvent):void
			{

				var rpcCall:AsyncToken=service.getRemoteDirListing(event.pollId, event.dirName);
				rpcCall.addResponder(new AsyncResponder(subDirListSuccessEvent, dirListFailureFaultEvent));


			}*/

	public getRemoteDirListing(browseType: string, configId: string, dirName: string = null): AxiosPromise<any> {
		// var rpcCall: AsyncToken = this.service.getRemoteDirListing(configId, dirName)
		// /*	if(event.type == DispatchPollEvent.REMOTE_DIR_LIST)
		// 	rpcCall.addResponder(new AsyncResponder(dirListSuccessEvent, dirListFailureFaultEvent));
		// 	else
		// 	*/
		// if (browseType == 'Poll') rpcCall.addResponder(new AsyncResponder(this.pollDirListSuccessEvent, this.pollDirListFailureFaultEvent))
		// if (browseType == 'Delivery') rpcCall.addResponder(new AsyncResponder(this.deliveryDirListSuccessEvent, this.deliveryDirListFailureFaultEvent))
		var formData = qs.stringify({
			pollControlId: stringifyCircularObjectWithModifiedKeys({configId, dirName})
		})
		if(browseType === 'Poll'){
			return this.callServiceMethod('post', 'DHub/api/adminsvc/getRemoteDirListing', formData, null, this.pollDirListSuccessEvent.bind(this), this.pollDirListFailureFaultEvent.bind(this), 'form', this.getHeaderFormData())
		}else{
			toast.warning('Need to Implement Delivery in Admin service')
			// if (browseType == 'Delivery') rpcCall.addResponder(new AsyncResponder(this.deliveryDirListSuccessEvent, this.deliveryDirListFailureFaultEvent))
		}
		
	}

	public ping(channelId: string): void {
		var rpcCall: AsyncToken = this.service.ping(channelId)
		rpcCall.addResponder(new AsyncResponder(this.pingSuccessEvent, this.pingFailureFaultEvent))
	}

	public triggerCombineX12(pollControlId: string): void {
		var rpcCall: AsyncToken = this.service.triggerCombineX12(pollControlId)
		rpcCall.addResponder(new AsyncResponder(this.successEvent, this.failureFaultEvent))
	}

	public activatePoll(pollControlId: string, active: boolean): AxiosPromise<any> {
		var formData = qs.stringify({
			pollControlId: stringifyCircularObjectWithModifiedKeys(pollControlId),
			active: active
		})
		// var rpcCall: AsyncToken = this.service.activatePoll(pollControlId, active)
		// rpcCall.addResponder(new AsyncResponder(this.successEvent, this.failureFaultEvent))
		return this.callServiceMethod('post', '/DHub/api/adminsvc/activatePoll', formData, null, this.successEvent.bind(this), this.failureFaultEvent.bind(this), 'form', this.getHeaderFormData())
	}

	public activateDelivery(deliveryControlId: string, active: boolean): void {
		var rpcCall: AsyncToken = this.service.activateDelivery(deliveryControlId, active)
		rpcCall.addResponder(new AsyncResponder(this.successEvent, this.failureFaultEvent))
	}

	public findErrorLog(startDate: Date = null, endDate: Date = null): void {
		var now: Date = new Date()
		var currentDate: number = now.date
		var currentMonth: number = now.month
		var currentYear: number = now.fullYear
		var twoDays: Date = new Date(currentYear, currentMonth, currentDate - 2)

		if (startDate == null) startDate = twoDays
		if (endDate == null) endDate = now
		var rpcCall: AsyncToken = this.service.findErrorLog(startDate, endDate)
		rpcCall.addResponder(new AsyncResponder(this.errorLogResultEvent, this.failureFaultEvent))
	}

	public findErrorLogById(logId: string): void {
		var rpcCall: AsyncToken = this.service.findErrorLogById(logId)
		rpcCall.addResponder(new AsyncResponder(this.errorLogResultEvent, this.failureFaultEvent))
	}

	public deleteErrorLog(errorId: string): void {
		var rpcCall: AsyncToken = this.service.deleteErrorLog(errorId)
		rpcCall.addResponder(new AsyncResponder(this.errorLogDeleteResultEvent, this.failureFaultEvent))
	}

	public deleteErrorLogs(errorLogs: ArrayCollection): void {
		var rpcCall: AsyncToken = this.service.deleteErrorLogs(errorLogs)
		rpcCall.addResponder(new AsyncResponder(this.errorLogDeleteResultEvent, this.failureFaultEvent))
	}

	public getUserAndRoles(): void {
		this.getUserAndRoles1()
		this.getUserAndRoles2()
	}

	public getUserAndRolesMap(): void {
		var rpcCall: AsyncToken = this.service.getUsersAndRoleswithFs() //getUsersAndRoles();
		rpcCall.addResponder(new AsyncResponder(this.userAndRolesMapResultEvent, this.failureFaultEvent))
	}

	public getUserAndRoles1(): void {
		var rpcCall: AsyncToken = this.service.getUsersAndRoleswithFs() //getUsersAndRoles();
		rpcCall.addResponder(new AsyncResponder(this.userAndRolesResultEvent1, this.failureFaultEvent))
	}

	public getUserAndRoles2(): void {
		var rpcCall: AsyncToken = this.service.getAllUserFacServForRole() //getUsersAndRoles();
		rpcCall.addResponder(new AsyncResponder(this.userAndRolesResultEvent, this.failureFaultEvent))
	}

	public getDeliveryControl(): void {
		var rpcCall: AsyncToken = this.service.getDeliveryControl()
		rpcCall.addResponder(new AsyncResponder(this.deliveryControlResultEvent, this.failureFaultEvent))
	}

	protected pollLogResultEvent(event: ResultEvent, token: Object = null): void {
		this.adminModel.pollLog = <ArrayCollection>event.result
	}

	protected deliveryLogResultEvent(event: ResultEvent, token: Object = null): void {
		this.adminModel.deliveryLog = <ArrayCollection>event.result
	}

	protected combineTriggerResultEvent(event: ResultEvent, token: Object = null): void {
		this.adminModel.combineTrigger = <ArrayCollection>event.result
	}

	protected dispatchPollResultEvent(event: ResultEvent, token: Object = null): void {
		this.adminModel.combineTrigger = <ArrayCollection>event.result
	}

	protected pollControlResultEvent(event: ResultEvent, token: Object = null): void {
		// this.adminModel.pollControl = <ArrayCollection>event.result
		this.adminModel.pollControl = ArrayCollection.from(event.result)
	}

	protected pollerStatusResultEvent(event: ResultEvent, token: Object = null): void {
		this.adminModel.pollerStatus = event.result
	}

	protected deliveryControlResultEvent(event: ResultEvent, token: Object = null): void {
		this.adminModel.deliveryControl = <ArrayCollection>event.result
	}

	protected errorLogResultEvent(event: ResultEvent, token: Object = null): void {
		this.adminModel.errorLog = <ArrayCollection>event.result
	}

	protected errorContentResultEvent(event: ResultEvent, token: Object = null): void {
		var file: EdiFileBase = new EdiFileBase()
		this.dispatch(new FileEditorEvent(FileEditorEvent.VIEW_FILE, file))
	}

	protected errorLogDeleteResultEvent(event: ResultEvent, token: Object = null): void {
		this.dispatch(new AdminEvent(AdminEvent.GET_ERROR_LOG))
	}

	public getAllFacility(): void {
		var rpcCall: AsyncToken = this.service.getAllFacility()
		rpcCall.addResponder(new AsyncResponder(this.getAllFacilityEvent, this.failureFaultEvent))
	}
	protected getAllFacilityEvent(event: ResultEvent, token: Object = null): void {
		var ret: ArrayCollection = <ArrayCollection>event.result
		var adminEvent: ManageUserEvent = new ManageUserEvent(ManageUserEvent.ADD_USER_START2)
		adminEvent.eventData = ret
		this.dispatch(adminEvent)
	}
	//getAllServy
	public getAllServy(): void {
		var rpcCall: AsyncToken = this.service.getAllServiceArea()
		rpcCall.addResponder(new AsyncResponder(this.getAllServyEvent, this.failureFaultEvent))
	}
	protected getAllServyEvent(event: ResultEvent, token: Object = null): void {
		//Alert.show("getAllServyEvent")
		var ret: ArrayCollection = <ArrayCollection>event.result
		var adminEvent: ManageUserEvent = new ManageUserEvent(ManageUserEvent.ADD_USER_END)
		adminEvent.eventData = ret
		this.dispatch(adminEvent)
	}
	//userAndRolesMapResultEvent
	protected userAndRolesMapResultEvent(event: ResultEvent, token: Object = null): void {
		var ret: ArrayCollection = <ArrayCollection>event.result
		var adminEvent: AdminEvent = new AdminEvent(AdminEvent.MAP_USER_ROLE)
		adminEvent.eventData = ret
		this.dispatch(adminEvent)
	}

	protected userAndRolesResultEvent1(event: ResultEvent, token: Object = null): void {
		var ret: ArrayCollection = <ArrayCollection>event.result
		var adminEvent: AdminEvent = new AdminEvent(AdminEvent.FILL_USER_ROLE)
		adminEvent.eventData = ret
		this.dispatch(adminEvent)
	}
	protected userAndRolesResultEvent(event: ResultEvent, token: Object = null): void {
		this.adminModel.usersAndRoles = <ArrayCollection>event.result
		//Alert.show("adminModel.usersAndRoles: " + adminModel.usersAndRoles.getItemAt(0).id.facilityId)
	}

	protected successEvent(event: ResultEvent, token: Object = null): void {
		toast.success('Polled Successfully!!  ' + event.result)
	}

	protected failureFaultEvent(response: FaultEvent, token: Object = null): void {
		toast.error('Error occured. :' + response.toString())

		/*var msg:ErrorMessage=response.message as ErrorMessage;
		adminModel.errMsg="Error getting Logs";*/
	}

	protected pollDirListSuccessEvent(event: ResultEvent, token: Object = null): void {
		var dispatchPollEvent: DispatchPollEvent = new DispatchPollEvent(DispatchPollEvent.REMOTE_DIR_LIST_RESULT)
		dispatchPollEvent.dirListResult = ArrayCollection.from(event.result)
		this.dispatch(dispatchPollEvent)
	}

	protected deliveryDirListSuccessEvent(event: ResultEvent, token: Object = null): void {
		var dispatchDeliveryEvent: DispatchDeliveryEvent = new DispatchDeliveryEvent(DispatchDeliveryEvent.REMOTE_DIR_LIST_RESULT)
		dispatchDeliveryEvent.dirListResult = <ArrayCollection>event.result
		this.dispatch(dispatchDeliveryEvent)
	}

	protected pollDirListFailureFaultEvent(event: FaultEvent, token: Object = null): void {
		var msg = event.message
		var dispatchPollEvent: DispatchPollEvent = new DispatchPollEvent(DispatchPollEvent.REMOTE_DIR_LIST_RESULT)
		dispatchPollEvent.dirListErrorMsg = msg.faultString
		this.dispatch(dispatchPollEvent)
	}

	protected deliveryDirListFailureFaultEvent(event: FaultEvent, token: Object = null): void {
		var msg: ErrorMessage = <ErrorMessage>event.message
		var dispatchDeliveryEvent: DispatchDeliveryEvent = new DispatchDeliveryEvent(DispatchDeliveryEvent.REMOTE_DIR_LIST_RESULT)
		dispatchDeliveryEvent.dirListErrorMsg = msg.faultString
		this.dispatch(dispatchDeliveryEvent)
	}

	protected pingSuccessEvent(event: ResultEvent, token: Object = null): void {
		var dispatchPollEvent: DispatchPollEvent = new DispatchPollEvent(DispatchPollEvent.PING_RESULT)
		dispatchPollEvent.dirListResult = <ArrayCollection>event.result
		this.dispatch(dispatchPollEvent)
	}

	protected pingFailureFaultEvent(event: FaultEvent, token: Object = null): void {
		var msg: ErrorMessage = <ErrorMessage>event.message
		var dispatchPollEvent: DispatchPollEvent = new DispatchPollEvent(DispatchPollEvent.PING_RESULT)
		dispatchPollEvent.dirListErrorMsg = msg.faultString
		this.dispatch(dispatchPollEvent)
	}

	public deliverPayload(deliveryControlId: string, properties: string, payload: ByteArray = null): void {
		var rpcCall: AsyncToken = this.service.deliverPayload(deliveryControlId, properties, payload)
		rpcCall.addResponder(new AsyncResponder(this.successFileSendEvent, this.failureFileSendEvent))
	}

	public republishError(errorId: string, properties: string): void {
		var rpcCall: AsyncToken = this.service.republishError(errorId, properties)
		rpcCall.addResponder(new AsyncResponder(this.successFileSendEvent, this.failureFileSendEvent))
	}

	protected successFileSendEvent(event: ResultEvent, token: Object = null): void {
		var deliverToPayer: boolean = <Boolean>event.result
		Alert.show('Dispatched Successfully', 'Success', this.mx.controls.Alert.OK)
	}

	/**
	 * Handles the login fault event
	 * @param event
	 * @param token
	 */
	protected failureFileSendEvent(event: FaultEvent, token: Object = null): void {
		var msg: ErrorMessage = <ErrorMessage>event.message
		var errMsg: string = msg.faultString
		if (errMsg.indexOf('java.lang.Exception') >= 0) Alert.show(errMsg.substring(21, errMsg.length), 'Error', this.mx.controls.Alert.OK)
		else Alert.show(errMsg, 'Error Dispatching', this.mx.controls.Alert.OK)
		/*	if(errMsg !=null &&errMsg.indexOf("Error Parsing payload")>=0)
		Alert.show('Error Parsing payload!! Make sure its a valid x12', 'Error', mx.controls.Alert.OK);
		if(errMsg !=null &&errMsg.indexOf("Payload is Empty or zero length")>=0)
		Alert.show('Payload is Empty or zero length', 'Error', mx.controls.Alert.OK);
		if(errMsg !=null &&errMsg.indexOf("Wrong transaction type")>=0)
		Alert.show('Wrong transaction type: expected 837', 'Error', mx.controls.Alert.OK);
		*/
	}
}

AdminService.prototype.typeName = AdminService.typeName = 'AdminService' //for quick inspection
AdminService.instance = null
AdminService.getInstance = () => {
	if (AdminService.instance == null) {
		AdminService.instance = new AdminService()
	}
	return AdminService.instance
}
