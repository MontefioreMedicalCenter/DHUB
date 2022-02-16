import Mediator from '../../../../../../../modules/main/view/Mediator.ts'
import { BankEFTModel } from '../../BankEFT/model/BankEFTModel.ts'
import { BankEFTEvent } from '../model/events/BankEFTEvent.ts'
import { BankEFTService } from '../service/BankEFTService.ts'
import { FileEditorEvent } from '../../../main/model/events/FileEditorEvent.ts'
import { FlexDataGridColumn, FlexDataGridEvent } from '../../../../../../../flexicious'
import { toast } from 'react-toastify'
import { DateRangeEvent } from '../../../../../../../utils/dateFormatCombo/DateRangeEvent.ts'
import {FileEditorService} from '../../../main/service/FileEditorService.ts'
export class BankEFTTrackerMediator extends Mediator {
	public view: BankEFTTracker
	public bankEFTModel: BankEFTModel = BankEFTModel.getInstance()
	public bankEFTService: BankEFTService = BankEFTService.getInstance()
	public fileEditorService: FileEditorService = FileEditorService.getInstance()

	private remitsTimer: Timer
	private _editor: boolean
	private dateRange: DateRangeEvent

	public onRegister(view): BankEFTTrackerMediator {
		this.view = view
		this.mapListener(this.eventDispatcher, BankEFTEvent.BANKEFT_HEADER, this.addBankEFTHeader, BankEFTEvent)
		this.mapListener(this.eventDispatcher, BankEFTEvent.BANKEFT, this.addBankEFT, BankEFTEvent)
		this.mapListener(this.eventDispatcher, BankEFTEvent.REMOVE_BANKEFT, this.removeBankEFT, BankEFTEvent)
		this.mapListener(this.view, FileEditorEvent.VIEW_FILE, this.viewFile1, FileEditorEvent)
		this.mapListener(this.view.grid, FlexDataGridEvent.ICON_CLICK, this.viewFile, FlexDataGridEvent)
		// this.mapListener(this.view, DateRangeEvent.SEARCH_BY_DATE_RANGE, this.searchByDateRange, DateRangeEvent)
		// this.remitsTimer = new Timer(600000)
		// this.mapListener(this.remitsTimer, TimerEvent.TIMER, this.refreshBankEFT)
		// if (this.view.props.tabValue === '/main/bankEFT') this.dispatch(new BankEFTEvent(BankEFTEvent.GET_BANKEFT_HEADER))
		if (this.view.props.tabValue === '/main/bankEFT') this.bankEFTService.findbankEFTHeader()

		return this
	}
	private static tickIcon: Class
	private static waitIcon: Class
	private static naIcon: Class

	public dynamicIconFunction(cell: IFlexDataGridCell, state: string = ''): any {
		var iconField: string = null
		var img: Class = BankEFTTrackerMediator.naIcon
		if (cell.rowInfo.isDataRow) {
			var statusArr: any[]
			try {
				statusArr = cell.rowInfo.data.status.split(';')
			} catch (e) {
				trace('Status Error:' + statusArr)
			}
			for (var n: number = 0; n < statusArr.length; n++) {
				var stepstatus: any[] = statusArr[n].split('=')
				if (stepstatus[0] == cell.column.dataField) {
					iconField = stepstatus[1]
					img = iconField == 'Completed' ? BankEFTTrackerMediator.tickIcon : iconField == 'Pending' ? BankEFTTrackerMediator.waitIcon : BankEFTTrackerMediator.naIcon
					return img
				}
			}
			return img
		}
		return null
	}

	private addBankEFTHeader(event: BankEFTEvent): void {
		for (var x: number = 0; x < this.bankEFTModel.bankEFTHeader.length; x++) {
			var col: FlexDataGridColumn = new FlexDataGridColumn()
			col.setHeaderText(this.bankEFTModel.bankEFTHeader[x][1])
			col.dataField = this.bankEFTModel.bankEFTHeader[x][0]
			col.hideText = true
			col.enableIcon = true
			col.iconHandCursor = true
			col.columnWidthMode = 'fitToContent'
			col.width = 65
			col.setStyle('iconLeft', 15)
			col.enableCellClickRowSelect = false
			col.iconFunction = this.dynamicIconFunction
			if (col.getHeaderText() !== 'Recvd'){
				this.view.grid.addColumn(col)
			}
		}
		this.view.grid && this.view.grid.reDraw()
	}

