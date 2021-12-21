import Mediator from '../../../../../../../modules/main/view/Mediator.ts'
import { AdminModel } from '../model/AdminModel.ts'
import { AdminEvent } from '../model/events/AdminEvent.ts'
import { CombineTriggerEvent } from '../model/events/CombineTriggerEvent.ts'
import { AdminService } from '../service/AdminService.ts'
import X12CombineTrigger from './components/X12CombineTrigger'

export class X12CombineTriggerMediator extends Mediator {
	public view: X12CombineTrigger

	public adminModel: AdminModel = AdminModel.getInstance()

	public service: AdminService = AdminService.getInstance()

	public onRegister(view): X12CombineTriggerMediator {
		this.view = view
		this.mapListener(this.eventDispatcher, AdminEvent.COMBINE_TRIGGER, this.getTriggers, AdminEvent)
		this.mapListener(this.view, CombineTriggerEvent.ACTIVATE_POLL, this.activatePoll, CombineTriggerEvent)
		this.mapListener(this.eventDispatcher, AdminEvent.ERROR_MSG, this.getTriggers, AdminEvent)
		this.mapListener(this.view, CombineTriggerEvent.COMBINE, this.triggerCombineX12)
		//dispatch(new AdminEvent(AdminEvent.GET_COMBINE_TRIGGER));
		return this
	}

	private getTriggers(event: AdminEvent): void {
		this.view.grid && this.view.grid.setDataProvider(this.adminModel.combineTrigger)
		this.view.grid && this.view.grid.rebuildBody()
	}

	private triggerCombineX12(event: CombineTriggerEvent): void {
		this.service.triggerCombineX12(event.pollId)
	}

	private activatePoll(event: CombineTriggerEvent): void {
		this.service.activatePoll(event.pollId, event.isActivated)
	}

	public onRemove(): void {
		this.eventMap.unmapListeners()
		super.onRemove()
	}
}
