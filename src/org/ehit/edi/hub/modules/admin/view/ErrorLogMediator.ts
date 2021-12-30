import Mediator from "../../../../../../../modules/main/view/Mediator.ts"
import { AdminModel } from "../model/AdminModel.ts"
import ErrorLog from "./components/ErrorLog"
import { AdminEvent } from '../model/events/AdminEvent.ts'
import { ErrorLogEvent } from "../model/events/ErrorLogEvent.ts"
import { AdminService } from "../service/AdminService.ts"
import { toast } from "react-toastify"
import GlobalEventDispatcher from "../../../../../../../service/utils/GlobalEventDispatcher"

export class ErrorLogMediator extends Mediator {
	public view: ErrorLog
	public adminModel: AdminModel = AdminModel.getInstance()
	public adminService: AdminService = AdminService.getInstance()

	// private log: ILogger = this.Log.getLogger('ErrorLogMediator')
	private errorLog: EdiErrorStore

	/*override*/ public onRegister(view): ErrorLogMediator {
		this.view = view
		this.mapListener(this.eventDispatcher, AdminEvent.GET_ERROR_LOG, this.getAllErrorLogData, AdminEvent)
		this.mapListener(this.eventDispatcher, AdminEvent.ERROR_LOG, this.addLogs, AdminEvent)
		this.mapListener(this.eventDispatcher, AdminEvent.ERROR_MSG, this.addLogs, AdminEvent)
		// this.mapListener(this.view.grid, FlexDataGridEvent.ITEM_CLICK, this.viewFile, FlexDataGridEvent)//Need to Implement
		this.mapListener(this.eventDispatcher, AdminEvent.ERROR_LOG, this.addLogs, AdminEvent)
		// this.mapListener(this.view.LogSearch.dateSearchBtn, MouseEvent.CLICK, this.searchByDate, MouseEvent)//Need to Implement
		// this.mapListener(this.view.LogSearch.selectIdSearch, MouseEvent.CLICK, this.switchToFileId, MouseEvent)//Need to Implement
		this.mapListener(this.view, ErrorLogEvent.DELETE_ERROR, this.onDelete)
		var adminEvent: AdminEvent = new AdminEvent(AdminEvent.GET_ERROR_LOG)
		this.dispatch(adminEvent)
		return this
	}

	dispatch(evt: any) {
		GlobalEventDispatcher.instance().dispatchEvent(evt)
	}

	private getAllErrorLogData (event){
		var startDate = this.view.logSearch.state.startDate
		var endDate = this.view.logSearch.state.endDate
		this.adminService.findErrorLog(startDate, endDate)
	}
	private addLogs(event: AdminEvent): void {
		if (!this.adminModel.errMsg) {
			// this.view.errTxt.text = ''Need to Implement
			this.view.grid.setDataProvider(this.adminModel.errorLog)
			this.view.grid.refreshCells()
		} else this.view.errTxt.text = this.adminModel.errMsg
	}

	private viewFile(event: FlexDataGridEvent): void {
		if (event.cell instanceof IFlexDataGridDataCell && event.cell.column != null) {
			if (event.cell.column.dataField == 'fileId') {
				var file: EdiFileBase = new EdiFileBase()

				file.fileId = event.cell.rowInfo.data.fileId
				this.dispatch(new FileEditorEvent(FileEditorEvent.VIEW_FILE, file))
			}
			if (event.cell.column.dataField == 'errorMessage') {
				var container1: ErrorContainer = new ErrorContainer()
				PopUpManager.addPopUp(container1, this.contextView, true)
				PopUpManager.centerPopUp(container1)
				container1.title = 'Message'
				container1.msgContent.text = event.cell.rowInfo.data.errorMessage
			}

			if (event.cell.column.dataField == 'userProps') {
				var container2: ErrorContainer = new ErrorContainer()
				PopUpManager.addPopUp(container2, this.contextView, true)
				PopUpManager.centerPopUp(container2)
				container2.title = 'Properties'
				container2.msgContent.text = event.cell.rowInfo.data.userProps
			}

			if (event.cell.column.dataField == 'stackTrace') {
				var container3: ErrorContainer = new ErrorContainer()
				PopUpManager.addPopUp(container3, this.contextView, true)
				PopUpManager.centerPopUp(container3)
				container3.title = 'StackTrace'
				container3.msgContent.text = event.cell.rowInfo.data.stackTrace
			}
			if (event.cell.column.colIndex == 12) {
				var container4: ErrorContainer = new ErrorContainer()
				PopUpManager.addPopUp(container4, this.contextView, true)
				PopUpManager.centerPopUp(container4)
				container4.title = 'Deliver Error '
				this.mediatorMap.createMediator(container4)
				container4.setErrorStore(<EdiErrorStore>event.cell.rowInfo.data)
				container4.hBox.visible = true
				container4.msgContent.text = event.cell.rowInfo.data.userProps
			}
		}
	}

	private onDelete(event: ErrorLogEvent): void {
		// this.dispatch(new ErrorLogEvent(ErrorLogEvent.DELETE_ERROR, null, event.errLogs))
		this.adminService.deleteErrorLogs(event.errLogs);
	}

	private onConfirmDelete(event: CloseEvent): void {
		if (event.detail == Alert.OK && this.errorLog) {
			this.dispatch(new ErrorLogEvent(this.ErrorLogEvent.DELETE_ERROR, this.errorLog))
		}
		this.errorLog = null
	}

	private searchByDate(event: MouseEvent): void {
		var MS_PER_DAY: number = 1000 * 60 * 60 * 24
		var startDate: Date = this.view.LogSearch.startDate.selectedDate
		var endDate: Date = this.view.LogSearch.endDate.selectedDate
		var dateDiff: Date = new Date(endDate.time - startDate.time)
		var difference: number = Math.abs(Math.round(dateDiff.time / MS_PER_DAY))
		if (startDate > endDate) {
			this.view.errTxt.text = 'Start Date should be less than End Date.'
			return
		} else if (difference > 60) {
			this.view.errTxt.text = 'Please select Date Range within two months.'
			return
		} else this.view.errTxt.text = ''
		this.dispatch(new AdminEvent(this.AdminEvent.GET_ERROR_LOG, startDate, endDate))
	}

	private switchToFileId(event: MouseEvent): void {
		if (this.view.LogSearch.selectIdSearch.selected) this.eventMap.mapListener(this.view.LogSearch.fileIdSearchBtn, MouseEvent.CLICK, this.searchByFileId, MouseEvent)
	}

	private searchByFileId(event: MouseEvent): void {
		if (this.view.LogSearch.fileIdTxt.text.length < 1) {
			this.view.errTxt.text = 'Please enter a valid Id'
			return
		}
		this.dispatch(new AdminEvent(this.AdminEvent.GET_ERROR_LOG_BYID, null, null, this.view.LogSearch.fileIdTxt.text))
	}

	/*override*/ public onRemove(): void {
		this.eventMap.unmapListeners()
		super.onRemove()
		trace('ErrorLogMediator.onRemove()')
	}
}
