import VoBase from '../../../../../../../vo/VoBase'
import { EdiUserBase } from './EdiUserBase.ts'
import { EdiUserRoleMapPK } from './EdiUserRoleMapPK.ts'

export default class EdiUserRoleMap extends VoBase {
	private _accessActiveFlag: number
	private _ediUser: EdiUserBase
	private _id: EdiUserRoleMapPK

	public set accessActiveFlag(value: number) {
		this._accessActiveFlag = value
	}

	public get accessActiveFlag(): number {
		return this._accessActiveFlag
	}

	public set ediUser(value: EdiUserBase) {
		this._ediUser = value
	}

	public get ediUser(): EdiUserBase {
		return this._ediUser
	}

	public set id(value: EdiUserRoleMapPK) {
		this._id = value
	}

	public get id(): EdiUserRoleMapPK {
		return this._id
	}
}
