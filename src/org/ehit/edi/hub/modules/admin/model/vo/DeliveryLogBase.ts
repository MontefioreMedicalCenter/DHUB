import VoBase from "../../../../../../../../vo/VoBase"
import { DeliveryControl } from "./DeliveryControl.ts"
import { DeliveryLogPK } from "./DeliveryLogPK.ts"

export class DeliveryLogBase extends VoBase {
	private _deliveryControl: DeliveryControl
	private _fileId: number
	private _filename: string
	private _id: DeliveryLogPK
	private _postFileId: number
	private _instanceId: number
	private _status: string

	/*public function set configId(value:String):void
		{
			_configId=value;
		}

		public function get configId():String
		{
			return _configId;
		}
*/
	public set deliveryControl(value: DeliveryControl) {
		this._deliveryControl = value
	}

	public get deliveryControl(): DeliveryControl {
		return this._deliveryControl
	}
	/*
		public function set deliveryControlId(value:String):void
		{
			_deliveryControlId=value;
		}

		public function get deliveryControlId():String
		{
			return _deliveryControlId;
		}*/

	public set fileId(value: number) {
		this._fileId = value
	}

	public get fileId(): number {
		return this._fileId
	}

	public set filename(value: string) {
		this._filename = value
	}

	public get filename(): string {
		return this._filename
	}

	/*public function set logDatetime(value:Date):void
		{
			_logDatetime=value;
		}

		public function get logDatetime():Date
		{
			return _logDatetime;
		}*/

	public set id(value: DeliveryLogPK) {
		this._id = value
	}
	public get id(): DeliveryLogPK {
		return this._id
	}

	public set postFileId(value: number) {
		this._postFileId = value
	}

	public get postFileId(): number {
		return this._postFileId
	}

	public set instanceId(value: number) {
		this._instanceId = value
	}
	public get instanceId(): number {
		return this._instanceId
	}

	public set status(value: string) {
		this._status = value
	}
	public get status(): string {
		return this._status
	}
}
