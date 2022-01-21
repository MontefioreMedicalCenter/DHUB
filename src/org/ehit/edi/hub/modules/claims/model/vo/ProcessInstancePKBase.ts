import VoBase from "../../../../../../../../vo/VoBase"

export class ProcessInstancePKBase extends VoBase{
	private _facilityId: string

	private _serviceAreaId: string

	private _instanceId: string

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

	public set instanceId(value: string) {
		this._instanceId = value
	}
	public get instanceId(): string {
		return this._instanceId
	}
}
