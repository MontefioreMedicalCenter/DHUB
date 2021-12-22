import { Checkbox } from '@material-ui/core'
import React from 'react'
import { Red, Green } from '../itemRenderers/ColorCheckBox'
class IsUserActiveRenderer extends React.Component {
	activateUser = e => {
		this.props.column.handleActivateUser(e, this.props)
	}
	render() {
		return (
			<div style={{ display: 'flex', height: '100%', justifyContent: 'center' }}>
				<Checkbox 
                id="activeChk"
                checkedIcon={this.props.row.getData().id.activeFlag === 1 ? <Green /> : <Red />}
                icon={this.props.row.getData().id.activeFlag === 0? <Red /> : <Green />}
                onClick={e => this.activateUser(e)}
                checked={this.props.row.getData().id.activeFlag === 1 ? true : false}
                />
			</div>
		)
	}
}

export default IsUserActiveRenderer
