import { BaseEvent } from "../../../../../../../../flexicious"

export class InterfacesEvent extends BaseEvent {
	public static GET_INTERFACES: string = 'getIntefaces'
	public static INTERFACES: string = 'intefaces'
	public static REMOVE_INTERFACES: string = 'removeIntefaces'
	public static ERROR_INTERFACES: string = 'error'
	public static PING_RESULT: string = 'PING_RESULT'
	

	constructor(type: string, error: string = null) {
		super(type)
		this._error = error
	}

	private _error: string
	private _startDate: Date
	private _endDate: Date
	//private _invoiceNum: string

	public get errMsg(): string {
		return this._error
	}

	public get startDate(): Date {
		return this._startDate
	}

	public get endDate(): Date {
		return this._endDate
	}

    /*
	public get chkNum(): string {
		return this._chkNum
	}
    */
	public clone(): Event {
		return new InterfacesEvent(this.type, this._error)
	}
}
