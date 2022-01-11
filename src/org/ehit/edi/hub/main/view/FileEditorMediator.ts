import { toast } from "react-toastify"
import Mediator from "../../../../../../modules/main/view/Mediator.ts"
import FileEditor from "./components/FileEditor"

export class FileEditorMediator extends Mediator {
	public view: FileEditor
	public remoteObj: RemoteObject

	public onRegister(): FileEditorMediator {
		// this.mapListener(this.view, CloseEvent.CLOSE, this.dispose, CloseEvent)
		// this.createMediator(this.view.container)
		// super.onRegister()
		return this
	}

	private handleAccChange(e: IndexChangedEvent): void {
		this.mediatorMap.createMediator(e.relatedObject)
	}

	public dispose(event: CloseEvent): void {
		// this.eventMap.unmapListeners()
		// PopUpManager.removePopUp(this.view)
		// this.view.removeAllChildren()
		// this.mediatorMap.removeMediatorByView(this.view.container)
		// this.mediatorMap.removeMediatorByView(this.view)
		// super.onRemove()
		this.view.props.closePopup()
	}
}
