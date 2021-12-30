import { EdiFileBaseBase } from "./EdiFileBaseBase.ts"

export class EdiFileBase extends EdiFileBaseBase {
	private _reportOnly: boolean = false

	private _removeCRLF: boolean = false

	public get removeCRLF(): boolean {
		return this._removeCRLF
	}

	public set removeCRLF(value: boolean) {
		this._removeCRLF = value
	}

	public get reportOnly(): boolean {
		return this._reportOnly
	}

	public set reportOnly(value: boolean) {
		this._reportOnly = value
	}
}
