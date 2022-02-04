import Mediator from '../../../../../../../modules/main/view/Mediator.ts'
import { ClaimsModel } from '../model/ClaimsModel.ts'
import { ClaimsEvent } from '../model/events/ClaimsEvent.ts'
import { ClaimsService } from '../service/ClaimsService.ts'
import Claims from './components/Claims'
import { FlexDataGridColumn, ClassFactory, UIUtils, Timer, FlexDataGridEvent } from '../../../../../../../flexicious'
import tickIcon from '../../../../../../../assets/images/tick.png'
import waitIcon from '../../../../../../../assets/images/clock.png'
import naIcon from '../../../../../../../assets/images/minus_black.png'
import { toast } from 'react-toastify'
import { EdiFileBase } from '../../../main/model/EdiFileBase.ts'
import { ProcessInstance } from '../model/vo/ProcessInstance.ts'
import { FileEditorEvent } from '../../../main/model/events/FileEditorEvent.ts'
import { DateRangeEvent } from '../../../../../../../utils/dateFormatCombo/DateRangeEvent.ts'
import ArrayCollection from '../../../../../../../vo/ArrayCollection'
import { FileEditorService } from '../../../main/service/FileEditorService.ts'

export class ClaimsMediator extends Mediator {
	public view: Claims
	public claimsModel: ClaimsModel = ClaimsModel.getInstance()
	public claimsService: ClaimsService = ClaimsService.getInstance()
	public fileEditorService: FileEditorService = FileEditorService.getInstance()
	private claimsTimer
	private dateRange: DateRangeEvent

	public onRegister(view): ClaimsMediator {
		this.view = view
		this.mapListener(this.eventDispatcher, ClaimsEvent.CLAIM_HEADER, this.addClaimHeader, ClaimsEvent)
		this.mapListener(this.eventDispatcher, ClaimsEvent.CLAIMS, this.addClaims, ClaimsEvent)
		this.mapListener(this.eventDispatcher, ClaimsEvent.REMOVE_CLAIMS, this.removeClaims, ClaimsEvent)
		// this.mapListener(this.view, DateRangeEvent.SEARCH_BY_DATE_RANGE, this.searchByDateRange, DateRangeEvent)
		this.mapListener(this.view.grid, FlexDataGridEvent.ITEM_CLICK, this.viewFile, FlexDataGridEvent)
		this.mapListener(this.view.grid, FlexDataGridEvent.ICON_CLICK, this.viewFile, FlexDataGridEvent)
		this.claimsTimer = new Timer(600000)
		// this.mapListener(this.claimsTimer, TimerEvent.TIMER, this.refreshClaims)
		if (this.view.state.tabValue === '/main/claims') {
			/** Directly called service call's from Claims Command */
			this.claimsService.findClaimHeader()
		} else {
			// claimsService.findClaimProcesses(event.startDate, event.endDate)
		}
		return this
	}

	public dynamicIconFunction(cell: IFlexDataGridCell, state: string = ''): any {
		var iconField: string = null
		var img = naIcon
		if (cell.getRowInfo().getIsDataRow()) {
			for (var x: number = 0; x < cell.rowInfo.getData().processInstanceSteps.length; x++) {
				if (cell.getRowInfo().getData().processInstanceSteps[x].id.stepNum === cell.getColumn().getDataField()) {
					iconField = String(cell.getRowInfo().getData().processInstanceSteps[x].stepStatus)
					img = iconField === 'Completed' ? tickIcon : iconField === 'n/a' ? naIcon : waitIcon
					var arr = new ArrayCollection()
					return img
				}
			}
			return img
		}
		return null
	}

	dataGridFormatIcon = (item, column) => {
		var status: string
		for (var x: number = 0; x < item.processInstanceSteps.length; x++) {
			if (item.processInstanceSteps[x].id.stepNum === column.getDataField()) {
				status = String(item.processInstanceSteps[x].id.stepNum)
				return status === 'Completed' ? 'Y' : status === 'n/a' ? 'N/A' : 'N'
			}
		}

	}

