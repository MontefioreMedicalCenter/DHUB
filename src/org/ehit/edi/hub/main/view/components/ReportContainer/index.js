import { Button, styled } from '@material-ui/core'
import React from 'react'
import BankEFTReport from '../../../../modules/BankEFT/view/components/BankEFTReport'
import RemitsBalanceReport from '../../../../modules/remits/view/components/RemitsBalanceReport'
import { ReportContainerMediator } from '../../ReportContainerMediator.ts'
import AckReportContainer from '../AckReportContainer'
import RemitSupReport from '../RemitSupReport'
import './reportContainer.scss'

const CustomButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText('#9d9c9c'),
    backgroundColor: '#82988c',
    '&:hover': {
        backgroundColor: '#bebebb',
    },
    // border: '1px solid black'
}));

class ReportContainer extends React.Component {
	constructor() {
		super()
		this.state = {
			remitsSurcharge:[],
			remitsPLB:[]
		}
		this._file = null
	}

	setfile(file) {
		this._file = file
		this.loadMenu()
	}

	getfile() {
		return this._file
	}

	loadMenu = () => {
		if (!this._file.reportOnly) {
			var arr = []
			arr.push({ label: 'content', icon: "@Embed(source='org/ehit/edi/hub/assets/img/readme.png')" })
			if (this._file != null) {
				if (this._file.transType != null && (this._file.transType === '999' || this._file.transType.indexOf('277') >= 0)) {
					arr.push({ label: 'save', icon: "@Embed(source='org/ehit/edi/hub/assets/img/saveB.png')" })
				}
			}
			// editorMenu.dataProvider=new ArrayCollection(arr);
		}
	}

	componentDidMount() {
		this.mediator = new ReportContainerMediator().onRegister(this)
	}

	componentWillUnmount() {
        this.mediator.onUnRegister()
    }

	changeContent(){
		this.mediator.changeContent(this.props.fileData,'content')
	}

	render() {
		return (
			<div className="pop-up_size">
				{this.props.fileData.transType === 'EFT' && <BankEFTReport ref={f => (this.reportContainer = f)} />}
				{(this.props.fileData.transType === '999' || this.props.fileData.transType.indexOf('277') >= 0) && <AckReportContainer ref={f => (this.ackReport = f)} />}
				{this.props.fileData.transType === '835S' && <RemitSupReport ref={f => (this.supplementReport = f)} />}
				{this.props.fileData.transType === '835' && <RemitsBalanceReport ref={f => (this.balanceReport = f)} fileData={this.props.fileData} parentDocument={this} />}
				<div className='buttonStyle'><CustomButton variant="contained" color="primary" onClick={() => this.changeContent()}>content</CustomButton></div>
			</div>
		)
	}
}

export default ReportContainer