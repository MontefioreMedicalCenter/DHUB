import ServiceProxyBase from "../../../../../../../service/cfc/ServiceProxyBase"
import GlobalEventDispatcher from "../../../../../../../service/utils/GlobalEventDispatcher"
import { AdminModel } from "../model/AdminModel.ts"

export class ManageUserService extends ServiceProxyBase {
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
	public static REMOTE_DESTINATION: string = 'ManageUserService'

	/*[Inject(name="ManageUserService")]*/
	public service: RemoteObject

	/*[Inject]*/
	public adminModel: AdminModel = AdminModel.getInstance()

	public manageRole(user: EdiUserFacServForRole, activate: boolean, roleId: string = null): void {
		var rpcCall: AsyncToken = this.service.manageRole(user.id.facilityId, user.id.serviceAreaId, user.id.userId, activate, roleId)
		rpcCall.addResponder(new AsyncResponder(this.resultEvent, this.faultEvent))
	}

	public manageRole4User(fac: string, ser: string, uid: string, activate: boolean, roleId: string = null): void {
		//Alert.show("manageRole4User: " + fac + "/" + ser + "/" + uid + "/" + roleId)
		var rpcCall: AsyncToken = this.service.manageRole(fac, ser, uid, activate, roleId)
		rpcCall.addResponder(new AsyncResponder(this.resultEvent, this.faultEvent))
	}

	public deleteUser(user: EdiUserFacServForRole): void {
		var rpcCall: AsyncToken = this.service.deleteUser(user.id.userId)
		rpcCall.addResponder(new AsyncResponder(this.resultEvent, this.faultEvent))
	}

	public activateUser0(user: EdiUserBase, activate: boolean): void {
		var rpcCall: AsyncToken = this.service.activateUser(user.userId, activate)
		rpcCall.addResponder(new AsyncResponder(this.resultEvent, this.faultEvent))
	}

	public activateUser(user: EdiUserFacServForRole, activate: boolean): void {
		var rpcCall: AsyncToken = this.service.activateUser(user.id.userId, activate)
		rpcCall.addResponder(new AsyncResponder(this.resultEvent, this.faultEvent))
	}

	public editUser(userId: string): void {
		var rpcCall: AsyncToken = this.service.getUserByUserId(userId)
		rpcCall.addResponder(new AsyncResponder(this.resultEvent, this.faultEvent))
	}

	public addNewUser(user: EdiUserBase): void {
		//Alert.show("addNewUser")
		var rpcCall: AsyncToken = this.service.addNewUser(user)
		rpcCall.addResponder(new AsyncResponder(this.newUserResultEvent, this.addUserFaultEvent))
	}

	/*protected function manageRoleResultEvent(event:ResultEvent, token:Object=null):void
		{
			trace('Successfull!!' + event.result)
		}

		protected function manageRoleFaultEvent(event:FaultEvent, token:Object=null):void
		{
			var msg:ErrorMessage=event.message as ErrorMessage;
			trace('UnSuccessfull!!' +msg.faultString)

		}*/

	protected newUserResultEvent(event: ResultEvent, token: Object = null): void {
		//adminModel.usersAndRoles=event.result as ArrayCollection;
		//dispatch(new AdminEvent(AdminEvent.GET_USERS_AND_ROLES));
		this.dispatch(new ManageUserEvent(ManageUserEvent.SAVE_USER_DONE))
	}

	protected resultEvent(event: ResultEvent, token: Object = null): void {
		//adminModel.usersAndRoles=event.result as ArrayCollection;
		this.dispatch(new AdminEvent(AdminEvent.GET_USERS_AND_ROLES))
		//dispatch(new ManageUserEvent(ManageUserEvent.SAVE_USER_DONE));
	}

	protected addUserFaultEvent(event: FaultEvent, token: Object = null): void {
		var msg: ErrorMessage = <ErrorMessage>event.message
		Alert.show('Unable to add/delete user \n\r' + msg.faultString)
	}

	protected faultEvent(event: FaultEvent, token: Object = null): void {
		var msg: ErrorMessage = <ErrorMessage>event.message
		Alert.show('Error: \n\r' + msg.faultString)
	}
}

ManageUserService.prototype.typeName = ManageUserService.typeName = 'ManageUserService' //for quick inspection
ManageUserService.instance = null
ManageUserService.getInstance = () => {
	if (ManageUserService.instance == null) {
		ManageUserService.instance = new ManageUserService()
	}
	return ManageUserService.instance
}
