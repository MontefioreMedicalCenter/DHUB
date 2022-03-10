import VoBase from "../../../../../../../../vo/VoBase"

export class DirectoryListEntryBase extends VoBase{
	private _adjustedFileDate: Date
	private _fileDate: Date
	private _fileName: string
	private _fileSize: number
	private _isDir: boolean
	private _rawDirListEntry: string
	private _timeOffset: number

	public get adjustedFileDate(): Date {
		return this._adjustedFileDate
	}

	public set fileDate(value: Date) {
		this._fileDate = value
	}
	public get fileDate(): Date {
		return this._fileDate
	}

	public set fileName(value: string) {
		this._fileName = value
	}
	public get fileName(): string {
		return this._fileName
	}

	public set fileSize(value: number) {
		this._fileSize = value
	}
	public get fileSize(): number {
		return this._fileSize
	}

	public set isDir(value: boolean) {
		this._isDir = value
	}
	public get isDir(): boolean {
		return this._isDir
	}

	public set rawDirListEntry(value: string) {
		this._rawDirListEntry = value
	}
	public get rawDirListEntry(): string {
		return this._rawDirListEntry
	}

	public set timeOffset(value: number) {
		this._timeOffset = value
	}
	public get timeOffset(): number {
		return this._timeOffset
	}
}
