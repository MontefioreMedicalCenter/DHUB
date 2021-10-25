import React from 'react'
import TextField from '@material-ui/core/TextField'

const TextFeildComponent = props => {
	const { ...more } = props
	return (
		<React.Fragment>
			<TextField id={props.id} label={props.label} variant="outlined" type={props.type} value={props.value} onChange={props.onChange} error={props.error || false} {...more} />
		</React.Fragment>
	)
}

export default TextFeildComponent
