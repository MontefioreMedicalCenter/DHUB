import { toast } from 'react-toastify'
import Mediator from '../../../../../../../modules/main/view/Mediator.ts'
import { BankEFTReportEvent } from '../model/events/BankEFTReportEvent.ts'
import { BankEFTSearchEvent } from '../model/events/BankEFTSearchEvent.ts'
import { BankEFTService } from '../service/BankEFTService.ts'

export class BankEFTSearchMediator extends Mediator {
	
	public view: BankEFTSearch

	
	public bankEFTService: BankEFTService = BankEFTService.getInstance()


	public onRegister(view): BankEFTSearchMediator {

		this.view =view;
		// this.mapListener(this.view.searchBtn, MouseEvent.CLICK, this.ediEftQuickSearch, MouseEvent)
		// this.mapListener(this.view.clearBtn, MouseEvent.CLICK, this.clearSearch, MouseEvent)

		this.mapListener(this.eventDispatcher, BankEFTReportEvent.BANKEFT_REPORT, this.bankEFTReport, BankEFTReportEvent)

		this.mapListener(this.eventDispatcher, BankEFTSearchEvent.TRACENUMBER_LS, this.setTraceNumberList, BankEFTSearchEvent)
		this.mapListener(this.eventDispatcher, BankEFTSearchEvent.GET_TRACENUMBER_LS, this.getTraceNumberList, BankEFTSearchEvent)

		this.mapListener(this.eventDispatcher, BankEFTSearchEvent.TXN_LS, this.setTxnList, BankEFTSearchEvent)
		this.mapListener(this.eventDispatcher, BankEFTSearchEvent.GET_TXN_LS, this.getTxnList, BankEFTSearchEvent)

		this.mapListener(this.eventDispatcher, BankEFTSearchEvent.PAYER_LS, this.setPayerList, BankEFTSearchEvent)
		this.mapListener(this.eventDispatcher, BankEFTSearchEvent.GET_PAYER_LS, this.getPayerList, BankEFTSearchEvent)

		// this.dispatch(new BankEFTSearchEvent(BankEFTSearchEvent.GET_TRACENUMBER_LS))
		// this.dispatch(new BankEFTSearchEvent(BankEFTSearchEvent.GET_PAYER_LS))
		// this.dispatch(new BankEFTSearchEvent(BankEFTSearchEvent.GET_TXN_LS))
		this.getTraceNumberList({traceNumberList: null})
		this.getPayerList({payerList: null})
		this.getTxnList({txnList: null})
		return this;
	}

	private getTraceNumberList(event: BankEFTSearchEvent): void {
		if (event && event.traceNumberList == null) {
			this.bankEFTService.getTraceNumberList()
		}
	}

	private setTraceNumberList(event: BankEFTSearchEvent): void {
		
		this.view.setState({checkNumber_dataProvider:event.traceNumberList})
		// this.view.chkNo.autoCompleteSource = event.traceNumberList
	}

	private getTxnList(event: BankEFTSearchEvent): void {
		if (event && event.txnList == null) {
			this.bankEFTService.getTxnNoList()
		}
	}

	private setTxnList(event: BankEFTSearchEvent): void {
			
		this.view.setState({trnNo_dataProvider:event.txnList })
		// this.view.trnNo.autoCompleteSource = event.txnList
	}

	private getPayerList(event: BankEFTSearchEvent): void {
		if (event && event.payerList == null) {
			this.bankEFTService.getPayerList()
		}
	}

	private setPayerList(event: BankEFTSearchEvent): void {
		this.view.setState({payerName_dataProvider:event.payerList})
		// this.view.payer.autoCompleteSource = event.payerList
	}

	private ediEftQuickSearch(event: MouseEvent): void {
		var MS_PER_DAY: number = 1000 * 60 * 60 * 24
		var dateDiff: Date = new Date(this.view.state.startDate.getTime() - this.view.state.endDate.getTime())
		var difference: number = Math.abs(Math.round(dateDiff.time / MS_PER_DAY))

		if (this.view.state.startDate == null || this.view.state.endDate == null || this.view.state.startDate > this.view.state.endDate) {
			toast.error('Start and End Dates are required and Start Date should be less than End Date.')
			return
		} else if (difference > 365) {
			toast.error('Please select Date Range within one year.')
			return
		}
		// var validationResult: any[] = Validator.validateAll([this.view.chkNo, this.view.trnNo, this.view.payer])

		// if (validationResult.length == 7) {
		// } else {
			// this.view.chkNo.errorString = ''
			// this.view.trnNo.errorString = ''
			// this.view.payer.errorString = ''
			var dateSearch: number
			if (this.view.state.radioValue === 'fileDate') dateSearch = 1
			else if (this.view.state.radioValue === 'chkDate') dateSearch = 2

			this.bankEFTService.runBankEFTReport(0, this.view.state.chkNo, this.view.state.trnNo, this.view.state.payer, this.view.state.startDate, this.view.state.endDate, dateSearch)
		// }
	}

	private clearSearch(event: MouseEvent): void {
		this.view.setState({
			radioValue: 'fileDate',
			chkNo: '',
			trnNo: '',
			payer: '',
			startDate: new Date(),
			endDate: new Date()
		})
		// this.view.fileDate.selected = true
		// this.view.startDate.selectedDate = new Date()
		// this.view.endDate.selectedDate = new Date()
		// this.view.chkNo.text = ''
		// this.view.trnNo.text = ''
		// this.view.payer.text = ''
	}

	private bankEFTReport(event: BankEFTReportEvent): void {
		this.view.bankEFTReport.grid.setDataProvider(event.reportdata) 
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
