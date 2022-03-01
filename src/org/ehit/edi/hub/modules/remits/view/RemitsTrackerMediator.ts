import Mediator from '../../../../../../../modules/main/view/Mediator.ts'
import { RemitsService } from '../service/RemitsService.ts'
import RemitsModel from '../model/RemitsModel.ts'
import RemitsTracker from './components/RemitsTracker'
import RemitsEvent from '../model/events/RemitsEvent.ts'
import { FileEditorEvent } from '../../../main/model/events/FileEditorEvent.ts'
import { FlexDataGridColumn, FlexDataGridEvent } from '../../../../../../../flexicious'
import { DateRangeEvent } from '../../../../../../../utils/dateFormatCombo/DateRangeEvent.ts'
import naIcon from '../../../../../../../assets/images/minus_black.png'
import waitIcon from '../../../../../../../assets/images/clock.png'
import tickIcon from '../../../../../../../assets/images/tick.png'
import { toast } from 'react-toastify'
import { EdiFileBase } from '../../../main/model/EdiFileBase.ts'
import { FileEditorService } from '../../../main/service/FileEditorService.ts'

export default class RemitsTrackerMediator extends Mediator {
	public view: RemitsTracker
	public remitsModel: RemitsModel = RemitsModel.getInstance()
	public remitService: RemitsService = RemitsService.getInstance()
	public fileEditorService: FileEditorService = FileEditorService.getInstance()
	private remitsTimer: Timer
	private _editor: boolean
	private dateRange: DateRangeEvent

	public onRegister(view): RemitsTrackerMediator {
		this.view = view
		this.mapListener(this.eventDispatcher, RemitsEvent.REMIT_HEADER, this.addRemitHeader, RemitsEvent)
		this.mapListener(this.eventDispatcher, RemitsEvent.REMITS, this.addRemits, RemitsEvent)
		this.mapListener(this.eventDispatcher, RemitsEvent.REMOVE_REMITS, this.removeRemits, RemitsEvent)
		this.mapListener(this.view, FileEditorEvent.VIEW_FILE, this.viewFile1, FileEditorEvent)
		this.mapListener(this.view.grid, FlexDataGridEvent.ICON_CLICK, this.viewFile, FlexDataGridEvent)
		this.mapListener(this.view, DateRangeEvent.SEARCH_BY_DATE_RANGE, this.searchByDateRange, DateRangeEvent)
		// this.remitsTimer = new Timer(600000)
		// this.eventMap.mapListener(this.remitsTimer, TimerEvent.TIMER, this.refreshRemits)

		// this.mapListener(this.eventDispatcher, RemitsEvent.GET_REMIT_HEADER, this.getRemitHeader, RemitsEvent)
		// if (this.view.state.tabValue === '/main/remittance'){
		// 	this.dispatch(new RemitsEvent(RemitsEvent.GET_REMIT_HEADER))
		// }

		this.mapListener(this.view, RemitsEvent.DUP_FILE, this.getDupFile, RemitsEvent)
		this.mapListener(this.view.grid, RemitsEvent.DUP_FILE, this.getDupFile, RemitsEvent)
		this.mapListener(this.eventDispatcher, RemitsEvent.DUP_FILE, this.getDupFile, RemitsEvent)

		return this
	}

	// public getRemitHeader(){
	// 	this.remitService.findRemitHeader();
	// }

	dynamicIconFunction = (cell, state = '') => {
		var iconField: string = null
		var img = naIcon
		if (cell.rowInfo.getIsDataRow()) {
			var statusArr: any[]
			try {
				statusArr = cell.rowInfo.getData().status.split(';')
			} catch (e) {
				// trace('I am in' + statusArr)
				toast.success('I am in' + statusArr)
			}
			for (var n: number = 0; n < statusArr.length; n++) {
				var stepstatus: any[] = statusArr[n].split('=')
				if (Number(stepstatus[0]) === cell.getColumn().dataField) {
					iconField = stepstatus[1]
					img = iconField === 'Completed' ? tickIcon : iconField === 'Pending' ? waitIcon : naIcon
					return img
				}
			}
			return img
		}
		return null
	}

