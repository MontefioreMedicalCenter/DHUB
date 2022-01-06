import ServiceProxyBase from '../../../../../../service/cfc/ServiceProxyBase'
import GlobalEventDispatcher from '../../../../../../service/utils/GlobalEventDispatcher'
import RemitsModel from '../../modules/remits/model/RemitsModel.ts'
import LoginModel from '../model/LoginModel'
import EdiUser from '../model/vo/EdiUser.ts'
import { AxiosPromise } from 'axios'
import qs from 'qs'
import { toast } from 'react-toastify'
import MontefioreUtils from '../../../../../../service/utils/MontefioreUtils'
import { EdiUserBase } from '../model/vo/EdiUserBase.ts'
import ArrayCollection from '../../../../../../vo/ArrayCollection'
import { LoginEvent } from '../model/events/LoginEvent.ts'
import EdiUserRoleMap from '../model/vo/EdiUserRoleMap.ts'
import { stringifyCircularObjectWithModifiedKeys } from '../../../../../../shared/utils'
import store from '../../../../../../AppConfig/store/configureStore'
import { saveLoginModel } from '../../../../../../AppConfig/store/actions/loginAction'

export class LoginService extends ServiceProxyBase {

	dispatchEvent(evt) {
		GlobalEventDispatcher.instance().dispatchEvent(evt)
	}
	static instance: any
	static getInstance: () => any
	/* to make getInstance */

	public static REMOTE_DESTINATION: string = 'AuthenticationService'
	// Define a ChannelSet object.
	public cs: ChannelSet

	public service: RemoteObject
	private loginToken: AsyncToken
	public loginModel: LoginModel = LoginModel.getInstance()
	public remitsModel: RemitsModel

	public get loggedIn(): boolean {
		return Boolean(this.loginModel.user)
	}

	/**
	 *
	 * @param user
	 *
	 */
	public saveUser: EdiUser

	public logIn(user: EdiUser): AxiosPromise<any> {
		this.saveUser = user

		var formData = qs.stringify({
			userName: this.saveUser.userId,
			password: this.saveUser.password
		})
		// var rpcCall: AsyncToken = this.service.authenticateUser(user.userId, user.password)
		// rpcCall.addResponder(new AsyncResponder(this.loginResultDBEvent, this.failureFaultEvent))
		return this.callServiceMethod(
			'post', 
			'DHub/api/authenticationsvc/authenticateUser', 
			formData, 
			null, 
			this.loginResultDBEvent.bind(this), 
			this.failureFaultEvent.bind(this), 
			'form', 
			this.getHeaderFormData()
		)
	}

	public saveServiceArea(roleMap: EdiUserRoleMap): AxiosPromise<any> {
		// var rpcCall: AsyncToken = this.service.saveServiceArea(roleMap)
		// this.loginModel.serviceAreaName = roleMap.id.serviceAreaId
		// rpcCall.addResponder(new AsyncResponder(this.saveServiceAreaEvent, this.failureFaultEvent))
		var formData = qs.stringify({
			ediUserRoleMap: stringifyCircularObjectWithModifiedKeys(roleMap)
		})
		return this.callServiceMethod('post', 'DHub/api/authenticationsvc/saveServiceArea', formData, null, this.saveServiceAreaEvent.bind(this), this.failureFaultEvent.bind(this), 'form', this.getHeaderFormData())
	}

	protected saveServiceAreaEvent(event: ResultEvent, token: Object = null): void {
		this.dispatchEvent(new LoginEvent(LoginEvent.LOGIN_SUCCESS))
	}

	protected loginResultDBEvent(event: any, token: Object = null): void {
		this.loginModel = new EdiUserBase().fromJson({ user: event.result })
		store.dispatch(saveLoginModel(this.loginModel))
		// this.loginModel.fromJson({ user: event.result })
		var serv: ArrayCollection = ArrayCollection.from(this.loginModel.user.ediUserRoleMaps)
		var servSelected: ArrayCollection = new ArrayCollection()
		if (serv.length > 1) {
			for (var n: number = 0; n < serv.length; n++) {
				var memRole: EdiUserRoleMap = new EdiUserRoleMap().fromJson(serv.getItemAt(n))
				var servArea: string = memRole.id.serviceAreaId
				var addServ: boolean = true
				if (servSelected.length > 0) {
					for (var i: number = 0; i < servSelected.length; i++) {
						var memRole1: EdiUserRoleMap = new EdiUserRoleMap().fromJson(servSelected.getItemAt(i))
						var servArea1: string = memRole1.id.serviceAreaId
						if (servArea == servArea1) addServ = false
					}
				}

				if (addServ) servSelected.addItem(memRole)
			}
		} else servSelected = serv

		var loginEvent: LoginEvent = new LoginEvent(LoginEvent.LOGIN_FILLSERV)
		loginEvent.serviceAreas = servSelected
		this.dispatchEvent(loginEvent)
	}

	public logOut(): void {
		this.loginModel.user = null
		var rpcCall: AsyncToken = this.service.logOut()
		rpcCall.addResponder(new AsyncResponder(this.logoutSuccessEvent, this.failureFaultEvent))
		this.dispatch(new LoginEvent(LoginEvent.LOGOUT))
	}

	protected logoutSuccessEvent(event: ResultEvent, token: Object = null): void {
		trace('LogOut Success!')
	}

	protected failureFaultEvent(event: FaultEvent, token: Object = null): void {
		// var msg: ErrorMessage = <ErrorMessage>event.message
		// var errStr: string = 'Invalid login. Please try again or contact the help desk.'
		// if (event.fault.faultString.indexOf('Account Expired') > 0) errStr = 'Account Expired'
		// else if (event.fault.faultString.indexOf('Password expired.') > 0) errStr = 'Password expired.'
		// else if (event.fault.faultString.indexOf('Access Denied.') > 0) errStr = 'Access Denied.'
		// else if (event.fault.faultString.indexOf('You do not have Access to Service Area') > 0) {
		// 	var results: any[] = event.fault.faultString.split(':')
		// 	errStr = results[1]
		// }
		// this.dispatch(new LoginEvent(LoginEvent.LOGIN_ERROR, null, errStr))
		this.loginModel.user = null
		var msg: ErrorMessage = <ErrorMessage>event.message
		if (event.error.response) {
			toast.error(event.error.message)
		} else {
			MontefioreUtils.showError(event)
		}
	}
}

LoginService.prototype.typeName = LoginService.typeName = 'LoginService' //for quick inspection
LoginService.instance = null
LoginService.getInstance = () => {
	if (LoginService.instance == null) {
		LoginService.instance = new LoginService()
	}
	return LoginService.instance
}
