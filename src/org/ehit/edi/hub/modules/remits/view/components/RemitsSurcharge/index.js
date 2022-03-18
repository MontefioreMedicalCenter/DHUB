import React from 'react'
import { ReactDataGridColumn, ReactDataGridColumnLevel } from '../../../../../../../../../flexicious'
import MontefioreUtils from '../../../../../../../../../service/utils/MontefioreUtils'
import DataGrid from '../../../../../../../../../shared/components/ExtendedDataGrid'
import ExampleUtils from '../../../../../../../../../utils/ExampleUtils'

class RemitsSurcharge extends React.Component {
	render() {
		return (
			<div style={{ height: 'calc(100% - 1px)', width: '100%' }}>
				<DataGrid ref={g => (this.grid = g)} id="grid" width="100%" height="100%" enableCopy="true" dataProvider={this.props.RemitsBalanceReport.props.parentDocument.state.remitsSurcharge} enableExport="true" styleName="gridStyle" horizontalScrollPolicy="auto" footerDrawTopBorder="true" enableEagerDraw="true" pagerRenderer={MontefioreUtils.pagerFactory}>
					<ReactDataGridColumnLevel rowHeight="20" enablePaging="true" pageSize="1000" enableFooters="true" enableFilters="true">
						<ReactDataGridColumn headerAlign="right" footerAlign="right" textAlign="right" width="200" dataField="invoiceNum" enableCellClickRowSelect="false" headerText="Invoice Number" filterControl="TextInput" filterOperation="Contains" filterWaterMark="Contains" />
						<ReactDataGridColumn headerAlign="right" footerAlign="right" textAlign="right" width="200" dataField="refNum" enableCellClickRowSelect="false" headerText="Reference Number" />
						<ReactDataGridColumn headerAlign="right" footerAlign="right" textAlign="right" width="200" dataField="patStat" enableCellClickRowSelect="false" headerText="Patient Status" />
						<ReactDataGridColumn headerAlign="right" footerAlign="right" textAlign="right" width="200" dataField="claimNum" enableCellClickRowSelect="false" headerText="Claim Id" />
						<ReactDataGridColumn headerAlign="right" footerAlign="right" textAlign="right" dataField="surchAmt" enableCellClickRowSelect="false" headerText="Surcharge Amount"  footerFormatter={ExampleUtils.globalCurrencyFormatter}  labelFunction={MontefioreUtils.currencyFormatterWithComma} footerOperation="sum" footerOperationPrecision="2" />
						<ReactDataGridColumn headerAlign="right" width="10" headerText="" />
					</ReactDataGridColumnLevel>
				</DataGrid>
			</div>
		)
	}
}

export default RemitsSurcharge
