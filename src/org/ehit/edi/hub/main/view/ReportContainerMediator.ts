import Mediator from "../../../../../../modules/main/view/Mediator.ts"
import ArrayCollection from "../../../../../../vo/ArrayCollection"
import { BankEFTReportEvent } from "../../modules/BankEFT/model/events/BankEFTReportEvent.ts"
import { BankEFTService } from "../../modules/BankEFT/service/BankEFTService.ts"
import RemitsEvent from "../../modules/remits/model/events/RemitsEvent.ts"
import { RemitsReportEvent } from "../../modules/remits/model/events/RemitsReportEvent.ts"
import RemitsModel from "../../modules/remits/model/RemitsModel.ts"
import { RemitsService } from "../../modules/remits/service/RemitsService.ts"
import LoginModel from "../../user/model/LoginModel"
import { FileEditorEvent } from "../model/events/FileEditorEvent.ts"
import { ReportEvent } from "../model/events/ReportEvent.ts"
import { FileEditorService } from "../service/FileEditorService.ts"
import ReportContainer from "./components/ReportContainer"

export class ReportContainerMediator extends Mediator {
	public view: ReportContainer
	public service: FileEditorService = FileEditorService.getInstance()
	public remitService: RemitsService = RemitsService.getInstance()
	public bankEFTService: BankEFTService = BankEFTService.getInstance()
	public loginModel: LoginModel = LoginModel.getInstance()
	public remitsModel: RemitsModel = RemitsModel.getInstance()

	private balanceReport: RemitsBalanceReport

	private bankEFTReport: BankEFTReport

	private ackReport: AckReportContainer

	public onRegister(view): ReportContainerMediator {
		this.view = view
		this.mapListener(this.eventDispatcher, RemitsEvent.REMIT_HEADER, this.addRemitHeader, RemitsEvent)

		this.mapListener(this.eventDispatcher, RemitsReportEvent.REMITS_REPORT_EDITOR, this.setReport, RemitsReportEvent)
		this.mapListener(this.eventDispatcher, RemitsReportEvent.REPORT_ERROR_EDITOR, this.setError, RemitsReportEvent)
		this.mapListener(this.eventDispatcher, ReportEvent.REPORT, this.displayReport, ReportEvent)
		this.mapListener(this.eventDispatcher, ReportEvent.EXPLAIN_REPORT, this.setExplain, ReportEvent)
		this.mapListener(this.eventDispatcher, ReportEvent.EXPLAIN_ERROR, this.setExplainError, ReportEvent)
		// this.mapListener(this.view.editorMenu, ItemClickEvent.ITEM_CLICK, this.changeContent) //Need to Implement
		this.mapListener(this.eventDispatcher, BankEFTReportEvent.BANKEFT_REPORT, this.setBankEFTReport, BankEFTReportEvent)
		// this.mapListener(this.view, FileEditorEvent.VIEW_FILE, this.viewFile, FileEditorEvent)  //Need to Implement
		this.mapListener(this.eventDispatcher, FileEditorEvent.VIEW_FILE, this.viewFile, FileEditorEvent)
		if (this.view.props.fileData.transType != null && (this.view.props.fileData.transType === '999' || this.view.props.fileData.transType.indexOf('277') >= 0)) {
			this.service.explainPayload(this.view.getfile().fileId)
		} else if (this.view.props.fileData.transType != null && this.view.props.fileData.transType === '835') {
			this.balanceReport = new RemitsBalanceReport()
			this.view.reportsContainer.addChild(this.balanceReport)
			this.remitService.runRemitsReport(this.view.getfile(), true)
		} else if (this.view.props.fileData.transType != null && this.view.props.fileData.transType === 'EFT') {
			// this.bankEFTReport = new BankEFTReport()
			// this.bankEFTReport.id = 'grid'
			// this.view.reportsContainer.addChild(this.bankEFTReport)//through props added component directly
			// this.bankEFTService.runBankEFTReport(this.view.getfile().fileId, null, null, null, null, null, 0)
			this.bankEFTService.runBankEFTReport(this.view.props.fileData.fileId, null, null, null, null, null, 0)

		} else if (this.view.props.fileData.transType != null && this.view.props.fileData.transType === '835S') {
			var supplementReport: RemitSupReport = new RemitSupReport()
			var content: string = <String>this.view.getfile().fileContent.toString()
			//	if (content != null && content.length > 0 && content.substring(0, 3) == "JP9")
			{
				var rpt_arr: any[] = content.split('~')
				var supRpt: ArrayCollection = new ArrayCollection()
				for (var i: number = 0; i < rpt_arr.length; i++) {
					var remitSupRpt: RemitSupRpt = new RemitSupRpt()

					var oneRow: string = rpt_arr[i]
					var rpt_row_arr: any[] = oneRow.split('*')
					remitSupRpt.jp9 = rpt_row_arr[0]
					remitSupRpt.grpNo = rpt_row_arr[1]
					remitSupRpt.provNo = rpt_row_arr[2]
					remitSupRpt.loc = rpt_row_arr[3]
					remitSupRpt.status = rpt_row_arr[4]
					remitSupRpt.invoiceNo = rpt_row_arr[5]
					remitSupRpt.claimRef = rpt_row_arr[6]
					remitSupRpt.claimRef2 = rpt_row_arr[7]
					remitSupRpt.invType = rpt_row_arr[8]
					remitSupRpt.clmLn = rpt_row_arr[9]
					remitSupRpt.invNo = rpt_row_arr[10]
					remitSupRpt.adjudDate = rpt_row_arr[11]
					remitSupRpt.billDate = rpt_row_arr[12]
					remitSupRpt.certNo = rpt_row_arr[13]
					remitSupRpt.lastName = rpt_row_arr[14]
					remitSupRpt.firstName = rpt_row_arr[15]
					remitSupRpt.mi = rpt_row_arr[16]
					remitSupRpt.recycleNo = rpt_row_arr[17]
					remitSupRpt.dosFrom = rpt_row_arr[18]
					remitSupRpt.dosTo = rpt_row_arr[19]
					remitSupRpt.cpt = rpt_row_arr[20]
					remitSupRpt.col = rpt_row_arr[21]
					remitSupRpt.units = rpt_row_arr[22]
					remitSupRpt.chrgs = rpt_row_arr[23]
					remitSupRpt.pmt = rpt_row_arr[24]
					remitSupRpt.z = rpt_row_arr[25]
					remitSupRpt.edit1 = rpt_row_arr[26]
					remitSupRpt.msg1 = rpt_row_arr[27]
					remitSupRpt.edit2 = rpt_row_arr[28]
					remitSupRpt.msg2 = rpt_row_arr[29]
					remitSupRpt.edit = rpt_row_arr[30]
					remitSupRpt.groupNpi = rpt_row_arr[31]
					remitSupRpt.provNpi = rpt_row_arr[32]
					supRpt.addItem(remitSupRpt)
				}
				this.view.reportsContainer.addChild(supplementReport)
				supplementReport.grid.dataProvider = supRpt
			}
			/*else
			{
				Alert.show("Report didn't qualifiyfor JP9 content, report not generated.");


			}*/
		} else if (this.view.getfile().fileContent != null && this.view.getfile().reportOnly == true) this.service.runReport(this.view.getfile())

		return this
	}

