import Search from '../../../assets/images/search.png'
import React from 'react'
import { Tooltip } from '@material-ui/core'
import { withStyles } from '@material-ui/styles'

const HtmlTooltip = withStyles(theme => ({
	tooltip: {
		backgroundColor: '#aeb4b1',
		opacity: 0.9,
		color: 'rgba(0, 0, 0, 0.87)',
		maxWidth: 500,
		fontSize: 15,
		// fontSize: theme.typography.pxToRem(12),
		border: '1px solid black',
		padding: 0
	}
}))(Tooltip)

class CustomToolTipRender extends React.Component {
	constructor() {
		super()
		this.state = {
			textData: '',
			visible: 'hidden'
		}
		this._mydata = ''
	}

	get mydata() {
		return this._mydata
	}

	set mydata(val) {
		this._mydata = val
	}

	handleOpenPopup = event => {
		var ppp = this.props
		// console.log(this.props.column.dataField)
		debugger
		if (this.props.column.dataField === 'eagleClaimPaymentCount') {
			return this.setState({ textData: this.props.cell.rowInfo.getData().eagleClaimPaymentStr })
		}
		if (this.props.column.dataField === 'idxmotClaimPaymentCount') {
			return this.setState({ textData: this.props.cell.rowInfo.getData().idxmotClaimPaymentStr })
		}
		if (this.props.column.dataField === 'idxmocClaimPaymentCount') {
			return this.setState({ textData: this.props.cell.rowInfo.getData().idxmocClaimPaymentStr })
		}
		if (this.props.column.dataField === 'hhClaimPaymentCount') {
			return this.setState({ textData: this.props.cell.rowInfo.getData().hhClaimPaymentStr })
		}
		if (this.props.column.dataField === 'hb_epicClaimPaymentCount') {
			//
			return this.setState({ textData: this.props.cell.rowInfo.getData().hb_epicClaimPaymentStr })
		}
		if (this.props.column.dataField === 'pb_epicClaimPaymentCount') {
			//
			return this.setState({ textData: this.props.cell.rowInfo.getData().pb_epicClaimPaymentStr })
		}
		if (this.props.column.dataField === 'hh_epicClaimPaymentCount') {
			return this.setState({ textData: this.props.cell.rowInfo.getData().hh_epicClaimPaymentStr })
		}
		if (this.props.column.dataField === 'satpClaimPaymentCount') {
			return this.setState({ textData: this.props.cell.rowInfo.getData().satpClaimPaymentStr })
		}
		if (this.props.column.dataField === 'dosaClaimPaymentCount') {
			return this.setState({ textData: this.props.cell.rowInfo.getData().dosaClaimPaymentStr })
		}
		if (this.props.column.dataField === 'cercClaimPaymentCount') {
			return this.setState({ textData: this.props.cell.rowInfo.getData().cercClaimPaymentStr })
		}
		if (this.props.column.dataField === 'ucpClaimPaymentCount') {
			return this.setState({ textData: this.props.cell.rowInfo.getData().ucpClaimPaymentStr })
		}
		if (this.props.column.dataField === 'meditechClaimPaymentCount') {
			return this.setState({ textData: this.props.cell.rowInfo.getData().meditechClaimPaymentStr })
		}
		if (this.props.column.dataField === 'zotecClaimPaymentCount') {
			return this.setState({ textData: this.props.cell.rowInfo.getData().zotecClaimPaymentStr })
		}
		if (this.props.column.dataField === 'ucpClaimPaymentCount') {
			return this.setState({ textData: this.props.cell.rowInfo.getData().ucpClaimPaymentStr })
		}
		if (this.props.column.dataField === 'mckessonClaimPaymentCount') {
			return this.setState({ textData: this.props.cell.rowInfo.getData().mckessonClaimPaymentStr })
		}
		if (this.props.column.dataField === 'mckesson2ClaimPaymentCount') {
			return this.setState({ textData: this.props.cell.rowInfo.getData().mckesson2ClaimPaymentStr })
		}
		if (this.props.column.dataField === 'caduceusClaimPaymentCount') {
			return this.setState({ textData: this.props.cell.rowInfo.getData().caduceusClaimPaymentStr })
		}
		if (this.props.column.dataField === 'obgynClaimPaymentCount') {
			return this.setState({ textData: this.props.cell.rowInfo.getData().obgynClaimPaymentStr })
		}
		if (this.props.column.dataField === 'otherClaimPaymentCount') {
			return this.setState({ textData: this.props.cell.rowInfo.getData().otherClaimPaymentStr })
		}
		return this.setState({textData: '*'})
	}

	render() {
		return (
			<div onMouseEnter={() => this.setState({ visible: 'visible' })} onMouseLeave={() => this.setState({ visible: 'hidden' })} style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', columnGap: '10px', margin: '3px' }}>
				{this.props.column.dataField === 'eagleClaimPaymentCount' ? this.props.row.getData().eagleClaimPaymentCount : null}
				{this.props.column.dataField === 'idxmotClaimPaymentCount' ? this.props.row.getData().idxmotClaimPaymentCount : null}
				{this.props.column.dataField === 'hhClaimPaymentCount' ? this.props.row.getData().hhClaimPaymentCount : null}
				{this.props.column.dataField === 'hb_epicClaimPaymentCount' ? this.props.row.getData().hb_epicClaimPaymentCount : null}
				{this.props.column.dataField === 'pb_epicClaimPaymentCount' ? this.props.row.getData().pb_epicClaimPaymentCount : null}
				{this.props.column.dataField === 'ucpClaimPaymentCount' ? this.props.row.getData().ucpClaimPaymentCount : null}
				{this.props.column.dataField === 'satpClaimPaymentCount' ? this.props.row.getData().satpClaimPaymentCount : null}
				{this.props.column.dataField === 'dosaClaimPaymentCount' ? this.props.row.getData().dosaClaimPaymentCount : null}
				{this.props.column.dataField === 'hh_epicClaimPaymentCount' ? this.props.row.getData().hh_epicClaimPaymentCount : null}
				{this.props.column.dataField === 'cercClaimPaymentCount' ? this.props.row.getData().cercClaimPaymentCount : null}
				<HtmlTooltip
					title={
						<div>
							<span style={{ display: 'flex', flexDirection: 'row', fontWeight: 'bold' }}>Remit Report Tool</span>
							<div style={{ margin: '5px', border: '1px solid black' }}>
								<span style={{ display: 'flex', background: 'yellow', border: '1px solid black', fontSize:'10px' }}>CLP01</span>
								<div style={{ height: '156px' }}>
									<textarea style={{ height: '150px', width: '270px', resize: 'none', backgroundColor: '#ffffc8' }} value={this.state.textData} />
								</div>
							</div>
						</div>
					}
					onMouseEnter={this.handleOpenPopup}>
					<div style={{ visibility: this.state.visible, cursor:'pointer' }}>
						<img src={Search} alt="img" />
					</div>
				</HtmlTooltip>
			</div>
		)
	}
}

export default CustomToolTipRender
