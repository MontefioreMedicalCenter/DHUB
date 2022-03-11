import moment from 'moment'
import React from 'react'
import BankRemitFileNameRenderer from '../../../../../../../../../container/views/itemRenderers/BankRemitFileNameRenderer'
import EFTFileNameRenderer from '../../../../../../../../../container/views/itemRenderers/EFTFileNameRenderer'
import RemitFileNameRenderer from '../../../../../../../../../container/views/itemRenderers/RemitFileNameRenderer'
import { ClassFactory, ReactDataGridColumn, ReactDataGridColumnGroup, ReactDataGridColumnLevel } from '../../../../../../../../../flexicious'
import MontefioreUtils from '../../../../../../../../../service/utils/MontefioreUtils'
import DataGrid from '../../../../../../../../../shared/components/ExtendedDataGrid'
import ExampleUtils from '../../../../../../../../../utils/ExampleUtils'
import { EdiFileBase } from '../../../../../main/model/EdiFileBase.ts'
import { FileEditorService } from '../../../../../main/service/FileEditorService.ts'
import { BankEFTReportMediator } from '../../BankEFTReportMediator.ts'

const bgcolorarray = [ "0xC0C0C0,0xEEEEEE"]
const headerbgcolorarray = [ "0xEEEEEE,0xC0C0C0"]

class BankEFTReport extends React.Component {
	componentDidMount() {
		this.mediator = new BankEFTReportMediator().onRegister(this)
	}

	componentWillUnmount() {
		this.mediator.onUnRegister()
	}

	getRowTextColor = cell => {
		var checkAmount = cell.rowInfo.getData().checkAmount
		var remitCheckAmount = cell.rowInfo.getData().coreCheckAmount
		if (checkAmount !== remitCheckAmount) {
			return 0xff0000
		}
		return null
	}

	ViewFile = (fileId, reportOnly) => {
		var file =  new EdiFileBase()
		file.fileId = fileId
		file.transType = 'EFT'
		file.reportOnly = false
		//file.removeCRLF=true;//commented in flex
		// this.dispatchEvent(new FileEditorEvent(FileEditorEvent.VIEW_FILE, file))// calling this directly from edi content
        FileEditorService.getInstance().getFile(file.fileId, file.removeCRLF)
	}

	ViewFile835 = (fileId, reportOnly) => {
        var file =  new EdiFileBase()
		file.fileId = fileId
		file.transType = '835'
		file.reportOnly = reportOnly
        // dispatchEvent(new FileEditorEvent(FileEditorEvent.VIEW_FILE, file));// calling this directly from edi content
        FileEditorService.getInstance().getFile(file.fileId, file.removeCRLF)
	}

    depositDateFormater = (item, cell) => {
        var date 
        item.depositDate ?  date = moment(new Date(new Date(Date.parse(item.depositDate)).getTime() - new Date(Date.parse(item.depositDate)).getTimezoneOffset()* 60000)).format('MMM D, YYYY') : date=null
		// const result = dateVal ? new Date(new Date(Date.parse(dateVal)).getTime() - new Date(Date.parse(dateVal)).getTimezoneOffset()* 60000) : dateVal
			
        return date
    }

