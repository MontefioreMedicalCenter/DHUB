import { EdiUserBase } from './EdiUserBase.ts'

export default class EdiUser extends EdiUserBase {
	private _password: string
	private _selFacility: string
	private _selServ: string

	constructor(username: string, password: string) {
		super()
		this._userId = username
		this._password = password
	}

	public get password(): string {
		return this._password
	}

	public set selFacility(val: string) {
		this._selFacility = val
	}

	public get selFacility(): string {
		return this._selFacility
	}

	public set selServ(val: string) {
		this._selServ = val
	}

	public get selServ(): string {
		return this._selServ
	}

	public hasRoleWithFacServ(role: string): boolean {
		if (this.isAdminWithFs() == true) return true
		var grantedRoles: ListCollectionView = this.ediUserRoleMaps
		for (var i: Object in grantedRoles) {
			var userRole: EdiUserRoleMap = grantedRoles[i]
			if (this._selFacility == userRole.id.facilityId && this._selServ == userRole.id.serviceAreaId && this._userId == userRole.id.userId && userRole.id.roleId == role && userRole.accessActiveFlag == 1) return true
		}

		return false
	}

	public isAdminWithFs(): boolean {
		var grantedRoles: ListCollectionView = this.ediUserRoleMaps
		for (var i: Object in grantedRoles) {
			var userRole: EdiUserRoleMap = grantedRoles[i]
			if (this._selFacility == userRole.id.facilityId && this._selServ == userRole.id.serviceAreaId && this._userId == userRole.id.userId && userRole.id.roleId == 'Admin' && userRole.accessActiveFlag == 1) return true
		}

		return false
	}
}
