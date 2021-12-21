import { Checkbox } from '@material-ui/core'
import React from 'react'
import { Red, Green } from '../itemRenderers/ColorCheckBox'
class ActiveitemRenderer extends React.Component {
	activatePoll = e => {
		this.props.column.handleActivatePoll(e, this.props)
	}
	render() {
		return (
			<div style={{ display: 'flex', height: '100%', justifyContent: 'center' }}>
				<Checkbox id="activeChk" checkedIcon={this.props.row.getData().activeFlag === 'Y' ? <Green /> : <Red />} icon={this.props.row.getData().activeFlag === 'N' ? <Red /> : <Green />} onClick={e => this.activatePoll(e)} checked={this.props.row.getData().activeFlag === 'Y' ? true : false} />
			</div>
		)
	}
}

export default ActiveitemRenderer
