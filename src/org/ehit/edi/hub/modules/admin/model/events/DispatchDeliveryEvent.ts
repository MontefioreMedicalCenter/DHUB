import { BaseEvent } from "../../../../../../../../flexicious"
import ArrayCollection from "../../../../../../../../vo/ArrayCollection"

export class DispatchDeliveryEvent extends BaseEvent {
	public static DELIVERY_EDITOR: string = 'deliveryEditor'

	public static DISPATCH_DELIVERY: string = 'dispatchDelivery'

	public static ACTIVATE_DELIVERY: string = 'activateDelivery'

	public static REMOTE_DIR_LIST: string = 'dirListDelivery'

	public static REMOTE_DIR_LIST_RESULT: string = 'dirListResultDelivery'

	public static REMOTE_SUBDIR_LIST: string = 'subDirListDelivery'

	public static REMOTE_SUBDIR_LIST_RESULT: string = 'subDirListResultDelivery'

	private _deliveryId: string

	private _activate: boolean

	private _dirListResult: ArrayCollection

	private _dirListErrorMsg: string

	private _dirName: string

	private _fileContent: ByteArray

	private _fileProperties: string

	constructor(type: string, configId: string = null, activate: boolean = false) {
		super(type)

		this._deliveryId = configId

		this._activate = activate
	}

	public get deliveryId(): string {
		return this._deliveryId
	}

	public get isActivated(): boolean {
		return this._activate
	}

	public get dirListResult(): ArrayCollection {
		return this._dirListResult
	}

	public set dirListResult(value: ArrayCollection) {
		this._dirListResult = value
	}

	public get dirListErrorMsg(): string {
		return this._dirListErrorMsg
	}

	public set dirListErrorMsg(value: string) {
		this._dirListErrorMsg = value
	}

	public get dirName(): string {
		return this._dirName
	}

	public set dirName(value: string) {
		this._dirName = value
	}

	/*override*/ public clone(): Event {
		return new DispatchDeliveryEvent(this.type, this._deliveryId, this._activate)
	}

	public get fileProperties(): string {
		return this._fileProperties
	}

	public set fileProperties(value: string) {
		this._fileProperties = value
	}

	public get fileContent(): ByteArray {
		return this._fileContent
	}

	public set fileContent(value: ByteArray) {
		this._fileContent = value
	}
}
