import React from 'react'
import { ReactDataGridColumn, ReactDataGridColumnLevel } from '../../../../../../../../../flexicious'
import DataGrid from '../../../../../../../../../shared/components/ExtendedDataGrid'

class RemitsPLB extends React.Component {
	render() {
		return (
			<div style={{ height: 'calc(100% - 1px)', width: '100%' }}>
				<DataGrid id="grid" width="100%" height="100%" enableCopy="true" dataProvider={this.props.RemitsBalanceReport.props.parentDocument.state.remitsPLB} enableExport="true" styleName="gridStyle" horizontalScrollPolicy="auto" footerDrawTopBorder="true" enableEagerDraw="true">
					<ReactDataGridColumnLevel rowHeight="21" enablePaging="true" pageSize="1000" enableFilters="true">
						<ReactDataGridColumn width="200" dataField="checkNo" enableCellClickRowSelect="false" headerText="Check #" filterControl="TextInput" filterOperation="Contains" filterWaterMark="Contains" />
						<ReactDataGridColumn width="200" dataField="code" enableCellClickRowSelect="false" headerText="Reason Code" />
						<ReactDataGridColumn width="200" dataField="description" enableCellClickRowSelect="false" headerText="Description" />
						<ReactDataGridColumn width="200" dataField="identifier" enableCellClickRowSelect="false" headerText="Reference ID" filterControl="TextInput" filterOperation="Contains" filterWaterMark="Contains" />
						<ReactDataGridColumn dataField="adjAmt" enableCellClickRowSelect="false" headerText="Amount" />
					</ReactDataGridColumnLevel>
				</DataGrid>
			</div>
		)
	}
}

export default RemitsPLB
