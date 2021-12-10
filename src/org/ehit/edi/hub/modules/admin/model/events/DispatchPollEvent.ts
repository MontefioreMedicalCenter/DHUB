import { BaseEvent } from "../../../../../../../../flexicious"
import ArrayCollection from "../../../../../../../../vo/ArrayCollection"

export class DispatchPollEvent extends BaseEvent {
	public static DISPATCH_POLL: string = 'dispatchPoll'

	public static ACTIVATE_POLL: string = 'activatePoll'

	public static REMOTE_DIR_LIST: string = 'dirListPoll'

	public static REMOTE_DIR_LIST_RESULT: string = 'dirListResultPoll'

	public static REMOTE_SUBDIR_LIST: string = 'subDirListPoll'

	public static REMOTE_SUBDIR_LIST_RESULT: string = 'subDirListResultPoll'

	public static PING_RESULT: string = 'pingResult'

	private _pollId: string

	private _activate: boolean

	private _dirListResult: ArrayCollection

	private _dirListErrorMsg: string

	private _dirName: string

	constructor(type: string, configId: string = null, activate: boolean = false) {
		super(type)

		this._pollId = configId

		this._activate = activate
	}

	public get pollId(): string {
		return this._pollId
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
		return new DispatchPollEvent(this.type, this._pollId, this._activate)
	}
}
