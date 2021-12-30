import VoBase from "../../../../../../../../vo/VoBase"

export class EdiErrorStoreBase extends VoBase {
	private _componentName: string
	private _id: EdiErrorStorePK
	private _errorLevel: number
	private _errorMessage: string
	private _fileId: number
	//private var _msgContent:ByteArray;
	private _msgDestination: string
	private _msgLastSend: Date
	private _msgOrigSend: Date
	private _msgStatus: string
	private _stackTrace: string
	private _userProps: string

	public get id(): EdiErrorStorePK {
		return this._id
	}

	public set id(value: EdiErrorStorePK) {
		this._id = value
	}

	public set componentName(value: string) {
		this._componentName = value
	}

	public get componentName(): string {
		return this._componentName
	}

	public set errorLevel(value: number) {
		this._errorLevel = value
	}

	public get errorLevel(): number {
		return this._errorLevel
	}

	public set errorMessage(value: string) {
		this._errorMessage = value
	}

	public get errorMessage(): string {
		return this._errorMessage
	}

	public set fileId(value: number) {
		this._fileId = value
	}
	public get fileId(): number {
		return this._fileId
	}

	/*public function set msgContent(value:ByteArray):void
		{
			_msgContent=value;
		}

		public function get msgContent():ByteArray
		{
			return _msgContent;
		}*/

	public set msgDestination(value: string) {
		this._msgDestination = value
	}

	public get msgDestination(): string {
		return this._msgDestination
	}

	public set msgLastSend(value: Date) {
		this._msgLastSend = value
	}

	public get msgLastSend(): Date {
		return this._msgLastSend
	}

	public set msgOrigSend(value: Date) {
		this._msgOrigSend = value
	}

	public get msgOrigSend(): Date {
		return this._msgOrigSend
	}

	public set msgStatus(value: string) {
		this._msgStatus = value
	}

	public get msgStatus(): string {
		return this._msgStatus
	}

	public set stackTrace(value: string) {
		this._stackTrace = value
	}

	public get stackTrace(): string {
		return this._stackTrace
	}

	public set userProps(value: string) {
		this._userProps = value
	}

	public get userProps(): string {
		return this._userProps
	}
}
