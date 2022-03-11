import React from 'react'
import { ReactDataGridColumn, ReactDataGridColumnLevel, UIUtils } from '../../../../../../../../../flexicious'
import MontefioreUtils from '../../../../../../../../../service/utils/MontefioreUtils'
import DataGrid from '../../../../../../../../../shared/components/ExtendedDataGrid'
import ExampleUtils from '../../../../../../../../../utils/ExampleUtils'

class RemitsReport extends React.Component {
	getCellTextColor = cell => {
		var colorRed = false
		if (cell.getColumn().getDataField() === 'claimPaymentTotal') {
			colorRed = cell.rowInfo.getData().claimPaymentTotal < 0
		}
		if (cell.getColumn().getDataField() === 'providerAdjustmentPayment') {
			colorRed = cell.rowInfo.getData().providerAdjustmentPayment < 0
		}

		if (cell.getColumn().getDataField() === 'discrepancyAmt') {
			colorRed = cell.rowInfo.getData().discrepancyAmt < 0
		}

		if (cell.getColumn().getDataField() === 'adjAmount') {
			colorRed = cell.rowInfo.getData().adjAmount < 0
		}
		if (cell.getColumn().getDataField() === 'controlTotal') {
			colorRed = cell.rowInfo.getData().controlTotal < 0
		}

		if (colorRed) return 0xff0000
		else return 0x000000
	}

	numFormat = (item, col) => {
		const dataField = col.dataField.split('.')
		return `$${Number(item[dataField] || 0).toFixed(2)}`
	}

