import GlobalEventDispatcher from '../../../../../../../service/utils/GlobalEventDispatcher'
import ArrayCollection from '../../../../../../../vo/ArrayCollection'
import VoBase from '../../../../../../../vo/VoBase'
import EdiUserRoleMap from '../../../user/model/vo/EdiUserRoleMap.ts'
import { AdminEvent } from './events/AdminEvent.ts'

export class AdminModel extends VoBase {

	dispatch(evt) {
		GlobalEventDispatcher.instance().dispatchEvent(evt)
	}

	static instance: any
	static getInstance: () => any
	/** to make getInstance  */

	private _pollLogs: ArrayCollection

	private _deliveryLogs: ArrayCollection

	private _combineTriggers: ArrayCollection

	private _pollControls: ArrayCollection

	private _pollerStatus: boolean

	private _deliveryControls: ArrayCollection = new ArrayCollection()

	private _errorLogs: ArrayCollection = new ArrayCollection()

	private _usersAndRoles: ArrayCollection = new ArrayCollection()

	private _userRoleMap: EdiUserRoleMap

	private _errMsg: string

	public get pollLog(): ArrayCollection {
		return this._pollLogs
	}

	public set pollLog(value: ArrayCollection) {
		this._pollLogs = value
		this._errMsg = null
		this.dispatch(new AdminEvent(AdminEvent.POLL_LOG))
	}

	public get deliveryLog(): ArrayCollection {
		return this._deliveryLogs
	}

	public set deliveryLog(value: ArrayCollection) {
		this._deliveryLogs = value
		this._errMsg = null
		this.dispatch(new AdminEvent(AdminEvent.DELIVERY_LOG))
	}

	public get combineTrigger(): ArrayCollection {
		return this._combineTriggers
	}

	public set combineTrigger(value: ArrayCollection) {
		this._combineTriggers = value
		this._errMsg = null
		this.dispatch(new AdminEvent(AdminEvent.COMBINE_TRIGGER))
	}

	public get pollControl(): ArrayCollection {
		return this._pollControls
	}

	public set pollControl(value: ArrayCollection) {
		this._pollControls = value
		this._errMsg = null
		this.dispatch(new AdminEvent(AdminEvent.POLL_CONTROL))
	}

	public get deliveryControl(): ArrayCollection {
		return this._deliveryControls
	}

	public set deliveryControl(value: ArrayCollection) {
		this._deliveryControls = value
		this._errMsg = null
		this.dispatch(new AdminEvent(AdminEvent.DELIVERY_CONTROL))
	}

	public get errorLog(): ArrayCollection {
		return this._errorLogs
	}

	public set errorLog(value: ArrayCollection) {
		this._errorLogs = value
		this._errMsg = null
		this.dispatch(new AdminEvent(AdminEvent.ERROR_LOG))
	}

	public get errMsg(): string {
		return this._errMsg
	}

	public set errMsg(value: string) {
		this._errMsg = value
		this.dispatch(new AdminEvent(AdminEvent.ERROR_MSG))
	}

	public get usersAndRoles(): ArrayCollection {
		return this._usersAndRoles
	}

	public set usersAndRoles(value: ArrayCollection) {
		this._usersAndRoles = value
		this._errMsg = null
		this.dispatch(new AdminEvent(AdminEvent.USERS_AND_ROLES))
	}

	public get userRoleMap(): EdiUserRoleMap {
		return this._userRoleMap
	}

	public set userRoleMap(value: EdiUserRoleMap) {
		this._userRoleMap = value
	}

	public get pollerStatus(): boolean {
		return this._pollerStatus
	}

	public set pollerStatus(value: boolean) {
		this._pollerStatus = value
		this.dispatch(new AdminEvent(AdminEvent.POLLER_STATUS))
	}
}

AdminModel.prototype.typeName = AdminModel.typeName = 'AdminModel' //for quick inspection
AdminModel.instance = null
AdminModel.getInstance = () => {
	if (!AdminModel.instance) {
		AdminModel.instance = new AdminModel()
	}
	return AdminModel.instance
}
