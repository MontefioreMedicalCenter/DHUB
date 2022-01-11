import Mediator from "../../../../../../../modules/main/view/Mediator.ts"
import GlobalEventDispatcher from "../../../../../../../service/utils/GlobalEventDispatcher"
import { AdminModel } from "../model/AdminModel.ts"
import { AdminService } from "../service/AdminService.ts"
import DeliveryLog from "./components/DeliveryLog"
import { AdminEvent } from '../model/events/AdminEvent.ts'
import ArrayCollection from "../../../../../../../vo/ArrayCollection"
import { toast } from "react-toastify"
import { FlexDataGridEvent } from "../../../../../../../flexicious"
import { EdiFileBase } from "../../../main/model/EdiFileBase.ts"
import { FileEditorService } from "../../../main/service/FileEditorService.ts"

export class DeliveryLogMediator extends Mediator {
	public view: DeliveryLog

	public adminModel: AdminModel = AdminModel.getInstance()
	public service: AdminService = AdminService.getInstance()
	public fileEditorService:FileEditorService = FileEditorService.getInstance();

	/*override*/ public onRegister(view): DeliveryLogMediator {
		this.view = view
		this.mapListener(this.eventDispatcher, AdminEvent.GET_DELIVERY_LOG, this.getAllDeliveryLogData, AdminEvent)
		this.mapListener(this.eventDispatcher, AdminEvent.DELIVERY_LOG, this.addLogs, AdminEvent)
		this.mapListener(this.eventDispatcher, AdminEvent.ERROR_MSG, this.addLogs, AdminEvent)
		// this.mapListener(this.view, DeliveryLogEvent.REDELIVER, this.reDeliver)
		this.mapListener(this.view.grid, FlexDataGridEvent.ITEM_CLICK, this.viewFile, FlexDataGridEvent)
		// this.mapListener(this.view.LogSearch.dateSearchBtn, MouseEvent.CLICK, this.searchByDate, MouseEvent)
		// this.mapListener(this.view.LogSearch.selectIdSearch, MouseEvent.CLICK, this.switchToFileId, MouseEvent)
		var adminEvent: AdminEvent = new AdminEvent(AdminEvent.GET_DELIVERY_LOG)
		this.dispatch(adminEvent)
		return this
	}

	dispatch(evt: any){
		GlobalEventDispatcher.instance().dispatchEvent(evt)
	}

	getAllDeliveryLogData(event){
		var startDate = this.view.logSearch.state.startDate
		var endDate = this.view.logSearch.state.endDate
		this.service.findDeliveryLog(startDate, endDate)
	}

	private addLogs(event: AdminEvent): void {
		if (!this.adminModel.errMsg) {
			// this.view.errTxt.text="";
			// this.view.grid.dataProvider=this.adminModel.deliveryLog;
			// this.view.grid.refreshCells();
			this.view.grid.setDataProvider(this.adminModel.deliveryLog)
			this.view.grid.refreshCells()
		} else this.view.errTxt.text = this.adminModel.errMsg
	}

	private reDeliver(event: DeliveryLogEvent): void {
		//	service.deliverPayload(event.deliveryLog)
	}

	private viewFile(event: FlexDataGridEvent): void {
		if(event.cell.getColumn() != null && (event.cell.getColumn().getDataField() === 'fileId' || event.cell.getColumn().getDataField() === 'postFileId' )){
			var file: EdiFileBase = new EdiFileBase()
			if(event.cell.getColumn().getDataField() === 'postFileId') file.fileId = event.cell.rowInfo.getData().postFileId
			else file.fileId = event.cell.rowInfo.getData().fileId
			// this.dispatch(new FileEditorEvent(FileEditorEvent.VIEW_FILE, file)) 
			this.execute(file) //as we don't have EdiHubContext we are directly calling FileEditorCommand, execute function here
		}
	}

	private execute(file): void {
		this.view.setState({fileEditorWindow: true})
		if (file.reportOnly == true)
			toast.warning('Need to Implement true')
			// this.view.fileEditor.container.fileContentContainer.dispatchEvent(new Event('contentToReports'))
		else
			// toast.warning('Need to Implement false')
			this.fileEditorService.getFile(file.fileId, file.removeCRLF);
	}

	private searchByDate(event: MouseEvent): void {
		var MS_PER_DAY: number = 1000 * 60 * 60 * 24
		var startDate: Date = this.view.logSearch.state.startDate
		var endDate: Date = this.view.logSearch.state.endDate
		var dateDiff: Date = new Date(endDate.getTime() - startDate.getTime())
		var difference: number = Math.abs(Math.round(dateDiff.getTime() / MS_PER_DAY))
		if (startDate > endDate) {
			// this.view.errTxt.text = 'Start Date should be less than End Date.'
			toast.error("Start Date should be less than End Date.")
			return
		} else if (difference > 60) {
			// this.view.errTxt.text = 'Please select Date Range within two months.'	
			toast.error('Please select Date Range within two months.')
			return
		} else {
			// this.view.errTxt.text = ''
			// this.dispatch(new AdminEvent(AdminEvent.GET_DELIVERY_LOG, startDate, endDate))
			this.service.findDeliveryLog(startDate, endDate);//directly called from Admin commands
		}
	}

	private switchToFileId(event: MouseEvent): void {
		if(this.view.logSearch.selectIdSearch.checked) { this.searchByFileId() }
		// if (this.view.LogSearch.selectIdSearch.selected) this.eventMap.mapListener(this.view.LogSearch.fileIdSearchBtn, MouseEvent.CLICK, this.searchByFileId, MouseEvent)
	}

	private searchByFileId(event: MouseEvent): void {
		if (this.view.logSearch.state.idField.length < 1) {
			// this.view.errTxt.text = 'Please enter a valid fileId'
			toast.error('Please enter a valid Id')
			return
		}
		// this.dispatch(new AdminEvent(AdminEvent.GET_DELIVERY_LOG_BYID, null, null, this.view.LogSearch.fileIdTxt.text))
		this.service.findDeliveryLogById(this.view.logSearch.state.idField);
	}

	/*override*/ public onRemove(): void {
		this.eventMap.unmapListeners()
		super.onRemove()
		trace('DeliveryLogMediator.onRemove()')
	}
}
