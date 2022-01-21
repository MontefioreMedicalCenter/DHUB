import { Paper } from '@material-ui/core'
import React from 'react'
import { EventDispatcher, ReactDataGridColumn, ReactDataGridColumnLevel } from '../../../../../../../../../flexicious'
import DataGrid from '../../../../../../../../../shared/components/ExtendedDataGrid'
import { ClaimsMediator } from '../../ClaimsMediator.ts'
import './claims.scss'

class Claims extends EventDispatcher {
	constructor() {
		super()
		this.state = {
			tabValue: '/main/claims'
		}
	}

	componentDidMount() {
		this.mediator = new ClaimsMediator().onRegister(this)
	}
	componentWillUnmount() {
		this.mediator.onUnRegister()
	}

	render() {
		return (
			<Paper className="page-style">
				<div className="claimsGridStyle">
					<DataGrid width="100%" height="100%" ref={g => (this.grid = g)} enablePrint="true" enablePreferencePersistence="true" styleName="gridStyle" enableDrillDown="true" preferencePersistenceKey="outlookGroupedData" enableExport="true" enableCopy="true">
						<ReactDataGridColumnLevel rowHeight="21" childrenField="processInstanceSteps" enableFilters="true" enablePaging="true" /*pagerRenderer="org.ehit.edi.hub.uitl.MyCustomPager"*/ pageSize="50" /*rowTextColorFunction="getRowTextColor"*/>
							<ReactDataGridColumn columnWidthMode="fitToContent" dataField="senderName" enableCellClickRowSelect="false" filterControl="TextInput" filterOperation="Contains" filterWaterMark="Contains" headerText="Sender" />
							<ReactDataGridColumn dataField="fileName" enableCellClickRowSelect="false" filterControl="TextInput" filterOperation="Contains" filterWaterMark="Contains" headerText="File Name" useHandCursor="true" useUnderLine="true" />
							<ReactDataGridColumn columnWidthMode="fitToContent" dataField="receiverName" enableCellClickRowSelect="false" filterControl="TextInput" filterOperation="Contains" filterWaterMark="Contains" headerText="Payer" />
							<ReactDataGridColumn columnWidthMode="fitToContent" dataField="processStatus" enableCellClickRowSelect="false" filterControl="TextInput" filterOperation="Contains" filterWaterMark="Contains" headerText="Status" />
							<ReactDataGridColumn columnWidthMode="fitToContent" dataField="totalTransactionCount" enableCellClickRowSelect="false" headerText="Total Claims" />
							<ReactDataGridColumn columnWidthMode="fitToContent" dataField="totalDollarAmt" enableCellClickRowSelect="false" /*formatter="{ExampleUtils.globalCurrencyFormatter}"*/ textAlign="right" headerText="Total Amount" />
							<ReactDataGridColumn columnWidthMode="fitToContent" dataField="instanceStartTime" /*formatter="{ExampleUtils.globalDateFormatter}"*/ enableCellClickRowSelect="false" headerText="Start Time" /*filterConverterFunction="convertDate" filterRenderer="org.ehit.edi.hub.uitl.dateFormatCombo.EdiDateComboBox"*/ />
							<ReactDataGridColumn columnWidthMode="fitToContent" dataField="instanceEndTime" enableCellClickRowSelect="false" /*formatter="{ExampleUtils.globalDateFormatter}"*/ headerText="Last Update Time" />
							<ReactDataGridColumnLevel rowHeight="23" initialSortField="id.stepNum" nestIndent="30" headerColors="[0xC0C0C0,0xEEEEEE]" headerRollOverColors="[0xEEEEEE,0xC0C0C0]" alternatingItemColors={[0xe0e0e0, 0xffffff]}>
								<ReactDataGridColumn dataField="id.stepNum" enableCellClickRowSelect="false" headerText="Step No." />
								<ReactDataGridColumn dataField="id.instanceId" enableCellClickRowSelect="false" headerText="Instance ID" />
								<ReactDataGridColumn dataField="stepDescr" enableCellClickRowSelect="false" headerText="Step Desc" />
								<ReactDataGridColumn dataField="stepStartTime" enableCellClickRowSelect="false" headerText="Step Start Time" /*formatter="{ExampleUtils.globalDateFormatter}"*/ />
								<ReactDataGridColumn dataField="stepEndTime" enableCellClickRowSelect="false" headerText="Step End Time" /*formatter="{ExampleUtils.globalDateFormatter}"*/ />
								<ReactDataGridColumn dataField="stepDeadline" enableCellClickRowSelect="false" headerText="Step Deadline" /*formatter="{ExampleUtils.globalDateFormatter}"*/ />
								<ReactDataGridColumn dataField="stepStatus" enableCellClickRowSelect="false" headerText="Step Status" />
								<ReactDataGridColumn width="400" dataField="stepLongStatus" enableCellClickRowSelect="false" headerText="Step Long Status" />
							</ReactDataGridColumnLevel>
						</ReactDataGridColumnLevel>
					</DataGrid>
				</div>
			</Paper>
		)
	}
}

export default Claims