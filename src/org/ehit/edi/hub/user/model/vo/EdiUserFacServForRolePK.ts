import VoBase from "../../../../../../../vo/VoBase"

export class EdiUserFacServForRolePK extends VoBase {
	private _facilityId: string
	private _serviceAreaId: string
	private _userId: string
	private _activeFlag: number

	constructor() {}

	public set facilityId(value: string) {
		this._facilityId = value
	}

	public get facilityId(): string {
		return this._facilityId
	}

	public set serviceAreaId(value: string) {
		this._serviceAreaId = value
	}

	public get serviceAreaId(): string {
		return this._serviceAreaId
	}

	public set userId(value: string) {
		this._userId = value
	}

	public get userId(): string {
		return this._userId
	}
	public set activeFlag(value: number) {
		this._activeFlag = value
	}

	public get activeFlag(): number {
		return this._activeFlag
	}
}
