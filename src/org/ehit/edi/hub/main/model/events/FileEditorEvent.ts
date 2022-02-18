import { BaseEvent } from '../../../../../../../flexicious'
import { EdiFileBase } from '../EdiFileBase.ts'

export class FileEditorEvent extends BaseEvent {
	public static VIEW_FILE: string = 'view'
	public static FILE_CONTENT: string = 'content'

	private _fileId: number
	private _file: EdiFileBase

	constructor(type: string, file: EdiFileBase, bubbles: boolean = false, cancelable: boolean = false) {
		super(type)
		this._file = file
	}

	public get fileId(): number {
		return this.file.fileId
	}

	public get file(): EdiFileBase {
		return this._file
	}

	public clone(): Event {
		return new FileEditorEvent(this.type, this._file, this.bubbles, this.cancelable)
	}
}