	private addRemitHeader(event: RemitsEvent): void {
		for (var x: number = 0; x < this.remitsModel.remitHeader.length; x++) {
			var col: FlexDataGridColumn = new FlexDataGridColumn()
			col.setHeaderText(this.remitsModel.remitHeader[x][1])
			col.dataField = this.remitsModel.remitHeader[x][0]
			col.hideText = true
			col.enableIcon = true
			col.iconHandCursor = true
			col.columnWidthMode = 'fitToContent'
			col.width = 65
			col.setStyle('iconLeft', 15)
			col.enableCellClickRowSelect = false
			col.iconFunction = this.dynamicIconFunction
			if (col.getHeaderText() != 'Recvd') {
				this.view.grid && this.view.grid.addColumn(col)
			}
		}
		this.view.grid && this.view.grid.reDraw()
	}

	private refreshRemits(): void {
		this.searchByDateRange
	}

	private searchByDateRange(choosenStartDate, choosenEndDate) {
		var startDate: Date = null
		var endDate: Date = null
		if (choosenStartDate != null && choosenEndDate != null) {
			startDate = choosenStartDate
			endDate = choosenEndDate
		}
		this.remitService.findRemitsProcesses(startDate, endDate) //need to call this service directly because we dont have EdiHubContext
	}

	private removeRemits(event: RemitsEvent): void {
		// if (this.remitsTimer.running) this.remitsTimer.stop()
	}

	private addRemits(event: RemitsEvent): void {
		// if (!this.remitsTimer.running) {
		// 	this.remitsTimer.start()
		// }
		if (this.remitsModel.errMsg == null) {
			// this.view.errTxt.text = ''
			this.view.grid.setDataProvider(this.remitsModel.remits)
			// this.view.grid.dataProvider = this.remitsModel.remits
			this.view.grid.refreshCells()
		} else {
			toast.error(this.remitsModel.errMsg)
		}
		// else this.view.errTxt.text = this.remitsModel.errMsg
	}

	public onRemove(): void {
		this.remitsTimer = null
		this.remitsModel.remitHeader = null
		this.remitsModel = null
		this.eventMap.unmapListeners()
		this.view = null
		super.onRemove()
		trace('RemitsMediator.onRemove()')
	}

	private getDupFile(event: RemitsEvent): void {
		this.remitService.getDupFile(<String>event.searchdata)
	}

	private viewFile(event: FlexDataGridEvent): void {
		try {
			var fileId: number = 0
			var file: EdiFileBase = new EdiFileBase()
			var transaction: string = '835'
			if (event.cell && event.cell.getColumn() != null) {
				for (var x: number = 0; x < event.cell.getRowInfo().getData().deliveryLogs.length; x++) {
					var stepArr: any[] = event.cell.getRowInfo().getData().deliveryLogs[x].deliveryControl.stepNo.split(',')
					for (var n: number = 0; n < stepArr.length; n++) {
						if (Number(stepArr[n]) === event.cell.getColumn().getDataField()) {
							fileId = event.cell.getRowInfo().getData().deliveryLogs[x].postFileId
						}
					}
				}
			}
			if (fileId > 0) {
				file.fileId = fileId
				file.removeCRLF = true
				// this.dispatch(new FileEditorEvent(FileEditorEvent.VIEW_FILE, file))
				this.viewFile1(file)
			}
		} catch (e) {
			console.log('something bad happened')
		}
	}

	private viewFile1(file): void {
		// {
		// 	var file:EdiFileBase=event.file;
		// 	var fileEditor:FileEditor=new FileEditor();
		// 	fileEditor.height=contextView.height-40;
		// 	fileEditor.width=contextView.width-40;
		// 	PopUpManager.addPopUp(fileEditor, contextView, true);
		// 	PopUpManager.centerPopUp(fileEditor);
		// 	fileEditor.container.setfile(file);
		// 	mediatorMap.createMediator(fileEditor);
		// 	if (file.reportOnly == true)
		// 		fileEditor.container.fileContentContainer.dispatchEvent(new Event('contentToReports'))
		// 	else
		// 		service.getFile(file.fileId, file.removeCRLF);

		// }
		if(file.reportOnly === true){
			this.view.setState({ 
				fileEditoriconWindow: true,
				fileData: file
			})
		}else{
			this.fileEditorService.getFile(file.fileId, file.removeCRLF);
			this.view.setState({
				fileEditorWindow: true,
				fileData: file
			})
		}
	}
}
