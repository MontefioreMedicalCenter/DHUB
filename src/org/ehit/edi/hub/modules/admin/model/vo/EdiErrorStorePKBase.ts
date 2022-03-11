import VoBase from "../../../../../../../../vo/VoBase"

export class EdiErrorStorePKBase extends VoBase{
	private _facilityId: string

	private _serviceAreaId: string

	private _errorId: string

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

	public get errorId(): string {
		return this._errorId
	}

	public set errorId(value: string) {
		this._errorId = value
	}
}
