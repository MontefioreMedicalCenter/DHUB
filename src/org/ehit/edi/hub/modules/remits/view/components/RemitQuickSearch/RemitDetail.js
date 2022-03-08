import React from 'react'
import moment from 'moment'
import ClaimServiceDateRenderer from '../../../../../../../../../container/views/itemRenderers/ClaimServiceDateRenderer'
import RemitDetailFileRenderer from '../../../../../../../../../container/views/itemRenderers/RemitDetailFileRenderer'
import RemitDetailRenderer from '../../../../../../../../../container/views/itemRenderers/RemitDetailRenderer'
import { DateRange, ClassFactory, EventDispatcher, ReactDataGridColumn, ReactDataGridColumnLevel } from '../../../../../../../../../flexicious'
import DataGrid from '../../../../../../../../../shared/components/ExtendedDataGrid'
import ExampleUtils from '../../../../../../../../../utils/ExampleUtils'
import EdiDateRangeCombo from '../../../../../../../../../utils/dateFormatCombo/EdiDateRangeCombo'
import MontefioreUtils from '../../../../../../../../../service/utils/MontefioreUtils'

class RemitDetail extends EventDispatcher {
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
			<div style={{ height: '50px' }}>
				<div style={{ height: this.props.hide ? '1px' : 'calc(100vh - 340px)', visibility: this.props.hide && 'hidden', minHeight: !this.props.hide && '200px' }}>
					<DataGrid ref={g => (this.grid = g)} id="grid" enableCopy={true} enableExport={true} enablePrint={true} styleName="gridStyle" fontSize="11" useCompactPreferences={true} alternatingItemColors={[0xe1e8e4, 0xffffff]} horizontalScrollPolicy="auto" horizontalGridLines={true} horizontalGridLineColor="#F2F2F2" horizontalGridLineThickness="1" name="remitDetail" width="100%" height="100%" backgroundColor="white" /*creationComplete="onComplete(event)" */ pagerRenderer={MontefioreUtils.pagerFactory}>
						<ReactDataGridColumnLevel enableFilters={true} enablePaging={true} pageSize="50" color="0x185B29">
							<ReactDataGridColumn sortable={false} enableCellClickRowSelect={false} width="50" headerWordWrap={true} itemRenderer={new ClassFactory(RemitDetailRenderer)} onHandleClick={(e, data) => {this.onClick(e, data)}} />
							<ReactDataGridColumn sortable={false} enableCellClickRowSelect={false} columnWidthMode="fixed" width="150" headerText="File Name" useUnderLine={true} fontWeight="bold" itemRenderer={new ClassFactory(RemitDetailFileRenderer)} onHandleFileName={(e, data, reportOnly) => this.viewFile(e, data, reportOnly)} dataField="xmitFileName" />
							<ReactDataGridColumn columnWidthMode="fitToContent" dataField="transmissionDatetime" filterDateRangeOptions={[DateRange.DATE_RANGE_CUSTOM]} filterControl="DateComboBox" filterOperation="Contains" labelFunction={this.dateForm} enableCellClickRowSelect="false" headerText="File Recvd Date" filterRenderer={EdiDateRangeCombo} />
							<ReactDataGridColumn columnWidthMode="fitToContent" dataField="transmissionSystemId" enableCellClickRowSelect={false} filterControl="TextInput" filterOperation="Contains" filterWaterMark="Contains" headerText="System" />
							<ReactDataGridColumn columnWidthMode="fitToContent" dataField="checkTraceNum" enableCellClickRowSelect={false} headerText="Check/EFT Trace Number" filterControl="TextInput" filterOperation="Contains" filterWaterMark="Contains" />
							<ReactDataGridColumn columnWidthMode="fitToContent" dataField="payeeName" enableCellClickRowSelect={false} headerText="Payee Name" filterControl="TextInput" filterOperation="Contains" filterWaterMark="Contains" />
							<ReactDataGridColumn columnWidthMode="fitToContent" dataField="payeeId" enableCellClickRowSelect={false} filterControl="TextInput" filterOperation="Contains" filterWaterMark="Contains" headerText="Payee ID" />
							<ReactDataGridColumn columnWidthMode="fitToContent" dataField="payerName" enableCellClickRowSelect={false} headerText="Payer Name" filterControl="TextInput" filterOperation="Contains" filterWaterMark="Contains" />
							<ReactDataGridColumn columnWidthMode="fitToContent" dataField="billSys" enableCellClickRowSelect={false} headerText="Billing System" filterControl="TextInput" filterOperation="Contains" filterWaterMark="Contains" />
							<ReactDataGridColumn columnWidthMode="fitToContent" dataField="invoiceNum" enableCellClickRowSelect={false} headerText="PCN #" filterControl="TextInput" filterOperation="Contains" filterWaterMark="Contains" />
							<ReactDataGridColumn columnWidthMode="fitToContent" dataField="status" enableCellClickRowSelect={false} headerText="Status" filterControl="TextInput" filterOperation="Contains" filterWaterMark="Contains" />
							<ReactDataGridColumn columnWidthMode="fitToContent" dataField="patientId" enableCellClickRowSelect={false} headerText="Member ID" filterControl="TextInput" filterOperation="Contains" filterWaterMark="Contains" />
							<ReactDataGridColumn columnWidthMode="fitToContent" dataField="patientLast" enableCellClickRowSelect={false} headerText="Patient Last Name" filterControl="TextInput" filterOperation="Contains" filterWaterMark="Contains" />
							<ReactDataGridColumn columnWidthMode="fitToContent" dataField="patientFirst" enableCellClickRowSelect={false} headerText="Patient First Name" filterControl="TextInput" filterOperation="Contains" filterWaterMark="Contains" />
							<ReactDataGridColumn columnWidthMode="fitToContent" dataField="providerName" enableCellClickRowSelect={false} headerText="Provider" filterControl="TextInput" filterOperation="Contains" filterWaterMark="Contains" />
							<ReactDataGridColumn columnWidthMode="fitToContent" dataField="providerId" enableCellClickRowSelect={false} headerText="Provider ID" filterControl="TextInput" filterOperation="Contains" filterWaterMark="Contains" />
							<ReactDataGridColumn columnWidthMode="fitToContent" headerText="Claim Service Date" itemRenderer={new ClassFactory(ClaimServiceDateRenderer)} />
							<ReactDataGridColumn columnWidthMode="fitToContent" dataField="totalClaimChrg" enableCellClickRowSelect={false} headerText="Total Charges" formatter={ExampleUtils.globalCurrencyFormatter} footerAlign="right" footerFormatter={ExampleUtils.globalCurrencyFormatter} footerOperation="sum" footerOperationPrecision="2" textAlign="right" />
							<ReactDataGridColumn columnWidthMode="fitToContent" dataField="claimPaymentAmt" enableCellClickRowSelect={false} headerText="Payment" formatter={ExampleUtils.globalCurrencyFormatter} footerAlign="right" footerFormatter={ExampleUtils.globalCurrencyFormatter} footerOperation="sum" footerOperationPrecision="2" textAlign="right" />
							<ReactDataGridColumn columnWidthMode="fitToContent" dataField="patientRespAmt" enableCellClickRowSelect={false} headerText="Patient Resp" formatter={ExampleUtils.globalCurrencyFormatter} footerAlign="right" footerFormatter={ExampleUtils.globalCurrencyFormatter} footerOperation="sum" footerOperationPrecision="2" textAlign="right" />
							<ReactDataGridColumn columnWidthMode="fitToContent" dataField="nonCovChrg" enableCellClickRowSelect={false} headerText="Non Covered Charges" formatter={ExampleUtils.globalCurrencyFormatter} footerAlign="right" footerFormatter={ExampleUtils.globalCurrencyFormatter} footerOperation="sum" footerOperationPrecision="2" textAlign="right" />
						</ReactDataGridColumnLevel>
					</DataGrid>
				</div>
			</div>
		)
	}
}

export default RemitDetail
