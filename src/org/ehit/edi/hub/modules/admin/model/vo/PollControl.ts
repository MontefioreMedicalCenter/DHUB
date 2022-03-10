import { PollControlBase } from "./PollControlBase.ts"

export class PollControl extends PollControlBase {
	private _stagedLink: string

	public get stagedLink(): string {
		this._stagedLink = this.initialProps.substr('StagingDir')
		this._stagedLink = this._stagedLink.substring(this.initialProps.indexOf('/'))

		return this._stagedLink
	}

	public set stagedLink(value: string) {
		this._stagedLink = value
	}
}
