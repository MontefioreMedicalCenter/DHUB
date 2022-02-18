import { BaseEvent } from "../../../../../../../flexicious"

export class ReportEvent extends BaseEvent {
	public static GET_REPORT: string = 'getReports'
	public static REPORT: string = 'Reports'
	public static REPORT_ERROR: string = 'error'
	public static EXPLAIN_REPORT: string = 'explainReport'
	public static EXPLAIN_ERROR: string = 'error'

	private _error: string
	private _reportdata: Object

	constructor(type: string, data: Object, error: string = null) {
		super(type)
		this._reportdata = data
		this._error = error
	}

	public get errMsg(): string {
		return this._error
	}

	public clone(): Event {
		return new ReportEvent(this.type, this._reportdata, this._error)
	}

	public get reportdata(): Object {
		return this._reportdata
	}

	public set reportdata(value: Object) {
		this._reportdata = value
	}
}
