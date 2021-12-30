import React from 'react'
import MaterialDatePicker from '../../../shared/components/ExtendedDataGrid/material/adapter/datepicker/MaterialDatePicker'

const LogSearchDatePicker = ({ LogSearchDatePickerStyle = {}, refs, onDateChange, selectedDate, disabled, ...more }) => {

	return (
		<MaterialDatePicker
			refs={refs}
			format={'MM/DD/YYYY'}
			invalidDateMessage=""
			keyboard
			color=" "
			disableOnBlur
			selectedDate={selectedDate}
			onDateChange={onDateChange}
			disabled={disabled}
			AFstyle={LogSearchDatePickerStyle}
			{...more}
		/>
	)
}

export default LogSearchDatePicker
