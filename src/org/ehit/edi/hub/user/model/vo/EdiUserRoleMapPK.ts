import VoBase from '../../../../../../../vo/VoBase'

export class EdiUserRoleMapPK extends VoBase {
	private _facilityId: string
	private _serviceAreaId: string
	private _roleId: string
	private _userId: string

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
	public set roleId(value: string) {
		this._roleId = value
	}

	public get roleId(): string {
		return this._roleId
	}

	public set userId(value: string) {
		this._userId = value
	}

	public get userId(): string {
		return this._userId
	}
}
