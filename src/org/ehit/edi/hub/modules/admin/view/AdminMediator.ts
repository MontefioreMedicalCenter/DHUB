import { toast } from 'react-toastify'
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


	public onRegister(view): AdminMediator {
		this.view = view
		this.mapListener(this.eventDispatcher, AdminEvent.REMOVE_ADMIN, this.remove, AdminEvent)
		this.mapListener(this.eventDispatcher, LoginEvent.LOGOUT, this.remove, LoginEvent)
		// this.mapListener(this.view.viewStack, Event.CHANGE, this.refreshTab, Event) //NEED TO Implement
		if (this.view.state.tabValue === '/main/admin') {
			// this.dispatch(new AdminEvent(AdminEvent.GET_POLL_CONTROL)) /** Directly called service call's from Admin Command */
			this.adminService.getPollControl()
			this.adminService.getPollerStatus()
		}
		return this
	}

	private remove(event: LoginEvent): void {
		this.eventMap.unmapListeners()
		super.onRemove()
	}

	private refreshTab(value): void {
		if (value === '/main/admin') {
			// if (!this.mediatorMap.hasMediatorForView(this.view.pollControl)) {
			// 	this.mediatorMap.createMediator(this.view.pollControl)
			// } else this.dispatch(new AdminEvent(AdminEvent.GET_POLL_CONTROL))
			this.adminService.getPollControl()
			this.adminService.getPollerStatus() 
		}
		if (value === '/main/admin/dispatchDelivery') {
			// if (!this.mediatorMap.hasMediatorForView(this.view.deliveryControl)) {
			// 	this.mediatorMap.createMediator(this.view.deliveryControl)
			// } else this.dispatch(new AdminEvent(AdminEvent.GET_DELIVERY_CONTROL))

			// toast.warning("Need to Implement dispatchDelivery")
			 this.adminService.getDeliveryControl();/** Directly called service call's from Admin Command */
		}
		if (value === '/main/admin/triggers') {
			// if (!this.mediatorMap.hasMediatorForView(this.view.combineTrigger)) {
			// 	this.mediatorMap.createMediator(this.view.combineTrigger)
			// } else this.dispatch(new AdminEvent(AdminEvent.GET_COMBINE_TRIGGER))

			// toast.warning("Need to Implement triggers")
			this.adminService.getPollControl(true);/** Directly called service call's from Admin Command */
		}

		if (value === '/main/admin/manageUser') {
			// if (!this.mediatorMap.hasMediatorForView(this.view.manageUser)) {
			// 	this.mediatorMap.createMediator(this.view.manageUser)
			// } else this.dispatch(new AdminEvent(AdminEvent.GET_USERS_AND_ROLES))

			// toast.warning("Need to Implement manageUser")
			this.adminService.getUserAndRoles();/** Directly called service call's from Admin Command */
		}
		if (value === '/main/admin/errorLog') {
			// if (!this.mediatorMap.hasMediatorForView(this.view.errorLog)) {
			// 	this.mediatorMap.createMediator(this.view.errorLog)
			// } else this.dispatch(new AdminEvent(AdminEvent.GET_ERROR_LOG))
			// toast.warning("Need to Implement errorLog")
			// this.adminService.findErrorLog();/** Directly called service call's from Mediator itself because of date */
		}

		if (value === '/main/admin/deliveryLog') {
		// 	if (!this.mediatorMap.hasMediatorForView(this.view.deliveryLog)) {
		// 		this.mediatorMap.createMediator(this.view.deliveryLog)
		// 	} else this.dispatch(new AdminEvent(AdminEvent.GET_DELIVERY_LOG))
		toast.warning("Need to Implement deliveryLog")
		// this.adminService.findDeliveryLog(event.startDate, event.endDate);/** Directly called service call's from Admin Command */
		}

	}

	/*override*/ public onRemove(): void {
		this.eventMap.unmapListeners()
		super.onRemove()
		trace('AdminMediator.onRemove()')
	}
}
