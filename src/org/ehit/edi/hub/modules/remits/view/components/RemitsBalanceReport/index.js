import { Paper, Tab, Tabs } from '@material-ui/core'
import React from 'react'
import './remitBalanceReport.scss'
import RemitsReport from '../RemitsReport'
import RemitsSurcharge from '../RemitsSurcharge'
import RemitsPLB from '../RemitsPLB'
import { RemitsService } from '../../../service/RemitsService.ts'
// import { ReportContainerMediator } from '../../../../../main/view/ReportContainerMediator.ts'

class RemitsBalanceReport extends React.Component {
	constructor() {
		super()
		this.state = {
			tab: 0,
			sender: '',
			fileOwner: '',
			runDate: '',
			intDate: ''
		}
	}

	handleChange = (event, value) => {
		this.setState({ tab: value })
		var service = RemitsService.getInstance()
		if (value === 0) {
			service.runRemitsReport(this.props.fileData)
		}
	}

	handleOnClick = (event) => {
		this.props.parentDocument.mediator.showUCP(event)
	}

	render() {
		return (
			<div>
				<Paper>
					<span className="reportHeader"> 835 Remittance BPR Report </span>
					<div className="fileDetailStyle">
						<div className="details" style={{ width: '215px' }}>
							Sender:<span>{this.state.sender}</span>
						</div>
						<div className="details" style={{ width: '150px' }}>
							Orig. File Owner:<span>{this.state.fileOwner}</span>
						</div>
						<div className="details" style={{ width: '160px' }}>
							Run Date:<span>{this.state.runDate}</span>
						</div>
						<div className="details">
							Interchange Date:<span>{this.state.intDate}</span>
						</div>
						<div className="details" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
							UCP Only&nbsp;
							<div>
								<input type="checkbox" id="chkUCP" style={{ height: '15px', width: '30px' }} onClick={(event) => this.handleOnClick(event)}/>
							</div>
						</div>
					</div>
				</Paper>
				<Tabs
					value={this.state.tab}
					onChange={this.handleChange}
					centered
					className="tabStyle"
					TabIndicatorProps={{
						style: {
							backgroundColor: '#000000'
						}
					}}>
					<Tab style={{ margin: '0px', backgroundColor: '#82988c', color: this.state.tab === 0 ? 'white' : 'black' }} label="Remits" />
					<Tab style={{ margin: '0px', backgroundColor: '#82988c', color: this.state.tab === 1 ? 'white' : 'black' }} label="Surcharge" />
					<Tab style={{ margin: '0px', backgroundColor: '#82988c', color: this.state.tab === 2 ? 'white' : 'black' }} label="Adjustment" />
				</Tabs>
				<Paper style={{ height: 650 }}>
					{this.state.tab === 0 && <RemitsReport ref={g => (this.remitsReport = g)} />}
					{this.state.tab === 1 && <RemitsSurcharge ref={g => (this.remitsSurcharge = g)} />}
					{this.state.tab === 2 && <RemitsPLB ref={g => (this.remitsPLB = g)} />}
				</Paper>
			</div>
		)
	}
}

export default RemitsBalanceReport
