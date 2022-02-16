import React from 'react'
import FileNameRenderer from '../../../../../../../../../container/views/itemRenderers/FileNameRenderer'
import RemitCoreRenderer from '../../../../../../../../../container/views/itemRenderers/RemitCoreRenderer'
import { ClassFactory, EventDispatcher, ReactDataGridColumn, ReactDataGridColumnLevel } from '../../../../../../../../../flexicious'
import DataGrid from '../../../../../../../../../shared/components/ExtendedDataGrid'
import ExampleUtils from '../../../../../../../../../utils/ExampleUtils'

class RemitCore extends EventDispatcher {

	onClick = (e, data) => {
		this.props.parentDocument.viewDetail(data)
	}

	viewFile = (e, data, reportOnly) => {
		this.props.parentDocument.viewFile(data, reportOnly)
	}

	render() {
		return (
			<div style={{ height:'0px'}}>
			<div style={{ height: 'calc(100vh - 380px)', visibility: this.props.hide && 'hidden', minHeight: !this.props.hide && '200px' }}>
				<DataGrid
					ref={g => (this.grid = g)}
					enableCopy={true}
					enableExport={true}
					enablePrint={true}
					styleName="gridStyle"
					fontSize="11"
					alternatingItemColors={['0xFFFFFF', '0xFFFFFF']}
					horizontalScrollPolicy="auto"
					horizontalGridLines={true}
					horizontalGridLineColor="#F2F2F2"
					horizontalGridLineThickness="1"
					name="remitCore"
					width="100%"
					height="100%"
					backgroundColor="white"
					/*creationComplete="onComplete(event)"*/ enableDrillDown={true}
					/*toolbarExcelHandlerFunction="onToolbarExport"*/
				>
					<ReactDataGridColumnLevel enableFilters={true} enablePaging={true} enableFooters={true} pageSize="50" color="0x185B29" childrenField="xremitDetailTrackings">
						<ReactDataGridColumn sortable={false} enableCellClickRowSelect={false} width="50" headerWordWrap={true} itemRenderer={new ClassFactory(RemitCoreRenderer)} onHandleClick={(e, data) => {this.onClick(e, data)}} />
						<ReactDataGridColumn sortable={false} enableCellClickRowSelect={false} columnWidthMode="fixed" width="150" headerText="File Name" useUnderLine={true} fontWeight="bold" itemRenderer={new ClassFactory(FileNameRenderer)} onHandleFileName={(e, data, reportOnly) => {this.viewFile(e, data, reportOnly)}} />
						<ReactDataGridColumn columnWidthMode="fitToContent" dataField="xhubTransmission.insertDatetime" enableCellClickRowSelect={false} headerText="File Recvd Date" formatter={ExampleUtils.globalDateFormatter} />
						<ReactDataGridColumn columnWidthMode="fitToContent" dataField="xhubTransmission.systemId" enableCellClickRowSelect={false} filterControl="TextInput" filterOperation="Contains" filterWaterMark="Contains" headerText="System" headerWordWrap={false} />
						<ReactDataGridColumn columnWidthMode="fitToContent" dataField="checkTraceNum" enableCellClickRowSelect={false} filterControl="TextInput" filterOperation="Contains" filterWaterMark="Contains" headerText="Check/EFT Trace Number" headerWordWrap={true} />
						<ReactDataGridColumn columnWidthMode="fitToContent" dataField="paymentMethod" enableCellClickRowSelect={false} filterControl="TextInput" filterOperation="Contains" filterWaterMark="Contains" headerText="Payment Method" headerWordWrap={true} />
						<ReactDataGridColumn columnWidthMode="fitToContent" dataField="checkIssueDate" enableCellClickRowSelect={false} filterControl="DateComboBox" formatter={ExampleUtils.dateFormatter2} headerText="Check Issue Date" headerWordWrap={true} />
						<ReactDataGridColumn columnWidthMode="fitToContent" dataField="checkAmt" enableCellClickRowSelect={false} filterControl="NumericRangeBox" filterWaterMark="Between" headerText="Check Amount" headerWordWrap={true} footerAlign="left" formatter={ExampleUtils.globalCurrencyFormatter} footerFormatter={ExampleUtils.globalCurrencyFormatter} footerOperation="sum" footerOperationPrecision="2" />
						<ReactDataGridColumn columnWidthMode="fitToContent" dataField="payeeName" enableCellClickRowSelect={false} filterControl="TextInput" filterOperation="Contains" filterWaterMark="Contains" headerText="Payee" />
						<ReactDataGridColumn columnWidthMode="fitToContent" dataField="payeeId" enableCellClickRowSelect={false} filterControl="TextInput" filterOperation="Contains" filterWaterMark="Contains" headerText="Payee ID" />
						<ReactDataGridColumn columnWidthMode="fitToContent" dataField="payerId" enableCellClickRowSelect={false} filterControl="TextInput" filterOperation="Contains" filterWaterMark="Contains" headerText="Payer ID" />
						<ReactDataGridColumn columnWidthMode="fitToContent" dataField="payerName" enableCellClickRowSelect={false} filterControl="TextInput" filterOperation="Contains" filterWaterMark="Contains" headerText="Payer" />
						<ReactDataGridColumn columnWidthMode="fitToContent" dataField="xhubTranSet.stUnitCount" enableCellClickRowSelect={false} filterControl="TextInput" filterOperation="Contains" filterWaterMark="Contains" headerText="Total Claim Count" headerWordWrap={true} footerAlign="left" footerOperation="sum" footerOperationPrecision="0" />
						<ReactDataGridColumn columnWidthMode="fitToContent" dataField="totalChrgAmt" enableCellClickRowSelect={false} filterControl="TextInput" filterOperation="Contains" filterWaterMark="Contains" headerText="Total Charges" formatter={ExampleUtils.globalCurrencyFormatter} headerWordWrap={true} footerAlign="left" footerFormatter={ExampleUtils.globalCurrencyFormatter} footerOperation="sum" footerOperationPrecision="2" />
						<ReactDataGridColumn columnWidthMode="fitToContent" dataField="totalPaymentAmt" enableCellClickRowSelect={false} filterControl="TextInput" filterOperation="Contains" filterWaterMark="Contains" headerText="Total Payment Amount" formatter={ExampleUtils.globalCurrencyFormatter} headerWordWrap={true} footerAlign="left" footerFormatter={ExampleUtils.globalCurrencyFormatter} footerOperation="sum" footerOperationPrecision="2" />
						<ReactDataGridColumn columnWidthMode="fitToContent" enableCellClickRowSelect={false} filterControl="NumericRangeBox" filterWaterMark="Between" dataField="provAdj" headerText="Provider Adj" formatter={ExampleUtils.globalCurrencyFormatter} headerWordWrap={true} footerAlign="left" footerFormatter={ExampleUtils.globalCurrencyFormatter} footerOperation="sum" footerOperationPrecision="2" />
						<ReactDataGridColumn columnWidthMode="fitToContent" enableCellClickRowSelect={false} filterControl="TextInput" filterOperation="Contains" filterWaterMark="Contains" dataField="totalPatientResp" headerText="Total Patient Resp." formatter={ExampleUtils.globalCurrencyFormatter} headerWordWrap={true} />
						<ReactDataGridColumn columnWidthMode="fitToContent" enableCellClickRowSelect={false} filterControl="TextInput" filterOperation="Contains" filterWaterMark="Contains" dataField="totalNonCovChrg" headerText="Total Non-Covered Charges" formatter={ExampleUtils.globalCurrencyFormatter} headerWordWrap={true} footerAlign="left" footerFormatter={ExampleUtils.globalCurrencyFormatter} footerOperation="sum" footerOperationPrecision="2" />
						<ReactDataGridColumnLevel rowHeight="21" nestIndent="30" headerColors="[0xC0C0C0,0xEEEEEE]" headerRollOverColors="[0xEEEEEE,0xC0C0C0]" alternatingItemColors="[0xffffff,0xffffff]" color="blue">
							<ReactDataGridColumn columnWidthMode="fitToContent" dataField="xremitCoreTracking.checkTraceNum" enableCellClickRowSelect={false} headerText="Check #" />
							<ReactDataGridColumn columnWidthMode="fitToContent" dataField="billSys" enableCellClickRowSelect={false} headerText="Billing System" />
							<ReactDataGridColumn columnWidthMode="fitToContent" dataField="invoiceNum" enableCellClickRowSelect={false} headerText="PCN #" />
							<ReactDataGridColumn columnWidthMode="fitToContent" dataField="status" enableCellClickRowSelect={false} headerText="Status" />
							<ReactDataGridColumn columnWidthMode="fitToContent" dataField="patientId" enableCellClickRowSelect={false} headerText="Member ID" />
							<ReactDataGridColumn columnWidthMode="fitToContent" dataField="patientLast" enableCellClickRowSelect={false} headerText="Patient Last Name" />
							<ReactDataGridColumn columnWidthMode="fitToContent" dataField="patientFirst" enableCellClickRowSelect={false} headerText="Patient First Name" />
							<ReactDataGridColumn columnWidthMode="fitToContent" dataField="providerName" enableCellClickRowSelect={false} headerText="Provider" />
							<ReactDataGridColumn columnWidthMode="fitToContent" dataField="providerId" enableCellClickRowSelect={false} headerText="Provider ID" />
							<ReactDataGridColumn columnWidthMode="fitToContent" enableCellClickRowSelect={false} filterControl="TextInput" filterOperation="Contains" filterWaterMark="Contains" headerText="Claim Service Date">
								{/* <nestedtreedatagrid:itemRenderer>
								<fx:Component>
									 <mx:HBox width="100%" horizontalAlign="left" horizontalScrollPolicy="off" backgroundAlpha="0">
										<fx:Script>
											<![CDATA[
												import org.ehit.edi.hub.uitl.ExampleUtils;
											]]>
										</fx:Script>
										<mx:Label text="{ExampleUtils.dateFormatter3.format(data.serviceStartDate)+' - ' +ExampleUtils.dateFormatter3.format(data.serviceEndDate) }" color="blue"/>
									</mx:HBox>
								</fx:Component>
							</nestedtreedatagrid:itemRenderer> */}
							</ReactDataGridColumn>
							<ReactDataGridColumn columnWidthMode="fitToContent" dataField="totalClaimChrg" enableCellClickRowSelect={false} headerText="Total Charges" formatter={ExampleUtils.globalCurrencyFormatter} footerAlign="left" footerFormatter={ExampleUtils.globalCurrencyFormatter} footerOperation="sum" footerOperationPrecision="2" textAlign="left" />
							<ReactDataGridColumn columnWidthMode="fitToContent" dataField="claimPaymentAmt" enableCellClickRowSelect={false} headerText="Payment" formatter={ExampleUtils.globalCurrencyFormatter} footerAlign="left" footerFormatter={ExampleUtils.globalCurrencyFormatter} footerOperation="sum" footerOperationPrecision="2" textAlign="left" />
							<ReactDataGridColumn columnWidthMode="fitToContent" dataField="patientRespAmt" enableCellClickRowSelect={false} headerText="Patient Resp" formatter={ExampleUtils.globalCurrencyFormatter} footerAlign="left" footerFormatter={ExampleUtils.globalCurrencyFormatter} footerOperation="sum" footerOperationPrecision="2" textAlign="left" />
							<ReactDataGridColumn columnWidthMode="fitToContent" dataField="nonCovChrg" enableCellClickRowSelect={false} headerText="Non Covered Charges" formatter={ExampleUtils.globalCurrencyFormatter} footerAlign="left" footerFormatter={ExampleUtils.globalCurrencyFormatter} footerOperation="sum" footerOperationPrecision="2" textAlign="left" />
						</ReactDataGridColumnLevel>
					</ReactDataGridColumnLevel>
				</DataGrid>
			</div>
			</div>
		)
	}
}

export default RemitCore
