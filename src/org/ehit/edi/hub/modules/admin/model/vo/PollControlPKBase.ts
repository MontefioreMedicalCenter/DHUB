import VoBase from "../../../../../../../../vo/VoBase"

export class PollControlPKBase extends VoBase{
	private _facilityId: string

	private _serviceAreaId: string

	private _pollControlId: string

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

	public get pollControlId(): string {
		return this._pollControlId
	}

	public set pollControlId(value: string) {
		this._pollControlId = value
	}
}
