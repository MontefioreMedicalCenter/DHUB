import VoBase from "../../../../../../../../vo/VoBase"

export class DeliveryControlPKBase extends VoBase{
	private _facilityId: string

	private _serviceAreaId: string

	private _deliveryControlId: string

	public get facilityId(): string {
		return this._facilityId
	}

	public set facilityId(value: string) {
		this._facilityId = value
	}

	public get serviceAreaId(): string {
		return this._serviceAreaId
	}

	public set serviceAreaId(value: string) {
		this._serviceAreaId = value
	}

	public get deliveryControlId(): string {
		return this._deliveryControlId
	}

	public set deliveryControlId(value: string) {
		this._deliveryControlId = value
	}
}
