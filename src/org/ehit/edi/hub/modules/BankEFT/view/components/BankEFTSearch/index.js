import { Button, Paper, styled /* , TextField  */ } from '@material-ui/core'
import React from 'react'
import RemitsQuickSearchDatePicker from '../../../../../../../../../container/views/itemRenderers/RemitsQuickSearchDatePicker'
import { EventDispatcher } from '../../../../../../../../../flexicious'
import CustomAutoComplete from '../../../../../../../../../shared/components/CustomAutoComplete'
import { BankEFTSearchMediator } from '../../BankEFTSearchMediator.ts'
import BankEFTReport from '../BankEFTReport'
import './eftSearch.scss'

const ColorButton = styled(Button)(({ theme }) => ({
	color: theme.palette.getContrastText('#cec0c0'),
	background: 'linear-gradient(153deg, #fefcfc, #848b87)'
}))
class BankEFTSearch extends EventDispatcher {
	constructor(props) {
		super(props)
		this.state = {
			payerName_dataProvider: [],
			trnNo_dataProvider: [],
			checkNumber_dataProvider: [],

			payer: '',
			// patId: '',
			// patFName: '',
			// claimNo: '',
			// patLName: '',
			chkNo: '',
			trnNo: '',

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
			trnErr: false,
			radioValue: 'fileDate',
			hideCore: true,
			hideDetails: true,
			fileEditorWindow: false
		}
		this._xmitId = 0
		this._isaSequenceNum = 0
		this._gsSequenceNum = 0
		this._stSequenceNum = 0
		this._unitSequenceNum = 0
	}

	componentDidMount() {
		this.mediator = new BankEFTSearchMediator().onRegister(this)
	}

	componentWillUnmount() {
		this.mediator.onUnRegister()
	}

	handleDateChange = (date, key) => {
		this.setState({ [key]: date })
	}
	handleOnRadioClick = value => {
		this.setState({ radioValue: value })
	}

	handleOnChange = e => {
		if (e.target.id) {
			this.setState({ [e.target.id]: e.target.value })
		} else {
			this.setState({ [e.target.name]: e.target.value })
		}
	}

	render() {
		return (
			<Paper style={{ height: 'calc(100% - 40px)' }}>
				<div className="bankSearchHeader">
					<div style={{ padding: '5px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
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
									<RemitsQuickSearchDatePicker id="startDate" selectedDate={this.state.startDate} onDateChange={date => this.handleDateChange(date, 'startDate')} RemitsQuickSearchDatePickerStyle={{ width: '155px' }} />
									<span className="font" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
										To
									</span>
									<span style={{ color: 'Red', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>*</span>
									<RemitsQuickSearchDatePicker id="endDate" selectedDate={this.state.endDate} onDateChange={date => this.handleDateChange(date, 'endDate')} RemitsQuickSearchDatePickerStyle={{ width: '155px' }} />
								</div>
								<div className="line">
									<span className="font2">Check/EFT Trace Number</span>
									<div>
										<CustomAutoComplete ref={g => (this.chkNo = g)} id="chkNo" name="chkNo" value={this.state.chkNo} data={this.state.checkNumber_dataProvider} onChange={(e, value) => this.setState({ chkNo: value })} onSelect={value => this.setState({ chkNo: value })} handleOnChange={this.handleOnChange} textBoxStyle={{ width: '540px' }} />
									</div>
								</div>
							</div>
							<div style={{ display: 'flex', flexDirection: 'column', rowGap: '5px', alignItems: 'flex-end' }}>
								<div className="line">
									<span className="font2">Payer Id</span>
									<div>
										<CustomAutoComplete ref={g => (this.payer = g)} id="payer" name="payer" value={this.state.payer} data={this.state.payerName_dataProvider} onChange={(e, value) => this.setState({ payer: value })} onSelect={value => this.setState({ payer: value })} handleOnChange={this.handleOnChange} textBoxStyle={{ width: '240px' }} />
									</div>
								</div>
								<div className="line">
									<span className="font2">TRN#</span>
									<div>
										<CustomAutoComplete ref={g => (this.trnNo = g)} id="trnNo" name="trnNo" value={this.state.trnNo} data={this.state.trnNo_dataProvider} onChange={(e, value) => this.setState({ trnNo: value })} onSelect={value => this.setState({ trnNo: value })} handleOnChange={this.handleOnChange} textBoxStyle={{ width: '240px' }} />
									</div>
								</div>
							</div>
						</div>
						<div>
							<ColorButton style={{ height: '30px', width: '90px' }} onClick={() => this.mediator.ediEftQuickSearch()}>
								Search
							</ColorButton>
							&nbsp;&nbsp;&nbsp;&nbsp;
							<ColorButton style={{ height: '30px', width: '90px' }} onClick={this.handleOnClear}>
								Clear
							</ColorButton>
						</div>
					</div>
				</div>
				<div style={{ height: 'calc(100% - 170px)' }}>
					<BankEFTReport ref={f => (this.bankEFTReport = f)} />
				</div>
			</Paper>
		)
	}
}

export default BankEFTSearch
