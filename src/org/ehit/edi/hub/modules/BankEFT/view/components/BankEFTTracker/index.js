import React from 'react'
import { ClassFactory, EventDispatcher, ReactDataGridColumn, ReactDataGridColumnLevel } from '../../../../../../../../../flexicious'
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

class BankEFTTracker extends EventDispatcher {
	constructor() {
		super()
		this.state= {
			fileEditorWindow: false
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

	getRowTextColor(cell) {
		var status = this.getStatus(cell.rowInfo.data.status.toString())
		if (status.indexOf('In-process') === 0) {
			return '0x0000FF'
		}
		if (status.indexOf('Rejected') === 0) {
			return '0xFF0000'
		}
		if (status.indexOf('Duplicate Checks') === 0) {
			return '0xFF0000'
		}

		return null
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

	viewFile = (fileId, reportOnly) => {
		var file = new EdiFileBase()
		file.fileId = fileId
		file.transType = 'EFT'
		file.reportOnly = reportOnly
		this.mediator.viewFile1(file)
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
		if (item.logDatetime != null) return moment(new Date(item.logDatetime)).format('MM/DD/YYYY h:mm a')
	}

	render() {
		return (
			<div style={{ height: 'calc(100% - 35px)', width: '100%' }}>
				<DataGrid ref={g => (this.grid = g)} id="grid" width="100%" height="100%" enableCopy={true} enableExport={true} enablePrint={true} styleName="gridStyle" /*toolbarExcelHandlerFunction="onToolbarExport"*/ enableEagerDraw={false} showSpinnerOnFilterPageSort={true} initialSortField="logDatetime" initialSortAscending={false}>
					<ReactDataGridColumnLevel rowHeight="21" enableFilters={true} enablePaging={true} pageSize="500" /*rowTextColorFunction="getRowTextColor"*/>
						<ReactDataGridColumn columnWidthMode="fitToContent" dataField="pollControl.processReceiver" enableCellClickRowSelect={false} filterControl="TextInput" filterOperation="Contains" filterWaterMark="Contains" headerText="Receiver" />
						<ReactDataGridColumn sortable={false} enableCellClickRowSelect={false} columnWidthMode="fixed" width="240" headerText="File Name" useUnderLine={true} itemRenderer={new ClassFactory(BankEFTFilerenderer)} viewFile={this.viewFile}>
							{/* <nestedtreedatagrid:itemRenderer>
								<fx:Component>
									<mx:Canvas horizontalScrollPolicy="off">
										<s:HGroup>
											<mx:Image top="5" right="2" id="infoIcon" source="@Embed('/org/ehit/edi/hub/assets/img/report_go.png')" useHandCursor={true} buttonMode={true}
													  mouseChildren={false} toolTip="Click to view report" click="parentDocument.viewFile(data.id.fileId, true)"/>
											<mx:Label id="lbl" selectable={true} text="{parentDocument.getFileName(data.filename)}" buttonMode={true}
													  click="parentDocument.viewFile(data.id.fileId, false)" useHandCursor={true} mouseChildren={false} color="#712464"/>
										</s:HGroup>
									</mx:Canvas>
								</fx:Component>
							</nestedtreedatagrid:itemRenderer> */}
						</ReactDataGridColumn>
						<ReactDataGridColumn columnWidthMode="fitToContent" dataField="pollControl.processSender" enableCellClickRowSelect={false} filterControl="TextInput" filterOperation="Contains" filterWaterMark="Contains" headerText="Payer" iconRight="5" />
						<ReactDataGridColumn columnWidthMode="fitToContent" enableCellClickRowSelect={false} filterControl="TextInput" filterOperation="Contains" filterWaterMark="Contains" headerText="Status" itemRenderer={new ClassFactory(BankEFTStatusRenderer)} parentDocument={this}>
						</ReactDataGridColumn>
						<ReactDataGridColumn columnWidthMode="fitToContent" dataField="logDatetime" labelFunction={this.globalDateFormatter.bind(this)} /*formatter={ExampleUtils.globalDateFormatter}*/ enableCellClickRowSelect={false} headerText="Log Time" /*filterConverterFunction="convertDate" filterRenderer="org.ehit.edi.hub.uitl.dateFormatCombo.EdiDateComboBox" */ />
					</ReactDataGridColumnLevel>
				</DataGrid>
				<AdvanceDialog
						open={this.state.fileEditorWindow}
						handleClose={() => this.setState({ fileEditorWindow: false })}
						bodyRenderer={
							<FileEditor
								ref={g => (this.fileEditor = g)}
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
