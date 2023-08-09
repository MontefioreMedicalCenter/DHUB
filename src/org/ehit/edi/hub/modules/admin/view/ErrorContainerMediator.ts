import Mediator from '../../../../../../../modules/main/view/Mediator.ts'
import { ErrorLogEvent } from '../model/events/ErrorLogEvent.ts'
import { AdminService } from '../service/AdminService.ts'
import ErrorContainer from './components/ErrorContainer'

export class ErrorContainerMediator extends Mediator {
	public view: ErrorContainer

	public service: AdminService = AdminService.getInstance()



	public onRegister(view): ErrorContainerMediator {
		this.view = view
		this.mapListener(this.view, ErrorLogEvent.REPUBLISH_MSG, this.republishError) //directly called on onClick
		return this
	}

	private republishError(errorId, msgContent): void {
		// this.service.republishError(this.view.getErrorStore().id.errorId, this.view.msgContent.text) //directly called on onClick
		this.service.republishError(errorId, msgContent)
	}

	public onRemove(): void {
		this.eventMap.unmapListeners()
		super.onRemove()
		trace('ErrorContainerMediator.onRemove()')
	}
}
