import { Button, Tooltip } from '@material-ui/core'
import React from 'react'
import { PagerControl } from '../../../../../flexicious'
import Add from '../../../../../assets/images/User Insert.png'


export default class StyledPager extends PagerControl {
	onAddClick = () => {
		this.grid.addClick()
	}

	render() {
		return (
			<div style={{ height: '35px' }} className="addDiv">
				<Tooltip title="Add">
					<Button id="btnAdd" onClick={this.onAddClick}>
						<div style={{ columnGap: '5px' }}>
							<img src={Add} alt="Add" />
							<span className="pager-add-txt"> Add</span>
						</div>
					</Button>
				</Tooltip>
			</div>
		)
	}
}
