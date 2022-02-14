import Mediator from '../../../../../../../modules/main/view/Mediator.ts'
import { BankEFTReportEvent } from '../model/events/BankEFTReportEvent'
import { BankEFTSearchEvent } from '../model/events/BankEFTSearchEvent'
import { BankEFTService } from '../service/BankEFTService.ts'

export class BankEFTSearchMediator extends Mediator {
	
	public view: BankEFTSearch

	
	public bankEFTService: BankEFTService = BankEFTService.getInstance()


	public onRegister(): void {
		// this.eventMap.mapListener(this.view.searchBtn, MouseEvent.CLICK, this.ediEftQuickSearch, MouseEvent)
		// this.eventMap.mapListener(this.view.clearBtn, MouseEvent.CLICK, this.clearSearch, MouseEvent)

		this.eventMap.mapListener(this.eventDispatcher, BankEFTReportEvent.BANKEFT_REPORT, this.bankEFTReport, BankEFTReportEvent)

		this.eventMap.mapListener(this.eventDispatcher, BankEFTSearchEvent.TRACENUMBER_LS, this.setTraceNumberList, BankEFTSearchEvent)
		this.eventMap.mapListener(this.eventDispatcher, BankEFTSearchEvent.GET_TRACENUMBER_LS, this.getTraceNumberList, BankEFTSearchEvent)

		this.eventMap.mapListener(this.eventDispatcher, BankEFTSearchEvent.TXN_LS, this.setTxnList, BankEFTSearchEvent)
		this.eventMap.mapListener(this.eventDispatcher, BankEFTSearchEvent.GET_TXN_LS, this.getTxnList, BankEFTSearchEvent)

		this.eventMap.mapListener(this.eventDispatcher, BankEFTSearchEvent.PAYER_LS, this.setPayerList, BankEFTSearchEvent)
		this.eventMap.mapListener(this.eventDispatcher, BankEFTSearchEvent.GET_PAYER_LS, this.getPayerList, BankEFTSearchEvent)

		this.dispatch(new BankEFTSearchEvent(BankEFTSearchEvent.GET_TRACENUMBER_LS))
		this.dispatch(new BankEFTSearchEvent(BankEFTSearchEvent.GET_PAYER_LS))
		this.dispatch(new BankEFTSearchEvent(BankEFTSearchEvent.GET_TXN_LS))
	}

	private getTraceNumberList(event: BankEFTSearchEvent): void {
		if (event.traceNumberList == null) {
			this.bankEFTService.getTraceNumberList()
		}
	}

	private setTraceNumberList(event: BankEFTSearchEvent): void {
		this.view.chkNo.autoCompleteSource = event.traceNumberList
	}

	private getTxnList(event: BankEFTSearchEvent): void {
		if (event.txnList == null) {
			this.bankEFTService.getTxnNoList()
		}
	}

	private setTxnList(event: BankEFTSearchEvent): void {
		this.view.trnNo.autoCompleteSource = event.txnList
	}

	private getPayerList(event: BankEFTSearchEvent): void {
		if (event.payerList == null) {
			this.bankEFTService.getPayerList()
		}
	}

	private setPayerList(event: BankEFTSearchEvent): void {
		this.view.payer.autoCompleteSource = event.payerList
	}

	private ediEftQuickSearch(event: MouseEvent): void {
		var MS_PER_DAY: number = 1000 * 60 * 60 * 24
		var dateDiff: Date = new Date(this.view.startDate.selectedDate.time - this.view.endDate.selectedDate.time)
		var difference: number = Math.abs(Math.round(dateDiff.time / MS_PER_DAY))

		if (this.view.startDate.selectedDate == null || this.view.endDate.selectedDate == null || this.view.startDate.selectedDate > this.view.endDate.selectedDate) {
			Alert.show('Start and End Dates are required and Start Date should be less than End Date.')
			return
		} else if (difference > 365) {
			Alert.show('Please select Date Range within one year.')
			return
		}
		var validationResult: any[] = Validator.validateAll([this.view.chkNo, this.view.trnNo, this.view.payer])

		if (validationResult.length == 7) {
		} else {
			this.view.chkNo.errorString = ''
			this.view.trnNo.errorString = ''
			this.view.payer.errorString = ''
			var dateSearch: number
			if (this.view.fileDate.selected) dateSearch = 1
			else if (this.view.depositDate.selected) dateSearch = 2

			this.bankEFTService.runBankEFTReport(0, this.view.chkNo.text, this.view.trnNo.text, this.view.payer.text, this.view.startDate.selectedDate, this.view.endDate.selectedDate, dateSearch)
		}
	}

	private clearSearch(event: MouseEvent): void {
		this.view.fileDate.selected = true
		this.view.startDate.selectedDate = new Date()
		this.view.endDate.selectedDate = new Date()
		this.view.chkNo.text = ''
		this.view.trnNo.text = ''
		this.view.payer.text = ''
	}

	private bankEFTReport(event: BankEFTReportEvent): void {
		this.view.bankEFTReport.grid.dataProvider = event.reportdata
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

	private viewFile1(event: FileEditorEvent): void {
		this.dispatch(event)
	}
}
