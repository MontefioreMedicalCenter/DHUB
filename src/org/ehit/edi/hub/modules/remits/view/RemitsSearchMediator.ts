import { toast } from 'react-toastify'
import Mediator from '../../../../../../../modules/main/view/Mediator.ts'
import { FileEditorEvent } from '../../../main/model/events/FileEditorEvent.ts'
import { RemitQuickSearchEvent } from '../model/events/RemitQuickSearchEvent.ts'
import { RemitSearchService } from '../service/RemitSearchService.ts'
import RemitQuickSearch from './components/RemitQuickSearch'


export class RemitsSearchMediator extends Mediator {
	public view: RemitQuickSearch

	public remitSearchService: RemitSearchService = RemitSearchService.getInstance()
	
	public onRegister(view): RemitsSearchMediator {
		this.view = view
		// this.mapListener(this.view.searchBtn, MouseEvent.CLICK, this.remitQuickSearch, MouseEvent)//Implemented
		// this.mapListener(this.view.clearBtn, MouseEvent.CLICK, this.clearSearch, MouseEvent)//Implemented
		this.mapListener(this.view, FileEditorEvent.VIEW_FILE, this.viewFile, FileEditorEvent)
		this.mapListener(this.eventDispatcher, RemitQuickSearchEvent.CORE_SEARCH_RESULT, this.remitCoreSearchResult, RemitQuickSearchEvent)
		this.mapListener(this.eventDispatcher, RemitQuickSearchEvent.DETAIL_SEARCH_RESULT, this.remitDetailSearchResult, RemitQuickSearchEvent)
		this.mapListener(this.view, RemitQuickSearchEvent.REMITS_DETAIL, this.remitDetailX12, RemitQuickSearchEvent)
		// this.mapListener(this.eventDispatcher, RemitQuickSearchEvent.REMITS_DETAIL_RESULT, this.remitDetailResult, RemitQuickSearchEvent)
		// this.mapListener(this.view, RemitsReportEvent.UCP_ONLY, this.showUCP, RemitsReportEvent)
		this.mapListener(this.eventDispatcher, RemitQuickSearchEvent.SEARCH_SYSTEMID, this.populateSystemId, RemitQuickSearchEvent)
		this.mapListener(this.eventDispatcher, RemitQuickSearchEvent.SEARCH_PAYERNM, this.populatePayerNm, RemitQuickSearchEvent)
		this.mapListener(this.eventDispatcher, RemitQuickSearchEvent.GET_STATUS, this.populateStatus, RemitQuickSearchEvent)
		this.remitSearchService.getPayerName()
		//this.remitSearchService.getSystemId()
		//this.remitSearchService.getStatus()
		return this
	}

/*	private populateSystemId(event: RemitQuickSearchEvent): void {
		// this.view.systemIdBtn.dataProvider = event.searchdata
		this.view.setState({ systemIdBtn_dataProvider: event.searchdata })
		// this.view.systemIdBtn.selectedItems = ['ALL']
	}
*/
	private populatePayerNm(event: RemitQuickSearchEvent): void {
		// this.view.payerNmBtn.dataProvider = event.searchdata
		// this.view.setState({payerNmBtn:event.searchdata})
		this.view.setState({ payerNmBtn_dataProvider: event.searchdata })
	}

/*	private populateStatus(event: RemitQuickSearchEvent): void {
		// this.view.statusBtn.dataProvider = event.searchdata
		this.view.setState({ statusBtn_dataProvider: event.searchdata })
		// this.view.statusBtn.selectedItems = ['0']
	}
*/
	private remitQuickSearch() {
		var MS_PER_DAY: number = 1000 * 60 * 60 * 24
		var dateDiff: Date = new Date(this.view.state.startDate.getTime() - this.view.state.endDate.getTime())
		var difference: number = Math.abs(Math.round(dateDiff.getTime() / MS_PER_DAY))

		if (this.view.state.startDate === null || this.view.state.endDate === null || this.view.state.startDate > this.view.state.endDate) {
			toast.error('Start and End Dates are required and Start Date should be less than End Date.')
			return
		} else if (difference > 180) {
			toast.error('Please select Date Range within six months.')
			return
		}
		if (this.view.state.patId || this.view.state.payerId || this.view.state.patFName || this.view.state.patLName ||this.view.state.chkNo || this.view.state.claimNo) {
			if(this.view.state.patId || this.view.state.patFName || this.view.state.patLName || this.view.state.claimNo /*|| this.view.state.statusBtnData.toString().indexOf('0') < 0*/){
				this.remitSearchService.remitDetailSearch(this.view.state.chkNo, this.view.state.payerId, this.view.state.payerNmBtnLabel, this.view.state.patId, this.view.state.patFName, this.view.state.patLName, this.view.state.claimNo,/* this.view.state.systemIdBtnLabel, this.view.state.statusBtnData.toString(),*/ this.view.state.startDate, this.view.state.endDate, this.view.state.radioValue )
			}else{
				this.remitSearchService.remitCoreSearch(this.view.state.chkNo, this.view.state.payerId, this.view.state.payerNmBtnLabel,/* this.view.state.systemIdBtnLabel,  this.view.state.statusBtnData.toString(), */this.view.state.startDate, this.view.state.endDate, this.view.state.radioValue )
			}
		}else{
			!this.view.state.payerId ? this.view.setState({ payerIdError: true }) : this.view.setState({ payerIdError: false })
			!this.view.state.patId ? this.view.setState({ patIdError: true }) : this.view.setState({ patIdError: false })
			!this.view.state.patFName ? this.view.setState({ patFNameError: true }) : this.view.setState({ patFNameError: false })
			!this.view.state.patLName ? this.view.setState({ patLNameError: true }) : this.view.setState({ patLNameError: false })
			!this.view.state.chkNo ? this.view.setState({ chkNoError: true }) : this.view.setState({ chkNoError: false })
			!this.view.state.claimNo ? this.view.setState({ claimNoError: true }) : this.view.setState({ claimNoError: false })
			toast.error('Please fill out one of these fields: Check/EFT Trace Number, Payer ID, Payer Name, Member ID, Patient First Name, Patient Last Name, PCN #')

		
		}
	}

