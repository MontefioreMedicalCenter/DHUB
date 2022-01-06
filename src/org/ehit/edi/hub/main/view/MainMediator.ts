import { toast } from 'react-toastify'
import Mediator from '../../../../../../modules/main/view/Mediator.ts'
import { LoginEvent } from '../../user/model/events/LoginEvent.ts'

export class MainMediator extends Mediator {
	/*[Inject]*/
	public main: Main

	/*override*/ public onRegister(view): void {
		// this.mapListener(this.eventDispatcher, LoginEvent.LOGIN_SUCCESS, this.addPortal, LoginEvent) // Added this to login mediator
		this.mapListener(this.eventDispatcher, LoginEvent.LOGOUT, this.addLogin, LoginEvent)
	}

	private addLogin(e: LoginEvent): void {
		if (this.main.getChildByName('Portal') != null) {
			var portalCanvas: PortalCanvas = <PortalCanvas>this.main.getChildByName('Portal')
			this.main.removeChild(DisplayObject(portalCanvas))
		}
		var login: Login = new Login()
		this.main.addChild(login)
	}
	private addPortal(e: LoginEvent): void {
		toast.success('Added to Login Mediator directly')
		// if (this.main.getChildByName('Login') != null) {
		// 	try {
		// 		var login: DisplayObject = <DisplayObject>this.main.getChildByName('Login')
		// 		this.mediatorMap.removeMediatorByView(login)
		// 		this.main.removeChild(login)
		// 		this.main.Login.reflect.target = null
		// 	} catch (e) {
		// 		trace('Handled the error')
		// 	}
		// }
		// var portal: PortalCanvas = new PortalCanvas()
		// this.main.addChild(portal)
	}
}
