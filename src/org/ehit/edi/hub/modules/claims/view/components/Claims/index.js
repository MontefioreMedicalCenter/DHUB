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
import dataArray from '../../../../../../../../../sample/findClaimProcesses.js'
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

		//this.mediator = new ClaimsMediator().onRegister(this)
		

	}
	componentWillUnmount() {
		//this.mediator.onUnRegister()
	
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
					<DataGrid width="100%" height="100%" ref={g => (this.grid = g)} enablePrint={true} styleName="gridStyle" enableDrillDown={true} enableExport={true} enableExportAll={true} enableCopy={true} parentDocument={this} pagerRenderer={MontefioreUtils.pagerFactory}  dataProvider={dataArray}>
					<ReactDataGridColumnLevel rowHeight="21" childrenField="systems" enableFilters={true} enablePaging={true} /*pagerRenderer="org.ehit.edi.hub.uitl.MyCustomPager"*/ pageSize="50" >
							<ReactDataGridColumn headerAlign="left" textAlign="left" columnWidthMode="fitToContent" dataField="systemId" enableCellClickRowSelect={false} filterControl="TextInput" filterOperation="Contains" filterWaterMark="MMC" headerText="System ID" nextLevel />
							
							<ReactDataGridColumn headerAlign="left" textAlign="left" width="350" dataField="fileId" enableCellClickRowSelect={false} filterControl="TextInput" filterOperation="Contains" filterWaterMark="" headerText="Control ID" useHandCursor={true} useUnderLine={true} />
							<ReactDataGridColumn headerAlign="left" textAlign="left" columnWidthMode="fitToContent" dataField="systems.fileName" enableCellClickRowSelect={false} filterControl="TextInput" filterOperation="" filterWaterMark="Contains" headerText="Interface ID" />
							<ReactDataGridColumn headerAlign="left" textAlign="left" columnWidthMode="fitToContent" dataField="systems.processStatus" enableCellClickRowSelect={false} filterControl="TextInput" filterOperation="" filterWaterMark="Contains" headerText="Sender ID" />
							
							<ReactDataGridColumn headerAlign="left" textAlign="left" columnWidthMode="fitToContent" dataField="systems.processDescription" enableCellClickRowSelect={false} filterControl="TextInput"  filterOperation="c" filterWaterMark="Contains" headerText="FTP Type" />
							<ReactDataGridColumn headerAlign="left" textAlign="left" columnWidthMode="fitToContent" dataField="id.serviceAreaId" enableCellClickRowSelect={false} filterControl="TextInput"  filterOperation="c" filterWaterMark="Contains" headerText="State" />
							<ReactDataGridColumn headerAlign="left" textAlign="left" dataField="instanceStartTime" enableCellClickRowSelect={false} headerText="Last Update" labelFunction={this.dateForm} />
							<ReactDataGridColumn headerAlign="left" textAlign="left" columnWidthMode="fitToContent" dataField="id.instanceId" enableCellClickRowSelect={false} filterControl="TextInput"  filterOperation="c" filterWaterMark="Contains" headerText="Interface Conditions" />
							<ReactDataGridColumn headerAlign="left" textAlign="left" columnWidthMode="fitToContent" dataField="id.facilityId" enableCellClickRowSelect={false} filterControl="TextInput"  filterOperation="c" filterWaterMark="Contains" headerText="Actions" />
							<ReactDataGridColumn headerAlign="left" textAlign="left" columnWidthMode="fitToContent" dataField="transactionType" enableCellClickRowSelect={false} filterControl="TextInput"  filterOperation="c" filterWaterMark="Contains" headerText="Logs" />
							
							{/* <ReactDataGridColumnLevel rowHeight="23" initialSortField="id.stepNum" nestIndent="30" headerColors={bgcolorarray} headerRollOverColors={headerbgcolorarray} alternatingItemColors={[0xe0e0e0, 0xffffff]}>
								<ReactDataGridColumn headerAlign="left" textAlign="left" width="65" dataField="id.stepNum" enableCellClickRowSelect={false} headerText="Step No" />
								<ReactDataGridColumn headerAlign="right" textAlign="right" width="300" dataField="id.instanceId" enableCellClickRowSelect={false} headerText="Instance ID" /> */}
								{/* <ReactDataGridColumn headerAlign="right" textAlign="right" width="300" dataField="stepDescr" enableCellClickRowSelect={false} headerText="Step Desc" />
								<ReactDataGridColumn headerAlign="right" textAlign="right" dataField="stepStartTime" enableCellClickRowSelect={false} headerText="Step Start Time" labelFunction={this.dateForm} />
								<ReactDataGridColumn headerAlign="right" textAlign="right" dataField="stepEndTime" enableCellClickRowSelect={false} headerText="Step End Time" labelFunction={this.dateForm} />
								<ReactDataGridColumn headerAlign="right" textAlign="right" dataField="stepDeadline" enableCellClickRowSelect={false} headerText="Step Deadline" labelFunction={this.dateForm} />
								<ReactDataGridColumn headerAlign="right" textAlign="right" dataField="stepStatus" enableCellClickRowSelect={false} headerText="Step Status" />
								<ReactDataGridColumn headerAlign="right" textAlign="right" width="400" dataField="stepLongStatus" enableCellClickRowSelect={false}  headerText="Step Long Status" />
							</ReactDataGridColumnLevel> */}
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