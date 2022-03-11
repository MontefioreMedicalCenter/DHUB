import VoBase from "../../../../../../../../vo/VoBase"

export class XMessageBase extends VoBase {
	//    private var _account:Account;
	private _messageContent: ByteArray
	private _messageDestination: string
	private _messageType: string
	private _userProperties: Object

	/* public function set account(value:Account):void {
            _account = value;
        }
        public function get account():Account {
            return _account;
        }*/

	public set messageContent(value: ByteArray) {
		this._messageContent = value
	}
	public get messageContent(): ByteArray {
		return this._messageContent
	}

	public set messageDestination(value: string) {
		this._messageDestination = value
	}
	public get messageDestination(): string {
		return this._messageDestination
	}

	public set messageType(value: string) {
		this._messageType = value
	}
	public get messageType(): string {
		return this._messageType
	}

	public set userProperties(value: Object) {
		this._userProperties = value
	}
	public get userProperties(): Object {
		return this._userProperties
	}
}
