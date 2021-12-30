import { Paper } from '@material-ui/core'
import React from 'react'
import { showMessage } from '../../../../../../../../../AppConfig/store/actions/homeAction'
import store from '../../../../../../../../../AppConfig/store/configureStore'
// import { toast } from 'react-toastify'
import DeleteErrorLogRenderer from '../../../../../../../../../container/views/itemRenderers/DeleteErrorLogRenderer'
import ReDeliverRenderer from '../../../../../../../../../container/views/itemRenderers/ReDeliverRenderer'
import { ClassFactory, EventDispatcher, ReactDataGridColumn, ReactDataGridColumnLevel } from '../../../../../../../../../flexicious'
import DataGrid from '../../../../../../../../../shared/components/ExtendedDataGrid'
import MaterialCheckBoxColumn from '../../../../../../../../../shared/components/ExtendedDataGrid/material/grid/MaterialCheckBoxColumn'
import ExampleUtils from '../../../../../../../../../utils/ExampleUtils'
import ArrayCollection from '../../../../../../../../../vo/ArrayCollection'
import { ErrorLogEvent } from '../../../model/events/ErrorLogEvent.ts'
import { EdiErrorStore } from '../../../model/vo/EdiErrorStore.ts'
import { ErrorLogMediator } from '../../ErrorLogMediator.ts'
import LogSearch from '../LogSearch/LogSearch'
import './errorLog.scss'

class ErrorLog extends EventDispatcher {
    constructor(){
        super()
        this._errorToDelete = null
    }

    componentDidMount() {
        this.mediator = new ErrorLogMediator().onRegister(this)
    }

    componentWillUnmount() {
        this.mediator.onUnRegister()
    }

    onRemove = (data) => {
        var rowData = data.row.getData()
        this._errorToDelete = new EdiErrorStore().fromJson(rowData)
        store.dispatch(
            showMessage(
                'Confirm Delete',
                'Are you sure you wish to delete this error?',
                'Yes_No',
                () => {
                    var errorList = new ArrayCollection();
					errorList.addItem(this._errorToDelete);
					this.dispatchEvent(new ErrorLogEvent(ErrorLogEvent.DELETE_ERROR, null, errorList));
                },
                () => {}
            )
        )    
    }

    render() {
        return (
            <Paper className="pageStyle">
                <Paper className="whiteContainer">
                    <div className="searchContainer">
                        <LogSearch ref={g => (this.logSearch = g)} parentDocument={this} />
                    </div>
                </Paper>
                <div className="errorLogGrid">
                    <DataGrid id="grid" ref={g => (this.grid = g)} width="100%" height="100%" enableCopy="true" enableToolbarActions="true" styleName="gridStyle" dataProvider={[{}]} toolbarActionExecutedFunction="onExecuteToolbarAction" toolbarActionValidFunction="isValidToolbarAction" enableEagerDraw="true">
                        <ReactDataGridColumnLevel rowHeight="21" enablePaging="true" pageSize="50" enableFilters="true" />
                        <MaterialCheckBoxColumn id="cbCol" />
                        <ReactDataGridColumn width="50" dataField="id.errorId" enableCellClickRowSelect="false" headerText="Error Id" />
                        <ReactDataGridColumn width="100" dataField="errorLevel" enableCellClickRowSelect="false" headerText="Error Level" />
                        <ReactDataGridColumn width="300" dataField="errorMessage" enableCellClickRowSelect="false" headerText="Message" useUnderLine="true" filterControl="TextInput"
                            filterOperation="Contains" filterWaterMark="Contains" />
                        <ReactDataGridColumn width="150" dataField="userProps" enableCellClickRowSelect="false" headerText="Properties" useUnderLine="true" filterControl="TextInput"
                            filterOperation="Contains" filterWaterMark="Contains" />
                        <ReactDataGridColumn width="300" dataField="stackTrace" enableCellClickRowSelect="false" headerText="StackTrace" useUnderLine="true" />
                        <ReactDataGridColumn width="50" dataField="componentName" enableCellClickRowSelect="false" headerText="Component Name Id" filterControl="TextInput"
                            filterOperation="Contains" filterWaterMark="Contains" />
                        <ReactDataGridColumn width="100" dataField="msgDestination" enableCellClickRowSelect="false" headerText="Destination" />
                        <ReactDataGridColumn width="50" dataField="msgOrigSend" enableCellClickRowSelect="false" headerText="Msg Orig Send" formatter={ExampleUtils.globalDateFormatter} /*filterConverterFunction="convertDate"*/ />
                        <ReactDataGridColumn width="50" dataField="msgLastSend" enableCellClickRowSelect="false" headerText="Msg Last Send" formatter={ExampleUtils.globalDateFormatter} /*filterConverterFunction="convertDate"*//>
                        <ReactDataGridColumn width="50" dataField="msgStatus" enableCellClickRowSelect="false" headerText="Msg Status" />
                        <ReactDataGridColumn width="70" dataField="fileId" headerText="Content ID" iconRight="40" paddingRight="20" useUnderLine="true" />
                        <ReactDataGridColumn sortable="false" enableCellClickRowSelect="false" width="100" headerText="ReDeliver" itemRenderer={new ClassFactory(ReDeliverRenderer)} />
                        <ReactDataGridColumn width="50" headerText="Delete" iconRight="40" paddingRight="20" itemRenderer={new ClassFactory(DeleteErrorLogRenderer)} onHandleRemove={(data) => this.onRemove(data)}/>
                    </DataGrid>
                </div>
            </Paper>
        )
    }
}

export default ErrorLog