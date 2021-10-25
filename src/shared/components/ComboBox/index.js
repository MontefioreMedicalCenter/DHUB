import React from 'react'
import { MenuItem, FormControl, Select, makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
	formControl: {
		// margin: theme.spacing(0.5),
		minWidth: 90
		// width: '100%'
	},
	selectEmpty: {
		marginTop: theme.spacing(2)
	},
	root: {
		fontSize: '13px'
	}
}))

const ComboBox = ({ value, onChange, dataProvider, valueKey = 'value', labelKey = 'label', comboBoxStyle = {}, refs, id = 'demo-simple-select', name, error, ...more }) => {
	const classes = useStyles()

	return (
		<FormControl variant="outlined" className={classes.formControl}  error={error}>
			<Select
				ref={refs}
				id={id}
				name={name}
				classes={{
					root: classes.root
				}}
				style={comboBoxStyle}
				labelId="demo-simple-select-label"
				value={value}
				onChange={onChange}
				{...more}>
				{(dataProvider || []).map(item => {
					return (
						item && <MenuItem name={item[valueKey] !== null && item[valueKey] !== undefined ? item[valueKey] : item} key={item[valueKey] !== null && item[valueKey] !== undefined ? item[valueKey] : item} value={item[valueKey] !== null && item[valueKey] !== undefined ? item[valueKey] : item}>
							{item[labelKey] !== null && item[labelKey] !== undefined ? item[labelKey] : item}
						</MenuItem>
					)
				})}
			</Select>
		</FormControl>
	)
}

export default ComboBox
