import { AxiosPromise } from 'axios'
import { toast } from 'react-toastify'
import ServiceProxyBase from '../../../../../../../service/cfc/ServiceProxyBase'
import GlobalEventDispatcher from '../../../../../../../service/utils/GlobalEventDispatcher'
import { RemitQuickSearchEvent } from '../model/events/RemitQuickSearchEvent.ts'
import qs from 'qs'
import { stringifyCircularObjectWithModifiedKeys } from '../../../../../../../shared/utils'

export class RemitSearchService extends ServiceProxyBase {

	dispatch(evt) {
		GlobalEventDispatcher.instance().dispatchEvent(evt)
	}

	static instance: any
	static getInstance: () => any
	public static REMOTE_DESTINATION: string = 'RemitSearchService'

	public static REMOTE_DESTINATION_DETAIL: string = 'X12Service'

	
	public service: RemoteObject

	public x12Service: RemoteObject

	public getSystemId(): AxiosPromise<any> {
		// var rpcCall: AsyncToken = this.service.getSystemId()
		// rpcCall.addResponder(new AsyncResponder(this.searchSystemSuccessResultEvent, this.failureFaultEvent))
		return this.callServiceMethod('post', 'DHub/api/remitSearchsvc/getSystemId', null, null, this.searchSystemSuccessResultEvent.bind(this), this.failureFaultEvent.bind(this), 'form', this.getHeaderFormData())
	}

	public getPayerName(): AxiosPromise<any> {
		// var rpcCall: AsyncToken = this.service.getPayerName()
		// rpcCall.addResponder(new AsyncResponder(this.payerNameSuccessResultEvent, this.failureFaultEvent))
		return this.callServiceMethod('post', 'DHub/api/remitSearchsvc/getPayerName', null, null, this.payerNameSuccessResultEvent.bind(this), this.failureFaultEvent.bind(this), 'form', this.getHeaderFormData())
	}

	public getStatus(): AxiosPromise<any> {
		// var rpcCall: AsyncToken = this.service.getStatus()
		// rpcCall.addResponder(new AsyncResponder(this.getStatusSuccessResultEvent, this.failureFaultEvent))
		return this.callServiceMethod('post', 'DHub/api/remitSearchsvc/getStatus', null, null, this.getStatusSuccessResultEvent.bind(this), this.failureFaultEvent.bind(this), 'form', this.getHeaderFormData())
	}

	public remitCoreSearch(chkNo: string, payerId: string, payerName: string, systemId: string, status: string, startDate: Date, endDate: Date, dateSearch: string): AxiosPromise<any> {
		// var rpcCall: AsyncToken = this.service.remitCoreSearch(chkNo, payerId, payerName, systemId, status, startDate, endDate, dateSearch)
		// rpcCall.addResponder(new AsyncResponder(this.coreSearchSuccessResultEvent, this.failureFaultEvent))
		var formData = qs.stringify({
			chkNo:chkNo,
			payerId:payerId,
			payerName: payerName,
			systemId: systemId,
			status: status,
			startDate: startDate,
			endDate: endDate,
			dateSearch: dateSearch
		})
		return this.callServiceMethod('post', 'DHub/api/remitSearchsvc/remitCoreSearch', formData, null, this.coreSearchSuccessResultEvent.bind(this), this.failureFaultEvent.bind(this), 'form', this.getHeaderFormData())
	}

