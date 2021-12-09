import ArrayCollection from '../../../../../../../vo/ArrayCollection'
import VoBase from '../../../../../../../vo/VoBase'
import RemitsEvent from './events/RemitsEvent.ts'

export default class RemitsModel extends VoBase {
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