	private addRemitHeader(): void {
		var colGroups: any[] = this.balanceReport.remitsReport.grid.groupedColumns

		for (var x: number = 0; x < this.remitsModel.remitHeader.length; x++) {
			if (this.remitsModel.remitHeader[x][1] != 'Recvd') {
				var cols: any[] = []
				var colGroup: FlexDataGridColumnGroup = new FlexDataGridColumnGroup()
				colGroup.headerText = this.remitsModel.remitHeader[x][1]

				var claimPayment: FlexDataGridColumn = new FlexDataGridColumn()
				claimPayment.headerText = 'Claim Payment'
				claimPayment.columnWidthMode == 'fitToContent'
				claimPayment.dataField = colGroup.headerText.toLowerCase() + 'ClaimPaymentTotal'
				claimPayment.footerOperation = 'sum'
				claimPayment.enableCellClickRowSelect = false
				claimPayment.footerAlign = 'right'
				claimPayment.footerOperationPrecision = 2
				claimPayment.labelFunction = UIUtils.dataGridFormatCurrencyLabelFunction
				claimPayment.footerFormatter = ExampleUtils.globalCurrencyFormatter
				claimPayment.filterControl = 'TextInput'
				claimPayment.filterWaterMark = 'Contains'
				claimPayment.cellTextColorFunction = this.getCellTextColor

				cols.push(claimPayment)

				var claimCount: FlexDataGridColumn = new FlexDataGridColumn()
				claimCount.headerText = 'Claim Count'
				claimCount.dataField = colGroup.headerText.toLowerCase() + 'ClaimPaymentCount'
				claimCount.columnWidthMode == 'fitToContent'
				claimCount.footerOperation = 'sum'
				claimCount.footerAlign = 'right'
				claimCount.footerOperationPrecision = 0
				claimCount.enableCellClickRowSelect = false

				claimCount.cellTextColorFunction = this.getCellTextColor
				claimCount.enableIcon = true
				claimCount.iconHandCursor = true
				claimCount.showIconOnCellHover = true

				claimCount.iconFunction = this.dynamicIconFunction

				//var tooltipstr:String=colGroup.headerText.toLowerCase() + 'ClaimPaymentStr'
				//claimCount.iconTooltipRenderer= UIUtils.createRenderer(TextArea,{text:tooltipstr,width :"100%" ,height : "100%" ,alpha :".8"})
				//claimCount.iconToolTip=tooltipstr

				cols.push(claimCount)

				colGroup.children = cols
				colGroups.splice(x + 7, 0, colGroup)
			}
		}
		this.balanceReport.remitsReport.grid.groupedColumns = colGroups
		this.balanceReport.remitsReport.grid.reDraw()
	}

