import { Paper } from '@material-ui/core'
import moment from 'moment'
import React from 'react'
import FileNamaeRenderer from '../../../../../../../../../container/views/itemRenderers/FileNamaeRenderer'
import { EventDispatcher, ReactDataGridColumn, ReactDataGridColumnLevel, ClassFactory } from '../../../../../../../../../flexicious'
import DataGrid from '../../../../../../../../../shared/components/ExtendedDataGrid'
import RemitQuickSearch from '../RemitQuickSearch'
import './remitsTracker.scss'

class RemitsTracker extends EventDispatcher {
	constructor(props){
		super(props)
		this.state={
			tabValue:this.props.location.pathname
		}
	}

    logDatetime = (item, col) => {
        return item.logDatetime ? moment(new Date(item.logDatetime)).format('MM/DD/YY K:NN A') : ''
    }
	render() {
		return (
			<Paper className="page_style_remits">
				{this.state.tabValue === '/main/remittance/quicksearch' && <RemitQuickSearch /> }
				<div style={{height:this.state.tabValue === '/main/remittance/quicksearch'?'calc(100vh - 360px)':'calc(100vh - 135px)',width:'100%', marginTop:'2px'}}>
					<DataGrid id="grid" width="100%" height="100%" enableCopy="true" enableExport="true" enablePrint="true" styleName="gridStyle" /*toolbarExcelHandlerFunction="onToolbarExport"*/ enableEagerDraw="false" showSpinnerOnFilterPageSort="true" initialSortField="logDatetime" initialSortAscending="false">
						<ReactDataGridColumnLevel rowHeight="21" enableFilters="true" enablePaging="true" pageSize="500" /*rowTextColorFunction="getRowTextColor"*/>
							<ReactDataGridColumn columnWidthMode="fitToContent" dataField="pollControl.processReceiver" enableCellClickRowSelect="false" filterControl="TextInput" filterOperation="Contains" filterWaterMark="Contains" headerText="Receiver" />
							<ReactDataGridColumn sortable="false" enableCellClickRowSelect="false" columnWidthMode="fixed" width="240" headerText="File Name" useUnderLine="true" itemRenderer={new ClassFactory(FileNamaeRenderer)} />
							<ReactDataGridColumn columnWidthMode="fitToContent" dataField="pollControl.processSender" enableCellClickRowSelect="false" filterControl="TextInput" filterOperation="Contains" filterWaterMark="Contains" headerText="Payer" iconRight="5" />
							<ReactDataGridColumn columnWidthMode="fitToContent" enableCellClickRowSelect="false" filterControl="TextInput" filterOperation="Contains" filterWaterMark="Contains" headerText="Status" /*itemRenderer={new ClassFactory()} *//>
							{/* itemRenderer --implement it after grid data*/}
							<ReactDataGridColumn columnWidthMode="fitToContent" dataField="logDatetime" /*formatter="{ExampleUtils.globalDateFormatter}"*/ labelFunction={this.logDatetime} enableCellClickRowSelect="false" headerText="Log Time" /*filterConverterFunction="convertDate" filterRenderer="org.ehit.edi.hub.uitl.dateFormatCombo.EdiDateComboBox"*/ />
						</ReactDataGridColumnLevel>
					</DataGrid>
				</div>
			</Paper>
		)
	}
}

export default RemitsTracker