	public remitDetailSearch(chkNo: string, payerId: string, payerName: string, patId: string, patFName: string, patLName: string, claimNo: string, systemId: string, status: any[], startDate: Date, endDate: Date, dateSearch: string): AxiosPromise<any> {

		// var rpcCall: AsyncToken = this.service.remitDetailSearch(chkNo, payerId, payerName, patId, patFName, patLName, claimNo, systemId, status, startDate, endDate, dateSearch)
		// rpcCall.addResponder(new AsyncResponder(this.detailSearchSuccessResultEvent, this.failureFaultEvent))
		var formData = qs.stringify({
			chkNo:chkNo,
			payerId:payerId,
			payerName: payerName,
			patId: patId,
			patFName: patFName,
			patLName: patLName,
			claimNo: claimNo,
			systemId: systemId,
			status: stringifyCircularObjectWithModifiedKeys(status),
			startDate: startDate,
			endDate: endDate,
			dateSearch: dateSearch
		})
		return this.callServiceMethod('post', 'DHub/api/remitSearchsvc/remitDetailSearch', formData, null, this.detailSearchSuccessResultEvent.bind(this), this.failureFaultEvent.bind(this), 'form', this.getHeaderFormData())
	}

	public getSingleTranSet(xmitId: number, isaSequenceNum: number, gsSequenceNum: number, stSequenceNum: number, unitSequenceNum: number): void {
		var rpcCall: AsyncToken = this.x12Service.getSingleTranSetEdiFile(xmitId, isaSequenceNum, gsSequenceNum, stSequenceNum)
		rpcCall.addResponder(new AsyncResponder(this.tranSetSuccessResultEvent, this.failureFaultEvent))
	}

	protected searchSystemSuccessResultEvent(event: ResultEvent, token: Object = null): void {
		var remitQuickSearchEvent: RemitQuickSearchEvent = new RemitQuickSearchEvent(RemitQuickSearchEvent.SEARCH_SYSTEMID)
		remitQuickSearchEvent.searchdata = event.result
		this.dispatch(remitQuickSearchEvent)
	}

	protected payerNameSuccessResultEvent(event: ResultEvent, token: Object = null): void {
		var remitQuickSearchEvent: RemitQuickSearchEvent = new RemitQuickSearchEvent(RemitQuickSearchEvent.SEARCH_PAYERNM)
		remitQuickSearchEvent.searchdata = event.result
		this.dispatch(remitQuickSearchEvent)
	}

	protected getStatusSuccessResultEvent(event: ResultEvent, token: Object = null): void {
		var remitQuickSearchEvent: RemitQuickSearchEvent = new RemitQuickSearchEvent(RemitQuickSearchEvent.GET_STATUS)
		remitQuickSearchEvent.searchdata = event.result
		this.dispatch(remitQuickSearchEvent)
	}

	protected coreSearchSuccessResultEvent(event: ResultEvent, token: Object = null): void {
		var remitQuickSearchEvent: RemitQuickSearchEvent = new RemitQuickSearchEvent(RemitQuickSearchEvent.CORE_SEARCH_RESULT)
		remitQuickSearchEvent.searchdata = event.result
		this.dispatch(remitQuickSearchEvent)
	}

	protected detailSearchSuccessResultEvent(event: ResultEvent, token: Object = null): void {
		var remitQuickSearchEvent: RemitQuickSearchEvent = new RemitQuickSearchEvent(RemitQuickSearchEvent.DETAIL_SEARCH_RESULT)
		remitQuickSearchEvent.searchdata = event.result
		this.dispatch(remitQuickSearchEvent)
	}

	protected tranSetSuccessResultEvent(event: ResultEvent, token: Object = null): void {
		var file: EdiFileBase = <EdiFileBase>event.result
		file.origFileName = 'X12'
		this.dispatch(new FileEditorEvent(FileEditorEvent.FILE_CONTENT, file))
	}

	/**
	 * Handles the remits fault event
	 * @param event
	 * @param token
	 */
	protected failureFaultEvent(event: FaultEvent, token: Object = null): void {
		var msg: ErrorMessage = <ErrorMessage>event.message
		toast.error(msg.faultString)
	}
}

RemitSearchService.prototype.typeName = RemitSearchService.typeName = 'RemitSearchService' //for quick inspection
RemitSearchService.instance = null
RemitSearchService.getInstance = () => {
	if (RemitSearchService.instance == null) {
		RemitSearchService.instance = new RemitSearchService()
	}
	return RemitSearchService.instance
}
