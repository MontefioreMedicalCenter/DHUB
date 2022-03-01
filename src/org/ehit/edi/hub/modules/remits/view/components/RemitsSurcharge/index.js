import React from 'react'
import { ReactDataGridColumn, ReactDataGridColumnLevel } from '../../../../../../../../../flexicious'
import DataGrid from '../../../../../../../../../shared/components/ExtendedDataGrid'

class RemitsSurcharge extends React.Component {
	render() {
		return (
			<div style={{ height: 'calc(100% - 5px)', width: '100%' }}>
				<DataGrid id="grid" width="100%" height="100%" enableCopy="true" dataProvider={this.props.RemitsBalanceReport.props.parentDocument.state.remitsSurcharge} enableExport="true" styleName="gridStyle" horizontalScrollPolicy="auto" footerDrawTopBorder="true" enableEagerDraw="true">
					<ReactDataGridColumnLevel rowHeight="20" enablePaging="true" pageSize="1000" enableFooters="true" enableFilters="true">
						<ReactDataGridColumn width="200" dataField="invoiceNum" enableCellClickRowSelect="false" headerText="Invoice Number" filterControl="TextInput" filterOperation="Contains" filterWaterMark="Contains" />
						<ReactDataGridColumn width="200" dataField="refNum" enableCellClickRowSelect="false" headerText="Reference Number" />
						<ReactDataGridColumn width="200" dataField="patStat" enableCellClickRowSelect="false" headerText="Patient Status" />
						<ReactDataGridColumn width="200" dataField="claimNum" enableCellClickRowSelect="false" headerText="Claim Id" />
						<ReactDataGridColumn dataField="surchAmt" enableCellClickRowSelect="false" headerText="Surcharge Amount" /*labelFunction="UIUtils.dataGridFormatCurrencyLabelFunction" footerFormatter="{ExampleUtils.globalCurrencyFormatter}"*/ footerOperation="sum" footerOperationPrecision="2" />
					</ReactDataGridColumnLevel>
				</DataGrid>
			</div>
		)
	}
}

export default RemitsSurcharge
