import ArrayCollection from "../../../../../../../../vo/ArrayCollection"
import VoBase from "../../../../../../../../vo/VoBase"
import { DeliveryControlPK } from "./DeliveryControlPK.ts"

export class DeliveryControlBase extends VoBase {
	private _activeFlag: string
	private _deliveryConfigId: string
	private _id: DeliveryControlPK
	private _deliveryDescr: string
	private _deliveryLogs: ArrayCollection = new ArrayCollection()
	private _profileId: string
	private _receivingSystem: string
	private _stepNo: string

	//	private var _deliveryLogs:ListCollectionView;

	public get id(): DeliveryControlPK {
		return this._id
	}

	public set id(value: DeliveryControlPK) {
		this._id = value
	}

	public set activeFlag(value: string) {
		this._activeFlag = value
	}
	public get activeFlag(): string {
		return this._activeFlag
	}

	public set deliveryConfigId(value: string) {
		this._deliveryConfigId = value
	}
	public get deliveryConfigId(): string {
		return this._deliveryConfigId
	}

	public set deliveryDescr(value: string) {
		this._deliveryDescr = value
	}
	public get deliveryDescr(): string {
		return this._deliveryDescr
	}

	/*public function set deliveryLogs(value:ListCollectionView):void {
			_deliveryLogs = value;
		}
		public function get deliveryLogs():ListCollectionView {
			return _deliveryLogs;
		}*/

	public set profileId(value: string) {
		this._profileId = value
	}
	public get profileId(): string {
		return this._profileId
	}

	public set receivingSystem(value: string) {
		this._receivingSystem = value
	}
	public get receivingSystem(): string {
		return this._receivingSystem
	}

	public get stepNo(): string {
		return this._stepNo
	}

	public set stepNo(value: string) {
		this._stepNo = value
	}
}