	private refreshBankEFT(event: Event): void {
		this.searchByDateRange(this.dateRange)
	}

	private searchByDateRange(choosenStartDate, choosenEndDate){

		var startDate: Date = null
		var endDate: Date = null
		if (choosenStartDate != null && choosenEndDate != null) {
			startDate = choosenStartDate
			endDate = choosenEndDate
		}
		// this.dispatch(new BankEFTEvent(BankEFTEvent.GET_BANKEFT, startDate, endDate))
		this.bankEFTService.findBankEFTProcesses(startDate, endDate);//did service call directly
	}

	private removeBankEFT(event: BankEFTEvent): void {
		// if (this.remitsTimer.running) this.remitsTimer.stop()
	}

	private addBankEFT(event: BankEFTEvent): void {
		// if (!this.remitsTimer.running) {
		// 	this.remitsTimer.start()
		// }
		if (this.bankEFTModel.errMsg == null) {
			// this.view.errTxt.text = ''
			this.view.grid.setDataProvider(this.bankEFTModel.bankEFT)
			this.view.grid.refreshCells()
		} else {
			toast.error(this.bankEFTModel.errMsg)
			// this.view.errTxt.text =
		}
	}

	public onRemove(): void {
		this.remitsTimer = null
		this.bankEFTModel.bankEFTHeader = null
		this.bankEFTModel = null
		this.eventMap.unmapListeners()
		this.view = null
		super.onRemove()
		trace('BankEFTTrackerMediator.onRemove()')
	}

	private viewFile(event: FlexDataGridEvent): void {
		try {
			var fileId: number = 0
			var file: EdiFileBase = new EdiFileBase()
			var transaction: string = 'EFT'
			if (event.cell instanceof IFlexDataGridDataCell && event.cell.column != null) {
				for (var x: number = 0; x < event.cell.rowInfo.data.deliveryLogs.length; x++) {
					var stepArr: any[] = event.cell.rowInfo.data.deliveryLogs.getItemAt(x).deliveryControl.stepNo.split(',')
					for (var n: number = 0; n < stepArr.length; n++) {
						if (stepArr[n] == event.cell.column.dataField) {
							fileId = event.cell.rowInfo.data.deliveryLogs.getItemAt(x).postFileId
						}
					}
				}
			}
			if (fileId > 0) {
				file.fileId = fileId
				file.removeCRLF = true
				this.dispatch(new FileEditorEvent(FileEditorEvent.VIEW_FILE, file))
			}
		} catch (e) {
			trace('something bad happened')
		}
	}

	private viewFile1(event): void {
		var file: EdiFileBase = event
		// var fileEditor:FileEditor=new FileEditor();
		// fileEditor.height=contextView.height-40;
		// fileEditor.width=contextView.width-40;
		// PopUpManager.addPopUp(fileEditor, contextView, true);
		// PopUpManager.centerPopUp(fileEditor);
		// fileEditor.container.setfile(file);
		// mediatorMap.createMediator(fileEditor);
		// if (file.reportOnly == true)
		// 	fileEditor.container.fileContentContainer.dispatchEvent(new Event('contentToReports'))
		// else
		// 	service.getFile(file.fileId, file.removeCRLF);

		if (file.reportOnly === true) {
			toast.warning('Need to Implement file.reportOnly')
			// this.view.fileEditor.container.fileContentContainer.dispatchEvent(new Event('contentToReports'))
		} else {
			this.fileEditorService.getFile(file.fileId, file.removeCRLF)
		}
		this.view.setState({
			fileEditorWindow: true
		})

		// this.dispatch(event)
	}
}
