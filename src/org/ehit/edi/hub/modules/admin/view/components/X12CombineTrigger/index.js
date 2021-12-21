import { Paper } from '@material-ui/core'
import React from 'react'
import { toast } from 'react-toastify'
import { showMessage } from '../../../../../../../../../AppConfig/store/actions/homeAction'
import store from '../../../../../../../../../AppConfig/store/configureStore'
import StagedLinkRender from '../../../../../../../../../container/views/itemRenderers/StagedLinkRender'
import TriggerActiveRenderer from '../../../../../../../../../container/views/itemRenderers/TriggerActiveRenderer'
import TriggerRenderer from '../../../../../../../../../container/views/itemRenderers/TriggerRenderer'
import { ClassFactory, EventDispatcher, ReactDataGridColumn, ReactDataGridColumnLevel } from '../../../../../../../../../flexicious'
import DataGrid from '../../../../../../../../../shared/components/ExtendedDataGrid'
import { CombineTriggerEvent } from '../../../model/events/CombineTriggerEvent.ts'
import { X12CombineTriggerMediator } from '../../X12CombineTriggerMediator.ts'
import './X12CombineTrigger.scss'

class X12CombineTrigger extends EventDispatcher {
    constructor() {
        super()
        this._pollControl = {}
    }

    componentDidMount(){
        this.mediator = new X12CombineTriggerMediator().onRegister(this)
    }
    
    activatePoll = (e, data) => {
        const rowData = data.row.getData()
        this._pollControl = data;
        var _selected = e.target.checked;
        store.dispatch(
            showMessage(
                'Confirm Activate',
                'Are you sure you want to activate/deactivate Combine?',
                'Yes_No',
                () => {
                    if (rowData.activeFlag === 'Y') {
                        rowData.activeFlag = 'N'
                    } else {
                        rowData.activeFlag = 'Y'
                        this.dispatchEvent(new CombineTriggerEvent(CombineTriggerEvent.ACTIVATE_POLL, data.row.getData().id.pollControlId, _selected));
                    }
                    data.cell.refreshCell()
                },
                () => { }
            )
        )
    }

    poll = (e, data) => {
       this._pollControl=data;
       store.dispatch(
        showMessage(
            'Confirm Trigger',
            "Are you sure you want to combine the X12 for \n System Id : {0} \n Control Id : {1}?",
            'Yes_No',
            () => {
                this.dispatchEvent(new CombineTriggerEvent(CombineTriggerEvent.COMBINE, data.row.getData().id.pollControlId));
            },
            () => { }
        )
    )

    }

    viewStagedFiles = (data) => {
        // eslint-disable-next-line no-unused-vars
        var stagedLink = data.row.getData().initialProps.substring(data.row.getData().initialProps.indexOf('StagingDir'))
        stagedLink = stagedLink.substring(stagedLink.indexOf('/'), stagedLink.indexOf('~'))
        toast.warn("Need to check navigateToURL")    
        // navigateToURL(new URLRequest('ftp://ediprod:xhub9@ediprod' + stagedLink), '_blank')
    }
	render() {
		return (
			<Paper className="page_style">
				<div className="triggerGrid">
					<DataGrid id="grid" ref={g => (this.grid = g)} width="100%" height="100%" enableCopy={true} enableEagerDraw={true} styleName="gridStyle" alternatingItemColors={[0xe1e8e4, 0xffffff]}>
						<ReactDataGridColumnLevel rowHeight="21" enableFilters={true} enablePaging={true} pageSize="50">
							<ReactDataGridColumn width="100" dataField="systemId" textAlign="center" headerAlign="center" enableCellClickRowSelect={false} headerText="System Id" />
							<ReactDataGridColumn width="350" dataField="id.pollControlId" headerAlign="center" enableCellClickRowSelect={false} filterControl="TextInput" filterOperation="Contains" headerText="Control Id" />
							<ReactDataGridColumn width="450" dataField="pollControlDescr" headerAlign="center" enableCellClickRowSelect={false} headerText="Poll Control Desc" />
							<ReactDataGridColumn width="200" dataField="activeFlag" enableCellClickRowSelect={false} headerText="Active" headerAlign="center" itemRenderer={new ClassFactory(TriggerActiveRenderer)} 
                            onHandleActivatePoll = {(event, data) => {
                                this.activatePoll(event, data)
                            }} />
							<ReactDataGridColumn dataField="stagedLink" sortable={false} enableCellClickRowSelect={false} width="200" headerText="Staged Files" headerAlign="center" itemRenderer={new ClassFactory(StagedLinkRender)}
                            onHandleViewStagedFiles = {(data) => {
                                this.viewStagedFiles(data)
                            }} />
							<ReactDataGridColumn sortable={false} enableCellClickRowSelect={false} width="200" headerText="Combine X12" headerAlign="center" itemRenderer={new ClassFactory(TriggerRenderer)}
                                onHandlePoll={(e,data) => {
                                    this.poll(e, data)
                                }}
                            />
						</ReactDataGridColumnLevel>
					</DataGrid>
				</div>
			</Paper>
		)
	}
}

export default X12CombineTrigger