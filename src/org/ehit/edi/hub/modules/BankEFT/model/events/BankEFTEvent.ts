import { BaseEvent } from "../../../../../../../../flexicious"
import ArrayCollection from "../../../../../../../../vo/ArrayCollection"

export class BankEFTEvent extends BaseEvent {
	public static GET_BANKEFT_HEADER: string = 'getBankEFTHeader'
	public static BANKEFT_HEADER: string = 'bankEFTHeader'
	public static GET_BANKEFT: string = 'getBankEFT'
	public static BANKEFT: string = 'bankEFT'
	public static REMOVE_BANKEFT: string = 'removeBankEFT'
	public static ERROR_BANKEFT: string = 'bankEFTerror'

	public static GET_REMITS_REPORT: string = 'getRemitsReports'
	public static REMITS_REPORT: string = 'remitsReports'

	public static REMITS_SEARCH: string = 'remitsSearch'
	public static ALL_REMIT_RPT: string = 'allremitrpt'
	public static REMIT_RPT_HEADER: string = 'remitRptHeader'
	public static RPT_HEADER_PP: string = 'rptHeaderpp'
	public static RPT_MONTHS: string = 'rptmoth'
	public static RPT_PAYERS: string = 'rptpayers'
	public static REMIT_RPT_PP: string = 'remitrptpp'
	public static RPT_MONTH_PP: string = 'rmonthpp'
	public static RPT_PAYER_PP: string = 'rpayerpp'
	public static DUP_FILE: string = 'dupFile'

	constructor(type: string, startDate: Date = null, endDate: Date = null, chkNum: string = null, error: string = null) {
		super(type)
		this._startDate = startDate
		this._endDate = endDate
		this._chkNum = chkNum
		this._error = error
	}

	private _error: string
	private _startDate: Date
	private _endDate: Date
	private _chkNum: string
	private _x12content: ByteArray
	private _reportdata: Object
	private _searchdata: Object
	private _rrptdata: ArrayCollection
	private _rptmondata: ArrayCollection
	private _rptPayers: ArrayCollection

	public get errMsg(): string {
		return this._error
	}

	public get startDate(): Date {
		return this._startDate
	}

	public get endDate(): Date {
		return this._endDate
	}

	public get chkNum(): string {
		return this._chkNum
	}

	/*override*/ public clone(): Event {
		return new BankEFTEvent(this.type, this._startDate, this._endDate, this._chkNum)
	}

	public get content(): ArrayCollection {
		return this._x12content
	}

	public set content(value: ArrayCollection) {
		this._x12content = value
	}

	public get reportdata(): Object {
		return this._reportdata
	}

	public set reportdata(value: Object) {
		this._reportdata = value
	}

	public get searchdata(): Object {
		return this._searchdata
	}

	public set searchdata(value: Object) {
		this._searchdata = value
	}

	public get rrptdata(): ArrayCollection {
		return this._rrptdata
	}

	public set rrptdata(value: ArrayCollection) {
		this._rrptdata = value
	}

	public get rptmondata(): ArrayCollection {
		return this._rptmondata
	}

	public set rptmondata(value: ArrayCollection) {
		this._rptmondata = value
	}

	public get rptPayers(): ArrayCollection {
		return this._rptPayers
	}

	public set rptPayers(value: ArrayCollection) {
		this._rptPayers = value
	}
}
