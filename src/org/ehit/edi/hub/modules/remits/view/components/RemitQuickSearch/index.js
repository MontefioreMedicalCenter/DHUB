import { Button, Checkbox, Paper, styled, TextField } from '@material-ui/core'
import React from 'react'
import RemitsQuickSearchDatePicker from '../../../../../../../../../container/views/itemRenderers/RemitsQuickSearchDatePicker'
import { EventDispatcher } from '../../../../../../../../../flexicious'
// import ComboBox from '../../../../../../../../../shared/components/ComboBox'
import MultiSelectComboBox from '../../../../../../../../../shared/components/MultiSelectComboBox'
import { RemitsSearchMediator } from '../../RemitsSearchMediator.ts'
import RemitDetail from './RemitDetail'
import RemitCore from './RemitCore'

import './remitsQuickSearch.scss'

const ColorButton = styled(Button)(({ theme }) => ({
	color: theme.palette.getContrastText('#cec0c0'),
	background: 'linear-gradient(153deg, #fefcfc, #848b87)'
}))

class RemitQuickSearch extends EventDispatcher {
	constructor(props) {
		super(props)
		this.state = {
			payerNmBtn_dataProvider: [],
			systemIdBtn_dataProvider: [],
			statusBtn_dataProvider: [],
			payerId: '',
			patId: '',
			patFName: '',
			claimNo: '',
			patLName: '',
			chkNo: '',
			startDate: new Date(),
			endDate: new Date(),
			systemIdBtnSelectedData: [],
			systemIdBtnLabel: '',
			statusBtnLabel: '',
			payerNmBtnLabel: '',
			statusBtnData: [],
			payerNmBtnData: [],
			payerIdError: false,
			patIdError: false,
			patFNameError: false,
			chkNoError: false,
			claimNoError: false,
			radioValue: 'fileDate',
			hideCore: true,
			hideDetails: true
		}
	}

	componentDidMount() {
		this.mediator = new RemitsSearchMediator().onRegister(this)
	}

	handleOnClear = () => {
		this.mediator.clearSearch()
	}

	handleOnSearch = () => {
		this.mediator.remitQuickSearch()
	}

	handleDateChange = (date, key) => {
		this.setState({ [key]: date })
	}

	handleChangeCombo = (selectedData, selectedDataString, event) => {
		if (event.id === 'systemIdBtn') {
			this.setState({ systemIdBtnLabel: selectedDataString, systemIdBtnSelectedData: selectedData })
		}
		if (event.id === 'statusBtn') {
			this.setState({ statusBtnLabel: selectedDataString, statusBtnData: selectedData })
		}
		if (event.id === 'payerNmBtn') {
			this.setState({ payerNmBtnLabel: selectedDataString, payerNmBtnData: selectedData })
		}
	}

	handleDeSelectAll = (selectedData, selectedDataString, value) => {
		if (value.includes('systemIdBtn')) {
			this.setState({ systemIdBtnLabel: selectedDataString, systemIdBtnSelectedData: selectedData })
		}
		if (value.includes('statusBtn')) {
			this.setState({ statusBtnLabel: selectedDataString, statusBtnData: selectedData })
		}
		if (value.includes('payerNmBtn')) {
			this.setState({ payerNmBtnLabel: selectedDataString, payerNmBtnData: selectedData })
		}
	}

	handleOnRadioClick = value => {
		this.setState({ radioValue: value })
	}

