import { BaseEvent } from '../../../../../../../../flexicious'
import ArrayCollection from '../../../../../../../../vo/ArrayCollection'

export class ErrorLogEvent extends BaseEvent {
	public static RESUBMIT_CONTENT: string = 'resubmitContent'
	public static REPUBLISH_MSG: string = 'republish'

	public static DELETE_ERROR: string = 'deleteError'

	private _error: string
	private _errorLog: EdiErrorStore

	private _errorLogs: ArrayCollection
	constructor(type: string, errorLog: EdiErrorStore = null, errorLogs: ArrayCollection = null) {
		super(type)
		//	_error=error;
		this._errorLog = errorLog
		this._errorLogs = errorLogs
	}

	public get errMsg(): string {
		return this._error
	}

	public get errLog(): EdiErrorStore {
		return this._errorLog
	}

	public get errLogs(): ArrayCollection {
		return this._errorLogs
	}

	/*override*/ public clone(): Event {
		return new ErrorLogEvent(this.type, this._errorLog)
	}
}
