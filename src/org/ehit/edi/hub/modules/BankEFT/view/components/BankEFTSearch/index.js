import { Button, Checkbox, Paper, styled, TextField } from '@material-ui/core';
import React from 'react'
import RemitsQuickSearchDatePicker from '../../../../../../../../../container/views/itemRenderers/RemitsQuickSearchDatePicker';
import { EventDispatcher, MultiSelectComboBox } from '../../../../../../../../../flexicious';
import './eftSearch.scss'

const ColorButton = styled(Button)(({ theme }) => ({
	color: theme.palette.getContrastText('#cec0c0'),
	background: 'linear-gradient(153deg, #fefcfc, #848b87)'
}))
class BankEFTSearch extends EventDispatcher{

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
			hideDetails: true,
			fileEditorWindow: false
		}
		this._xmitId = 0
		this._isaSequenceNum = 0
		this._gsSequenceNum = 0
		this._stSequenceNum = 0
		this._unitSequenceNum = 0
	}
    handleDateChange = (date, key) => {
		this.setState({ [key]: date })
	}

    render(){
        return(
            <Paper>
                <div className='bankSearchHeader'>

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
								<div className="line">
									<span className="font2">Payer Id</span>
									<div>
										<TextField variant="outlined" id="payerId" error={this.state.payerIdError} onChange={e => this.setState({ payerId: e.target.value })} value={this.state.payerId} InputProps={{ inputProps: { style: { padding: '0px', height: '35px', width: '182px', marginLeft: '5px' } } }} />
									</div>
								</div>
								<div className="line" style={{ marginRight: '310px' }}>
									<span className="font2">Check/EFT Trace Number</span>
									<div>
										<TextField variant="outlined" value={this.state.chkNo} error={this.state.chkNoError} onChange={e => this.setState({ chkNo: e.target.value })} InputProps={{ inputProps: { style: { padding: '0px', height: '35px', width: '182px', marginLeft: '5px' } } }} />
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
	
                    </div>
                
            </Paper>
        )
    }
}

export default BankEFTSearch