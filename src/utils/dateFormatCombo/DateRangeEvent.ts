	export class DateRangeEvent extends Event {
	public static SEARCH_BY_DATE_RANGE: string = 'search'

	constructor(type: string, dateRange: DateRange) {
		super(type)
		this._dateRange = dateRange
	}

	private _dateRange: DateRange

	public get dateRange(): DateRange {
		return this._dateRange
	}

	public set dateRange(value: DateRange) {
		this._dateRange = value
	}

	/*override*/ public clone(): Event {
		return new DateRangeEvent(this.type, this.dateRange)
	}
}
