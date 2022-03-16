import { Paper } from '@material-ui/core'
import moment from 'moment'
import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../../../../../../../../../AppConfig/store/actions/headersAction'
import { DateRange, EventDispatcher, ReactDataGridColumn, ReactDataGridColumnLevel } from '../../../../../../../../../flexicious'
import MontefioreUtils from '../../../../../../../../../service/utils/MontefioreUtils'
import AdvanceDialog from '../../../../../../../../../shared/components/AdvanceDialog'
import DataGrid from '../../../../../../../../../shared/components/ExtendedDataGrid'
// import { EdiDateComboBox } from '../../../../../../../../../utils/dateFormatCombo/EdiDateComboBox.ts'
import EdiDateRangeCombo from '../../../../../../../../../utils/dateFormatCombo/EdiDateRangeCombo'
import ExampleUtils from '../../../../../../../../../utils/ExampleUtils'
import FileEditor from '../../../../../main/view/components/FileEditor'
import { ClaimsMediator } from '../../ClaimsMediator.ts'
import './claims.scss'

const bgcolorarray = [ "0xC0C0C0", "0xEEEEEE"]

const headerbgcolorarray = [ "0xEEEEEE", "0xC0C0C0"]
class Claims extends EventDispatcher {
	constructor() {
		super()
		this.state = {
			tabValue: '/main/claims',
			fileEditorWindow: false,
			fileContentContainerWindow: false,
			fileData: null,
			claimsHeader: ''
		}
	}

	componentDidMount() {
		this.mediator = new ClaimsMediator().onRegister(this)
	}
	componentWillUnmount() {
		this.mediator.onUnRegister()
	}

	currencyFormatter = (item, col) => {
		return item.totalDollarAmt ? ExampleUtils.globalCurrencyFormatter.format(item.totalDollarAmt) : null
	}

	dateForm = (item, col) => {
		const dataField = col.dataField.split('.')
		return item[dataField] ? moment(new Date(item[dataField])).format('MM/DD/YY hh:mm A') : null
	}

	getRowTextColor = cell => {
		var status = cell.getRowInfo().getData().processStatus.toString()
		if (status.indexOf('In-process') === 0)
		{
			return 0x0000FF;
		}
		if (status.indexOf('Rejected') === 0)
		{
			return 0xFF0000;
		}
		return null;
	}

