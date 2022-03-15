import React from 'react'
import { ReactDataGridColumn, ReactDataGridColumnLevel } from '../../../../../../../../../flexicious'
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

	blueColor = () => 0x0000ff

	numFormat = (item, col) => {
		const dataField = col.dataField.split('.')
		return `$${Number(item[dataField] || 0).toFixed(2)}`
	}

	render() {
		return (
			<div style={{ height: 'calc(100% - 1px)', width: '100%' }}>
				<DataGrid ref={g => (this.grid = g)} id="grid" width="100%" height="100%" enableCopy={true} enableExport={true} enablePrint={true} styleName="gridStyle" enableDrillDown={true} horizontalScrollPolicy="auto" footerDrawTopBorder={true} enableEagerDraw={true} verticalScrollPolicy="on" pagerRenderer={MontefioreUtils.pagerFactory}>
					<ReactDataGridColumnLevel rowHeight="20" childrenField="claimDetails" enablePaging={true} pageSize="1000" enableFilters={true} enableFooters={true} initialSortAscending={true}>
						<ReactDataGridColumn headerAlign="right" textAlign="right" columnWidthMode="fitToContent" headerWordWrap={true} truncateToFit={true} dataField="batchNumber" enableCellClickRowSelect={false}  headerText="Batch #" />
						<ReactDataGridColumn headerAlign="right" textAlign="right" columnWidthMode="fitToContent" headerWordWrap={true} dataField="checkTraceNo" enableCellClickRowSelect={false} filterControl="TextInput" filterOperation="Contains" filterWaterMark="Contains" headerText="Check/EFT Trace #"  />
						<ReactDataGridColumn headerAlign="right" textAlign="right" columnWidthMode="fitToContent" headerWordWrap={true} truncateToFit={true} cellTextColorFunction={this.getCellTextColor} dataField="checkAmount" footerAlign="right" footerFormatter={ExampleUtils.globalCurrencyFormatter} footerOperation="sum" footerOperationPrecision="2" filterControl="TextInput" filterOperation="Contains" filterWaterMark="Contains" labelFunction={MontefioreUtils.currencyFormatterWithComma} headerText="Check Amount" /*labelFunction={UIUtils.dataGridFormatCurrencyLabelFunction}*/  footerWordWrap={true} />
						<ReactDataGridColumn headerAlign="right" textAlign="right" columnWidthMode="fitToContent" headerWordWrap={true} dataField="method" enableCellClickRowSelect={false} headerText="Payment Method"  />
						<ReactDataGridColumn headerAlign="right" textAlign="right" columnWidthMode="fitToContent" headerWordWrap={true} dataField="checkIssueDate" enableCellClickRowSelect={false} headerText="Check Issue Date"  /*formatter="{ExampleUtils.dateFormatter2}"*/ />
						<ReactDataGridColumn headerAlign="right" textAlign="right" columnWidthMode="fitToContent" headerWordWrap={true} dataField="checkPayee" enableCellClickRowSelect={false} headerText="Check Payee"  />
						<ReactDataGridColumn headerAlign="right" textAlign="right" headerWordWrap={true} cellTextColorFunction={this.getCellTextColor} dataField="claimPaymentTotal" footerAlign="right" footerFormatter={ExampleUtils.globalCurrencyFormatter} footerOperation="sum" footerOperationPrecision="2" filterWaterMark="Contains" filterControl="TextInput" filterOperation="Contains" labelFunction={MontefioreUtils.currencyFormatterWithComma} headerText="Claim Payment Amt" /*labelFunction={UIUtils.dataGridFormatCurrencyLabelFunction}*/  />
						<ReactDataGridColumn headerAlign="right" textAlign="right" headerWordWrap={true} dataField="claimPaymentCount" enableCellClickRowSelect={false} headerText="Total Claim Count"  footerAlign="right" footerOperation="sum" footerOperationPrecision="0" />
						<ReactDataGridColumn headerAlign="right" textAlign="right" headerWordWrap={true} truncateToFit={true} cellTextColorFunction={this.getCellTextColor} dataField="providerAdjustmentPayment" filterWaterMark="Contains" filterControl="TextInput" filterOperation="Contains" footerAlign="right" footerFormatter={ExampleUtils.globalCurrencyFormatter} footerOperation="sum" footerOperationPrecision="2" headerText="Provider Adjustment Payment" labelFunction={MontefioreUtils.currencyFormatterWithComma}  />
						<ReactDataGridColumn headerAlign="right" textAlign="right" headerWordWrap={true} cellTextColorFunction={this.getCellTextColor} labelFunction={this.numFormat} dataField="discrepancyAmt" footerAlign="right" footerFormatter={ExampleUtils.globalCurrencyFormatter} footerOperation="sum" headerText="Discrepancy" /*labelFunction={UIUtils.dataGridFormatCurrencyLabelFunction}*/  />
						<ReactDataGridColumn headerAlign="right" textAlign="right" headerWordWrap={true} cellTextColorFunction={this.getCellTextColor} dataField="adjAmount" filterWaterMark="Contains" filterControl="TextInput" filterOperation="Contains" footerAlign="right" footerFormatter={ExampleUtils.globalCurrencyFormatter} footerOperation="sum" footerOperationPrecision="2" headerText="Surcharge" labelFunction={MontefioreUtils.currencyFormatterWithComma}  />
						<ReactDataGridColumn headerAlign="right" textAlign="right" headerWordWrap={true} truncateToFit={true} cellTextColorFunction={this.getCellTextColor} dataField="controlTotal" filterWaterMark="Contains" filterControl="TextInput" filterOperation="Contains" footerAlign="right" footerFormatter={ExampleUtils.globalCurrencyFormatter} footerOperation="sum" footerOperationPrecision="2" headerText="Control Total" labelFunction={MontefioreUtils.currencyFormatterWithComma}  />
						<ReactDataGridColumnLevel rowHeight="19" nestIndent="30" headerColors={[0xc0c0c0, 0xeeeeee]} headerRollOverColors={[0xeeeeee, 0xc0c0c0]} color={0x0000ff} alternatingItemColors={[0xffffff, 0xffffff]} horizontalGridLineColor="#C0C0C0" horizontalGridLineThickness="2">
							<ReactDataGridColumn headerAlign="right" textAlign="right" width="100" dataField="system" cellTextColorFunction={this.blueColor} enableCellClickRowSelect={false} headerText="System" />
							<ReactDataGridColumn headerAlign="right" textAlign="right" columnWidthMode="fitToContent" cellTextColorFunction={this.blueColor} dataField="checkNo" enableCellClickRowSelect={false} headerText="Check #" />
							<ReactDataGridColumn headerAlign="right" textAlign="right" columnWidthMode="fitToContent" cellTextColorFunction={this.blueColor} dataField="claimNo" enableCellClickRowSelect={false} headerText="Claim #" />
							<ReactDataGridColumn headerAlign="right" textAlign="right" columnWidthMode="fitToContent" cellTextColorFunction={this.blueColor} dataField="status" enableCellClickRowSelect={false} headerText="Status" />
							<ReactDataGridColumn headerAlign="right" textAlign="right" columnWidthMode="fitToContent" cellTextColorFunction={this.blueColor} dataField="patientId" enableCellClickRowSelect={false} headerText="Patient ID" />
							<ReactDataGridColumn headerAlign="right" textAlign="right" columnWidthMode="fitToContent" cellTextColorFunction={this.blueColor} dataField="patientLastName" enableCellClickRowSelect={false} headerText="Patient Last Name" />
							<ReactDataGridColumn headerAlign="right" textAlign="right" columnWidthMode="fitToContent" cellTextColorFunction={this.blueColor} dataField="patientFirstName" enableCellClickRowSelect={false} headerText="Patient First Name" />
							<ReactDataGridColumn headerAlign="right" textAlign="right" columnWidthMode="fitToContent" cellTextColorFunction={this.blueColor} dataField="provider" enableCellClickRowSelect={false} headerText="Provider" />
							<ReactDataGridColumn headerAlign="right" textAlign="right" columnWidthMode="fitToContent" cellTextColorFunction={this.blueColor} dataField="providerId" enableCellClickRowSelect={false} headerText="Provider ID" />
							<ReactDataGridColumn headerAlign="right" textAlign="right" columnWidthMode="fitToContent" cellTextColorFunction={this.blueColor} dataField="claimServiceDate" enableCellClickRowSelect={false} headerText="Claim Service Date" />
							<ReactDataGridColumn headerAlign="right" textAlign="right" columnWidthMode="fitToContent" cellTextColorFunction={this.blueColor} dataField="payment" enableCellClickRowSelect={false} headerText="Payment" labelFunction={MontefioreUtils.currencyFormatterWithComma} footerAlign="right" footerFormatter={ExampleUtils.globalCurrencyFormatter} footerOperation="sum" footerOperationPrecision="2" /*labelFunction={UIUtils.dataGridFormatCurrencyLabelFunction}*/ />
							<ReactDataGridColumn headerAlign="right" textAlign="right" columnWidthMode="fitToContent" cellTextColorFunction={this.blueColor} dataField="totalCharges" enableCellClickRowSelect={false} headerText="Total Charges" labelFunction={MontefioreUtils.currencyFormatterWithComma} footerAlign="right" footerFormatter={ExampleUtils.globalCurrencyFormatter} footerOperation="sum" footerOperationPrecision="2" /*labelFunction={UIUtils.dataGridFormatCurrencyLabelFunction}*/ />
							<ReactDataGridColumn headerAlign="right" textAlign="right" width="150" cellTextColorFunction={this.blueColor} dataField="nonCoveredCharges" enableCellClickRowSelect={false} headerText="Non Covered Charges" labelFunction={MontefioreUtils.currencyFormatterWithComma} footerAlign="right" footerFormatter={ExampleUtils.globalCurrencyFormatter} footerOperation="sum" footerOperationPrecision="2" /*labelFunction={UIUtils.dataGridFormatCurrencyLabelFunction}*/ />
							<ReactDataGridColumn width="10" headerText=""/>
						</ReactDataGridColumnLevel>
					</ReactDataGridColumnLevel>
				</DataGrid>
			</div>
		)
	}
}

export default RemitsReport
