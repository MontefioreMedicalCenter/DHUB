import React from 'react'
import moment from 'moment'
import FileNameRenderer from '../../../../../../../../../container/views/itemRenderers/FileNameRenderer'
import RemitCoreRenderer from '../../../../../../../../../container/views/itemRenderers/RemitCoreRenderer'
import { DateRange, ClassFactory, EventDispatcher, ReactDataGridColumn, ReactDataGridColumnLevel } from '../../../../../../../../../flexicious'
import DataGrid from '../../../../../../../../../shared/components/ExtendedDataGrid'
import ExampleUtils from '../../../../../../../../../utils/ExampleUtils'
import EdiDateRangeCombo from '../../../../../../../../../utils/dateFormatCombo/EdiDateRangeCombo'
import MontefioreUtils from '../../../../../../../../../service/utils/MontefioreUtils'


const bgcolorarray = [ "0xC0C0C0,0xEEEEEE"]
const headerbgcolorarray = [ "0xEEEEEE,0xC0C0C0"]
class RemitCore extends EventDispatcher {

	onClick = (e, data) => {
		this.props.parentDocument.viewDetail(data)
	}

	viewFile = (e, data, reportOnly) => {
		this.props.parentDocument.viewFile(data, reportOnly)
	}

	dateForm = (item, col) => {
		const dataField = col.dataField.split('.')
		return item[dataField] ? moment(new Date(item[dataField])).format('MM/DD/YY hh:mm A') : null
	}

