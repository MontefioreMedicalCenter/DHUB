import VoBase from "../../../../../../../../vo/VoBase"

export class PollLogPKBase extends VoBase{
	private _facilityId: string

	private _serviceAreaId: string

	private _fileId: number

	public get facilityId(): string {
		return this._facilityId
	}

	public set facilityId(value: string) {
		this._facilityId = value
	}

	public get serviceAreaId(): string {
		return this._serviceAreaId
	}

	public set serviceAreaId(value: string) {
		this._serviceAreaId = value
	}

	public get fileId(): number {
		return this._fileId
	}

	public set fileId(value: number) {
		this._fileId = value
	}
}