	render() {
		return (
			<Paper className="pageStyleRemitsQuickSearch">
				<div style={{ height: '100%', padding: '5px' }}>
					<div className="column-divider">
						<div className="mainDiv">
							<div className="line">
								<span className="font" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
									{' '}
									Received Date{' '}
								</span>
								<div className="line">
									<div className="center">
										<input type="radio" id="fileDate" name="radioBtn" value="fileDate" onClick={() => this.handleOnRadioClick('fileDate')} defaultChecked={true} />
									</div>
									<div className="center">
										<span className="font">File</span>
									</div>
									<div className="center">
										<input type="radio" id="chkDate" name="radioBtn" value="chkDate" onClick={() => this.handleOnRadioClick('chkDate')} />
									</div>
									<div className="center">
										<span className="font">Check</span>
									</div>
								</div>
								<span className="font" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
									From
								</span>
								<span style={{ color: 'Red', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>*</span>
								<RemitsQuickSearchDatePicker id="startDate" selectedDate={this.state.startDate} onDateChange={date => this.handleDateChange(date, 'startDate')} RemitsQuickSearchDatePickerStyle={{ width: '145px' }} />
								<span className="font" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
									To
								</span>
								<span style={{ color: 'Red', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>*</span>
								<RemitsQuickSearchDatePicker id="endDate" selectedDate={this.state.endDate} onDateChange={date => this.handleDateChange(date, 'endDate')} RemitsQuickSearchDatePickerStyle={{ width: '145px' }} />
							</div>
							<div className="line" style={{ marginRight: '310px' }}>
								<span className="font2">Patient Account Number</span>
								<div>
									<TextField variant="outlined" id="patId" value={this.state.patId} error={this.state.patIdError} onChange={e => this.setState({ patId: e.target.value })} InputProps={{ inputProps: { style: { padding: '0px', height: '35px', width: '182px', marginLeft: '5px' } } }} />
								</div>
							</div>
							<div className="line" style={{ marginRight: '310px' }}>
								<span className="font2">Check/EFT Trace Number</span>
								<div>
									<TextField variant="outlined" value={this.state.chkNo} error={this.state.chkNoError} onChange={e => this.setState({ chkNo: e.target.value })} InputProps={{ inputProps: { style: { padding: '0px', height: '35px', width: '182px', marginLeft: '5px' } } }} />
								</div>
							</div>
							<div className="line" style={{ marginRight: '310px' }}>
								<span className="font2">System</span>
								<div>
									<MultiSelectComboBox id="systemIdBtn" name="systemIdBtn" label={this.state.systemIdBtnLabel} selectedData={this.state.systemIdBtnSelectedData} dataProvider={this.state.systemIdBtn_dataProvider} onChange={this.handleChangeCombo} width={'182px'} margin="0px" />
								</div>
							</div>
						</div>
						<div className="mainDiv">
							<div className="line">
								<span className="font2">Payer Id</span>
								<div>
									<TextField variant="outlined" id="payerId" error={this.state.payerIdError} onChange={e => this.setState({ payerId: e.target.value })} value={this.state.payerId} InputProps={{ inputProps: { style: { padding: '0px', height: '35px', width: '182px', marginLeft: '5px' } } }} />
								</div>
							</div>
							<div className="line">
								<span className="font2">Patient First Name</span>
								<div>
									<TextField variant="outlined" value={this.state.patFName} error={this.state.patFNameError} onChange={e => this.setState({ patFName: e.target.value })} InputProps={{ inputProps: { style: { padding: '0px', height: '35px', width: '182px', marginLeft: '5px' } } }} />
								</div>
							</div>
							<div className="line">
								<span className="font2">PCN #</span>
								<div>
									<TextField variant="outlined" value={this.state.claimNo} error={this.state.claimNoError} onChange={e => this.setState({ claimNo: e.target.value })} InputProps={{ inputProps: { style: { padding: '0px', height: '35px', width: '182px', marginLeft: '5px' } } }} />
								</div>
							</div>
							<div className="line" style={{ marginRight: '152px' }}>
								<span className="font2">UCP Only</span>
								<Checkbox id="activeChkBox" color="primary" />
							</div>
						</div>
						<div className="mainDiv">
							<div className="line">
								<span className="font2">Payer Name</span>
								<div>
									<MultiSelectComboBox id="payerNmBtn" name="payerNmBtn" label={this.state.payerNmBtnLabel} selectedData={this.state.payerNmBtnData} dataProvider={this.state.payerNmBtn_dataProvider} onChange={this.handleChangeCombo} selectAll={this.state.payerNmBtn_dataProvider.length} width={'182px'} margin="0px" />
								</div>
							</div>
							<div className="line">
								<span className="font2">Patient Last Name</span>
								<div>
									<TextField variant="outlined" value={this.state.patLName} error={this.state.patLNameError} onChange={e => this.setState({ patLName: e.target.value })} InputProps={{ inputProps: { style: { padding: '0px', height: '35px', width: '182px', marginLeft: '5px' } } }} />
								</div>
							</div>
							<div className="line">
								<span className="font2">Status</span>
								<div>
									<MultiSelectComboBox id="statusBtn" name="statusBtn" label={this.state.statusBtnLabel} selectedData={this.state.statusBtnData} dataProvider={this.state.statusBtn_dataProvider} onChange={this.handleChangeCombo} width={'182px'} margin="0px" />
								</div>
							</div>
						</div>
					</div>
					<div>
						<ColorButton style={{ height: '30px', width: '90px' }} onClick={this.handleOnSearch}>
							Search
						</ColorButton>
						&nbsp;&nbsp;&nbsp;&nbsp;
						<ColorButton style={{ height: '30px', width: '90px' }} onClick={this.handleOnClear}>
							Clear
						</ColorButton>
					</div>
				</div>
				<div style={{ height: 'calc(100vh - 380px)' }}>
					<RemitCore ref={g => (this.remitCoreRef = g)} id="remitCoreRef" hide={this.state.hideCore} />
					<RemitDetail ref={g => (this.remitDetailRef = g)} id="remitDetailRef" hide={this.state.hideDetails} />
				</div>
			</Paper>
		)
	}
}

export default RemitQuickSearch
