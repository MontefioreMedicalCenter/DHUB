import { BaseEvent } from "../../../../../../../../flexicious"

export class RemitsReportEvent extends BaseEvent {
	public static GET_REMITS_REPORT: string = 'getRemitsReports'
	public static REMITS_REPORT: string = 'remitsReports'
	public static REMITS_REPORT_EDITOR: string = 'remitsReportsEditor'
	public static REMITS_X12SPLIT_RESULT: string = 'remitsX12Split'
	public static UCP_ONLY: string = 'ucpOnly'
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
		return new RemitsReportEvent(this.type, this._reportdata, this._error)
	}
}
