import { BaseEvent } from "../../../../../../../../flexicious"
import ArrayCollection from "../../../../../../../../vo/ArrayCollection"
import { EdiUserBase } from "../../../../user/model/vo/EdiUserBase.ts"
import EdiUserRoleMap from "../../../../user/model/vo/EdiUserRoleMap.ts"

export class ManageUserEvent extends BaseEvent {
	public static EDIT_USER: string = 'editUser'

	public static ADD_USER: string = 'addUser'
	public static ADD_USER_START1: string = 'addUserStr1'
	public static ADD_USER_START2: string = 'addUserStr2'
	public static ADD_USER_END: string = 'addUserEnd'
	public static DELETE_USER: string = 'deleteUser'
	public static MANAGE_ROLE: string = 'manageRole'
	public static ACTIVE_USER: string = 'inactiveUser'
	public static SAVE_USER: string = 'saveUser'
	public static SAVE_USER_DONE: string = 'saveUserDone'

	private _error: string
	private _user: EdiUserBase
	private _userFacServ: EdiUserFacServForRole
	private _activate: boolean
	private _roleId: string
	private _userRoleMap: EdiUserRoleMap
	private _eventData: ArrayCollection
	private _errorLogs: ArrayCollection

	constructor(type: string, user: EdiUserBase = null, selected: boolean = false, roleId: string = null) {
		super(type)
		this._user = user
		this._activate = selected
		this._roleId = roleId
	}
	/*
		public function ManageUserEvent(type:String, user:EdiUserFacServForRole =null, selected:Boolean=false, roleId:String=null)
		{
			super(type);
			_userFacServ=user
			_activate=selected
			_roleId=roleId
			
		}*/

	public get user(): EdiUserBase {
		return this._user
	}

	public set user(value: EdiUserBase) {
		this._user = value
	}

	public get userFacServ(): EdiUserFacServForRole {
		return this._userFacServ
	}

	public set userFacServ(val: EdiUserFacServForRole) {
		this._userFacServ = val
	}

	public get eventData(): ArrayCollection {
		return this._eventData
	}

	public set eventData(value: ArrayCollection) {
		this._eventData = value
	}

	public get activate(): boolean {
		return this._activate
	}

	public set activate(value: boolean) {
		this._activate = value
	}

	public get roleId(): string {
		return this._roleId
	}

	public set roleId(value: string) {
		this._roleId = value
	}
	//_userRoleMap
	public get userRoleMap(): EdiUserRoleMap {
		return this._userRoleMap
	}

	public set userRoleMap(value: EdiUserRoleMap) {
		this._userRoleMap = value
	}

	/*override*/ public clone(): Event {
		return new ManageUserEvent(this.type, this._user, this._activate, this._roleId)
	}
}
