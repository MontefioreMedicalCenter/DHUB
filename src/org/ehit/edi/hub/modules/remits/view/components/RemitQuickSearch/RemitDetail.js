import React from 'react'
import { DateRange, EventDispatcher, ReactDataGridColumn, ReactDataGridColumnLevel } from '../../../../../../../../../flexicious'
import DataGrid from '../../../../../../../../../shared/components/ExtendedDataGrid'
import ExampleUtils from '../../../../../../../../../utils/ExampleUtils'

class RemitDetail extends EventDispatcher {
	render() {
		return (
			<div style={{ height: this.props.hide ? '1px' : 'calc(100vh - 380px)', visibility: this.props.hide && 'hidden', minHeight: !this.props.hide && '200px' }}>
				<DataGrid ref={g => (this.grid = g)} id="grid" enableCopy={true} enableExport={true} enablePrint={true} styleName="gridStyle" fontSize="11" useCompactPreferences={true} alternatingItemColors="[0xFFFFFF ,0xFFFFFF]" horizontalScrollPolicy="auto" horizontalGridLines={true} horizontalGridLineColor="#F2F2F2" horizontalGridLineThickness="1" name="remitDetail" width="100%" height="100%" backgroundColor="white" /*creationComplete="onComplete(event)" toolbarExcelHandlerFunction="onToolbarExport" */ >
					<ReactDataGridColumnLevel enableFilters={true} enablePaging={true} pageSize="50" color="0x185B29">
						<ReactDataGridColumn sortable={false} enableCellClickRowSelect={false} width="50" headerWordWrap={true}>
							{/* <nestedtreedatagrid:itemRenderer>
						<fx:Component>
							<mx:HBox width="100%" horizontalAlign="left" horizontalScrollPolicy="off" backgroundAlpha="0">
								<mx:Label id="lbl" selectable={true} text="Detail" buttonMode={true} click="parentDocument.viewDetail(data)" styleName="linkMouseOut"
										  mouseOver="{lbl.styleName='linkMouseOver'}" mouseOut="{lbl.styleName='linkMouseOut'}" textAlign="right" useHandCursor={true} mouseChildren={false}
										  color="#712464"/>
							</mx:HBox>
						</fx:Component>
					</nestedtreedatagrid:itemRenderer> */}
						</ReactDataGridColumn>
						<ReactDataGridColumn sortable={false} enableCellClickRowSelect={false} columnWidthMode="fixed" width="150" headerText="File Name" useUnderLine={true} fontWeight="bold">
							{/* <nestedtreedatagrid:itemRenderer>
						<fx:Component>
							<mx:Canvas horizontalScrollPolicy="off">
								<fx:Script>
									<![CDATA[
										import com.flexicious.nestedtreedatagrid.cells.FlexDataGridCell;
										import com.flexicious.nestedtreedatagrid.interfaces.IFlexDataGridCell;
									]]>
								</fx:Script>
								<s:HGroup>
									<mx:Image top="5" right="2" id="infoIcon" source="@Embed('/org/ehit/edi/hub/assets/img/report_go.png')" useHandCursor={true} buttonMode={true} mouseChildren={false}
											  toolTip="Click to view report" click="parentDocument.viewFile(data.xremitCoreTracking.xhubTransmission.fileId, true)"/>
									<mx:Label id="lbl" selectable={true} text="{data.xremitCoreTracking.xhubTransmission.xmitFileName}" buttonMode={true}
											  click="parentDocument.viewFile(data.xremitCoreTracking.xhubTransmission.fileId, false)" useHandCursor={true} mouseChildren={false} color="#712464"/>
								</s:HGroup>
							</mx:Canvas>
						</fx:Component>
					</nestedtreedatagrid:itemRenderer> */}
						</ReactDataGridColumn>
						<ReactDataGridColumn columnWidthMode="fitToContent" dataField="xremitCoreTracking.xhubTransmission.insertDatetime" enableCellClickRowSelect={false} headerText="File Recvd Date" filterControl="TextInput" filterOperation="Contains" filterWaterMark="Contains" formatter={ExampleUtils.globalDateFormatter} />
						<ReactDataGridColumn columnWidthMode="fitToContent" dataField="xremitCoreTracking.xhubTransmission.systemId" enableCellClickRowSelect={false} filterControl="TextInput" filterOperation="Contains" filterWaterMark="Contains" headerText="System" headerWordWrap={false} />
						<ReactDataGridColumn columnWidthMode="fitToContent" dataField="checkTraceNum" enableCellClickRowSelect={false} headerText="Check/EFT Trace Number" filterControl="TextInput" filterOperation="Contains" filterWaterMark="Contains" />
						<ReactDataGridColumn columnWidthMode="fitToContent" dataField="xremitCoreTracking.payeeName" enableCellClickRowSelect={false} headerText="Payee Name" filterControl="TextInput" filterOperation="Contains" filterWaterMark="Contains" />
						<ReactDataGridColumn columnWidthMode="fitToContent" dataField="xremitCoreTracking.payeeId" enableCellClickRowSelect={false} filterControl="TextInput" filterOperation="Contains" filterWaterMark="Contains" headerText="Payee ID" />
						<ReactDataGridColumn columnWidthMode="fitToContent" dataField="xremitCoreTracking.payerName" enableCellClickRowSelect={false} headerText="Payer Name" filterControl="TextInput" filterOperation="Contains" filterWaterMark="Contains" />
						<ReactDataGridColumn columnWidthMode="fitToContent" dataField="billSys" enableCellClickRowSelect={false} headerText="Billing System" filterControl="TextInput" filterOperation="Contains" filterWaterMark="Contains" />
						<ReactDataGridColumn columnWidthMode="fitToContent" dataField="invoiceNum" enableCellClickRowSelect={false} headerText="PCN #" filterControl="TextInput" filterOperation="Contains" filterWaterMark="Contains" />
						<ReactDataGridColumn columnWidthMode="fitToContent" dataField="status" enableCellClickRowSelect={false} headerText="Status" filterControl="TextInput" filterOperation="Contains" filterWaterMark="Contains" />
						<ReactDataGridColumn columnWidthMode="fitToContent" dataField="patientId" enableCellClickRowSelect={false} headerText="Member ID" filterControl="TextInput" filterOperation="Contains" filterWaterMark="Contains" />
						<ReactDataGridColumn columnWidthMode="fitToContent" dataField="patientLast" enableCellClickRowSelect={false} headerText="Patient Last Name" filterControl="TextInput" filterOperation="Contains" filterWaterMark="Contains" />
						<ReactDataGridColumn columnWidthMode="fitToContent" dataField="patientFirst" enableCellClickRowSelect={false} headerText="Patient First Name" filterControl="TextInput" filterOperation="Contains" filterWaterMark="Contains" />
						<ReactDataGridColumn columnWidthMode="fitToContent" dataField="providerName" enableCellClickRowSelect={false} headerText="Provider" filterControl="TextInput" filterOperation="Contains" filterWaterMark="Contains" />
						<ReactDataGridColumn columnWidthMode="fitToContent" dataField="providerId" enableCellClickRowSelect={false} headerText="Provider ID" filterControl="TextInput" filterOperation="Contains" filterWaterMark="Contains" />
						<ReactDataGridColumn columnWidthMode="fitToContent" headerText="Claim Service Date">
							{/* <nestedtreedatagrid:itemRenderer>
						<fx:Component>
							<mx:Canvas horizontalScrollPolicy="off" backgroundColor="white">
								<mx:Label 
										  text="{ mx.controls.DateField.dateToString(data.serviceStartDate,'MM/DD/YYYY')+' - ' + mx.controls.DateField.dateToString(data.serviceEndDate,'MM/DD/YYYY') }"
										  color="0x185B29"/>
							</mx:Canvas>
						</fx:Component>
					</nestedtreedatagrid:itemRenderer> */}
						</ReactDataGridColumn>
						<ReactDataGridColumn columnWidthMode="fitToContent" dataField="totalClaimChrg" enableCellClickRowSelect={false} headerText="Total Charges" formatter={ExampleUtils.globalCurrencyFormatter} footerAlign="right" footerFormatter={ExampleUtils.globalCurrencyFormatter} footerOperation="sum" footerOperationPrecision="2" textAlign="right" />
						<ReactDataGridColumn columnWidthMode="fitToContent" dataField="claimPaymentAmt" enableCellClickRowSelect={false} headerText="Payment" formatter={ExampleUtils.globalCurrencyFormatter} footerAlign="right" footerFormatter={ExampleUtils.globalCurrencyFormatter} footerOperation="sum" footerOperationPrecision="2" textAlign="right" />
						<ReactDataGridColumn columnWidthMode="fitToContent" dataField="patientRespAmt" enableCellClickRowSelect={false} headerText="Patient Resp" formatter={ExampleUtils.globalCurrencyFormatter} footerAlign="right" footerFormatter={ExampleUtils.globalCurrencyFormatter} footerOperation="sum" footerOperationPrecision="2" textAlign="right" />
						<ReactDataGridColumn columnWidthMode="fitToContent" dataField="nonCovChrg" enableCellClickRowSelect={false} headerText="Non Covered Charges" formatter={ExampleUtils.globalCurrencyFormatter} footerAlign="right" footerFormatter={ExampleUtils.globalCurrencyFormatter} footerOperation="sum" footerOperationPrecision="2" textAlign="right" />
					</ReactDataGridColumnLevel>
				</DataGrid>
			</div>
		)
	}
}

export default RemitDetail
