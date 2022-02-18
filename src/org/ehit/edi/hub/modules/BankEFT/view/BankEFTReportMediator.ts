import Mediator from '../../../../../../../modules/main/view/Mediator.ts'
import { FileEditorEvent } from '../../../main/model/events/FileEditorEvent.ts'
import { BankEFTModel } from '../model/BankEFTModel.ts'
import { BankEFTService } from '../service/BankEFTService.ts'
import BankEFTReport from './components/BankEFTReport'

export class BankEFTReportMediator extends Mediator {
	public view: BankEFTReport

	public bankEFTModel: BankEFTModel = BankEFTModel.getInstance()

	public bankEFTService: BankEFTService = BankEFTService.getInstance()
	// private remitsTimer: Timer
	// private _editor: boolean
	// private dateRange: DateRangeEvent

	public onRegister(view): BankEFTReportMediator {
		this.view = view
		// this.mapListener(this.view, FileEditorEvent.VIEW_FILE, this.openFile, FileEditorEvent)//Need to call directly the open File
		return this
	}

	// private static tickIcon: Class

	// private static waitIcon: Class

	// private static naIcon: Class

	public onRemove(): void {
		this.remitsTimer = null
		this.bankEFTModel.bankEFTHeader = null
		this.bankEFTModel = null
		this.eventMap.unmapListeners()
		this.view = null
		super.onRemove()
		trace('BankEFTTrackerMediator.onRemove()')
	}

	private openFile(event: FileEditorEvent): void {
		this.dispatch(event)
	}
}