	public dynamicIconFunction(cell: IFlexDataGridCell, state: string = ''): any {
		var toolstring: string = '-'
		if (cell.rowInfo.isDataRow && !cell.rowInfo.isHeaderRow) {
			trace('value of header was' + cell.column.headerText.toLowerCase() + 'cell.rowInfo.data=' + cell.rowInfo.data.hb_epicClaimPaymentStr)
			if (cell.column.dataField == 'eagleClaimPaymentCount') {
				toolstring = cell.rowInfo.data.eagleClaimPaymentStr
			} else if (cell.column.dataField == 'idxmotClaimPaymentCount') {
				toolstring = cell.rowInfo.data.idxmotClaimPaymentStr
			} else if (cell.column.dataField == 'idxmocClaimPaymentCount') {
				toolstring = cell.rowInfo.data.idxmocClaimPaymentStr
			} else if (cell.column.dataField == 'hhClaimPaymentCount') {
				toolstring = cell.rowInfo.data.hhClaimPaymentStr
			} else if (cell.column.dataField == 'hb_epicClaimPaymentCount') {
				toolstring = cell.rowInfo.data.hb_epicClaimPaymentStr
			} else if (cell.column.dataField == 'pb_epicClaimPaymentCount') {
				toolstring = cell.rowInfo.data.pb_epicClaimPaymentStr
			} else if (cell.column.dataField == 'hh_epicClaimPaymentCount') {
				toolstring = cell.rowInfo.data.hh_epicClaimPaymentStr
			} else if (cell.column.dataField == 'satpClaimPaymentCount') {
				toolstring = cell.rowInfo.data.satpClaimPaymentStr
			} else if (cell.column.dataField == 'dosaClaimPaymentCount') {
				toolstring = cell.rowInfo.data.dosaClaimPaymentStr
			} else if (cell.column.dataField == 'cercClaimPaymentCount') {
				toolstring = cell.rowInfo.data.cercClaimPaymentStr
			} else if (cell.column.dataField == 'ucpClaimPaymentCount') {
				toolstring = cell.rowInfo.data.ucpClaimPaymentStr
			} else if (cell.column.dataField == 'meditechClaimPaymentCount') {
				toolstring = cell.rowInfo.data.meditechClaimPaymentStr
			} else if (cell.column.dataField == 'zotecClaimPaymentCount') {
				toolstring = cell.rowInfo.data.zotecClaimPaymentStr
			} else if (cell.column.dataField == 'ucpClaimPaymentCount') {
				toolstring = cell.rowInfo.data.ucpClaimPaymentStr
			} else if (cell.column.dataField == 'mckessonClaimPaymentCount') {
				toolstring = cell.rowInfo.data.mckessonClaimPaymentStr
			} else if (cell.column.dataField == 'mckesson2ClaimPaymentCount') {
				toolstring = cell.rowInfo.data.mckesson2ClaimPaymentStr
			} else if (cell.column.dataField == 'caduceusClaimPaymentCount') {
				toolstring = cell.rowInfo.data.caduceusClaimPaymentStr
			} else if (cell.column.dataField == 'obgynClaimPaymentCount') {
				toolstring = cell.rowInfo.data.obgynClaimPaymentStr
			} else if (cell.column.dataField == 'otherClaimPaymentCount') {
				toolstring = cell.rowInfo.data.otherClaimPaymentStr
			} else {
				toolstring = '*'
			}

			var productRenderer: ClassFactory = new ClassFactory(CustomToolTipRender)
			productRenderer.properties = { _mydata: toolstring }

			cell.column.iconTooltipRenderer = productRenderer

			//var iconField:String=cell.rowInfo.data.id;
			//var img:Class=iconField.toString()!="" ? search : null;
			return ReportContainerMediator.search
		}

		return ReportContainerMediator.search
	}

	/*[Embed('/org/ehit/edi/hub/assets/img/search.png')]*/
	private static search: Class

	public changeContent(event: ItemClickEvent): void {
		if (event.item.label == 'content') {
			this.view.dispatchEvent(new Event('reportsToContent'))
		} else if (event.item.label == 'save') {
			this.downloadExplainFile()
		}
	}

