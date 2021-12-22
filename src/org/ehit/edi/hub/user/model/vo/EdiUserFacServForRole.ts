import VoBase from '../../../../../../../vo/VoBase'
import { EdiUserFacServForRolePK } from './EdiUserFacServForRolePK.ts'

export class EdiUserFacServForRole extends VoBase {
	private _id: EdiUserFacServForRolePK

	constructor() {}

	public get id(): EdiUserFacServForRolePK {
		return this._id
	}

	public set id(val: EdiUserFacServForRolePK) {
		this._id = val
	}
}
