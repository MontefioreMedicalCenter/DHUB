import VoBase from "../../../../../../../../vo/VoBase"
import { PollControl } from "./PollControl.ts"
import { PollLogPK } from "./PollLogPK.ts"

export class PollLogBase extends VoBase{
	private _configId: string
	private _fileId: number
	private _filename: string
	private _logDatetime: Date
	private _pollControl: PollControl
	private _id: PollLogPK

	public get id(): PollLogPK {
		return this._id
	}

	public set id(value: PollLogPK) {
		this._id = value
	}

	public set configId(value: string) {
		this._configId = value
	}

	public get configId(): string {
		return this._configId
	}

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

	public set logDatetime(value: Date) {
		this._logDatetime = value
	}

	public get logDatetime(): Date {
		return this._logDatetime
	}
}
