export class StringBuffer {
	public buffer: any[] = new Array()

	public append(str: string): void {
		for (var i: number = 0; i < str.length; i++) {
			this.buffer.push(str.charCodeAt(i))
		}
	}

	public toString(): string {
		return String.fromCharCode.apply(this, this.buffer)
	}
}
