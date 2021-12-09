import { BaseEvent } from '../../../../../../../flexicious'
import ArrayCollection from '../../../../../../../vo/ArrayCollection'
import EdiUser from '../vo/EdiUser.ts'

export class LoginEvent extends BaseEvent {
	public static LOGIN: string = 'login'
	public static LOGOUT: string = 'logout'
	public static USER: string = 'user'
	public static LOGIN_SUCCESS: string = 'success'
	public static LOGIN_ERROR: string = 'error'
	public static LOGIN_GETSERV: string = 'getservicea'
	public static LOGIN_FILLSERV: string = 'fillservicea'

	private _serviceAreas: ArrayCollection

	constructor(type: string, user: EdiUser = null, errorStr: string = null) {
		super(type)
		this._user = user
		this._error = errorStr
	}

	/*public function LoginEvent(type:String, user:User , errorStr:String)
		{
			super(type);
			_user = user;


		}
		*/
	private _error: string

	public get errorStr(): string {
		return this._error
	}

	private _user: EdiUser

	public get user(): EdiUser {
		return this._user
	}

	/*override*/ public clone(): Event {
		return new LoginEvent(this.type, this._user, this._error)
	}

	public get serviceAreas(): ArrayCollection {
		return this._serviceAreas
	}

	public set serviceAreas(serv: ArrayCollection) {
		this._serviceAreas = serv
	}
}