	render() {
		return (
			<div style={{ height:'0px'}}>
			<div style={{ height: 'calc(100vh - 340px)', visibility: this.props.hide && 'hidden', minHeight: !this.props.hide && '200px' }}>
				<DataGrid
					ref={g => (this.grid = g)}
					enableCopy={true}
					enableExport={true}
					enablePrint={true}
					styleName="gridStyle"
					fontSize="11"
					alternatingItemColors={[0xe1e8e4, 0xffffff]}
					horizontalScrollPolicy="auto"
					horizontalGridLines={true}
					horizontalGridLineColor="#F2F2F2"
					horizontalGridLineThickness="1"
					name="remitCore"
					width="100%"
					height="100%"
					backgroundColor="white"
					/*creationComplete="onComplete(event)"*/ 
					enableDrillDown={true}
					pagerRenderer={MontefioreUtils.pagerFactory}
				>
					<ReactDataGridColumnLevel enableFilters={true} enablePaging={true} enableFooters={true} pageSize="50" color="0x185B29" childrenField="xremitDetailTrackings">
						<ReactDataGridColumn headerAlign="right" textAlign="right" footerAlign="right" sortable={false} enableCellClickRowSelect={false} width="50" headerWordWrap={true} itemRenderer={new ClassFactory(RemitCoreRenderer)} onHandleClick={(e, data) => {this.onClick(e, data)}} />
						<ReactDataGridColumn headerAlign="right" textAlign="right" footerAlign="right" sortable={false} enableCellClickRowSelect={false} columnWidthMode="fixed" width="150" headerText="File Name" useUnderLine={true} fontWeight="bold" itemRenderer={new ClassFactory(FileNameRenderer)} onHandleFileName={(e, data, reportOnly) => {this.viewFile(e, data, reportOnly)}} dataField="xmitFileName"/>
						<ReactDataGridColumn headerAlign="right" textAlign="right" footerAlign="right" columnWidthMode="fitToContent" dataField="transmissionDatetime" filterDateRangeOptions={[DateRange.DATE_RANGE_CUSTOM]} filterControl="DateComboBox" filterOperation="Contains" labelFunction={this.dateForm} enableCellClickRowSelect="false" headerText="File Recvd Date" filterRenderer={EdiDateRangeCombo}/>
						<ReactDataGridColumn headerAlign="right" textAlign="right" footerAlign="right" columnWidthMode="fitToContent" dataField="systemId" enableCellClickRowSelect={false} filterControl="TextInput" filterOperation="Contains" filterWaterMark="Contains" headerText="System" headerWordWrap={false} />
						<ReactDataGridColumn headerAlign="right" textAlign="right" footerAlign="right" columnWidthMode="fitToContent" dataField="checkTraceNum" enableCellClickRowSelect={false} filterControl="TextInput" filterOperation="Contains" filterWaterMark="Contains" headerText="Check/EFT Trace Number" headerWordWrap={true} />
						<ReactDataGridColumn headerAlign="right" textAlign="right" footerAlign="right" columnWidthMode="fitToContent" dataField="paymentMethod" enableCellClickRowSelect={false} filterControl="TextInput" filterOperation="Contains" filterWaterMark="Contains" headerText="Payment Method" headerWordWrap={true} />
						<ReactDataGridColumn headerAlign="right" textAlign="right" footerAlign="right" columnWidthMode="fitToContent" dataField="checkIssueDate" filterDateRangeOptions={[DateRange.DATE_RANGE_CUSTOM]} filterControl="DateComboBox" filterOperation="Contains" labelFunction={this.dateForm} enableCellClickRowSelect="false" headerText="Check Issue Date" filterRenderer={EdiDateRangeCombo}/>
						<ReactDataGridColumn headerAlign="right" textAlign="right" footerAlign="right" columnWidthMode="fitToContent" dataField="checkAmt" enableCellClickRowSelect={false} filterControl="NumericRangeBox" filterWaterMark="Between" headerText="Check Amount" headerWordWrap={true} labelFunction={MontefioreUtils.currencyFormatterWithComma} footerFormatter={ExampleUtils.globalCurrencyFormatter} footerOperation="sum" footerOperationPrecision="2" />
						<ReactDataGridColumn headerAlign="right" textAlign="right" footerAlign="right" columnWidthMode="fitToContent" dataField="payeeName" enableCellClickRowSelect={false} filterControl="TextInput" filterOperation="Contains" filterWaterMark="Contains" headerText="Payee" />
						<ReactDataGridColumn headerAlign="right" textAlign="right" footerAlign="right" columnWidthMode="fitToContent" dataField="payeeId" enableCellClickRowSelect={false} filterControl="TextInput" filterOperation="Contains" filterWaterMark="Contains" headerText="Payee ID" />
						<ReactDataGridColumn headerAlign="right" textAlign="right" footerAlign="right" columnWidthMode="fitToContent" dataField="payerId" enableCellClickRowSelect={false} filterControl="TextInput" filterOperation="Contains" filterWaterMark="Contains" headerText="Payer ID" />
						<ReactDataGridColumn headerAlign="right" textAlign="right" footerAlign="right" columnWidthMode="fitToContent" dataField="payerName" enableCellClickRowSelect={false} filterControl="TextInput" filterOperation="Contains" filterWaterMark="Contains" headerText="Payer" />
						<ReactDataGridColumn headerAlign="right" textAlign="right" footerAlign="right" columnWidthMode="fitToContent" dataField="stUnitCount" enableCellClickRowSelect={false} filterControl="TextInput" filterOperation="Contains" filterWaterMark="Contains" headerText="Total Claim Count" headerWordWrap={true}  footerOperation="sum" footerOperationPrecision="0" />
						<ReactDataGridColumn headerAlign="right" textAlign="right" footerAlign="right" columnWidthMode="fitToContent" dataField="totalChrgAmt" enableCellClickRowSelect={false} filterControl="TextInput" filterOperation="Contains" filterWaterMark="Contains" headerText="Total Charges" labelFunction={MontefioreUtils.currencyFormatterWithComma} headerWordWrap={true}  footerFormatter={ExampleUtils.globalCurrencyFormatter} footerOperation="sum" footerOperationPrecision="2" />
						<ReactDataGridColumn headerAlign="right" textAlign="right" footerAlign="right" columnWidthMode="fitToContent" dataField="totalPaymentAmt" enableCellClickRowSelect={false} filterControl="TextInput" filterOperation="Contains" filterWaterMark="Contains" headerText="Total Payment Amount" labelFunction={MontefioreUtils.currencyFormatterWithComma} headerWordWrap={true}  footerFormatter={ExampleUtils.globalCurrencyFormatter} footerOperation="sum" footerOperationPrecision="2" />
						<ReactDataGridColumn headerAlign="right" textAlign="right" footerAlign="right" columnWidthMode="fitToContent" enableCellClickRowSelect={false} filterControl="NumericRangeBox" filterWaterMark="Between" dataField="provAdj" headerText="Provider Adj" labelFunction={MontefioreUtils.currencyFormatterWithComma} headerWordWrap={true}  footerFormatter={ExampleUtils.globalCurrencyFormatter} footerOperation="sum" footerOperationPrecision="2" />
						<ReactDataGridColumn headerAlign="right" textAlign="right" footerAlign="right" columnWidthMode="fitToContent" enableCellClickRowSelect={false} filterControl="TextInput" filterOperation="Contains" filterWaterMark="Contains" dataField="totalPatientResp" headerText="Total Patient Resp." labelFunction={MontefioreUtils.currencyFormatterWithComma} headerWordWrap={false} />
						<ReactDataGridColumn headerAlign="right" textAlign="right" footerAlign="right" columnWidthMode="fitToContent" enableCellClickRowSelect={false} filterControl="TextInput" filterOperation="Contains" filterWaterMark="Contains" dataField="totalNonCovChrg" headerText="Total Non-Covered Charges" labelFunction={MontefioreUtils.currencyFormatterWithComma} headerWordWrap={false}  footerFormatter={ExampleUtils.globalCurrencyFormatter} footerOperation="sum" footerOperationPrecision="2" />
						<ReactDataGridColumnLevel rowHeight="21" nestIndent="30" headerColors={bgcolorarray} headerRollOverColors={headerbgcolorarray} alternatingItemColors={[0xffffff,0xffffff]} color="blue">
							<ReactDataGridColumn headerAlign="right" textAlign="right" columnWidthMode="fitToContent" dataField="checkTraceNum" enableCellClickRowSelect={false} headerText="Check #" />
							<ReactDataGridColumn headerAlign="right" textAlign="right" columnWidthMode="fitToContent" dataField="billSys" enableCellClickRowSelect={false} headerText="Billing System" />
							<ReactDataGridColumn headerAlign="right" textAlign="right" columnWidthMode="fitToContent" dataField="invoiceNum" enableCellClickRowSelect={false} headerText="PCN #" />
							<ReactDataGridColumn headerAlign="right" textAlign="right" columnWidthMode="fitToContent" dataField="status" enableCellClickRowSelect={false} headerText="Status" />
							<ReactDataGridColumn headerAlign="right" textAlign="right" columnWidthMode="fitToContent" dataField="patientId" enableCellClickRowSelect={false} headerText="Member ID" />
							<ReactDataGridColumn headerAlign="right" textAlign="right" columnWidthMode="fitToContent" dataField="patientLast" enableCellClickRowSelect={false} headerText="Patient Last Name" />
							<ReactDataGridColumn headerAlign="right" textAlign="right" columnWidthMode="fitToContent" dataField="patientFirst" enableCellClickRowSelect={false} headerText="Patient First Name" />
							<ReactDataGridColumn headerAlign="right" textAlign="right" columnWidthMode="fitToContent" dataField="providerName" enableCellClickRowSelect={false} headerText="Provider" />
							<ReactDataGridColumn headerAlign="right" textAlign="right" columnWidthMode="fitToContent" dataField="providerId" enableCellClickRowSelect={false} headerText="Provider ID" />
							<ReactDataGridColumn headerAlign="right" textAlign="right" columnWidthMode="fitToContent" enableCellClickRowSelect={false} filterControl="TextInput" filterOperation="Contains" filterWaterMark="Contains" headerText="Claim Service Date" />
							<ReactDataGridColumn headerAlign="right" textAlign="right" columnWidthMode="fitToContent" dataField="totalClaimChrg" enableCellClickRowSelect={false} headerText="Total Charges" labelFunction={MontefioreUtils.currencyFormatterWithComma}  footerFormatter={ExampleUtils.globalCurrencyFormatter} footerOperation="sum" footerOperationPrecision="2"  />
							<ReactDataGridColumn headerAlign="right" textAlign="right" columnWidthMode="fitToContent" dataField="claimPaymentAmt" enableCellClickRowSelect={false} headerText="Payment" labelFunction={MontefioreUtils.currencyFormatterWithComma}  footerFormatter={ExampleUtils.globalCurrencyFormatter} footerOperation="sum" footerOperationPrecision="2"  />
							<ReactDataGridColumn headerAlign="right" textAlign="right" columnWidthMode="fitToContent" dataField="patientRespAmt" enableCellClickRowSelect={false} headerText="Patient Resp" labelFunction={MontefioreUtils.currencyFormatterWithComma}  footerFormatter={ExampleUtils.globalCurrencyFormatter} footerOperation="sum" footerOperationPrecision="2"  />
							<ReactDataGridColumn headerAlign="right" textAlign="right" width="100" dataField="nonCovChrg" enableCellClickRowSelect={false} headerText="Non Covered Charges" headerWordWrap = {false} labelFunction={MontefioreUtils.currencyFormatterWithComma}  footerFormatter={ExampleUtils.globalCurrencyFormatter} footerOperation="sum" footerOperationPrecision="2"  />
						</ReactDataGridColumnLevel>
					</ReactDataGridColumnLevel>
				</DataGrid>
			</div>
			</div>
		)
	}
}

export default RemitCore
