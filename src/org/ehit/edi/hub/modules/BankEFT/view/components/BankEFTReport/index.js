import React from 'react'
import BankRemitFileNameRenderer from '../../../../../../../../../container/views/itemRenderers/BankRemitFileNameRenderer'
import EFTFileNameRenderer from '../../../../../../../../../container/views/itemRenderers/EFTFileNameRenderer'
import RemitFileNameRenderer from '../../../../../../../../../container/views/itemRenderers/RemitFileNameRenderer'
import { ClassFactory, ReactDataGridColumn, ReactDataGridColumnGroup, ReactDataGridColumnLevel } from '../../../../../../../../../flexicious'
import DataGrid from '../../../../../../../../../shared/components/ExtendedDataGrid'
import { BankEFTReportMediator } from '../../BankEFTReportMediator.ts'

class BankEFTReport extends React.Component {

    componentDidMount(){
        this.mediator = new BankEFTReportMediator().onRegister(this)
    }

    componentWillUnmount(){
        this.mediator.onUnRegister()
    }

    getRowTextColor = cell => {
        var checkAmount = cell.rowInfo.getData().checkAmount
        var remitCheckAmount = cell.rowInfo.getData().coreCheckAmount
        if(checkAmount !== remitCheckAmount){
            return 0xFF0000
        }
        return null;
	}

    ViewFile = (fileId, reportOnly) => {
        console.log("fileId = "+fileId, "reportOnly = "+reportOnly)
    }

    ViewFile835 = (fileId, reportOnly) => {
        console.log("fileId = "+fileId, "reportOnly = "+reportOnly)
    }
    
    render() {
        return (
            <div style={{ height: 'calc(100% - 5px)', width: '100%' }}>
                <DataGrid ref={g => (this.grid = g)} id="grid" width="100%" height="100%" enablePrint={true} styleName="gridStyle" enableDrillDown={true} enableExport={true} enableCopy={true} verticalScrollPolicy="on" horizontalScrollPolicy="auto" footerDrawTopBorder={true} enableEagerDraw={true}>
                    <ReactDataGridColumnLevel rowHeight="21" childrenField="ediRemitEftList" enableFilters={true} enablePaging={true} enableFooters={true} pageSize="10000" /*rowTextColorFunction="getRowTextColor"*/ rowTextColorFunction={this.getRowTextColor}>
                        <ReactDataGridColumn columnWidthMode="fitToContent" headerText="ID" dataField="id" textAlign="right" filterControl="TextInput" filterOperation="Contains" filterWaterMark="Contains" />
                        <ReactDataGridColumn sortable={false} enableCellClickRowSelect={false} columnWidthMode="fixed" width="150" headerText="EFT File Name" useUnderLine={true} fontWeight="bold" footerLabel="Check Amount Total:" itemRenderer={new ClassFactory(EFTFileNameRenderer)} onHandleViewFile={(fileId, reportOnly) => this.ViewFile(fileId, reportOnly)}/>
                        <ReactDataGridColumn columnWidthMode="fitToContent" headerText="Deposit Date" dataField="depositDate" textAlign="right" formatter="{ExampleUtils.dateFormatter2}" />
                        <ReactDataGridColumn columnWidthMode="fitToContent" headerText="Bank ID" dataField="bankId" filterControl="TextInput" filterOperation="Contains" filterWaterMark="Contains" />
                        <ReactDataGridColumn columnWidthMode="fitToContent" headerText="Bank Reference" dataField="bankReference" filterControl="TextInput" filterOperation="Contains" filterWaterMark="Contains" />
                        <ReactDataGridColumn columnWidthMode="fitToContent" headerText="Account" dataField="account" filterControl="TextInput" filterOperation="Contains" filterWaterMark="Contains" />
                        <ReactDataGridColumn columnWidthMode="fitToContent" headerText="Payer" dataField="payer" filterControl="TextInput" filterOperation="Contains" filterWaterMark="Contains" />
                        <ReactDataGridColumn columnWidthMode="fitToContent" headerText="Payer Id" dataField="payerId" filterControl="TextInput" filterOperation="Contains" filterWaterMark="Contains" />
                        <ReactDataGridColumn headerText="TrnNo" dataField="trn03" filterControl="TextInput" filterOperation="Contains" filterWaterMark="Contains" />
                        <ReactDataGridColumnGroup headerText="Recon Checks">
                            <ReactDataGridColumn columnWidthMode="fitToContent" headerText="Check #" dataField="checkTraceNum" filterControl="TextInput" filterOperation="Contains" filterWaterMark="Contains" />
                            <ReactDataGridColumn width="110" headerText="Check Amt" dataField="checkAmount" filterControl="TextInput" filterOperation="Contains" filterWaterMark="Contains" formatter="{ExampleUtils.globalCurrencyFormatter}" footerAlign="right" /*footerFormatter="{ExampleUtils.globalCurrencyFormatter}"*/ footerOperation="sum" footerOperationPrecision="2" />
                            <ReactDataGridColumn width="110" headerText="Remit Check Amt" dataField="coreCheckAmount" filterControl="TextInput" filterOperation="Contains" filterWaterMark="Contains" formatter="{ExampleUtils.globalCurrencyFormatter}" footerAlign="right" /*footerFormatter="{ExampleUtils.globalCurrencyFormatter}"*/ footerOperation="sum" footerOperationPrecision="2" />
                        </ReactDataGridColumnGroup>
                        <ReactDataGridColumn sortable={false} enableCellClickRowSelect={false} columnWidthMode="fixed" width="150" headerText="Remit File Name" useUnderLine={true} itemRenderer={new ClassFactory(RemitFileNameRenderer)} onHandleViewFile835 = {(fileId, reportOnly) => this.ViewFile835(fileId, reportOnly)} />
                        <ReactDataGridColumnLevel rowHeight="19"  nestIndent="30" headerColors="[0xC0C0C0,0xEEEEEE]" headerRollOverColors="[0xEEEEEE,0xC0C0C0]" alternatingItemColors="[0xE0E0E0  ,0xFFFFFF]">
                            <ReactDataGridColumn dataField="coreCheckTraceNum" enableCellClickRowSelect={false} headerText="Check #"/>
                            <ReactDataGridColumn dataField="checkAmt" enableCellClickRowSelect={false} headerText="Check Amt" formatter="{ExampleUtils.globalCurrencyFormatter}" footerAlign="left" /*footerFormatter="{ExampleUtils.globalCurrencyFormatter}"*/ footerOperation="sum" footerOperationPrecision="2"/>
                            <ReactDataGridColumn sortable={false} enableCellClickRowSelect={false} columnWidthMode="fixed" width="150" headerText="Remit File Name" useUnderLine={true} fontWeight="bold" itemRenderer={new ClassFactory(BankRemitFileNameRenderer)} onHandleViewFile={(fileId, reportOnly) => this.ViewFile(fileId, reportOnly)}/>
                        </ReactDataGridColumnLevel>
                    </ReactDataGridColumnLevel>
                </DataGrid>
            </div>
        )
    }
}

export default BankEFTReport
