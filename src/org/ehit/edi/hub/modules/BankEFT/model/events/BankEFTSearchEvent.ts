import { BaseEvent } from "../../../../../../../../flexicious"
import ArrayCollection from "../../../../../../../../vo/ArrayCollection"

export class BankEFTSearchEvent extends BaseEvent {
	public static QUICK_SEARCH: string = 'quickSearch'
	public static SEARCH_SYSTEMID: string = 'serachSystemId'
	public static SEARCH_PAYERNM: string = 'serachPayerNm'
	public static GET_STATUS: string = 'getStatusId'
	public static CORE_SEARCH_RESULT: string = 'quickSearchResult'
	public static DETAIL_SEARCH_RESULT: string = 'detailSearchResult'
	public static REMITS_DETAIL: string = 'remitsDetail'
	public static REMITS_DETAIL_RESULT: string = 'remitsDetailResult'

	public static GET_TRACENUMBER_LS: string = 'getTraceNumber'
	public static TRACENUMBER_LS: string = 'traceNumberList'

	public static GET_PAYER_LS: string = 'getPayer'
	public static PAYER_LS: string = 'payerList'

	public static GET_TXN_LS: string = 'getTXN'
	public static TXN_LS: string = 'txnList'

	private _traceNumberList: ArrayCollection

	private _txnList: ArrayCollection

	private _payerList: ArrayCollection

	public get traceNumberList(): ArrayCollection {
		return this._traceNumberList
	}

	public set traceNumberList(value: ArrayCollection) {
		this._traceNumberList = value
	}

	public get txnList(): ArrayCollection {
		return this._txnList
	}

	public set txnList(value: ArrayCollection) {
		this._txnList = value
	}

	public get payerList(): ArrayCollection {
		return this._payerList
	}

	public set payerList(value: ArrayCollection) {
		this._payerList = value
	}

	constructor(type: string) {
		super(type)
	}

	private _searchdata: Object

	public get searchdata(): Object {
		return this._searchdata
	}

	public set searchdata(value: Object) {
		this._searchdata = value
	}
}
