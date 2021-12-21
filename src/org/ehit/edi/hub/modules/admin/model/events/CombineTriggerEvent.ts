import { BaseEvent } from '../../../../../../../../flexicious'

export class CombineTriggerEvent extends BaseEvent {
	public static COMBINE: string = 'combine'

	public static ACTIVATE_POLL: string = 'activatePoll'

	private _pollId: string

	private _activate: boolean

	constructor(type: string, pollId: string = null, activate: boolean = false) {
		super(type)

		this._pollId = pollId

		this._activate = activate
	}

	public get pollId(): string {
		return this._pollId
	}

	public get isActivated(): boolean {
		return this._activate
	}

	public clone(): Event {
		return new CombineTriggerEvent(this.type, this._pollId, this._activate)
	}
}
