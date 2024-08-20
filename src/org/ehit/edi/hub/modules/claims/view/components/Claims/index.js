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
		this.grid.expandAll()

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
	textFilterFunction = (item, filter) => {
		// Check if filter is provided
		if (!filter || !filter.expression) {
			return true; // Return true to include all items initially, representing the original array
		}
	
		if (typeof filter.expression === 'string') {
			const dispStatus = item[filter.columnName];
			return dispStatus.toString().toLowerCase().indexOf(filter.expression.toLowerCase()) !== -1;
		} else if (typeof filter.expression === 'object' && filter.expression.length > 0) {
			// Check if any expression in the array matches
			const filteredArr = filter.expression.map(data => {
				const temp = item[filter.columnName]
					.toString()
					.toLowerCase()
					.indexOf(data.toLowerCase()) !== -1;
				return temp;
			});
	
			// Return true if at least one match is found
			return filteredArr.includes(true);
		}
		// Default return value if no match is found
		return false;
	};
	textFilterFunction1 = (item, filter) => {
		if (typeof filter.expression === 'string') {
			// Filter all systems based on matching fileName
			console.log(item);
			item.systems = item.systems.filter(system => {
				const fileName = system.fileName;
				return fileName.toString().toLowerCase().indexOf(filter.expression.toLowerCase()) !== -1;
			});
		}
		return item; // Ensure to return the modified item
	};	render() {
		return (
			<Paper className="page-style">
				<div className="claimsGridStyle">
					<DataGrid width="100%" height="100%" ref={g => (this.grid = g)} enablePrint={true} styleName="gridStyle"  enableExport={true} enableExportAll={true} enableCopy={true} parentDocument={this} pagerRenderer={MontefioreUtils.pagerFactory}  dataProvider={dataArray} alternatingItemColors={[0xffffff, 0xffffff]}>
						<ReactDataGridColumnLevel rowHeight="45"  enableFilters={true} enablePaging={true} /*pagerRenderer="org.ehit.edi.hub.uitl.MyCustomPager"*/ pageSize="50" childrenField="systems" >
							<ReactDataGridColumn headerAlign="left" textAlign="left" columnWidthMode="60" dataField="systemId" enableCellClickRowSelect={false} filterControl="TextInput" filterOperation="Contains" filterWaterMark="Contains" headerText="System ID" filterCompareFunction={this.textFilterFunction}/>
									<ReactDataGridColumn headerAlign="left" textAlign="left" width="130" dataField="fileId" enableCellClickRowSelect={false} filterControl="TextInput" filterOperation="Contains" filterWaterMark="Contains" headerText="Control ID" useHandCursor={true} useUnderLine={true}  />
									<ReactDataGridColumn headerAlign="left" textAlign="left" width="210" dataField="fileName" enableCellClickRowSelect={false} filterControl="TextInput" filterOperation="Contains" filterWaterMark="Contains" headerText="Interface ID" filterCompareFunction={this.textFilterFunction1}/>
									<ReactDataGridColumn headerAlign="left" textAlign="left" width="180" dataField="senderName" enableCellClickRowSelect={false} filterControl="TextInput" filterOperation="Contains" filterWaterMark="Contains" headerText="Sender ID" />
									<ReactDataGridColumn headerAlign="left" textAlign="left" width="150" dataField="processDescription" enableCellClickRowSelect={false} filterControl="TextInput"  filterOperation="Contains" filterWaterMark="Contains" headerText="FTP Type" />
									<ReactDataGridColumn headerAlign="left" textAlign="left" width="130" dataField="processStatus" enableCellClickRowSelect={false} filterControl="TextInput"  filterOperation="Contains" filterWaterMark="Contains" headerText="State" />
									<ReactDataGridColumn headerAlign="left" textAlign="left" width="130" dataField="instanceStartTime" enableCellClickRowSelect={false} headerText="Last Update" labelFunction={this.dateForm} />
									<ReactDataGridColumn headerAlign="left" textAlign="left" width="130" dataField="senderName" enableCellClickRowSelect={false} filterControl="TextInput"  filterOperation="Contains" filterWaterMark="Contains" headerText="Interface Conditions" />
									<ReactDataGridColumn headerAlign="left" textAlign="left" width="130" dataField="senderName" enableCellClickRowSelect={false} filterControl="TextInput"  filterOperation="Contains" filterWaterMark="Contains" headerText="Actions" />
									<ReactDataGridColumn headerAlign="left" textAlign="left" width="130" dataField="transactionType" enableCellClickRowSelect={false} filterControl="TextInput"  filterOperation="Contains" filterWaterMark="Contains" headerText="Logs" />
						
								<ReactDataGridColumnLevel rowHeight="45" initialSortField="systems"  headerColors={[0xffffff, 0xffffff]} headerRollOverColors={[0xffffff, 0xffffff]} alternatingItemColors={[0xffffff, 0xffffff]} visible={false}>
									<ReactDataGridColumn headerAlign="left" textAlign="left" width="140" dataField="ssystemId" enableCellClickRowSelect={false} filterControl="TextInput" filterOperation="Contains" filterWaterMark="contains" headerText=" " useHandCursor={true} useUnderLine={true} />
									<ReactDataGridColumn headerAlign="left" textAlign="left" width="130" dataField="fileId" enableCellClickRowSelect={false} filterControl="TextInput" filterOperation="Contains" filterWaterMark="" headerText="" useHandCursor={true} useUnderLine={true} />
									<ReactDataGridColumn headerAlign="left" textAlign="left" width="210" dataField="fileName" enableCellClickRowSelect={false} filterControl="TextInput" filterOperation="Contains" filterWaterMark="Contains" headerText="" />
									<ReactDataGridColumn headerAlign="left" textAlign="left" width="180" dataField="senderName" enableCellClickRowSelect={false} filterControl="TextInput" filterOperation="Contains" filterWaterMark="Contains" headerText="" />
									<ReactDataGridColumn headerAlign="left" textAlign="left" width="150" dataField="processDescription" enableCellClickRowSelect={false} filterControl="TextInput"  filterOperation="Contains" filterWaterMark="Contains" headerText="" />
									<ReactDataGridColumn headerAlign="left" textAlign="left" width="130" dataField="processStatus" enableCellClickRowSelect={false} filterControl="TextInput"  filterOperation="Contains" filterWaterMark="Contains" headerText="" />
									<ReactDataGridColumn headerAlign="left" textAlign="left" dataField="instanceStartTime" enableCellClickRowSelect={false} headerText="" labelFunction={this.dateForm} />
									<ReactDataGridColumn headerAlign="left" textAlign="left" width="130" dataField="senderName" enableCellClickRowSelect={false} filterControl="TextInput"  filterOperation="Contains" filterWaterMark="Contains" headerText="" />
									<ReactDataGridColumn headerAlign="left" textAlign="left" width="130" dataField="senderName" enableCellClickRowSelect={false} filterControl="TextInput"  filterOperation="Contains" filterWaterMark="Contains" headerText="" />
									<ReactDataGridColumn headerAlign="left" textAlign="left" width="130" dataField="transactionType" enableCellClickRowSelect={false} filterControl="TextInput"  filterOperation="Contains" filterWaterMark="Contains" headerText="" />
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