import Mediator from '../../../../../../../modules/main/view/Mediator.ts'
import { DispatchDeliveryEvent } from '../model/events/DispatchDeliveryEvent.ts'
import { AdminService } from '../service/AdminService.ts'
import DeliveryEditor from './components/DeliveryEditor'

export class DeliveryEditorMediator extends Mediator {
	public view: DeliveryEditor
	public service: AdminService = AdminService.getInstance()

	public onRegister(view): DeliveryEditorMediator {
		this.view = view
		this.mapListener(this.view, DispatchDeliveryEvent.DISPATCH_DELIVERY, this.deliverPayload, DispatchDeliveryEvent)
		return this
	}

	private deliverPayload(event: DispatchDeliveryEvent): void {
		this.service.deliverPayload(this.view.deliveryControlId, event.fileProperties, event.fileContent)
	}

	public onRemove(): void {
		this.eventMap.unmapListeners()
		super.onRemove()
		alert('DeliveryEditorMediator.onRemove()')
	}
}
