import { Paper } from '@material-ui/core'
import React from 'react'
import { toast } from 'react-toastify'
import { showMessage } from '../../../../../../../../../AppConfig/store/actions/homeAction'
import store from '../../../../../../../../../AppConfig/store/configureStore'
import DeleteUser from '../../../../../../../../../container/views/itemRenderers/DeleteUser'
import HasClaimsRenderer from '../../../../../../../../../container/views/itemRenderers/HasClaimsRenderer'
import HasEFTRenderer from '../../../../../../../../../container/views/itemRenderers/HasEFTRenderer'
import HasInterfaceRenderer from '../../../../../../../../../container/views/itemRenderers/HasInterfaceRenderer'
import HasRemitsRenderer from '../../../../../../../../../container/views/itemRenderers/HasRemitsRenderer'
import IsAdminRenderer from '../../../../../../../../../container/views/itemRenderers/IsAdminRenderer'
import IsUserActiveRenderer from '../../../../../../../../../container/views/itemRenderers/IsUserActiveRenderer'
import { ClassFactory, EventDispatcher, ReactDataGridColumn, ReactDataGridColumnLevel } from '../../../../../../../../../flexicious'
import DataGrid from '../../../../../../../../../shared/components/ExtendedDataGrid'
import { ManageUserMediator } from '../../ManageUserMediator.ts'
import './manageUser.scss'

class ManageUser extends EventDispatcher {
    constructor(){
        super()
        this._usrRoles = []
        this._userFacServ = null

    }

    set usrRoles(val){
        this._usrRoles=val;
    }
    get usrRoles(){
        return this._usrRoles;
    }

    componentDidMount(){
        this.mediator = new ManageUserMediator().onRegister(this)
    }

    componentWillUnmount(){
        this.mediator.onUnRegister()
    }

    activateUser = (e, data) => {
        // toast("Need to Implement activateUser")
        var _selected = e.target.checked
        this._userFacServ = data
        var str = "Are you sure you want to "+data.row.getData().id.userId + " : "+ data.row.getData().userActiveFlag +" ? "
        var msg = _selected === true ? 'DeActivate ' : 'Activate '
        store.dispatch(
            showMessage(
                'Confirm Activate/De-Activate User',
                str + msg + data.row.getData().id.userId,
                'Yes_No',
				() => {},
				() => {}
            )
        )
    }
    activateRole0 = (e, data) => {
        toast("Need to Implement activateRole0")
    }
    deleteUser0 = (e, data) => {
        toast("Need to Implement deleteUser0")
    }
	render() {
		return (
			<Paper className="page_style">
				<div className="manageUserGrid">
					<DataGrid ref={g => (this.grid = g)} id="grid" width="100%" height="100%" enableCopy="true" enableEagerDraw="true" showSpinnerOnFilterPageSort="true" styleName="gridStyle" initialSortField="userId" alternatingItemColors={[0xe1e8e4, 0xffffff]}>
						<ReactDataGridColumnLevel rowHeight="21" enableFilters="true" enablePaging="true" /*pagerRenderer={MontefioreUtils.pagerFactory}*//*pagerRenderer="org.ehit.edi.hub.uitl.StyledPager"*/ pageSize="50">
							<ReactDataGridColumn width="300" dataField="id.userId" enableCellClickRowSelect="false" filterControl="TextInput" filterOperation="Contains" filterWaterMark="Contains" fontWeight="bold" headerAlign="center" headerText="Users" textAlign="center" useHandCursor="true" useUnderLine="true" />
							<ReactDataGridColumn width="225" dataField="userActiveFlag" enableCellClickRowSelect="false" headerAlign="center" headerText="Is User Active" itemRenderer={new ClassFactory(IsUserActiveRenderer)} 
                                onHandleActivateUser={(e, data)=>{this.activateUser(e, data)}}
                            />
							<ReactDataGridColumn width="225" enableCellClickRowSelect="false" headerAlign="center" headerText="Has Claims" itemRenderer={new ClassFactory(HasClaimsRenderer)} 
                                onHandleActivateRole0={(e, data) => {
                                    this.activateRole0(e, data)
                                }} />
							<ReactDataGridColumn width="225" enableCellClickRowSelect="false" headerAlign="center" headerText="Has Remits" itemRenderer={new ClassFactory(HasRemitsRenderer)} 
                                onHandleActivateRole0={(e, data) => {
                                    this.activateRole0(e, data)
                                }}
                            />
							<ReactDataGridColumn width="225" enableCellClickRowSelect="false" headerAlign="center" headerText="Has Interfaces" itemRenderer={new ClassFactory(HasInterfaceRenderer)}
                                onHandleActivateRole0={(e, data) =>{
                                    this.activateRole0(e, data)
                                }}
                            />
							<ReactDataGridColumn width="225" enableCellClickRowSelect="false" headerAlign="center" headerText="Has EFT" itemRenderer={new ClassFactory(HasEFTRenderer)}
                                onHandleActivateRole0={(e, data) =>{
                                    this.activateRole0(e, data)
                                }}
                            />
							<ReactDataGridColumn width="225" enableCellClickRowSelect="false" headerAlign="center" headerText="Is Admin" itemRenderer={new ClassFactory(IsAdminRenderer)} 
                                onHandleActivateRole0={ (e, data) => {
                                    this.activateRole0(e, data)
                                }}
                            />
							<ReactDataGridColumn width="225" enableCellClickRowSelect="false" headerAlign="center" headerText="Delete User" itemRenderer={new ClassFactory(DeleteUser)} 
                                onHandleDeleteUser0={(e, data) => 
                                {
                                    this.deleteUser0(e, data)
                                }}
                            />
						</ReactDataGridColumnLevel>
					</DataGrid>
				</div>
			</Paper>
		)
	}
}

export default ManageUser
