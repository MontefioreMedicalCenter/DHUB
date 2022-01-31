import GlobalEventDispatcher from '../../../../../../../service/utils/GlobalEventDispatcher'
import ArrayCollection from '../../../../../../../vo/ArrayCollection'
import VoBase from '../../../../../../../vo/VoBase'
import RemitsEvent from './events/RemitsEvent.ts'

export default class RemitsModel extends VoBase {
	/** to make getInstance  */
	dispatch(evt) {
		GlobalEventDispatcher.instance().dispatchEvent(evt)
	}

	static instance: any
	static getInstance: () => any
	/** to make getInstance  */
	private _remitsHeader: Object
	private _remits: ArrayCollection

	private _errMsg: string

	public get remitHeader(): Object {
		return this._remitsHeader
	}

	public set remitHeader(value: Object) {
		this._remitsHeader = value
		if (this._remitsHeader != null) this.dispatch(new RemitsEvent(RemitsEvent.REMIT_HEADER))
	}

	public get remits(): ArrayCollection {
		return this._remits
	}

	public set remits(value: ArrayCollection) {
		this._remits = value
		this.dispatch(new RemitsEvent(RemitsEvent.REMITS))
	}

	public get errMsg(): string {
		return this._errMsg
	}

	public set errMsg(value: string) {
		this._errMsg = value
		this.dispatch(new RemitsEvent(RemitsEvent.REMITS))
	}
}

RemitsModel.prototype.typeName = RemitsModel.typeName = 'RemitsModel' //for quick inspection
RemitsModel.instance = null
RemitsModel.getInstance = () => {
	if (!RemitsModel.instance) {
		RemitsModel.instance = new RemitsModel()
	}
	return RemitsModel.instance
}
