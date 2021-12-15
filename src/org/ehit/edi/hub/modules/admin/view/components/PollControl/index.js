import { Paper } from '@material-ui/core'
import React from 'react'
import { showMessage } from '../../../../../../../../../AppConfig/store/actions/homeAction'
import store from '../../../../../../../../../AppConfig/store/configureStore'
import ActiveitemRenderer from '../../../../../../../../../container/views/itemRenderers/ActiveitemRenderer'
import BrowseRenderer from '../../../../../../../../../container/views/itemRenderers/BrowseRenderer'
import PollitemRenderer from '../../../../../../../../../container/views/itemRenderers/PollitemRenderer'
import { ClassFactory, EventDispatcher, ReactDataGridColumn, ReactDataGridColumnLevel } from '../../../../../../../../../flexicious'
import AdvanceDialog from '../../../../../../../../../shared/components/AdvanceDialog'
import CustomCheckBox from '../../../../../../../../../shared/components/CustomCheckBox'
import DataGrid from '../../../../../../../../../shared/components/ExtendedDataGrid'
import { DispatchPollEvent } from '../../../model/events/DispatchPollEvent.ts'
import { PollControlMediator } from '../../PollControlMediator.ts'
import FileBrowserEditor from '../FileBrowserEditor'
import './poolControl.scss'
class PollControl extends EventDispatcher {
    constructor() {
        super()
        this.state = {
            browseButton: false,
            pollControlId: '',
            title: '',
            dataProviderFileBrowserEditor: [],
            headerIcon: ''
        }
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
        const rowData = data.row.getData()
        this._pollControl = data
        var _selected = e.target.checked
        store.dispatch(
            showMessage(
                'Confirm Activate',
                'Are you sure you want to activate/deactivate Poll?',
                'Yes_No',
                () => {
                    if (rowData.activeFlag === 'Y') {
                        rowData.activeFlag = 'N'
                    } else {
                        rowData.activeFlag = 'Y'
                        this.dispatchEvent(new DispatchPollEvent(DispatchPollEvent.ACTIVATE_POLL, /*_pollControl.id.pollControlId*/data.row.getData().id.pollControlId, _selected));
                    }
                    data.cell.refreshCell()
                },
                () => { }
            )
        )
    }

    poll = (e, data) => {
        store.dispatch(
            showMessage(
                'Confirm Poll',
                'Are you sure you want to trigger this Poll?',
                'Yes_No',
                () => {
                    this.dispatchEvent(new DispatchPollEvent(DispatchPollEvent.DISPATCH_POLL, data.row.getData().id.pollControlId));
                },
                () => { }
            )
        )
    }

    browse = (e, data) => {
        var _pollControl = data.row.getData()
        this.dispatchEvent(new DispatchPollEvent(DispatchPollEvent.REMOTE_DIR_LIST, _pollControl.configId));
    }

    render() {
        return (
            <Paper style={{ background: 'linear-gradient(to left, white, #c0cec6, white, #c0cec6, white, #c0cec6, white, #c0cec6, white)', height: "790px", marginTop: "2px" }}>
                <Paper style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                    <CustomCheckBox id="pollStatusChk" onHandleClick={this.activatePoller} />
                    <span style={{ marginTop: '7px' }}>Is Poll Active?</span>
                </Paper>
                <div className='poolControlGrid'>
                    <DataGrid id="grid" ref={g => (this.grid = g)} width="100%" height="100%" enableCopy="true" styleName="gridStyle" alternatingItemColors={[0xe1e8e4, 0xffffff]} enableEagerDraw="true">
                        <ReactDataGridColumnLevel rowHeight="20" enableFilters="true" enablePaging="true" pageSize="50">
                            <ReactDataGridColumn width="100" dataField="systemId" textAlign="center" headerAlign="center" enableCellClickRowSelect="false" headerText="System Id" />
                            <ReactDataGridColumn width="350" dataField="id.pollControlId" headerAlign="center" enableCellClickRowSelect="false" filterControl="TextInput"
                                filterOperation="Contains" headerText="Control Id" />
                            <ReactDataGridColumn width="450" dataField="pollControlDescr" headerAlign="center" enableCellClickRowSelect="false" filterControl="TextInput"
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
                            <ReactDataGridColumn id="poll" sortable="false" enableCellClickRowSelect="false" width="200" headerAlign="center" headerText="Browse" fontWeight="bold" itemRenderer={new ClassFactory(BrowseRenderer)}
                                onHandleBrowse={(e, data) => {
                                    this.browse(e, data)
                                }}
                            />
                        </ReactDataGridColumnLevel>
                    </DataGrid>
                </div>

                <AdvanceDialog
                    open={this.state.browseButton}
                    headerTitle={this.state.title}
                    handleClose={() => {
                        this.setState({ browseButton: false })
                    }}
                    icon={this.state.headerIcon}
                    style={{ height: '5px' }}
                    bodyRenderer={
                        <FileBrowserEditor
                            ref={g => (this.fileBrowserEditor = g)}
                            parentDocument={this}
                            fileName={this.state.title}
                            pollControlId={this.state.pollControlId}
                            dataProviderFileBrowserEditor={this.state.dataProviderFileBrowserEditor}
                            closePopup={() => {
                                this.setState({ browseButton: false })
                            }}
                        />
                    }
                />

            </Paper>
        )
    }
}

export default PollControl