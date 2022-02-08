
import { toast } from "react-toastify"
import { FlexDataGridColumn } from "../../../../../../../flexicious"
import Mediator from "../../../../../../../modules/main/view/Mediator.ts"
import ArrayCollection from "../../../../../../../vo/ArrayCollection"
import RemitsEvent from "../model/events/RemitsEvent.ts"
import { RemitsService } from "../service/RemitsService.ts"
import MonthlyRemitRpt from "./components/MonthlyRemitRpt"

export class RemitMonthRptMediator extends Mediator {
	public view: MonthlyRemitRpt
	public service: RemitsService = new RemitsService()
	// private log: ILogger = this.Log.getLogger('RemitMonthRptMediator')

	// constructor() {}

	public onRegister(view): RemitMonthRptMediator {
		this.view = view
		this.mapListener(this.eventDispatcher, RemitsEvent.ALL_REMIT_RPT, this.getAllRemits, RemitsEvent)
		this.mapListener(this.eventDispatcher, RemitsEvent.REMIT_RPT_HEADER, this.getRptHeader, RemitsEvent)
		this.mapListener(this.eventDispatcher, RemitsEvent.RPT_HEADER_PP, this.addReportHeader, RemitsEvent)
		this.mapListener(this.eventDispatcher, RemitsEvent.REMIT_RPT_PP, this.fillRemits, RemitsEvent)
		// this.mapListener(this.view.searchBtn, MouseEvent.CLICK, this.search, MouseEvent)
		this.mapListener(this.eventDispatcher, RemitsEvent.RPT_MONTHS, this.getMonth, RemitsEvent)
		this.mapListener(this.eventDispatcher, RemitsEvent.RPT_PAYERS, this.getPayers, RemitsEvent)
		this.mapListener(this.eventDispatcher, RemitsEvent.RPT_MONTH_PP, this.popMonth, RemitsEvent)
		this.mapListener(this.eventDispatcher, RemitsEvent.RPT_PAYER_PP, this.popPayer, RemitsEvent)
		var adminEvent: RemitsEvent = new RemitsEvent(RemitsEvent.REMIT_RPT_HEADER)
		this.dispatch(adminEvent)
		this.dispatch(new RemitsEvent(RemitsEvent.RPT_MONTHS))
		this.dispatch(new RemitsEvent(RemitsEvent.RPT_PAYERS))
		return this
	}

	private getAllRemits(remitEvent: RemitsEvent): void {
		this.service.getAllRemits()
	}

	private getRptHeader(remitEvent: RemitsEvent): void {
		this.service.getRptHeader()
	}

	private fillRemits(event: RemitsEvent): void {
		this.view.grid.setDataProvider(event.rrptdata)
		this.view.grid.refreshCells()
	}

	private addReportHeader(event: RemitsEvent): void {
		var hders: ArrayCollection = ArrayCollection.from(event.rrptdata)
		//Alert.show("addReportHeader(): headers " + hders.length)
		for (var x: number = 0; x < hders.length; x++) {
			var col: FlexDataGridColumn = new FlexDataGridColumn()
			//Alert.show("addReportHeader(): " + hders[x][0])
			col.setHeaderText(hders[x][1])
			col.dataField = hders[x][0]
			//col.hideText=true;
			col.enableIcon = true
			col.iconHandCursor = true
			col.columnWidthMode = 'fitToContent'
			col.width = 65
			col.setStyle('iconLeft', 15)
			col.enableCellClickRowSelect = false
			col.itemEditorApplyOnValueCommit = true
			col.footerAlign = 'center'
			col.footerOperation = 'sum'
			col.footerOperationPrecision = 2
			//col.iconFunction=dynamicIconFunction
			//if (col.headerText != 'Recvd')
			this.view.grid.addColumn(col)
		}
		this.view.grid.reDraw()
		this.dispatch(new RemitsEvent(RemitsEvent.ALL_REMIT_RPT))
	}

	// fillMonth
	private getMonth(event: RemitsEvent): void {
		this.service.getRptMonth()
	}
	//getPayers
	private getPayers(event: RemitsEvent): void {
		this.service.getRptPayers()
	}

	private popMonth(event: RemitsEvent): void {
		toast.warning('Need to Implement Combo box')
		// console.log(event.rptmondata)
		// this.view.remitMonthComBox && this.view.remitMonthComBox.setDataProvider(event.rptmondata)
	}

	private popPayer(event: RemitsEvent): void {
		toast.warning('Need to Implement Combo box 2')
		// this.view.remitPayerComBox && this.view.remitPayerComBox.setDataProvider(event.rptPayers) 
	}

	private search(event: MouseEvent): void {
		var payerName: string = this.view.remitPayerComBox.selectedItem // payerName.text;
		var remitMonth: string = null
		if (this.view.remitMonthComBox.selectedItem != null) remitMonth = this.view.remitMonthComBox.selectedItem
		this.service.searchRemitsRpt(payerName, remitMonth)
	}
}