import { toast } from 'react-toastify'
import Mediator from '../../../../../../modules/main/view/Mediator.ts'
import ArrayCollection from '../../../../../../vo/ArrayCollection'
import { BankEFTReportEvent } from '../../modules/BankEFT/model/events/BankEFTReportEvent.ts'
import { BankEFTService } from '../../modules/BankEFT/service/BankEFTService.ts'
import RemitsEvent from '../../modules/remits/model/events/RemitsEvent.ts'
import { RemitsReportEvent } from '../../modules/remits/model/events/RemitsReportEvent.ts'
import RemitsModel from '../../modules/remits/model/RemitsModel.ts'
import { RemitSupRpt } from '../../modules/remits/model/vo/RemitSupRpt.ts'
import { RemitsService } from '../../modules/remits/service/RemitsService.ts'
import LoginModel from '../../user/model/LoginModel'
import { FileEditorEvent } from '../model/events/FileEditorEvent.ts'
import { ReportEvent } from '../model/events/ReportEvent.ts'
import { FileEditorService } from '../service/FileEditorService.ts'
import ReportContainer from './components/ReportContainer'
import { FlexDataGridColumn, FlexDataGridColumnGroup, ClassFactory, FlexDataGridEvent } from '../../../../../../flexicious'
import moment from 'moment'
import fileReference from "js-file-download"
import ExampleUtils from '../../../../../../utils/ExampleUtils'
import Search from '../../../../../../assets/images/search.png'
import CustomToolTipRender from '../../../../../../container/views/itemRenderers/CustomToolTipRender'

export class ReportContainerMediator extends Mediator {
	public view: ReportContainer
	public service: FileEditorService = FileEditorService.getInstance()
	public remitService: RemitsService = RemitsService.getInstance()
	public bankEFTService: BankEFTService = BankEFTService.getInstance()
	public loginModel: LoginModel = LoginModel.getInstance()
	public remitsModel: RemitsModel = RemitsModel.getInstance()

	private balanceReport: RemitsBalanceReport //ref as balanceReport in ReportContainer

	private bankEFTReport: BankEFTReport //ref as reportContainer in ReportContainer

	private ackReport: AckReportContainer //ref as ackReport in ReportContainer

