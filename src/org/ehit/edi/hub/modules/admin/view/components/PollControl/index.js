import { Checkbox, Paper } from '@material-ui/core'
import React from 'react'
import { showMessage } from '../../../../../../../../../AppConfig/store/actions/homeAction'
import store from '../../../../../../../../../AppConfig/store/configureStore'
import ActiveitemRenderer from '../../../../../../../../../container/views/itemRenderers/ActiveitemRenderer'
import BrowseRenderer from '../../../../../../../../../container/views/itemRenderers/BrowseRenderer'
import PollitemRenderer from '../../../../../../../../../container/views/itemRenderers/PollitemRenderer'
import { ClassFactory, EventDispatcher, ReactDataGridColumn, ReactDataGridColumnLevel } from '../../../../../../../../../flexicious'
// import CustomCheckBox from '../../../../../../../../../shared/components/CustomCheckBox'
import DataGrid from '../../../../../../../../../shared/components/ExtendedDataGrid'
import { DispatchPollEvent } from '../../../model/events/DispatchPollEvent.ts'
import { PollControlMediator } from '../../PollControlMediator.ts'
import './poolControl.scss'
class PollControl extends EventDispatcher {
    constructor() {
        super()
        this._pollControl = {}
    }

    componentDidMount() {
        this.mediator = new PollControlMediator().onRegister(this)
    }

    componentWillUnmount() {
        this.mediator.onUnRegister()
    }

    activatePoller = event => {
        var activatePoller = event.target.checked
        this.dispatchEvent(new DispatchPollEvent(DispatchPollEvent.ACTIVATE_POLL, "DeliveryHub", activatePoller))
    }


    activatePoll = (e, data) => {
        this._pollControl = data
        var _selected = e.target.checked
        store.dispatch(
            showMessage(
                'Confirm Activate',
                'Are you sure you want to activate/deactivate Poll?',
                'Yes_No',
                () => {
                    // this.onConfirm(data.column.getDataField(), _selected)
                    this.dispatchEvent(new DispatchPollEvent(DispatchPollEvent.ACTIVATE_POLL, /*_pollControl.id.pollControlId*/data.column.getDataField(), _selected));
                },
                () => { }
            )
        )
    }

    poll = (e, data) =>{
        store.dispatch(
            showMessage(
                'Confirm Poll',
                'Are you sure you want to trigger this Poll?',
                'Yes_No',
                () => {
                    this.dispatchEvent(new DispatchPollEvent(DispatchPollEvent.DISPATCH_POLL, data.column.getHeaderText()));
                },
                () => { }
            )
        )
    }

    browse = (e, data) => {
        var _pollControl = data.column.getHeaderText()
        this.dispatchEvent(new DispatchPollEvent(DispatchPollEvent.REMOTE_DIR_LIST, _pollControl));
    }

    render() {
        return (
            <Paper style={{ background: 'linear-gradient(to left, white, #c0cec6, white, #c0cec6, white, #c0cec6, white, #c0cec6, white)', height: "760px", marginTop: "2px" }}>
                <Paper>
                    {/* <CustomCheckBox /> */}
                    <Checkbox id="pollStatusChk" color="secondary" onClick={this.activatePoller} />
                    <span>Is Poll Active?</span>
                </Paper>
                <div className='poolControlGrid'>
                    <DataGrid id="grid" width="100%" height="100%" enableCopy="true" styleName="gridStyle" dataProvider={[{ systemId: 'test',
                                                                                                                            id:{pollControlId : 'test2'} }]} alternatingItemColors={[0xe1e8e4, 0xffffff]} enableEagerDraw="true">
                        <ReactDataGridColumnLevel rowHeight="20" enableFilters="true" enablePaging="true" pageSize="50">
                            <ReactDataGridColumn width="100" dataField="systemId" textAlign="center" headerAlign="center" enableCellClickRowSelect="false" headerText="System Id" />
                            <ReactDataGridColumn width="200" dataField="id.pollControlId" headerAlign="center" enableCellClickRowSelect="false" filterControl="TextInput"
                                filterOperation="Contains" headerText="Control Id" />
                            <ReactDataGridColumn width="200" dataField="pollControlDescr" headerAlign="center" enableCellClickRowSelect="false" filterControl="TextInput"
                                filterOperation="Contains" headerText="Poll Control Desc" />
                            <ReactDataGridColumn width="200" dataField="deliveryMode" headerAlign="center" enableCellClickRowSelect="false" headerText="Delivery Mode" />
                            <ReactDataGridColumn dataField="activeFlag" enableCellClickRowSelect="false" width="200" headerText="Active" headerAlign="center" itemRenderer={new ClassFactory(ActiveitemRenderer)}
                                onHandleActivatePoll={(e, data) => {
                                    this.activatePoll(e, data)
                                }}
                            />
                            <ReactDataGridColumn id="poll" sortable="false" enableCellClickRowSelect="false" width="200" headerAlign="center" headerText="Poll" itemRenderer={new ClassFactory(PollitemRenderer)} 
                                onHandlePoll={(e, data) => {
                                    this.poll(e, data)
                                }}
                            />
                            <ReactDataGridColumn id="poll" sortable="false" enableCellClickRowSelect="false" width="50" headerAlign="center" headerText="Browse" fontWeight="bold" itemRenderer={new ClassFactory(BrowseRenderer)} 
                                 onHandleBrowse={(e, data) => {
                                    this.browse(e, data)
                                }}
                            />
                        </ReactDataGridColumnLevel>
                    </DataGrid>
                </div>

            </Paper>
        )
    }
}

export default PollControl