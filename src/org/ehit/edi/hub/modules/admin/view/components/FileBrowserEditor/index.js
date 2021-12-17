import { Paper } from '@material-ui/core'
import React from 'react'
import { EventDispatcher, ReactDataGridColumn, ReactDataGridColumnLevel } from '../../../../../../../../../flexicious'
import DataGrid from '../../../../../../../../../shared/components/ExtendedDataGrid'
import ExampleUtils from '../../../../../../../../../utils/ExampleUtils'
import { DispatchPollEvent } from '../../../model/events/DispatchPollEvent.ts'

class FileBrowserEditor extends EventDispatcher {
	constructor(props) {
		super(props)
		this._pollControlId = this.props && this.props.pollControlId
	}

	get pollControlId() {
		return this._pollControlId
	}

	set pollControlId(value) {
		this._pollControlId = this.props.pollControlId
	}

	flexdatagridcolumnlevel1_itemLoadHandler = () => {
		var parentDocument = this.props.parentDocument
		var dispatchPollEvent = new DispatchPollEvent(DispatchPollEvent.REMOTE_DIR_LIST, this.pollControlId)
		dispatchPollEvent.dirName = parentDocument.state.title
		parentDocument.dispatchEvent(dispatchPollEvent)
	}

	render() {
		return (
			<Paper style={{ height: 600, width: '1143px' }}>
				<DataGrid ref={g => (this.grid = g)} id="grid" width="100%" height="100%" enableCopy={true} styleName="gridStyle" enableEagerDraw={true} initialSortField="fileDate" initialSortAscending={false} preferencePersistenceKey='partialLazyLoaded'>
					<ReactDataGridColumnLevel rowHeight="21" itemLoadMode="server" itemLoad={this.flexdatagridcolumnlevel1_itemLoadHandler} enableFilters={true} enablePaging={true} pageSize="50">
						<ReactDataGridColumn width="400" dataField="fileName" enableCellClickRowSelect={false} filterControl="TextInput" filterOperation="Contains" headerText="File Name" />
						<ReactDataGridColumn width="50" dataField="fileSize" enableCellClickRowSelect={false} headerText="Size" />
						<ReactDataGridColumn width="50" dataField="fileDate" formatter={ExampleUtils.globalDateFormatter} enableCellClickRowSelect={false} filterControl="TextInput" filterOperation="Contains" headerText="File Date" /*filterConverterFunction="convertDate"*/ />
						<ReactDataGridColumn width="50" dataField="isDir" enableCellClickRowSelect={false} headerText="Dir" />
						<ReactDataGridColumnLevel itemLoadMode="server">
							<ReactDataGridColumn width="400" dataField="fileName" enableCellClickRowSelect={false} filterControl="TextInput" filterOperation="Contains" headerText="File Name" />
							<ReactDataGridColumn width="150" dataField="fileSize" enableCellClickRowSelect={false} headerText="Size" />
							<ReactDataGridColumn width="100" dataField="fileDate" formatter={ExampleUtils.globalDateFormatter} enableCellClickRowSelect={false} filterControl="TextInput" filterOperation="Contains" headerText="File Date" /*filterConverterFunction="convertDate"*/ />
							<ReactDataGridColumn width="100" dataField="isDir" enableCellClickRowSelect={false} headerText="Dir" />
							<ReactDataGridColumn width="100" enableCellClickRowSelect={false} headerAlign="center" headerText="Has Interfaces" /* ItemRenderer */ />
						</ReactDataGridColumnLevel>
					</ReactDataGridColumnLevel>
				</DataGrid>
			</Paper>
		)
	}
}

export default FileBrowserEditor