	private addClaimHeader(event: ClaimsEvent): void {
		for (var x: number = 0; x < this.claimsModel.claimHeader.length; x++) {
			var col: FlexDataGridColumn = new FlexDataGridColumn()
			col.setHeaderText(this.claimsModel.claimHeader[x][1])
			col.dataField = this.claimsModel.claimHeader[x][0]
			col.setLabelFunction(this.dataGridFormatIcon)
			col.hideText = true
			col.enableIcon = true
			col.iconHandCursor = true
			col.columnWidthMode = 'fixed'
			col.width = 80
			col.setStyle('iconLeft', 25)
			col.enableCellClickRowSelect = false
			col.iconFunction = this.dynamicIconFunction
			this.view.grid.addColumn(col)
		}

		this.view.grid.reDraw()
	}

	private addClaims(event: ClaimsEvent): void {
		if (!this.claimsTimer.running) {
			this.claimsTimer.start()
		}
		if (!this.claimsModel.errMsg) {
			this.view.grid.setDataProvider(this.claimsModel.claims)
			this.view.grid.refreshCells()
		} else {
			toast.error(this.claimsModel.errMsg)
		}
	}

	private removeClaims(event: ClaimsEvent): void {
		if (this.claimsTimer.running) this.claimsTimer.stop()
	}

	private refreshClaims(event: Event): void {
		this.searchByDateRange(this.dateRange)
	}

	private searchByDateRange(choosenStartDate, choosenEndDate) {
		var startDate: Date = null
		var endDate: Date = null
		if (choosenStartDate != null && choosenEndDate != null) {
			startDate = choosenStartDate
			endDate = choosenEndDate
		}
		// this.dispatch(new ClaimsEvent(ClaimsEvent.GET_CLAIMS, startDate, endDate))
		this.claimsService.findClaimProcesses(startDate, endDate) //need to call this service directly because we dont have EdiHubContext
	}

	/*override*/ public onRemove(): void {
		this.claimsTimer = null
		this.eventMap.unmapListeners()
		this.view = null
		this.claimsModel.claims = null
		super.onRemove()
		trace('ClaimsMediator.onRemove()')
	}

	private viewFile(event: FlexDataGridEvent): void {
		var instance = new ProcessInstance().fromJson(event.cell.rowInfo.getData())
		var fileId: number = 0
		var display: boolean = false
		var file: EdiFileBase = new EdiFileBase()
		var transaction: string
		try {
			if (event.cell && event.cell.getColumn() != null && (event.cell.getColumn().getColIndex() === 1 || event.cell.getColumn().getColIndex() > 6)) {
				if (event.cell.getColumn().getHeaderText() === 'File Name') {
					fileId = instance.fileId
					transaction = instance.transactionType
					display = true
				}
				for (var x: number = 0; x < instance.processInstanceSteps.length; x++) {
					if (instance.processInstanceSteps.getItemAt(x).id.stepNum === event.cell.getColumn().dataField) {
						fileId = instance.processInstanceSteps.getItemAt(x).fileId
						transaction = event.cell.getColumn().getDataField()
						if (instance.processInstanceSteps.getItemAt(x).stepStatus === 'Completed') display = true
					}
				}
			}

			if (display && fileId > 0) {
				file.fileId = fileId
				file.removeCRLF = true
				// this.dispatch(new FileEditorEvent(FileEditorEvent.VIEW_FILE, file))
				this.execute(file) //as we don't have EdiHubContext we are directly calling FileEditorCommand, execute function here
			} else if (display) {
				toast.error('Error opening file!! File not found')
			}
		} catch (e) {
			toast.error('something bad happened')
		}
	}

	private execute(file): void {
		this.view.setState({ fileEditorWindow: true })
		if (file.reportOnly == true) toast.warning('Need to Implement true')
		// this.view.fileEditor.container.fileContentContainer.dispatchEvent(new Event('contentToReports'))
		else this.fileEditorService.getFile(file.fileId, file.removeCRLF)
	}
}
