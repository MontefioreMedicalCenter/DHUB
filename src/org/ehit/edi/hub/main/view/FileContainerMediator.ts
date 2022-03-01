import { toast } from 'react-toastify'
import Mediator from '../../../../../../modules/main/view/Mediator.ts'
import { EdiFileBase } from '../model/EdiFileBase.ts'
import { FileEditorEvent } from '../model/events/FileEditorEvent.ts'
import FileContainer from './components/FileContainer'

export class FileContainerMediator extends Mediator {
	public view: FileContainer

	public onRegister(view): FileContainerMediator {
		this.view = view
		this.mapListener(this.eventDispatcher, FileEditorEvent.FILE_CONTENT, this.addFileContent, FileEditorEvent)
		// this.mapListener(this.view.fileContentContainer, 'contentToReports', this.runReport)//passed File through props
		// this.mapListener(this.view.fileContentContainer, 'contentToX12Split', this.splitRemitsByBillingSystems)//need to implement
		return this
	}

	private runReport(event: FileEditorEvent): void {
		// reportContainer called directly
		// if (!this.mediatorMap.hasMediatorForView(this.view.reportContainer)) {
		// 	this.view.reportContainer.setfile(this.view.getfile())
		// 	this.mediatorMap.createMediator(this.view.reportContainer)
		// }
	}

	private splitRemitsByBillingSystems(event: Event): void {
		if (!this.mediatorMap.hasMediatorForView(this.view.x12SplitContainer)) {
			this.view.x12SplitContainer.setfile(this.view.getfile())
			this.mediatorMap.createMediator(this.view.x12SplitContainer)
		}
	}

	private addFileContent(event: FileEditorEvent): void {
		this.view.fileContentContainer && this.view.setfile(event.file)
		this.view.props.parentDocument.props.parentDoc.setState({fileEditorWindowTitle: event.file.origFileName})
		this.view.setState({fileContentContainerWindow : true})
	}

	public onRemove(): void {
		this.eventMap.unmapListeners()
		if (this.mediatorMap.hasMediatorForView(this.view.fileContentContainer)) {
			this.mediatorMap.removeMediatorByView(this.view.fileContentContainer)
		}
		if (this.mediatorMap.hasMediatorForView(this.view.reportContainer)) {
			this.mediatorMap.removeMediatorByView(this.view.reportContainer)
		}
		if (this.mediatorMap.hasMediatorForView(this.view.x12SplitContainer)) {
			this.mediatorMap.removeMediatorByView(this.view.x12SplitContainer)
		}
		this.mediatorMap.removeMediatorByView(this.view)
		super.onRemove()
	}
}
