import { BaseEvent } from '../../../../../../../../flexicious'

export class RemitQuickSearchEvent extends BaseEvent {
	public static QUICK_SEARCH: string = 'quickSearch'
	public static SEARCH_SYSTEMID: string = 'serachSystemId'
	public static SEARCH_PAYERNM: string = 'serachPayerNm'
	public static GET_STATUS: string = 'getStatusId'
	public static CORE_SEARCH_RESULT: string = 'quickSearchResult'
	public static DETAIL_SEARCH_RESULT: string = 'detailSearchResult'
	public static REMITS_DETAIL: string = 'remitsDetail'
	public static REMITS_DETAIL_RESULT: string = 'remitsDetailResult'

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
