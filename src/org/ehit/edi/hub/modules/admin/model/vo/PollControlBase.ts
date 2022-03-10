import ArrayCollection from "../../../../../../../../vo/ArrayCollection"
import VoBase from "../../../../../../../../vo/VoBase"
import { PollControlPK } from "./PollControlPK.ts"

export class PollControlBase extends VoBase{
	private _activeFlag: string
	private _initialProps: string
	private _pollControlDescr: string
	private _id: PollControlPK
	private _pollLogs: ArrayCollection = new ArrayCollection()
	private _systemId: string
	private _deliveryMode: string

	public get id(): PollControlPK {
		return this._id
	}

	public set id(value: PollControlPK) {
		this._id = value
	}

	public set activeFlag(value: string) {
		this._activeFlag = value
	}
	public get activeFlag(): string {
		return this._activeFlag
	}

	public set initialProps(value: string) {
		this._initialProps = value
	}
	public get initialProps(): string {
		return this._initialProps
	}

	public set pollControlDescr(value: string) {
		this._pollControlDescr = value
	}
	public get pollControlDescr(): string {
		return this._pollControlDescr
	}

	public set pollLogs(value: ArrayCollection) {
		this._pollLogs = value
	}
	public get pollLogs(): ArrayCollection {
		return this._pollLogs
	}

	public set systemId(value: string) {
		this._systemId = value
	}
	public get systemId(): string {
		return this._systemId
	}

	public set deliveryMode(value: string) {
		this._deliveryMode = value
	}
	public get deliveryMode(): string {
		return this._deliveryMode
	}
}
