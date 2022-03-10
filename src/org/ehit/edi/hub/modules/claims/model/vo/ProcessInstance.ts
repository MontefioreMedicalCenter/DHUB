import ArrayCollection from "../../../../../../../../vo/ArrayCollection"
import VoBase from "../../../../../../../../vo/VoBase"
import { ProcessInstancePK } from "./ProcessInstancePK.ts"

export class ProcessInstance extends VoBase{
	private _fileId: number
	private _fileName: string
	private _instanceEndTime: Date
	private _id: ProcessInstancePK
	private _instanceStartTime: Date
	private _processDescription: string
	private _processInstanceSteps: ArrayCollection = new ArrayCollection()
	private _processName: string
	private _processStatus: string
	private _receiverName: string
	private _senderName: string
	private _totalDollarAmt: number
	private _totalTransactionCount: number
	private _transactionType: string

	public get id(): ProcessInstancePK {
		return this._id
	}

	public set id(value: ProcessInstancePK) {
		this._id = value
	}

	public set fileId(value: number) {
		this._fileId = value
	}
	public get fileId(): number {
		return this._fileId
	}

	public set fileName(value: string) {
		this._fileName = value
	}
	public get fileName(): string {
		return this._fileName
	}

	public set instanceEndTime(value: Date) {
		this._instanceEndTime = value
	}
	public get instanceEndTime(): Date {
		return this._instanceEndTime
	}

	public set instanceStartTime(value: Date) {
		this._instanceStartTime = value
	}
	public get instanceStartTime(): Date {
		return this._instanceStartTime
	}

	public set processDescription(value: string) {
		this._processDescription = value
	}
	public get processDescription(): string {
		return this._processDescription
	}

	public set processInstanceSteps(value: ArrayCollection) {
		this._processInstanceSteps = value
	}
	public get processInstanceSteps(): ArrayCollection {
		return this._processInstanceSteps
	}

	public set processName(value: string) {
		this._processName = value
	}
	public get processName(): string {
		return this._processName
	}

	public set processStatus(value: string) {
		this._processStatus = value
	}
	public get processStatus(): string {
		return this._processStatus
	}

	public set receiverName(value: string) {
		this._receiverName = value
	}
	public get receiverName(): string {
		return this._receiverName
	}

	public set senderName(value: string) {
		this._senderName = value
	}
	public get senderName(): string {
		return this._senderName
	}

	public set totalDollarAmt(value: number) {
		this._totalDollarAmt = value
	}
	public get totalDollarAmt(): number {
		return this._totalDollarAmt
	}

	public set totalTransactionCount(value: number) {
		this._totalTransactionCount = value
	}
	public get totalTransactionCount(): number {
		return this._totalTransactionCount
	}

	public set transactionType(value: string) {
		this._transactionType = value
	}
	public get transactionType(): string {
		return this._transactionType
	}
}
