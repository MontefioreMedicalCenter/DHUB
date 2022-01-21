import GlobalEventDispatcher from "../../../../../../../service/utils/GlobalEventDispatcher"
import ArrayCollection from "../../../../../../../vo/ArrayCollection"
import VoBase from "../../../../../../../vo/VoBase"
import { ClaimsEvent } from "./events/ClaimsEvent.ts"

export class ClaimsModel extends VoBase {

	dispatch(evt) {
		GlobalEventDispatcher.instance().dispatchEvent(evt)
	}

	static instance: any
	static getInstance: () => any
	/** to make getInstance  */

	private _claimHeader: Object

	private _claims: ArrayCollection

	private _errMsg: string

	public get claimHeader(): Object {
		return this._claimHeader
	}

	public set claimHeader(value: Object) {
		this._claimHeader = value
		this.dispatch(new ClaimsEvent(ClaimsEvent.CLAIM_HEADER))
		this.dispatch(new ClaimsEvent(ClaimsEvent.GET_CLAIMS))
	}

	public get claims(): ArrayCollection {
		return this._claims
	}

	public set claims(value: ArrayCollection) {
		this._claims = value
		this.dispatch(new ClaimsEvent(ClaimsEvent.CLAIMS))
	}

	public get errMsg(): string {
		return this._errMsg
	}

	public set errMsg(value: string) {
		this._errMsg = value
		this.dispatch(new ClaimsEvent(ClaimsEvent.CLAIMS))
	}
}

ClaimsModel.prototype.typeName = ClaimsModel.typeName = 'ClaimsModel' //for quick inspection
ClaimsModel.instance = null
ClaimsModel.getInstance = () => {
	if (!ClaimsModel.instance) {
		ClaimsModel.instance = new ClaimsModel()
	}
	return ClaimsModel.instance
}