	render() {
		return (
			<Paper className="page-style">
				<div className="claimsGridStyle">
					<DataGrid width="100%" height="100%" ref={g => (this.grid = g)} enablePrint={true} styleName="gridStyle" enableDrillDown={true} enableExport={true} enableCopy={true} parentDocument={this} pagerRenderer={MontefioreUtils.pagerFactory}>
						<ReactDataGridColumnLevel rowHeight="21" childrenField="_processInstanceSteps" enableFilters={true} enablePaging={true} /*pagerRenderer="org.ehit.edi.hub.uitl.MyCustomPager"*/ pageSize="50" rowTextColorFunction={this.getRowTextColor}>
							<ReactDataGridColumn headerAlign="left" textAlign="left" columnWidthMode="fitToContent" dataField="senderName" enableCellClickRowSelect={false} filterControl="TextInput" filterOperation="Contains" filterWaterMark="Contains" headerText="Sender" />
							<ReactDataGridColumn headerAlign="left" textAlign="left" width="350" dataField="fileName" enableCellClickRowSelect={false} filterControl="TextInput" filterOperation="Contains" filterWaterMark="Contains" headerText="File Name" useHandCursor={true} useUnderLine={true} />
							<ReactDataGridColumn headerAlign="left" textAlign="left" columnWidthMode="fitToContent" dataField="receiverName" enableCellClickRowSelect={false} filterControl="TextInput" filterOperation="Contains" filterWaterMark="Contains" headerText="Payer" />
							<ReactDataGridColumn headerAlign="left" textAlign="left" columnWidthMode="fitToContent" dataField="processStatus" enableCellClickRowSelect={false} filterControl="TextInput" filterOperation="Contains" filterWaterMark="Contains" headerText="Status" />
							<ReactDataGridColumn headerAlign="right" textAlign="right" width="70" dataField="totalTransactionCount" enableCellClickRowSelect={false} headerText="Total Claims" />
							<ReactDataGridColumn headerAlign="right" textAlign="right" columnWidthMode="fitToContent" dataField="totalDollarAmt" labelFunction={MontefioreUtils.currencyFormatterWithComma} enableCellClickRowSelect={false} headerText="Total Amount" />
							<ReactDataGridColumn headerAlign="right" textAlign="right" columnWidthMode="fitToContent" dataField="instanceStartTime" filterDateRangeOptions={[DateRange.DATE_RANGE_CUSTOM]} filterControl="DateComboBox" filterOperation="Contains" /*formatter="{ExampleUtils.globalDateFormatter}"*/ labelFunction={this.dateForm} enableCellClickRowSelect={false} headerText="Start Time" /*filterConverterFunction="convertDate" filterRenderer="org.ehit.edi.hub.uitl.dateFormatCombo.EdiDateComboBox"*/ filterRenderer={EdiDateRangeCombo}/>
							<ReactDataGridColumn headerAlign="right" textAlign="right" columnWidthMode="fitToContent" dataField="instanceEndTime" enableCellClickRowSelect={false} /*formatter="{ExampleUtils.globalDateFormatter}"*/ labelFunction={this.dateForm} headerText="Last Update Time" />
							<ReactDataGridColumnLevel rowHeight="23" initialSortField="id.stepNum" nestIndent="30" headerColors={bgcolorarray} headerRollOverColors={headerbgcolorarray} alternatingItemColors={[0xe0e0e0, 0xffffff]}>
								<ReactDataGridColumn headerAlign="left" textAlign="left" width="65" dataField="id.stepNum" enableCellClickRowSelect={false} headerText="Step No" />
								<ReactDataGridColumn headerAlign="right" textAlign="right" width="300" dataField="id.instanceId" enableCellClickRowSelect={false} headerText="Instance ID" />
								<ReactDataGridColumn headerAlign="right" textAlign="right" width="300" dataField="stepDescr" enableCellClickRowSelect={false} headerText="Step Desc" />
								<ReactDataGridColumn headerAlign="right" textAlign="right" dataField="stepStartTime" enableCellClickRowSelect={false} headerText="Step Start Time" labelFunction={this.dateForm} />
								<ReactDataGridColumn headerAlign="right" textAlign="right" dataField="stepEndTime" enableCellClickRowSelect={false} headerText="Step End Time" labelFunction={this.dateForm} />
								<ReactDataGridColumn headerAlign="right" textAlign="right" dataField="stepDeadline" enableCellClickRowSelect={false} headerText="Step Deadline" labelFunction={this.dateForm} />
								<ReactDataGridColumn headerAlign="right" textAlign="right" dataField="stepStatus" enableCellClickRowSelect={false} headerText="Step Status" />
								<ReactDataGridColumn headerAlign="right" textAlign="right" width="400" dataField="stepLongStatus" enableCellClickRowSelect={false}  headerText="Step Long Status" />
							</ReactDataGridColumnLevel>
						</ReactDataGridColumnLevel>
					</DataGrid>
					<AdvanceDialog
						open={this.state.fileEditorWindow}
						headerTitle={this.state.claimsHeader}
						handleClose={() => this.setState({ fileEditorWindow: false })}
						bodyRenderer={
							<FileEditor
								ref={g => (this.fileEditor = g)}
								parentDoc={this}
								fileData={this.state.fileData}
								closePopup={() => {
									return this.setState({ fileEditorWindow: false })
								}}
							/>
						}
					/>
				</div>
			</Paper>
		)
	}
}

const mapStateToProps = state => {
	return {
		claimsHeaders: state.headerState.claimsHeaderState
	}
}

const mapDispatchToProps = dispatch =>
	bindActionCreators(
		{
			...actions
		},
		dispatch
	)


export default connect(mapStateToProps, mapDispatchToProps)(Claims)