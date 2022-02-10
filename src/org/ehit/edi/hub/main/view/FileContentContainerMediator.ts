import Mediator from "../../../../../../modules/main/view/Mediator.ts"
import { StringBuffer } from "../../uitl/StringBuffer.ts"
import FileContentContainer from "./components/FileContentContainer"

export class FileContentContainerMediator extends Mediator {
	public view: FileContentContainer

	public onRegister(view): FileContentContainerMediator {
		this.view = view
		// this.mapListener(this.view.editorMenu, ItemClickEvent.ITEM_CLICK, this.changeContent)
		return this
	}

	public changeContent(event, value){
		// if (event.item.label === 'view') {
		// 	(<Object>this.view.getChildAt(0)).text = this.view.getfile().fileContent.toString()
		// } else if (event.item.label === 'wrap') {
		// 	var progressStatus: ProgressStatus = new ProgressStatus()
		// 	PopUpManager.addPopUp(progressStatus, this.view, true)
		// 	PopUpManager.centerPopUp(progressStatus)
		// 	this.wrapEdiText()
		// 	PopUpManager.removePopUp(progressStatus)
		// } else if (event.item.label === 'unwrap') {
		// 	this.unWrapEdiText()
		// } else if (event.item.label === 'save') {
		// 	this.downloadFile()
		// } else if (event.item.label === 'explain' || event.item.label === 'reports') {
		// 	this.view.dispatchEvent(new Event('contentToReports'))
		// } else if (event.item.label === 'split X12') {
		// 	this.view.dispatchEvent(new Event('contentToX12Split'))
		// } else if (event.item.label === 'content') {
		// 	this.view.parentDocument.dispatchEvent(new Event('x12SplitToContent'))
		// }
		
		if (value === 'view'){
			this.view.setState({ediContent: this.view.getfile().fileContent.toString()})
		} else if(value === 'wrap'){
			this.wrapEdiText()
		} else if(value === 'unwrap'){
			this.unWrapEdiText()
		}else if(value === "save"){
			this.downloadFile(event)
		}
	}

	public wrapEdiText(): void {
		var s: string = this.view.getfile() && this.view.getfile().fileContent.toString();
		var buf: StringBuffer = new StringBuffer()
		if (s != null && s.length > 107 && s.substring(0, 3) === 'ISA') {
			var delim: string = s.substring(105, 106)
			this.view.setState({ediContent: s.split(delim).join(delim + '\n')})
		} else {
			this.view.setState({ediContent: "Wrap: text didn't qualifiy, so wrapping canceled."})
		}
	}

	public unWrapEdiText(): void {
		var s: string = this.view.getfile() && this.view.getfile().fileContent.toString();
		var buf: StringBuffer = new StringBuffer()
		if (s != null && s.length > 107 && s.substring(0, 3) === 'ISA') {
			for (var i: number = 0; i < s.length; i++) {
				var c: string = s.substring(i, i + 1)
				if (c != '\r' && c != '\n') {
					buf.append(c)
				}
			}
			this.view.setState({ediContent: buf.toString()})
		} else {
			this.view.setState({ediContent: "UnWrap: text didn't qualifiy, so unWrap canceled."})
		}
	}

	public downloadFile(event): void {
		// var fileReference: FileReference = new FileReference()
		// fileReference.save(this.view.getfile().fileContent, this.view.getfile().origFileName)
	}

	public onRemove(): void {
		this.eventMap.unmapListeners()
		super.onRemove()
		trace('FileContentMediator.onRemove()')
	}
}
