import GlobalEventDispatcher from "../../../../../../../service/utils/GlobalEventDispatcher"
import ArrayCollection from "../../../../../../../vo/ArrayCollection"
import VoBase from "../../../../../../../vo/VoBase"
import { BankEFTEvent } from "./events/BankEFTEvent.ts"

export class BankEFTModel extends VoBase {

	dispatch(evt) {
		GlobalEventDispatcher	.instance().dispatchEvent(evt)
	}

	static instance: any
	static getInstance: () => any

	private _bankEFTHeader: Object
	private _bankEFT: ArrayCollection

	private _errMsg: string

	public get bankEFTHeader(): Object {
		return this._bankEFTHeader
	}

	public set bankEFTHeader(value: Object) {
		this._bankEFTHeader = value
		if (this._bankEFTHeader != null) this.dispatch(new BankEFTEvent(BankEFTEvent.BANKEFT_HEADER))
	}

	public get bankEFT(): ArrayCollection {
		return this._bankEFT
	}

	public set bankEFT(value: ArrayCollection) {
		this._bankEFT = value
		this.dispatch(new BankEFTEvent(BankEFTEvent.BANKEFT))
	}

	public get errMsg(): string {
		return this._errMsg
	}

	public set errMsg(value: string) {
		this._errMsg = value
		this.dispatch(new BankEFTEvent(BankEFTEvent.BANKEFT))
	}
}

BankEFTModel.prototype.typeName = BankEFTModel.typeName = 'BankEFTModel' //for quick inspection
BankEFTModel.instance = null
BankEFTModel.getInstance = () => {
	if (!BankEFTModel.instance) {
		BankEFTModel.instance = new BankEFTModel()
	}
	return BankEFTModel.instance
}
