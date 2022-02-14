import { Paper } from '@material-ui/core'
import moment from 'moment'
import React from 'react'
import FileNamaeRenderer from '../../../../../../../../../container/views/itemRenderers/FileNamaeRenderer'
import { EventDispatcher, ReactDataGridColumn, ReactDataGridColumnLevel, ClassFactory, DateRange, ExtendedExportController } from '../../../../../../../../../flexicious'
import MontefioreUtils from '../../../../../../../../../service/utils/MontefioreUtils'
import DataGrid from '../../../../../../../../../shared/components/ExtendedDataGrid'
import EdiDateRangeCombo from '../../../../../../../../../utils/dateFormatCombo/EdiDateRangeCombo'
import RemitsTrackerMediator from '../../RemitsTrackerMediator.ts'
// import RemitQuickSearch from '../RemitQuickSearch'
import './remitsTracker.scss'

class RemitsTracker extends EventDispatcher {
	constructor(props){
		super(props)
		this.state={
			tabValue:this.props.location.pathname
		}
	}
	componentDidMount(){
		this.mediator = new RemitsTrackerMediator().onRegister(this)
	}

	componentWillUnmount() {
		this.mediator.onUnRegister()
	}

    logDatetime = (item, col) => {
        return item.logDatetime ? moment(new Date(item.logDatetime)).format('MM/DD/YY K:NN A') : ''
    }

	onToolbarExport = () => {
		ExtendedExportController.instance().export()
	}

	render() {
		return (
			<Paper className="page_style_remits">
				{/* {this.state.tabValue === '/main/remittance/quicksearch' && <RemitQuickSearch /> } */}
				<div style={{height: 'calc(100vh - 135px)',width:'100%', marginTop:'2px'}}>
					<DataGrid ref={g => (this.grid = g)} id="grid" width="100%" height="100%" enableCopy="true" enableExport="true" enablePrint="true" styleName="gridStyle" /*toolbarExcelHandlerFunction="onToolbarExport"*/ toolbarExcelHandlerFunction={this.onToolbarExport} pagerRenderer={MontefioreUtils.pagerFactory} enableEagerDraw="false" showSpinnerOnFilterPageSort="true" initialSortField="logDatetime" initialSortAscending="false" parentDocument={this} >
						<ReactDataGridColumnLevel rowHeight="21" enableFilters="true" enablePaging="true" pageSize="500" /*rowTextColorFunction="getRowTextColor"*/>
							<ReactDataGridColumn columnWidthMode="fitToContent" dataField="pollControl.processReceiver" enableCellClickRowSelect="false" filterControl="TextInput" filterOperation="Contains" filterWaterMark="Contains" headerText="Receiver" />
							<ReactDataGridColumn sortable="false" enableCellClickRowSelect="false" columnWidthMode="fixed" width="240" headerText="File Name" useUnderLine="true" itemRenderer={new ClassFactory(FileNamaeRenderer)} />
							<ReactDataGridColumn columnWidthMode="fitToContent" dataField="pollControl.processSender" enableCellClickRowSelect="false" filterControl="TextInput" filterOperation="Contains" filterWaterMark="Contains" headerText="Payer" iconRight="5" />
							<ReactDataGridColumn columnWidthMode="fitToContent" enableCellClickRowSelect="false" filterControl="TextInput" filterOperation="Contains" filterWaterMark="Contains" headerText="Status" /*itemRenderer={new ClassFactory()} *//>
							{/* itemRenderer --implement it after grid data*/}
							<ReactDataGridColumn columnWidthMode="fitToContent" dataField="logDatetime" filterDateRangeOptions={[DateRange.DATE_RANGE_CUSTOM]} filterControl="DateComboBox" filterOperation="Contains" /*formatter="{ExampleUtils.globalDateFormatter}"*/ labelFunction={this.logDatetime} enableCellClickRowSelect="false" headerText="Log Time" /*filterConverterFunction="convertDate" filterRenderer="org.ehit.edi.hub.uitl.dateFormatCombo.EdiDateComboBox"*/ filterRenderer={EdiDateRangeCombo} />
						</ReactDataGridColumnLevel>
					</DataGrid>
				</div>
			</Paper>
		)
	}
}

export default RemitsTracker
