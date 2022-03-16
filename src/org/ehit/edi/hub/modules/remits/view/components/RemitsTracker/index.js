import { Paper } from '@material-ui/core'
import moment from 'moment'
import React from 'react'
import RemitsFileNameRenderer from '../../../../../../../../../container/views/itemRenderers/RemitsFileNameRenderer'
import RemitsStatusRenderer from '../../../../../../../../../container/views/itemRenderers/RemitsStatusRenderer'
import { EventDispatcher, ReactDataGridColumn, ReactDataGridColumnLevel, ClassFactory, DateRange, ExtendedExportController } from '../../../../../../../../../flexicious'
import MontefioreUtils from '../../../../../../../../../service/utils/MontefioreUtils'
import DataGrid from '../../../../../../../../../shared/components/ExtendedDataGrid'
import EdiDateRangeCombo from '../../../../../../../../../utils/dateFormatCombo/EdiDateRangeCombo'
import RemitsTrackerMediator from '../../RemitsTrackerMediator.ts'
// import RemitQuickSearch from '../RemitQuickSearch'
import './remitsTracker.scss'
// import { toast } from 'react-toastify'
import { EdiFileBase } from '../../../../../main/model/EdiFileBase.ts'
import AdvanceDialog from '../../../../../../../../../shared/components/AdvanceDialog'
import FileEditor from '../../../../../main/view/components/FileEditor'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../../../../../../../../../AppConfig/store/actions/headersAction'

class RemitsTracker extends EventDispatcher {
	constructor(props) {
		super(props)
		this.state = {
			fileData: null,
			tabValue: this.props.location.pathname,
			fileEditorWindow: false,
			fileEditoriconWindow: false,
			selectedColumnFileId: 0,
			selectedColumnReportOnly: false,
			fileEditorWindowTitle:''
		}
	}
	componentDidMount() {
		this.mediator = new RemitsTrackerMediator().onRegister(this)
	}

	componentWillUnmount() {
		this.mediator.onUnRegister()
	}

	logDatetime = (item, col) => {
		return item.logDatetime ? moment(new Date(item.logDatetime)).format('MM/DD/YY K:NN A') : ''
	}

	onToolbarExport = () => {
		ExtendedExportController.instance().export()
	}

	viewFile = (fileId, reportOnly) => {
		var file = new EdiFileBase()
		file.fileId = fileId
		file.transType = '835'
		file.reportOnly = reportOnly
		// dispatchEvent(new FileEditorEvent(FileEditorEvent.VIEW_FILE, file))
		this.mediator.viewFile1(file)
	}

	getRowTextColor = cell => {	
		var status = this.getStatus(cell.getRowInfo().getData().status.toString())
		if (status.indexOf('In-process') === 0){
			return '0x0000FF';
		}
		if (status.indexOf('Rejected') === 0 ){
			return '0xFF0000';
		}
		if (status.indexOf('Duplicate Checks') === 0 ){
			return '0xFF0000';
		}
	}

	dataFormat = (item, col) => {
		return item.status? this.getStatus(item.status) : null
	}

	dateForm = (item, col) => {
		const dataField = col.dataField.split('.')
		return item[dataField] ? moment(new Date(item[dataField])).format('MM/DD/YY hh:mm A') : null
	}

	getStatus = (status) => {
		var pollStatus = 'Completed'
		var statusArr = status && status.split(';')
		for (var n = 0; n < statusArr.length; n++) {
			var stepstatus = statusArr[n].split('=')
			if (stepstatus[1] === 'Pending') {
				pollStatus = 'In-process'
			}
			if (stepstatus[1] === 'Hold') {
				pollStatus = 'Duplicate Checks'
			}
		}
		return pollStatus
	}

	render() {
		return (
			<Paper className="page_style_remits">
				<div style={{ height: 'calc(100vh - 135px)', width: '100%', marginTop: '2px' }}>
					<DataGrid ref={g => (this.grid = g)} id="grid" width="100%" height="100%" enableCopy={true} enableExport={true} enablePrint={true} styleName="gridStyle" toolbarExcelHandlerFunction={this.onToolbarExport} pagerRenderer={MontefioreUtils.pagerFactory} enableEagerDraw={false} showSpinnerOnFilterPageSort={true} initialSortField="logDatetime" initialSortAscending={false} parentDocument={this}>
						<ReactDataGridColumnLevel rowHeight="21" enableFilters={true} enablePaging={true} pageSize="500" rowTextColorFunction={this.getRowTextColor}>
							<ReactDataGridColumn textAlign="left" headerAlign="left" columnWidthMode="fitToContent" dataField="pollControl.processReceiver" enableCellClickRowSelect={false} filterControl="TextInput" filterOperation="Contains" filterWaterMark="Contains" headerText="Receiver" />
							<ReactDataGridColumn textAlign="left" headerAlign="left" sortable={false} enableCellClickRowSelect={false} columnWidthMode="fixed" width="450" headerText="File Name" useUnderLine={true} itemRenderer={new ClassFactory(RemitsFileNameRenderer)} onHandleFileName={(fileId, reportOnly) => this.viewFile(fileId, reportOnly)} dataField="filename" filterControl="TextInput" filterOperation="Contains" filterWaterMark="Contains" />
							<ReactDataGridColumn textAlign="left" headerAlign="left" columnWidthMode="fitToContent" dataField="pollControl.processSender" enableCellClickRowSelect={false} filterControl="TextInput" filterOperation="Contains" filterWaterMark="Contains" headerText="Payer" iconRight="5" />
							<ReactDataGridColumn textAlign="left" headerAlign="left" columnWidthMode="fitToContent" dataField="status" enableCellClickRowSelect={false} filterControl="TextInput" filterOperation="Contains" filterWaterMark="Contains" headerText="Status" itemRenderer={new ClassFactory(RemitsStatusRenderer)} parentDocument={this} labelFunction={this.dataFormat}/>
							<ReactDataGridColumn textAlign="right" headerAlign="right" columnWidthMode="fitToContent" dataField="logDatetime" filterDateRangeOptions={[DateRange.DATE_RANGE_CUSTOM]} filterControl="DateComboBox" filterOperation="Contains" /*formatter="{ExampleUtils.globalDateFormatter}"*/ labelFunction={this.dateForm} enableCellClickRowSelect="false" headerText="Log Time" /*filterConverterFunction="convertDate" filterRenderer="org.ehit.edi.hub.uitl.dateFormatCombo.EdiDateComboBox"*/ filterRenderer={EdiDateRangeCombo}/>
						
						</ReactDataGridColumnLevel>
					</DataGrid>
					<AdvanceDialog
						open={this.state.fileEditoriconWindow}
						handleClose={() => this.setState({ fileEditoriconWindow: false })}
						bodyRenderer={
							<FileEditor
								ref={g => (this.fileEditor = g)}
								parentDoc={this}
								fileData={this.state.fileData}
								closePopup={() => {
									return this.setState({ fileEditoriconWindow: false })
								}}
							/>
						}
					/>
					<AdvanceDialog
						open={this.state.fileEditorWindow}
						headerTitle={this.state.fileEditorWindowTitle}
						handleClose={() => this.setState({ fileEditorWindow: false })}
						bodyRenderer={
							<FileEditor
								ref={g => (this.fileEditor = g)}
								parentDoc={this}
								tabName="RemitsTracker"
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
		remitsHeader: state.headerState.remitsHeaderState
	}
}

const mapDispatchToProps = dispatch =>
	bindActionCreators(
		{
			...actions
		},
		dispatch
	)

export default connect(mapStateToProps, mapDispatchToProps)( RemitsTracker)
