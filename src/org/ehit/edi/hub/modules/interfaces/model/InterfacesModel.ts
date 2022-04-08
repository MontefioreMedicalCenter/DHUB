import GlobalEventDispatcher from "../../../../../../../service/utils/GlobalEventDispatcher"
import ArrayCollection from "../../../../../../../vo/ArrayCollection"
import VoBase from "../../../../../../../vo/VoBase"
import { InterfacesEvent } from "./events/InterfacesEvent.ts"

export class InterfacesModel extends VoBase {

	dispatch(evt) {
		GlobalEventDispatcher.instance().dispatchEvent(evt)
	}

	static instance: any
	static getInstance: () => any
	/** to make getInstance  */

	//private _claimHeader: Object

	private _interfaces: ArrayCollection

	private _errMsg: string

    private _resubmitPayer:boolean

    /*
	public get claimHeader(): Object {
		return this._claimHeader
	}

	public set claimHeader(value: Object) {
		this._claimHeader = value
		this.dispatch(new ClaimsEvent(ClaimsEvent.CLAIM_HEADER))
		this.dispatch(new ClaimsEvent(ClaimsEvent.GET_CLAIMS))
	}
    */

	public get interfaces(): ArrayCollection {
		return this._interfaces
	}

	public set interfaces(value: ArrayCollection) {
		this._interfaces = value
		//this.dispatch(new InterfacesEvent(InterfacesEvent.INTERFACES))
	}

	public get errMsg(): string {
		return this._errMsg
	}

	public set errMsg(value: string) {
		this._errMsg = value
		//this.dispatch(new ClaimsEvent(ClaimsEvent.CLAIMS))
	}

    public get resubmitPayer():boolean{
        return this._resubmitPayer
    }

    public set resubmitPayer(value:boolean){
        this._resubmitPayer = value
    }
}

InterfacesModel.prototype.typeName = InterfacesModel.typeName = 'InterfacesModel' //for quick inspection
InterfacesModel.instance = null
InterfacesModel.getInstance = () => {
	if (!InterfacesModel.instance) {
		InterfacesModel.instance = new InterfacesModel()
	}
	return InterfacesModel.instance
}