	render() {
		return (
			<div style={{ height: 'calc(100vh - 130px)', width: '100%' }}>
				<DataGrid ref={g => (this.grid = g)} id="grid" width="100%" height="100%" enablePrint={true} styleName="gridStyle" enableDrillDown={true} enableExport={true} enableCopy={true} verticalScrollPolicy="on" horizontalScrollPolicy="auto" footerDrawTopBorder={true} enableEagerDraw={true} pagerRenderer={MontefioreUtils.pagerFactory}>
					<ReactDataGridColumnLevel rowHeight="21" childrenField="ediRemitEftList" enableFilters={true} enablePaging={true} enableFooters={true} pageSize="10000" rowTextColorFunction={this.getRowTextColor}>
						<ReactDataGridColumn columnWidthMode="fitToContent" headerText="ID" dataField="id" textAlign="right" filterControl="TextInput" filterOperation="Contains" filterWaterMark="Contains" />
						<ReactDataGridColumn sortable={false} enableCellClickRowSelect={false} columnWidthMode="fixed" width="150" headerText="EFT File Name" useUnderLine={true} fontWeight="bold" footerLabel="Check Amount Total:" itemRenderer={new ClassFactory(EFTFileNameRenderer)} onHandleViewFile={(fileId, reportOnly) => this.ViewFile(fileId, reportOnly)} />
						<ReactDataGridColumn columnWidthMode="fitToContent" headerText="Deposit Date" dataField="depositDate" textAlign="right" labelFunction={this.depositDateFormater}/>
						<ReactDataGridColumn columnWidthMode="fitToContent" headerText="Bank ID" dataField="bankId" filterControl="TextInput" filterOperation="Contains" filterWaterMark="Contains" />
						<ReactDataGridColumn columnWidthMode="fitToContent" headerText="Bank Reference" dataField="bankReference" filterControl="TextInput" filterOperation="Contains" filterWaterMark="Contains" />
						<ReactDataGridColumn columnWidthMode="fitToContent" headerText="Account" dataField="account" filterControl="TextInput" filterOperation="Contains" filterWaterMark="Contains" />
						<ReactDataGridColumn columnWidthMode="fitToContent" headerText="Payer" dataField="payer" filterControl="TextInput" filterOperation="Contains" filterWaterMark="Contains" />
						<ReactDataGridColumn columnWidthMode="fitToContent" headerText="Payer Id" dataField="payerId" filterControl="TextInput" filterOperation="Contains" filterWaterMark="Contains" />
						<ReactDataGridColumn headerText="TrnNo" dataField="trn03" filterControl="TextInput" filterOperation="Contains" filterWaterMark="Contains" />
						<ReactDataGridColumnGroup headerText="Recon Checks">
							<ReactDataGridColumn columnWidthMode="fitToContent" headerText="Check #" dataField="checkTraceNum" filterControl="TextInput" filterOperation="Contains" filterWaterMark="Contains" />
							<ReactDataGridColumn width="110" headerText="Check Amt" dataField="checkAmount" filterControl="TextInput" filterOperation="Contains" filterWaterMark="Contains" formatter={ExampleUtils.globalCurrencyFormatter} footerAlign="right" footerFormatter={ExampleUtils.globalCurrencyFormatter} footerOperation="sum" footerOperationPrecision="2" />
							<ReactDataGridColumn width="110" headerText="Remit Check Amt" dataField="coreCheckAmount" filterControl="TextInput" filterOperation="Contains" filterWaterMark="Contains" formatter={ExampleUtils.globalCurrencyFormatter} footerAlign="right" footerFormatter={ExampleUtils.globalCurrencyFormatter} footerOperation="sum" footerOperationPrecision="2" />
						</ReactDataGridColumnGroup>
						<ReactDataGridColumn sortable={false} enableCellClickRowSelect={false} columnWidthMode="fixed" width="150" headerText="Remit File Name" useUnderLine={true} itemRenderer={new ClassFactory(RemitFileNameRenderer)} onHandleViewFile835={(fileId, reportOnly) => this.ViewFile835(fileId, reportOnly)} />
						<ReactDataGridColumnLevel rowHeight="19" nestIndent="30" headerColors={bgcolorarray} headerRollOverColors={headerbgcolorarray} alternatingItemColors={[0xE0E0E0  ,0xFFFFFF]}>
							<ReactDataGridColumn dataField="coreCheckTraceNum" enableCellClickRowSelect={false} headerText="Check #" />
							<ReactDataGridColumn dataField="checkAmt" enableCellClickRowSelect={false} headerText="Check Amt" footerAlign="left" formatter={ExampleUtils.globalCurrencyFormatter} footerOperation="sum" footerOperationPrecision="2" />
							<ReactDataGridColumn sortable={false} enableCellClickRowSelect={false} columnWidthMode="fixed" width="150" headerText="Remit File Name" useUnderLine={true} fontWeight="bold" itemRenderer={new ClassFactory(BankRemitFileNameRenderer)} onHandleViewFile={(fileId, reportOnly) => this.ViewFile(fileId, reportOnly)} />
						</ReactDataGridColumnLevel>
					</ReactDataGridColumnLevel>
				</DataGrid>
			</div>
		)
	}
}

export default BankEFTReport