	render() {
		return (
			<div style={{ height: 'calc(100% - 1px)', width: '100%' }}>
				<DataGrid ref={g => (this.grid = g)} id="grid" width="100%" height="100%" enableCopy={true} enableExport={true} enablePrint={true} styleName="gridStyle" enableDrillDown={true} horizontalScrollPolicy="auto" footerDrawTopBorder={true} enableEagerDraw={true} verticalScrollPolicy="on" pagerRenderer={MontefioreUtils.pagerFactory}>
					<ReactDataGridColumnLevel rowHeight="20" childrenField="claimDetails" enablePaging={true} pageSize="1000" enableFilters={true} enableFooters={true} initialSortAscending={true}>
						<ReactDataGridColumn columnWidthMode="fitToContent" headerWordWrap={true} truncateToFit={true} dataField="batchNumber" enableCellClickRowSelect={false} textAlign="right" headerText="Batch #" />
						<ReactDataGridColumn columnWidthMode="fitToContent" headerWordWrap={true} headerAlign="right" dataField="checkTraceNo" enableCellClickRowSelect={false} filterControl="TextInput" filterOperation="Contains" filterWaterMark="Contains" headerText="Check/EFT Trace #" textAlign="right" />
						<ReactDataGridColumn columnWidthMode="fitToContent" headerWordWrap={true} truncateToFit={true} cellTextColorFunction={this.getCellTextColor} dataField="checkAmount" footerAlign="right" footerFormatter={ExampleUtils.globalCurrencyFormatter} footerOperation="sum" footerOperationPrecision="2" filterControl="TextInput" filterOperation="Contains" filterWaterMark="Contains" labelFunction={this.numFormat} headerText="Check Amount" /*labelFunction={UIUtils.dataGridFormatCurrencyLabelFunction}*/ textAlign="right" footerWordWrap={true} />
						<ReactDataGridColumn columnWidthMode="fitToContent" headerWordWrap={true} headerAlign="right" dataField="method" enableCellClickRowSelect={false} headerText="Payment Method" textAlign="right" />
						<ReactDataGridColumn columnWidthMode="fitToContent" headerWordWrap={true} headerAlign="right" dataField="checkIssueDate" enableCellClickRowSelect={false} headerText="Check Issue Date" textAlign="right" /*formatter="{ExampleUtils.dateFormatter2}"*/ />
						<ReactDataGridColumn columnWidthMode="fitToContent" headerWordWrap={true} headerAlign="right" dataField="checkPayee" enableCellClickRowSelect={false} headerText="Check Payee" textAlign="right" />
						<ReactDataGridColumn headerWordWrap={true} cellTextColorFunction={this.getCellTextColor} dataField="claimPaymentTotal" footerAlign="right" footerFormatter={ExampleUtils.globalCurrencyFormatter} footerOperation="sum" footerOperationPrecision="2" filterWaterMark="Contains" filterControl="TextInput" filterOperation="Contains" labelFunction={this.numFormat} headerText="Claim Payment Amt" /*labelFunction={UIUtils.dataGridFormatCurrencyLabelFunction}*/ textAlign="right" />
						<ReactDataGridColumn headerWordWrap={true} headerAlign="right" dataField="claimPaymentCount" enableCellClickRowSelect={false} headerText="Total Claim Count" textAlign="right" footerAlign="right" footerOperation="sum" footerOperationPrecision="0" />
						<ReactDataGridColumn headerWordWrap={true} truncateToFit={true} headerAlign="right" cellTextColorFunction={this.getCellTextColor} dataField="providerAdjustmentPayment" filterWaterMark="Contains" filterControl="TextInput" filterOperation="Contains" footerAlign="right" footerFormatter={ExampleUtils.globalCurrencyFormatter} footerOperation="sum" footerOperationPrecision="2" headerText="Provider Adjustment Payment" labelFunction={UIUtils.dataGridFormatCurrencyLabelFunction} textAlign="right" />
						<ReactDataGridColumn headerWordWrap={true} headerAlign="right" cellTextColorFunction={this.getCellTextColor} labelFunction={this.numFormat} dataField="discrepancyAmt" footerAlign="right" footerFormatter={ExampleUtils.globalCurrencyFormatter} footerOperation="sum" headerText="Discrepancy" /*labelFunction={UIUtils.dataGridFormatCurrencyLabelFunction}*/ textAlign="right" />
						<ReactDataGridColumn headerWordWrap={true} headerAlign="right" cellTextColorFunction={this.getCellTextColor} dataField="adjAmount" filterWaterMark="Contains" filterControl="TextInput" filterOperation="Contains" footerAlign="right" footerFormatter={ExampleUtils.globalCurrencyFormatter} footerOperation="sum" footerOperationPrecision="2" headerText="Surcharge" labelFunction={UIUtils.dataGridFormatCurrencyLabelFunction} textAlign="right" />
						<ReactDataGridColumn headerWordWrap={true} truncateToFit={true} headerAlign="right" cellTextColorFunction={this.getCellTextColor} dataField="controlTotal" filterWaterMark="Contains" filterControl="TextInput" filterOperation="Contains" footerAlign="right" footerFormatter={ExampleUtils.globalCurrencyFormatter} footerOperation="sum" footerOperationPrecision="2" headerText="Control Total" labelFunction={UIUtils.dataGridFormatCurrencyLabelFunction} textAlign="right" />
						<ReactDataGridColumnLevel rowHeight="19" nestIndent="30" headerColors={[0xc0c0c0, 0xeeeeee]} headerRollOverColors={[0xeeeeee, 0xc0c0c0]} alternatingItemColors={[0xffffff, 0xffffff]} color="blue" horizontalGridLineColor="#C0C0C0" horizontalGridLineThickness="2">
							<ReactDataGridColumn width="100" dataField="system" enableCellClickRowSelect={false} headerText="System" />
							<ReactDataGridColumn columnWidthMode="fitToContent" dataField="checkNo" enableCellClickRowSelect={false} headerText="Check #" />
							<ReactDataGridColumn columnWidthMode="fitToContent" dataField="claimNo" enableCellClickRowSelect={false} headerText="Claim #" />
							<ReactDataGridColumn columnWidthMode="fitToContent" dataField="status" enableCellClickRowSelect={false} headerText="Status" />
							<ReactDataGridColumn columnWidthMode="fitToContent" dataField="patientId" enableCellClickRowSelect={false} headerText="Patient ID" />
							<ReactDataGridColumn columnWidthMode="fitToContent" dataField="patientLastName" enableCellClickRowSelect={false} headerText="Patient Last Name" />
							<ReactDataGridColumn columnWidthMode="fitToContent" dataField="patientFirstName" enableCellClickRowSelect={false} headerText="Patient First Name" />
							<ReactDataGridColumn columnWidthMode="fitToContent" dataField="provider" enableCellClickRowSelect={false} headerText="Provider" />
							<ReactDataGridColumn columnWidthMode="fitToContent" dataField="providerId" enableCellClickRowSelect={false} headerText="Provider ID" />
							<ReactDataGridColumn columnWidthMode="fitToContent" dataField="claimServiceDate" enableCellClickRowSelect={false} headerText="Claim Service Date" />
							<ReactDataGridColumn columnWidthMode="fitToContent" dataField="payment" enableCellClickRowSelect={false} headerText="Payment" formatter={ExampleUtils.globalCurrencyFormatter} footerAlign="left" footerFormatter={ExampleUtils.globalCurrencyFormatter} footerOperation="sum" footerOperationPrecision="2" labelFunction={UIUtils.dataGridFormatCurrencyLabelFunction} textAlign="left" />
							<ReactDataGridColumn columnWidthMode="fitToContent" dataField="totalCharges" enableCellClickRowSelect={false} headerText="Total Charges" formatter={ExampleUtils.globalCurrencyFormatter} footerAlign="left" footerFormatter={ExampleUtils.globalCurrencyFormatter} footerOperation="sum" footerOperationPrecision="2" labelFunction={UIUtils.dataGridFormatCurrencyLabelFunction} textAlign="left" />
							<ReactDataGridColumn columnWidthMode="fitToContent" dataField="nonCoveredCharges" enableCellClickRowSelect={false} headerText="Non Covered Charges" formatter={ExampleUtils.globalCurrencyFormatter} footerAlign="left" footerFormatter={ExampleUtils.globalCurrencyFormatter} footerOperation="sum" footerOperationPrecision="2" labelFunction={UIUtils.dataGridFormatCurrencyLabelFunction} textAlign="left" />
						</ReactDataGridColumnLevel>
					</ReactDataGridColumnLevel>
				</DataGrid>
			</div>
		)
	}
}

export default RemitsReport
