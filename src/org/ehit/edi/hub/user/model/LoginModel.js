import VoBase from '../../../../../../vo/VoBase'
import { EdiUserBase } from './vo/EdiUserBase.ts'

export default class LoginModel extends VoBase {
	get user() {
		return this._user
	}

	set user(value) {
		this._user = value
	}

	getComplexProperty(key) {
		if (key === 'user') {
			return new EdiUserBase()
		}
		return super.getComplexProperty(key)
	}

	/** user upto here */

	// private _serviceAreaName: string

	// public get serviceAreaName(): string {
	// 	return this._serviceAreaName
	// }

	// public set serviceAreaName(value: string) {
	// 	this._serviceAreaName = value
	// }
	get serviceAreaName() {
		return this._serviceAreaName
	}

	set serviceAreaName(value) {
		this._serviceAreaName = value
	}
}

LoginModel.prototype.typeName = LoginModel.typeName = 'LoginModel' //for quick inspection
LoginModel.instance = null
LoginModel.getInstance = () => {
	if (!LoginModel.instance) {
		LoginModel.instance = new LoginModel()
	}
	return LoginModel.instance
}
