import { toast } from 'react-toastify'
import Mediator from '../../../../../../modules/main/view/Mediator.ts'
import ArrayCollection from '../../../../../../vo/ArrayCollection'
import { LoginEvent } from '../model/events/LoginEvent.ts'
import LoginModel from '../model/LoginModel'
import EdiUser from '../model/vo/EdiUser.ts'
import EdiUserRoleMap from '../model/vo/EdiUserRoleMap.ts'
import { LoginService } from '../service/LoginService.ts'
import Login from './components/Login'

export class LoginMediator extends Mediator {
	/*[Inject]*/
	public login: Login
	/*[Inject]*/
	public loginModel: LoginModel = LoginModel.getInstance()
	public loginService: LoginService = LoginService.getInstance()
	/*[Inject]*/
	public usernameValidator: Validator
	/*[Inject]*/
	public passwordValidator: Validator

	// private static log: ILogger = this.Log.getLogger('LoginMediator')

	/*override*/ public onRegister(view): void {
		this.login = view
		// if (this.Log.isDebug()) LoginMediator.log.debug('[Registering LoginMediator]')

		this.mapListener(this.login, LoginEvent.LOGIN, this.onLogin, LoginEvent)
		// this.mapListener(this.login.signInButton, MouseEvent.CLICK, this.onServiceArea, MouseEvent)/** Should be directly called on time of On click button */
		this.mapListener(this.eventDispatcher, LoginEvent.LOGIN_ERROR, this.loginError, LoginEvent)
		this.mapListener(this.eventDispatcher, LoginEvent.LOGIN_FILLSERV, this.popServiceArea, LoginEvent)
		this.mapListener(this.eventDispatcher, LoginEvent.LOGIN_SUCCESS, this.addPortal, LoginEvent) /** Added it from Main mediator directly */

		// this.usernameValidator.source = this.login.usernameValidatorSource
		// this.usernameValidator.property = this.login.usernameValidatorProperty
		// this.passwordValidator.source = this.login.passwordValidatorSource
		// this.passwordValidator.property = this.login.passwordValidatorProperty

		// this.toggleValidation()/** commented because validation is done in Login.js*/
	}

	private toggleValidation(): void {
		this.usernameValidator.required = !this.loginService.loggedIn
		this.passwordValidator.required = !this.loginService.loggedIn
	}

	private addPortal(e: LoginEvent): void {
		localStorage.setItem('isAuthenticated', true)
		var hasAdmin = this.loginModel.user.hasRole('Admin')
		var hasClaims = this.loginModel.user.hasRole('Claims')
		var hasRemits = this.loginModel.user.hasRole('Remits')
		var hasInterfaces = this.loginModel.user.hasRole('Interfaces')
		var hasBankEFT = this.loginModel.user.hasRole('Bank EFT')
		var hasClaimStatus = false

		if (hasClaims) {
			return this.login.props.history.push('/main/claims')
		}
		if (hasRemits) {
			return this.login.props.history.push('/main/remittance')
		}
		if (hasBankEFT) {
			return this.login.props.history.push('/main/bankEFT')
		}
		if (hasInterfaces) {
			// tabData.push(tabList[3])
		}
		// if (hasClaimStatus) {
		//Tab Not Implemented
		// }
		if (hasAdmin) {
			// tabData.push(tabList[4])
		}
		// if (hasClaims || hasRemits || hasInterfaces || hasAdmin) {
		//Tab Not Implemented
		// }
	}

	private onLogin(event: LoginEvent): void {
		var index: number = this.login.state.selectedIndex
		var event: EdiUser = new EdiUser(this.login.state.username, this.login.state.password, this.login.state.serviceArea[index])
		// if (!Validator.validateAll([this.usernameValidator, this.passwordValidator]).length) {
		/*	login.resetFocus();
					login.usernameValidatorSource[login.usernameValidatorProperty]='';
					login.usernameValidatorSource.errorString='';
					login.passwordValidatorSource[login.passwordValidatorProperty]='';
					login.passwordValidatorSource.errorString='';*/
		this.loginService.logIn(event)
		// }
	}

	private loginError(event: LoginEvent): void {
		this.login.errHG.visible = true
		this.login.txt.text = event.errorStr
	}

	private whenUser(event: LoginEvent): void {
		this.toggleValidation()
	}

	/*override*/ public onRemove(): void {
		this.eventMap.unmapListeners()
		super.onRemove()
	}

	private popServiceArea(event: any): void {
		// this.login.serviceArea.dataProvider = <ArrayCollection>event.serviceAreas
		// this.login.serviceArea.selectedIndex = 0
		event.serviceAreas.forEach(element => {
			element.label = element.id.serviceAreaId
		})
		this.login._selServ = event.serviceAreas[0].label
		this.login.setState({ serviceArea: ArrayCollection.from(event.serviceAreas), serviceAreaValue: event.serviceAreas[0].label })
	}

	private onServiceArea(event: MouseEvent): void {
		if (!this.login.state.serviceAreaValue) {
			toast.error('Please select the Service Area!')
		} else {
			// this.login.resetFocus()
			// this.login.usernameValidatorSource[this.login.usernameValidatorProperty] = ''
			// this.login.usernameValidatorSource.errorString = ''
			// this.login.passwordValidatorSource[this.login.passwordValidatorProperty] = ''
			// this.login.passwordValidatorSource.errorString = ''

			// var auditFindingEvent: AuditFindingEvent = new AuditFindingEvent(
			// 	AuditFindingEvent.CC_DATA
			// )

			// this.loginService.saveServiceArea(<EdiUserRoleMap>this.login.serviceArea.selectedItem)
			var selectedArea = this.login.state.serviceArea.filter(data => data.label === this.login.state.serviceAreaValue)
			this.loginService.saveServiceArea(selectedArea[0])
		}
	}
}
