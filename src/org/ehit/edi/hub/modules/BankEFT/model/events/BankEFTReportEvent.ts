import { BaseEvent } from "../../../../../../../../flexicious"

export class BankEFTReportEvent extends BaseEvent {
	public static GET_BANKEFT_REPORT: string = 'getBankEFTReports'
	public static BANKEFT_REPORT: string = 'bankEFTReports'
	public static REMITS_REPORT_EDITOR: string = 'remitsReportsEditor'
	public static REPORT_ERROR: string = 'error'
	public static REPORT_ERROR_EDITOR: string = 'errorEditor'

	private _reportdata: Object
	private _error: string

	constructor(type: string, data: Object = null, error: string = null) {
		super(type)
		this._reportdata = data
		this._error = error
	}

	public get errMsg(): string {
		return this._error
	}

	public get reportdata(): Object {
		return this._reportdata
	}

	public set reportdata(value: Object) {
		this._reportdata = value
	}

	/*override*/ public clone(): Event {
		return new BankEFTReportEvent(this.type, this._reportdata, this._error)
	}
}
