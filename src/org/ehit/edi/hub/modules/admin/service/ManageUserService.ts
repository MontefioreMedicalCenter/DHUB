import ServiceProxyBase from '../../../../../../../service/cfc/ServiceProxyBase'
import GlobalEventDispatcher from '../../../../../../../service/utils/GlobalEventDispatcher'
import { EdiUserFacServForRole } from '../../../user/model/vo/EdiUserFacServForRole.ts'
import { AdminModel } from '../model/AdminModel.ts'
import qs from 'qs'
import { stringifyCircularObjectWithModifiedKeys } from '../../../../../../../shared/utils'
import { AdminEvent } from '../model/events/AdminEvent.ts'
import { AdminService } from './AdminService.ts'
import { AxiosPromise } from 'axios'
import { EdiUserBase } from '../../../user/model/vo/EdiUserBase.ts'
import { ManageUserEvent } from '../model/events/ManageUserEvent.ts'
import { toast } from 'react-toastify'

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
	public adminService: AdminService = AdminService.getInstance()

	public manageRole(user: EdiUserFacServForRole, activate: boolean, roleId: string = null): AxiosPromise<any> {
		var formData = qs.stringify({
			userId: user.id.userId,
			roleId: roleId,
			Activate: activate
		})
		// var rpcCall: AsyncToken = this.service.manageRole(user.id.facilityId, user.id.serviceAreaId, user.id.userId, activate, roleId)
		// rpcCall.addResponder(new AsyncResponder(this.resultEvent, this.faultEvent))
		return this.callServiceMethod('post', 'DHub/api/manageUsersvc/manageRole', formData, null, this.resultEvent.bind(this), this.faultEvent.bind(this), 'form', this.getHeaderFormData())
	}

	public manageRole4User(fac: string, ser: string, uid: string, activate: boolean, roleId: string = null): AxiosPromise<any> {
		// //Alert.show("manageRole4User: " + fac + "/" + ser + "/" + uid + "/" + roleId)
		var formData = qs.stringify({
			userId: uid,
			roleId: roleId,
			Activate: activate
		})
		// var rpcCall: AsyncToken = this.service.manageRole(fac, ser, uid, activate, roleId)
		// rpcCall.addResponder(new AsyncResponder(this.resultEvent, this.faultEvent))
		return this.callServiceMethod('post', 'DHub/api/manageUsersvc/manageRole', formData, null, this.resultEvent.bind(this), this.faultEvent.bind(this), 'form', this.getHeaderFormData())
	}

	public deleteUser(user: EdiUserFacServForRole): AxiosPromise<any> {
		var formData = qs.stringify({
			userId: stringifyCircularObjectWithModifiedKeys(user.id.userId)
		})
		// var rpcCall: AsyncToken = this.service.deleteUser(user.id.userId)
		// rpcCall.addResponder(new AsyncResponder(this.resultEvent, this.faultEvent))
		return this.callServiceMethod('post', 'DHub/api/manageUsersvc/deleteUser', formData, null, this.resultEvent.bind(this), this.faultEvent.bind(this), 'form', this.getHeaderFormData())
	}

	public activateUser0(user: EdiUserBase, activate: boolean): void {
		var rpcCall: AsyncToken = this.service.activateUser(user.userId, activate)
		rpcCall.addResponder(new AsyncResponder(this.resultEvent, this.faultEvent))
	}

	public activateUser(user: EdiUserFacServForRole, activate: boolean): AxiosPromise<any> {
		var formData = qs.stringify({
			userId: stringifyCircularObjectWithModifiedKeys(user.id.userId),
			Activate: activate
		})
		// var rpcCall: AsyncToken = this.service.activateUser(user.id.userId, activate)
		// rpcCall.addResponder(new AsyncResponder(this.resultEvent, this.faultEvent))
		return this.callServiceMethod('post', 'DHub/api/manageUsersvc/activateUser', formData, null, this.resultEvent.bind(this), this.faultEvent.bind(this), 'form', this.getHeaderFormData())
	}

	public editUser(userId: string): void {
		var rpcCall: AsyncToken = this.service.getUserByUserId(userId)
		rpcCall.addResponder(new AsyncResponder(this.resultEvent, this.faultEvent))
	}

	public addNewUser(user: EdiUserBase): AxiosPromise<any> {
		//Alert.show("addNewUser")
		var formData = qs.stringify({
			userId: stringifyCircularObjectWithModifiedKeys(user)
		})
		// var rpcCall: AsyncToken = this.service.addNewUser(user)
		// rpcCall.addResponder(new AsyncResponder(this.newUserResultEvent, this.addUserFaultEvent))
		return this.callServiceMethod('post', 'DHub/api/manageUsersvc/addNewUser', formData, null, this.newUserResultEvent.bind(this), this.addUserFaultEvent.bind(this), 'form', this.getHeaderFormData())
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
		//adminModel.usersAndRoles=event.result as ArrayCollection;//commented in Flex
		// this.dispatch(new AdminEvent(AdminEvent.GET_USERS_AND_ROLES))
		this.adminService.getUserAndRoles()
		//dispatch(new ManageUserEvent(ManageUserEvent.SAVE_USER_DONE));//commented in Flex
	}

	protected addUserFaultEvent(event: FaultEvent, token: Object = null): void {
		var msg: ErrorMessage = <ErrorMessage>event.error.message
		toast.error('Unable to add/delete user \n\r' + msg)
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
