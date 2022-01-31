import { toast } from "react-toastify";
import Mediator from "../../../../../../../modules/main/view/Mediator.ts"
import RemitsEvent from "../model/events/RemitsEvent.ts"
import { RemitsService } from "../service/RemitsService.ts";
import Remits from "./components/Remits"

export class RemitsMediator extends Mediator {

	public view: Remits
	
	public remitsService: RemitsService = RemitsService.getInstance();

	public onRegister(view): RemitsMediator {
		this.view = view
		// this.mapListener(this.view.viewStack, Event.CHANGE, this.refreshTab, Event)
		// if (this.view.initialIndex == 0) {this.dispatch(new RemitsEvent(RemitsEvent.GET_REMIT_HEADER))}
		if(this.view.state.tabValue === '/main/remittance'){
			this.remitsService.findRemitHeader();
		}
		return this
	}

	private refreshTab(value) {
		if (value === '/main/remittance') {
			toast.error('remittance')
			// if (!this.mediatorMap.hasMediatorForView(this.view.remitsTracker)) {
			// 	this.mediatorMap.createMediator(this.view.remitsTracker)
			// } else this.dispatch(new RemitsEvent(RemitsEvent.GET_REMITS))
			// this.remitsService.findRemitsProcesses()
		}
		if (value === '/main/remittance/quicksearch') {
			toast.error('quicksearch')
			// if (!this.mediatorMap.hasMediatorForView(this.view.remitQuickSearch)) {
			// 	this.mediatorMap.createMediator(this.view.remitQuickSearch)
			// }
		}
	}

	public onRemove(): void {
		this.eventMap.unmapListeners()
		super.onRemove()
		trace('RemitsMediator.onRemove()')
	}
}
