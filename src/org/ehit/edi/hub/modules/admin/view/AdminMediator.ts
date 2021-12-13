import Mediator from '../../../../../../../modules/main/view/Mediator.ts'
import { LoginEvent } from '../../../user/model/events/LoginEvent.ts'
import LoginModel from '../../../user/model/LoginModel'
import { AdminEvent } from '../model/events/AdminEvent.ts'
import { AdminService } from '../service/AdminService.ts'
import Admin from './components/Admin'

export class AdminMediator extends Mediator {
	public view: Admin
	public loginModel: LoginModel = LoginModel.getInstance()
	public adminService: AdminService = AdminService.getInstance()


	public onRegister(view): void {
		this.view = view
		this.mapListener(this.eventDispatcher, AdminEvent.REMOVE_ADMIN, this.remove, AdminEvent)
		this.mapListener(this.eventDispatcher, LoginEvent.LOGOUT, this.remove, LoginEvent)
		// this.mapListener(this.view.viewStack, Event.CHANGE, this.refreshTab, Event) //NEED TO Implement
		if (this.view.state.tabValue === 0) {
			// this.dispatch(new AdminEvent(AdminEvent.GET_POLL_CONTROL)) /** Directly called service call's from Admin Command */
			this.adminService.getPollControl()
			this.adminService.getPollerStatus()
		}
	}

	private remove(event: LoginEvent): void {
		this.eventMap.unmapListeners()
		super.onRemove()
	}

	private refreshTab(event: Event): void {
		if (this.view.viewStack.selectedIndex == 0) {
			if (!this.mediatorMap.hasMediatorForView(this.view.pollControl)) {
				this.mediatorMap.createMediator(this.view.pollControl)
			} else this.dispatch(new AdminEvent(AdminEvent.GET_POLL_CONTROL))
		}
		if (this.view.viewStack.selectedIndex == 1) {
			if (!this.mediatorMap.hasMediatorForView(this.view.deliveryControl)) {
				this.mediatorMap.createMediator(this.view.deliveryControl)
			} else this.dispatch(new AdminEvent(AdminEvent.GET_DELIVERY_CONTROL))
		}
		if (this.view.viewStack.selectedIndex == 2) {
			if (!this.mediatorMap.hasMediatorForView(this.view.combineTrigger)) {
				this.mediatorMap.createMediator(this.view.combineTrigger)
			} else this.dispatch(new AdminEvent(AdminEvent.GET_COMBINE_TRIGGER))
		}

		if (this.view.viewStack.selectedIndex == 3) {
			if (!this.mediatorMap.hasMediatorForView(this.view.manageUser)) {
				this.mediatorMap.createMediator(this.view.manageUser)
			} else this.dispatch(new AdminEvent(AdminEvent.GET_USERS_AND_ROLES))
		}
		if (this.view.viewStack.selectedIndex == 4) {
			if (!this.mediatorMap.hasMediatorForView(this.view.errorLog)) {
				this.mediatorMap.createMediator(this.view.errorLog)
			} else this.dispatch(new AdminEvent(AdminEvent.GET_ERROR_LOG))
		}

		if (this.view.viewStack.selectedIndex == 5) {
			if (!this.mediatorMap.hasMediatorForView(this.view.deliveryLog)) {
				this.mediatorMap.createMediator(this.view.deliveryLog)
			} else this.dispatch(new AdminEvent(AdminEvent.GET_DELIVERY_LOG))
		}
	}

	/*override*/ public onRemove(): void {
		this.eventMap.unmapListeners()
		super.onRemove()
		trace('AdminMediator.onRemove()')
	}
}
