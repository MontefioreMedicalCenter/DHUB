/* eslint-disable react/jsx-key */

import { DateComboBox, DateRange } from "../../flexicious"

export default class EdiDateRangeCombo extends DateComboBox {
	constructor(args) {
		super(args)
		this.setDateRangeOptions([DateRange.DATE_RANGE_CUSTOM])
	}
	
	getSearchRangeEnd = () => {
		return this.grid.props.parentDocument ? this.grid.props.parentDocument.mediator.searchByDateRange(this.getDateRange().startDate, this.getDateRange().startDate, this.getDateRange().endDate) : super.setSearchRangeEnd
	}
}
