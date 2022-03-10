import VoBase from "../../../../../../../../vo/VoBase"

export class DeliveryLogPKBase extends VoBase {
	private _configId: string
	private _deliveryControlId: string
	private _logDatetime: Date

	public set configId(value: string) {
		this._configId = value
	}

	public get configId(): string {
		return this._configId
	}

	public set deliveryControlId(value: string) {
		this._deliveryControlId = value
	}

	public get deliveryControlId(): string {
		return this._deliveryControlId
	}

	public set logDatetime(value: Date) {
		this._logDatetime = value
	}

	public get logDatetime(): Date {
		return this._logDatetime
	}
}