	private clearSearch() {
		// this.view.systemIdBtn.selectedItems = ['ALL']
		// this.view.statusBtn.selectedItems = ['0']
		this.view.setState({
			startDate: new Date(),
			endDate: new Date(),
			payerId: '',
			patId: '',
			patFName: '',
			patLName: '',
			chkNo: '',
			claimNo: '',
		})
		this.view.handleDeSelectAll([], '', ['systemIdBtn','statusBtn','payerNmBtn'])
	}

	private remitCoreSearchResult(event: RemitQuickSearchEvent): void {
	//	toast.warning("Need to Implement RemitCoreTracking Page")
		// var remitCoreTrck: RemitCoreTracking
		// if (this.view.getChildByName('remitDetail') != null) this.view.removeChild(this.view.getChildByName('remitDetail'))
		// if (this.view.getChildByName('remitCore') == null) {
		// 	remitCoreTrck = new RemitCoreTracking()
		// 	this.view.addChild(remitCoreTrck)
		// 	remitCoreTrck.dataProvider = event.searchdata
		// 	return
		// }

		// remitCoreTrck = <RemitCoreTracking>this.view.getChildByName('remitCore')
		// remitCoreTrck.dataProvider = event.searchdata
	
		// this.view.grid.dataProvider = this.remitsModel.remits
		this.view.setState({hideCore: false, hideDetails: true})
		this.view.remitCoreRef && this.view.remitCoreRef.grid.setDataProvider(event.searchdata)
		this.view.remitCoreRef && this.view.remitCoreRef.grid.refreshCells()
	}

	private remitDetailSearchResult(event: RemitQuickSearchEvent): void {
	//	toast.warning("Need to Implement RemitDetailTracking Page")
		// var remitDetailTrck: RemitDetailTracking

		// if (this.view.getChildByName('remitCore') != null) this.view.removeChild(this.view.getChildByName('remitCore'))
		// if (this.view.getChildByName('remitDetail') == null) {
		// 	remitDetailTrck = new RemitDetailTracking()
		// 	this.view.addChild(remitDetailTrck)
		// 	remitDetailTrck.dataProvider = event.searchdata
		// 	return
		// }

		// remitDetailTrck = <RemitDetailTracking>this.view.getChildByName('remitDetail')
		// remitDetailTrck.dataProvider = event.searchdata
		this.view.setState({hideCore: true, hideDetails: false})
		this.view.remitDetailRef && this.view.remitDetailRef.grid.setDataProvider(event.searchdata)
		this.view.remitDetailRef && this.view.remitDetailRef.grid.refreshCells()
	}

	private remitDetail: FileEditor

	public remitDetailX12(event: RemitQuickSearchEvent): void {
		// this.remitDetail = new FileEditor()
		// this.remitDetail.height = this.contextView.height - 200
		// this.remitDetail.width = this.contextView.width - 200
		// PopUpManager.addPopUp(this.remitDetail, this.contextView, true)
		// PopUpManager.centerPopUp(this.remitDetail)
		// this.mediatorMap.createMediator(this.remitDetail)
		// this.remitSearchService.getSingleTranSet(this.view.xmitId, this.view.isaSequenceNum, this.view.gsSequenceNum, this.view.stSequenceNum, this.view.unitSequenceNum)
		this.view.setState({fileEditorWindow : true})
		this.remitSearchService.getSingleTranSet(this.view.xmitId, this.view.isaSequenceNum, this.view.gsSequenceNum, this.view.stSequenceNum, this.view.unitSequenceNum)
	}

	public remitDetailResult(event: RemitQuickSearchEvent): void {
		//	remitDetail.X12.text=event.searchdata as String
	}

	private showUCP(event: RemitsReportEvent): void {
		if (this.view.getChildByName('remitCore') != null) (<FlexDataGrid>this.view.getChildByName('remitCore')).processFilter()
		if (this.view.getChildByName('remitDetail') != null) (<FlexDataGrid>this.view.getChildByName('remitDetail')).processFilter()
	}

	private viewFile(event: FileEditorEvent): void {
		this.dispatch(event)
	}
}
