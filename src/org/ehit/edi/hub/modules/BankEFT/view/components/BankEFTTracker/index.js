import React from 'react'
import { ClassFactory, DateRange, EventDispatcher, ReactDataGridColumn, ReactDataGridColumnLevel } from '../../../../../../../../../flexicious'
import DataGrid from '../../../../../../../../../shared/components/ExtendedDataGrid'
import { BankEFTTrackerMediator } from '../../BankEFTTrackerMediator.ts'
import { DateRangeEvent } from '../../../../../../../../../utils/dateFormatCombo/DateRangeEvent.ts'
import errorIcon from '../../../../../../../../../assets/images/dialog_warning.png'
import BankEFTFilerenderer from '../../../../../../../../../container/views/itemRenderers/BankEFTFilerenderer'
import BankEFTStatusRenderer from '../../../../../../../../../container/views/itemRenderers/BankEFTStatusRenderer'
import { EdiFileBase } from '../../../../../main/model/EdiFileBase.ts' 
import AdvanceDialog from '../../../../../../../../../shared/components/AdvanceDialog'
import FileEditor from '../../../../../main/view/components/FileEditor'
import moment from 'moment'
import EdiDateRangeCombo from '../../../../../../../../../utils/dateFormatCombo/EdiDateRangeCombo'
import MontefioreUtils from '../../../../../../../../../service/utils/MontefioreUtils'
// import ReportContainer from '../../../../../main/view/components/ReportContainer'

class BankEFTTracker extends EventDispatcher {
	constructor() {
		super()
		this.state= {
			fileEditorWindow: false,
			fileEditoriconWindow: false,
			fileData: null,
			bankTrackerHeader:''
		}
		this._initialIndex = -1
	}

	componentDidMount() {
		this.mediator = new BankEFTTrackerMediator().onRegister(this)
	}

	componentWillUnmount() {
		this.mediator.onUnRegister()
	}

	get initialIndex() {
		return this._initialIndex
	}

	set initialIndex(value) {
		this._initialIndex = value
	}

	//  onToolbarExport()
	// {
	// 	ExtendedExportController.instance().export(grid, MyExportOptions.create());
	// }

	getFileName(filename) {
		return filename.substring(filename.lastIndexOf('/') + 1, filename.length)
	}



	//  convertDate(item, col)
	// {
	// 	var dt=UIUtils.resolveExpression(item, col.dataField).toString();
	// 	var date=mx.controls.DateField.stringToDate(dt, "YYYY-MM-DD");
	// 	return date;
	// }

	searchByDate(dateRange) {
		dispatchEvent(new DateRangeEvent(DateRangeEvent.SEARCH_BY_DATE_RANGE, dateRange))
	}

	viewFile = (fileId, reportOnly, fileName) => {
		var file = new EdiFileBase()
		file.fileId = fileId
		file.transType = 'EFT'
		file.reportOnly = reportOnly
		this.mediator.viewFile1(file, fileName)
		// this.dispatchEvent(new FileEditorEvent(FileEditorEvent.VIEW_FILE, file))
	}

	getStatus = (status) => {
		var pollStatus = 'Completed'

		var statusArr = status && status.split(';')
		for (var n = 0; n < statusArr && statusArr.length; n++) {
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

	// [Embed('org/ehit/edi/hub/assets/img/dialog_warning.png')]
	// private static var errorIcon:Class;

	// [Embed('org/ehit/edi/hub/assets/img/minus_black.png')]
	// private static var naIcon:Class;

	dynamicIconFunction(cell, state = '') {
		var img
		if (cell.rowInfo.isDataRow) {
			if (cell.rowInfo.data.pollStatusProps != null) img = errorIcon
			else return null
			return img
		}
		return null
	}

	globalDateFormatter = item => {
		if (item.logDatetime != null) return moment(new Date(new Date(Date.parse(item.logDatetime)).getTime() - new Date(Date.parse(item.logDatetime)).getTimezoneOffset()* 60000)).format('MM/DD/YYYY h:mm A')
	}

	dataFormat = (item, col) => {
		return item.status? this.getStatus(item.status) : null
	}

	getRowTextColor = cell => {
		var status = cell.getRowInfo().getData().status.toString()
		if (status.indexOf('In-process') === 0)
		{
			return 0x0000FF;
		}
		if (status.indexOf('Rejected') === 0)
		{
			return 0xFF0000;
		}
		if (status.indexOf('Duplicate Checks') === 0 )
		{
			return 0xFF0000;
		}
		return null;
	}

	render() {
		return (
			<div style={{ height: 'calc(100% - 35px)', width: '100%' }}>
				<DataGrid ref={g => (this.grid = g)} id="grid" width="100%" height="100%" enableCopy={true} parentDocument={this} enableExport={true} enablePrint={true} styleName="gridstyle" enableEagerDraw={false} showSpinnerOnFilterPageSort={true} initialSortField="logDatetime" initialSortAscending={false} pagerRenderer={MontefioreUtils.pagerFactory}>
					<ReactDataGridColumnLevel rowHeight="21" enableFilters={true} enablePaging={true} pageSize="500" rowTextColorFunction={this.getRowTextColor}>
						<ReactDataGridColumn width="100" dataField="pollControl.processReceiver" enableCellClickRowSelect={false} filterControl="TextInput" filterOperation="Contains" filterWaterMark="Contains" headerText="Receiver" textAlign="left"/>
						<ReactDataGridColumn sortable={false} enableCellClickRowSelect={false} columnWidthMode="fixed" width="300" headerText="File Name" useUnderLine={true} itemRenderer={new ClassFactory(BankEFTFilerenderer)} viewFile={this.viewFile} dataField='filename' filterControl="TextInput" filterOperation="Contains" filterWaterMark="Contains" />
						<ReactDataGridColumn width="200" dataField="pollControl.processSender" enableCellClickRowSelect={false} filterControl="TextInput" filterOperation="Contains" filterWaterMark="Contains" headerText="Payer" iconRight="5" textAlign="left"/>
						<ReactDataGridColumn width="200" enableCellClickRowSelect={false} filterControl="TextInput" filterOperation="Contains" filterWaterMark="Contains" headerText="Status" itemRenderer={new ClassFactory(BankEFTStatusRenderer)} parentDocument={this}/>
						<ReactDataGridColumn width="200" dataField="logDatetime" labelFunction={this.globalDateFormatter.bind(this)} filterDateRangeOptions={[DateRange.DATE_RANGE_CUSTOM]} filterControl="DateComboBox" filterRenderer={EdiDateRangeCombo} enableCellClickRowSelect={false} headerText="Log Time" filterConverterFunction={this.convertDate}/*filterConverterFunction="convertDate" */ textAlign="left"/>
					</ReactDataGridColumnLevel>
				</DataGrid>
				<AdvanceDialog
					open={this.state.fileEditoriconWindow}
					handleClose={() => this.setState({ fileEditoriconWindow: false})}
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
						handleClose={() => this.setState({ fileEditorWindow: false })}
						headerTitle={this.state.bankTrackerHeader}
						bodyRenderer={
							<FileEditor
								ref={g => (this.fileEditor = g)}
								parentDoc={this}
								tabName="BankEFTTracker"
								fileData={this.state.fileData}
								closePopup={() => {
								return this.setState({ fileEditorWindow: false })
							}}
						/>
					}
				/>
			</div>
		)
	}
}

export default BankEFTTracker