	public onRegister(view): ReportContainerMediator {
		this.view = view
		this.mapListener(this.eventDispatcher, RemitsEvent.REMIT_HEADER, this.addRemitHeader, RemitsEvent)

		this.mapListener(this.eventDispatcher, RemitsReportEvent.REMITS_REPORT_EDITOR, this.setReport, RemitsReportEvent)
		this.mapListener(this.eventDispatcher, RemitsReportEvent.REPORT_ERROR_EDITOR, this.setError, RemitsReportEvent)
		this.mapListener(this.eventDispatcher, ReportEvent.REPORT, this.displayReport, ReportEvent)
		this.mapListener(this.eventDispatcher, ReportEvent.EXPLAIN_REPORT, this.setExplain, ReportEvent)
		this.mapListener(this.eventDispatcher, ReportEvent.EXPLAIN_ERROR, this.setExplainError, ReportEvent)
		// this.mapListener(this.view.editorMenu, ItemClickEvent.ITEM_CLICK, this.changeContent) //Implemented
		this.mapListener(this.eventDispatcher, BankEFTReportEvent.BANKEFT_REPORT, this.setBankEFTReport, BankEFTReportEvent)
		// this.mapListener(this.view, FileEditorEvent.VIEW_FILE, this.viewFile, FileEditorEvent)  //Need to Implement
		this.mapListener(this.eventDispatcher, FileEditorEvent.VIEW_FILE, this.viewFile, FileEditorEvent)

		if (this.view.props.fileData.transType != null && (this.view.props.fileData.transType === '999' || this.view.props.fileData.transType.indexOf('277') >= 0)) {
			// this.service.explainPayload(this.view.getfile().fileId)
			this.service.explainPayload(this.view.props.fileData.fileId)
		} else if (this.view.props.fileData.transType != null && this.view.props.fileData.transType === '835') {
			// this.balanceReport = new RemitsBalanceReport() 
			// this.view.reportsContainer.addChild(this.balanceReport)
			// this.remitService.runRemitsReport(this.view.getfile(), true)
			this.remitService.runRemitsReport(this.view.props.fileData, true)
		} else if (this.view.props.fileData.transType != null && this.view.props.fileData.transType === 'EFT') {
			// this.bankEFTReport = new BankEFTReport()
			// this.bankEFTReport.id = 'grid'
			// this.view.reportsContainer.addChild(this.bankEFTReport) //through props added component directly
			this.bankEFTService.runBankEFTReport(this.view.props.fileData.fileId, null, null, null, null, null, 0)
		} else if (this.view.props.fileData.transType != null && this.view.props.fileData.transType === '835S') {
			// var supplementReport: RemitSupReport = new RemitSupReport() //through props added component directly
			var content = this.view.props.fileData.fileContent && this.view.props.fileData.fileContent.toString()
			//	if (content != null && content.length > 0 && content.substring(0, 3) == "JP9") commented in Flex
			{
				var rpt_arr: any[] = content && content.split('~')
				var supRpt: ArrayCollection = new ArrayCollection()
				for (var i: number = 0; i < rpt_arr && rpt_arr.length; i++) {
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
				// this.view.reportsContainer.addChild(supplementReport) // through props added component directly
				this.view.supplementReport.grid.setDataProvider(supRpt) 
			}
			/*else
			{
				Alert.show("Report didn't qualifiyfor JP9 content, report not generated.");


			}*/
		} else if (this.view.getfile().fileContent !== null && this.view.getfile().reportOnly === true) this.service.runReport(this.view.props.fileData)
		return this
	}

	claimPaymentLabelFunction = (item, col) => {
		const dataField = col.dataField.split('.')
		return Number(item[dataField] || 0).toFixed(2)
	}

	private addRemitHeader(): void {
		var colGroups: any[] = this.view.balanceReport && this.view.balanceReport.remitsReport.grid.getGroupedColumns()
		for (var x = 0; x < this.remitsModel.remitHeader.length; x++) {

			if (this.remitsModel.remitHeader[x][1] != 'Recvd') {
				var cols: any[] = []
				var colGroup: FlexDataGridColumnGroup = new FlexDataGridColumnGroup()
				colGroup.setHeaderText(this.remitsModel.remitHeader[x][1])
				var claimPayment: FlexDataGridColumn = new FlexDataGridColumn()
				claimPayment.setHeaderText('Claim Payment')
				claimPayment.columnWidthMode == 'fitToContent'
				claimPayment.dataField = colGroup.headerText.toLowerCase() + 'ClaimPaymentTotal'
				claimPayment.footerOperation = 'sum'
				claimPayment.enableCellClickRowSelect = false
				claimPayment.footerAlign = 'right'
				claimPayment.footerOperationPrecision = 2
				claimPayment.setLabelFunction(this.claimPaymentLabelFunction)
				claimPayment.footerFormatter = ExampleUtils.globalCurrencyFormatter
				claimPayment.filterControl = 'TextInput'
				claimPayment.filterWaterMark = 'Contains'
				claimPayment.cellTextColorFunction = this.getCellTextColor

				cols.push(claimPayment)

				var claimCount: FlexDataGridColumn = new FlexDataGridColumn()
				claimCount.setHeaderText('Claim Count')
				claimCount.dataField = colGroup.headerText.toLowerCase() + 'ClaimPaymentCount'
				claimCount.columnWidthMode == 'fitToContent'
				claimCount.footerOperation = 'sum'
				claimCount.footerAlign = 'right'
				claimCount.footerOperationPrecision = 0
				claimCount.enableCellClickRowSelect = false

				claimCount.cellTextColorFunction = this.getCellTextColor
				claimCount.itemRenderer = new ClassFactory(CustomToolTipRender)
				
				//commented because of iconFunction issue
				// claimCount.enableIcon = true
				// claimCount.iconHandCursor = true
				// claimCount.showIconOnCellHover = true
				// claimCount.iconFunction = this.dynamicIconFunction
				//commented because of iconFunction issue

				//var tooltipstr:String=colGroup.headerText.toLowerCase() + 'ClaimPaymentStr'
				//claimCount.iconTooltipRenderer= UIUtils.createRenderer(TextArea,{text:tooltipstr,width :"100%" ,height : "100%" ,alpha :".8"})
				//claimCount.iconToolTip=tooltipstr

				cols.push(claimCount)

				colGroup.setChildren(cols)
				colGroups.splice(x + 7, 0, colGroup)
			}
		}
		this.view.balanceReport && this.view.balanceReport.remitsReport.grid.setGroupedColumns(colGroups)
		this.view.balanceReport && this.view.balanceReport.remitsReport.grid.reDraw()
	}
	// done in Renderer
	// dynamicIconFunction = (cell, state = '') => {
	// 	var toolstring: string = '-'
	// 	if (cell.rowInfo.getIsDataRow() && !cell.rowInfo.getIsHeaderRow()) {
	// 		// trace('value of header was' + cell.column.headerText.toLowerCase() + 'cell.rowInfo.data=' + cell.rowInfo.data.hb_epicClaimPaymentStr)
	// 		if (cell.getColumn().getDataField() === 'eagleClaimPaymentCount') {
	// 			toolstring = cell.rowInfo.getData().eagleClaimPaymentStr
	// 		} else if (cell.getColumn().getDataField() == 'idxmotClaimPaymentCount') {
	// 			toolstring = cell.rowInfo.getData().idxmotClaimPaymentStr
	// 		} else if (cell.getColumn().getDataField() == 'idxmocClaimPaymentCount') {
	// 			toolstring = cell.rowInfo.getData().idxmocClaimPaymentStr
	// 		} else if (cell.getColumn().getDataField() == 'hhClaimPaymentCount') {
	// 			toolstring = cell.rowInfo.getData().hhClaimPaymentStr
	// 		} else if (cell.getColumn().getDataField() == 'hb_epicClaimPaymentCount') {
	// 			toolstring = cell.rowInfo.getData().hb_epicClaimPaymentStr
	// 		} else if (cell.getColumn().getDataField() == 'pb_epicClaimPaymentCount') {
	// 			toolstring = cell.rowInfo.getData().pb_epicClaimPaymentStr
	// 		} else if (cell.getColumn().getDataField() == 'hh_epicClaimPaymentCount') {
	// 			toolstring = cell.rowInfo.getData().hh_epicClaimPaymentStr
	// 		} else if (cell.getColumn().getDataField() == 'satpClaimPaymentCount') {
	// 			toolstring = cell.rowInfo.getData().satpClaimPaymentStr
	// 		} else if (cell.getColumn().getDataField() == 'dosaClaimPaymentCount') {
	// 			toolstring = cell.rowInfo.getData().dosaClaimPaymentStr
	// 		} else if (cell.getColumn().getDataField() == 'cercClaimPaymentCount') {
	// 			toolstring = cell.rowInfo.getData().cercClaimPaymentStr
	// 		} else if (cell.getColumn().getDataField() == 'ucpClaimPaymentCount') {
	// 			toolstring = cell.rowInfo.getData().ucpClaimPaymentStr
	// 		} else if (cell.getColumn().getDataField() == 'meditechClaimPaymentCount') {
	// 			toolstring = cell.rowInfo.getData().meditechClaimPaymentStr
	// 		} else if (cell.getColumn().getDataField() == 'zotecClaimPaymentCount') {
	// 			toolstring = cell.rowInfo.getData().zotecClaimPaymentStr
	// 		} else if (cell.getColumn().getDataField() == 'ucpClaimPaymentCount') {
	// 			toolstring = cell.rowInfo.getData().ucpClaimPaymentStr
	// 		} else if (cell.getColumn().getDataField() == 'mckessonClaimPaymentCount') {
	// 			toolstring = cell.rowInfo.getData().mckessonClaimPaymentStr
	// 		} else if (cell.getColumn().getDataField() == 'mckesson2ClaimPaymentCount') {
	// 			toolstring = cell.rowInfo.getData().mckesson2ClaimPaymentStr
	// 		} else if (cell.getColumn().getDataField() == 'caduceusClaimPaymentCount') {
	// 			toolstring = cell.rowInfo.getData().caduceusClaimPaymentStr
	// 		} else if (cell.getColumn().getDataField() == 'obgynClaimPaymentCount') {
	// 			toolstring = cell.rowInfo.getData().obgynClaimPaymentStr
	// 		} else if (cell.getColumn().getDataField() == 'otherClaimPaymentCount') {
	// 			toolstring = cell.rowInfo.getData().otherClaimPaymentStr
	// 		} else {
	// 			toolstring = '*'
	// 		}

	// 		// var productRenderer: ClassFactory = new ClassFactory(CustomToolTipRender)//Need to Implement
	// 		// productRenderer.properties = { _mydata: toolstring }//Need to Implement
	// 		// cell.getColumn().iconTooltipRenderer = productRenderer//Need to Implement


	// 		//var iconField:String=cell.rowInfo.data.id;
	// 		//var img:Class=iconField.toString()!="" ? search : null;
			
	// 		return Search
	// 		// return ReportContainerMediator.search
	// 	}

	// 	return Search
	// 	// return ReportContainerMediator.search
	// }

	// /*[Embed('/org/ehit/edi/hub/assets/img/search.png')]*/
	// private static search: Class

	public changeContent(file, label): void {
		var rootDocument = this.view.props.reportContainer.props.parentDocument.props.parentDoc
		if(label === 'content'){
			rootDocument.viewFile(rootDocument.state.selectedColumnFileId, false)
			rootDocument.setState({fileEditoriconWindow: false})
		}else if(label === 'save'){
			fileReference(this.view.ackReport.state.ackContent, this.view.props.fileData.origFileName +'.explain')
		}
	}

	protected setReport(event: RemitsReportEvent): void {
		this.addRemitHeader()
		// this.mapListener(this.view, RemitsReportEvent.UCP_ONLY, this.showUCP, RemitsReportEvent)
		this.showUCP
		// if (this.balanceReport == null) {
		// 	this.balanceReport = new RemitsBalanceReport()
		// 	this.view.reportsContainer.addChild(this.balanceReport)
		// }

		this.view.balanceReport &&
			this.view.balanceReport.setState({
				sender: event.reportdata.payerName,
				fileOwner: event.reportdata.fileOwner,
				runDate: moment(new Date()).format('MMM D, YYYY'),
				intDate: moment(new Date(event.reportdata.rptDate)).format('MMM D, YYYY')
			})

		if (event.reportdata.payerName.indexOf('healthfirst') > -1) {
			var colChrg: FlexDataGridColumn = new FlexDataGridColumn()
			colChrg.setHeaderText('Capp Chrg')
			colChrg.setDataField('hsrCapChrgAmt')
			colChrg.labelFunction = UIUtils.dataGridFormatCurrencyLabelFunction
			colChrg.columnWidthMode == 'fitToContent'
			colChrg.enableCellClickRowSelect = false
			var colPaid: FlexDataGridColumn = new FlexDataGridColumn()
			colPaid.setHeaderText('Capp Paid')
			colPaid.setDataField('hsrCapPaidAmt')
			colPaid.labelFunction = UIUtils.dataGridFormatCurrencyLabelFunction
			colPaid.columnWidthMode == 'fitToContent'
			colPaid.enableCellClickRowSelect = false
			var columns: any[] = this.balanceReport.remitsReport.grid.getColumns()
			columns.splice(7, 0, colChrg)
			columns.splice(8, 0, colPaid)
			this.balanceReport.remitsReport.grid.columns = columns
		}

		this.view.balanceReport && this.view.balanceReport.remitsReport.grid.setDataProvider(event.reportdata.claimPaymentEntry)
		this.view.setState({
			remitsSurcharge: event.reportdata.claimPaymentSurchargeEntry,
			remitsPLB: event.reportdata.pLBEntry
		})
	}

	protected setBankEFTReport(event: BankEFTReportEvent): void {
		// if (this.bankEFTReport == null) {
		// 	this.bankEFTReport = new BankEFTReport()
		// 	this.view.reportsContainer.addChild(this.bankEFTReport)
		// }
		this.view.reportContainer && this.view.reportContainer.grid.setDataProvider(event.reportdata)
	}

	private getCellTextColor(cell): number {
		try {
			if (Number(cell.getText()) < 0) return 0xff0000
			else return 0x000000
		} catch (e) {
			console.log('Handled the error')
		}
		return 0x000000
	}

	private showUCP(event: RemitsReportEvent): void {
		this.view.balanceReport.remitsReport && this.view.balanceReport.remitsReport.grid.processFilter()
	}

	protected setError(event: RemitsReportEvent): void {
		// this.balanceReport.remitsReport.grid.noDataMessage = event.errMsg
		this.view.balanceReport && this.view.balanceReport.remitsReport.grid.setDataProvider(null)
	}

	protected setExplain(event: ReportEvent): void {
		// this.ackReport = new AckReportContainer()
		// this.view.reportsContainer.addChild(this.ackReport) //through props added component directly
		this.view.ackReport.setState({ ackContent: event.reportdata.toString() })
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
		// this.ackReport = new AckReportContainer()
		// this.view.reportsContainer.addChild(this.ackReport)
		// this.ackReport.ackContent.text = event.errMsg
		toast.error(event.errMsg)
	}

	public onRemove(): void {
		this.eventMap.unmapListeners()

		super.onRemove()
		trace('ReportContainerMediator.onRemove()')
	}
	private viewFile(event: FileEditorEvent): void {
		trace('ReportContainerMediator.onRemove()')

		//dispatch(event);
	}
}
