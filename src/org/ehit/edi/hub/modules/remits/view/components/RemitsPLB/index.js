import React from 'react'
import { ReactDataGridColumn, ReactDataGridColumnLevel } from '../../../../../../../../../flexicious'
import MontefioreUtils from '../../../../../../../../../service/utils/MontefioreUtils'
import DataGrid from '../../../../../../../../../shared/components/ExtendedDataGrid'

class RemitsPLB extends React.Component {
	render() {
		return (
			<div style={{ height: 'calc(100% - 1px)', width: '100%' }}>
				<DataGrid ref={g => (this.grid = g)} dataProvider={this.props.remitsPLB} id="grid" width="100%" height="100%" enableCopy="true" enableExport="true" styleName="gridStyle" horizontalScrollPolicy="auto" footerDrawTopBorder="true" enableEagerDraw="true" pagerRenderer={MontefioreUtils.pagerFactory}>
					<ReactDataGridColumnLevel rowHeight="21" enablePaging="true" pageSize="1000" enableFilters="true">
						<ReactDataGridColumn textAlign="left" headerAlign="left" width="200" dataField="checkNo" enableCellClickRowSelect="false" headerText="Check #" filterControl="TextInput" filterOperation="Contains" filterWaterMark="Contains" />
						<ReactDataGridColumn textAlign="left" headerAlign="left" width="200" dataField="code" enableCellClickRowSelect="false" headerText="Reason Code" />
						<ReactDataGridColumn textAlign="left" headerAlign="left" width="300" dataField="description" enableCellClickRowSelect="false" headerText="Description" />
						<ReactDataGridColumn textAlign="left" headerAlign="left" width="400" dataField="identifier" enableCellClickRowSelect="false" headerText="Reference ID" filterControl="TextInput" filterOperation="Contains" filterWaterMark="Contains" />
						<ReactDataGridColumn textAlign="left" headerAlign="left" dataField="adjAmt" enableCellClickRowSelect="false" headerText="Amount" labelFunction={MontefioreUtils.currencyFormatterWithComma} />
						<ReactDataGridColumn headerText="" />
					</ReactDataGridColumnLevel>
				</DataGrid>
			</div>
		)
	}
}

export default RemitsPLB
