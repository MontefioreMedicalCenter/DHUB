import React from 'react'
import MaterialDatePicker from '../../../shared/components/ExtendedDataGrid/material/adapter/datepicker/MaterialDatePicker'

const RemitsQuickSearchDatePicker = ({ RemitsQuickSearchDatePickerStyle = {}, refs, onDateChange, selectedDate, disabled, ...more }) => {

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
            InputProps={{
					inputProps: {
						style: {
							height: '35px',
							padding: '5px',
							fontSize: '13px',
							fontFamily: 'sans-serif'
						}
					}
				}}
			AFstyle={RemitsQuickSearchDatePickerStyle}
			{...more}
		/>
	)
}

export default RemitsQuickSearchDatePicker