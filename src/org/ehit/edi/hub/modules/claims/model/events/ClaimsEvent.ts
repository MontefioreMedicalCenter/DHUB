import { BaseEvent } from "../../../../../../../../flexicious"

export class ClaimsEvent extends BaseEvent {
	public static GET_CLAIM_HEADER: string = 'getClaimHeader'
	public static CLAIM_HEADER: string = 'claimHeader'
	public static GET_CLAIMS: string = 'getClaims'
	public static CLAIMS: string = 'claims'
	public static REMOVE_CLAIMS: string = 'removeClaims'
	public static ERROR_CLAIMS: string = 'error'

	constructor(type: string, startDate: Date = null, endDate: Date = null, invoiceNum: string = null, error: string = null) {
		super(type)
		this._startDate = startDate
		this._endDate = endDate
		this._invoiceNum = invoiceNum
		this._error = error
	}

	private _error: string
	private _startDate: Date
	private _endDate: Date
	private _invoiceNum: string

	public get errMsg(): string {
		return this._error
	}

	public get startDate(): Date {
		return this._startDate
	}

	public get endDate(): Date {
		return this._endDate
	}

	public get invoiceNum(): string {
		return this._invoiceNum
	}

	public clone(): Event {
		return new ClaimsEvent(this.type, this._startDate, this._endDate, this._invoiceNum)
	}
}