	protected setReport(event: RemitsReportEvent): void {
		this.addRemitHeader()
		this.eventMap.mapListener(this.view, RemitsReportEvent.UCP_ONLY, this.showUCP, RemitsReportEvent)
		if (this.balanceReport == null) {
			this.balanceReport = new RemitsBalanceReport()
			this.view.reportsContainer.addChild(this.balanceReport)
		}

		this.balanceReport.sender.text = event.reportdata.payerName
		this.balanceReport.fileOwner.text = event.reportdata.fileOwner
		this.balanceReport.runDate.text = UIUtils.formatDate(new Date())
		this.balanceReport.intDate.text = UIUtils.formatDate(event.reportdata.rptDate)
		if (event.reportdata.payerName.indexOf('healthfirst') > -1) {
			var colChrg: FlexDataGridColumn = new FlexDataGridColumn()
			colChrg.headerText = 'Capp Chrg'
			colChrg.dataField = 'hsrCapChrgAmt'
			colChrg.labelFunction = UIUtils.dataGridFormatCurrencyLabelFunction
			colChrg.columnWidthMode == 'fitToContent'
			colChrg.enableCellClickRowSelect = false
			var colPaid: FlexDataGridColumn = new FlexDataGridColumn()
			colPaid.headerText = 'Capp Paid'
			colPaid.dataField = 'hsrCapPaidAmt'
			colPaid.labelFunction = UIUtils.dataGridFormatCurrencyLabelFunction
			colPaid.columnWidthMode == 'fitToContent'
			colPaid.enableCellClickRowSelect = false
			var columns: any[] = this.balanceReport.remitsReport.grid.getColumns()
			columns.splice(7, 0, colChrg)
			columns.splice(8, 0, colPaid)
			this.balanceReport.remitsReport.grid.columns = columns
		}

		this.balanceReport.remitsReport.grid.dataProvider = <ArrayCollection>event.reportdata.claimPaymentEntry
		this.balanceReport.remitsSurcharge.data = <ArrayCollection>event.reportdata.claimPaymentSurchargeEntry
		this.balanceReport.remitsPLB.data = <ArrayCollection>event.reportdata.pLBEntry
	}

	protected setBankEFTReport(event: BankEFTReportEvent): void {
		// if (this.bankEFTReport == null) {
		// 	this.bankEFTReport = new BankEFTReport()
		// 	this.view.reportsContainer.addChild(this.bankEFTReport)
		// }
		this.view.reportContainer && this.view.reportContainer.grid.setDataProvider(event.reportdata)
	}

	private getCellTextColor(cell: IFlexDataGridDataCell): number {
		try {
			if (Number(cell.text) < 0) return 0xff0000
			else return 0x000000
		} catch (e) {
			trace('Handled the error')
		}

		return 0x000000
	}

	private showUCP(event: RemitsReportEvent): void {
		this.balanceReport.remitsReport.grid.processFilter()
	}

	protected setError(event: RemitsReportEvent): void {
		this.balanceReport.remitsReport.grid.noDataMessage = event.errMsg
		this.balanceReport.remitsReport.grid.dataProvider = null
	}

	protected setExplain(event: ReportEvent): void {
		this.ackReport = new AckReportContainer()
		this.view.reportsContainer.addChild(this.ackReport)
		this.ackReport.ackContent.text = event.reportdata.toString()
	}

	protected displayReport(event: ReportEvent): void {
		for (var transType: string in event.reportdata) {
			if (transType == '835') {
				var remitsReportEvent: RemitsReportEvent = new RemitsReportEvent(RemitsReportEvent.REMITS_REPORT_EDITOR, event.reportdata[transType])
				this.dispatch(remitsReportEvent)
			}
			if (transType == '999' || transType.indexOf('277') >= 0) {
				var reportEvent: ReportEvent = new ReportEvent(ReportEvent.EXPLAIN_REPORT, event.reportdata[transType])
				this.dispatch(reportEvent)
			}
		}
	}

	protected setExplainError(event: ReportEvent): void {
		this.ackReport = new AckReportContainer()
		this.view.reportsContainer.addChild(this.ackReport)
		this.ackReport.ackContent.text = event.errMsg
	}

	public downloadExplainFile(): void {
		var fileReference: FileReference = new FileReference()
		fileReference.save(this.ackReport.ackContent.text, this.view.getfile().origFileName + '.explain')
	}

	/*override*/ public onRemove(): void {
		this.eventMap.unmapListeners()

		super.onRemove()
		trace('ReportContainerMediator.onRemove()')
	}
	private viewFile(event: FileEditorEvent): void {
		trace('ReportContainerMediator.onRemove()')

		//dispatch(event);
	}
}
