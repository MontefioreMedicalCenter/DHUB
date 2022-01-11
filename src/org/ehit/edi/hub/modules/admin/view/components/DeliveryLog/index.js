import { Paper } from '@material-ui/core'
import moment from 'moment'
import React from 'react'
import { EventDispatcher, ExtendedExportController, ReactDataGridColumn, ReactDataGridColumnLevel } from '../../../../../../../../../flexicious'
import MontefioreUtils from '../../../../../../../../../service/utils/MontefioreUtils'
import AdvanceDialog from '../../../../../../../../../shared/components/AdvanceDialog'
import DataGrid from '../../../../../../../../../shared/components/ExtendedDataGrid'
import FileEditor from '../../../../../main/view/components/FileEditor'
import { DeliveryLogMediator } from '../../DeliveryLogMediator.ts'
import LogSearch from '../LogSearch/LogSearch'
import './deliveryLog.scss'

class DeliveryLog extends EventDispatcher {
	constructor() {
		super()
		this.state = {
			fileEditorWindow: false
		}
	}

	componentDidMount() {
		this.mediator = new DeliveryLogMediator().onRegister(this)
	}

	componentWillUnmount() {
		this.mediator.onUnRegister()
	}

	globalDateFormatter = item => {
		if (item.id.logDatetime != null) return moment(new Date(item.id.logDatetime)).format('MM/DD/YYYY')
	}

	onToolbarExport = () => {
		ExtendedExportController.instance().export()
	}

	render() {
		return (
			<Paper className="pageStyle">
				<Paper className="whiteContainer">
					<div className="searchContainer">
						<LogSearch ref={g => (this.logSearch = g)} parentDocument={this} />
					</div>
				</Paper>
				<div className="deliveryLogGrid">
					<DataGrid id="grid" ref={g => (this.grid = g)} width="100%" height="100%" enableCopy={true} enableExport={true} styleName="gridStyle" toolbarExcelHandlerFunction={this.onToolbarExport} pagerRenderer={MontefioreUtils.pagerFactory}>
						<ReactDataGridColumnLevel rowHeight="21" enableFilters={true} enablePaging={true} pageSize="50" />
						<ReactDataGridColumn columnWidthMode="fitToContent" dataField="deliveryControl.deliveryDescr" enableCellClickRowSelect={false} filterControl="TextInput" filterOperation="Contains" headerText="Delivery Control Desc" filterWaterMark="Contains" />
						<ReactDataGridColumn columnWidthMode="fitToContent" dataField="deliveryControl.receivingSystem" enableCellClickRowSelect={false} filterControl="TextInput" filterOperation="Contains" headerText="Receiver" filterWaterMark="Contains" />
						<ReactDataGridColumn columnWidthMode="fitToContent" dataField="id.deliveryControlId" enableCellClickRowSelect={false} filterControl="TextInput" filterOperation="Contains" headerText="Control Id" filterWaterMark="Contains" />
						<ReactDataGridColumn columnWidthMode="fitToContent" dataField="id.configId" enableCellClickRowSelect={false} filterControl="TextInput" filterOperation="Contains" headerText="Config Id" filterWaterMark="Contains" />
						<ReactDataGridColumn columnWidthMode="fitToContent" dataField="id.logDatetime" labelFunction={this.globalDateFormatter.bind(this)} enableCellClickRowSelect={false} headerText="Log DateTime" />
						<ReactDataGridColumn dataField="filename" enableCellClickRowSelect={false} filterControl="TextInput" filterOperation="Contains" headerText="File Name" filterWaterMark="Contains" />
						<ReactDataGridColumn columnWidthMode="fitToContent" dataField="fileId" enableCellClickRowSelect={false} filterControl="TextInput" filterOperation="Contains" headerText="File Id" useUnderLine={true} />
						<ReactDataGridColumn dataField="postFileId" enableCellClickRowSelect={false} filterControl="TextInput" filterOperation="Contains" useUnderLine={true} headerText="Post File Id" />
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
			</Paper>
		)
	}
}

export default DeliveryLog