import { Paper } from '@material-ui/core'
// import { Store } from '@material-ui/icons'
import React from 'react'
import { showMessage } from '../../../../../../../../../AppConfig/store/actions/homeAction'
import store from '../../../../../../../../../AppConfig/store/configureStore'
import DeliveryActiveRenderer from '../../../../../../../../../container/views/itemRenderers/DeliveryActiveRenderer'
import DeliveryBrowseRenderer from '../../../../../../../../../container/views/itemRenderers/DeliveryBrowseRenderer'
import DispatchDeliveryRenderer from '../../../../../../../../../container/views/itemRenderers/DispatchDeliveryRenderer'
import { ClassFactory, EventDispatcher, ReactDataGridColumn, ReactDataGridColumnLevel } from '../../../../../../../../../flexicious'
import AdvanceDialog from '../../../../../../../../../shared/components/AdvanceDialog'
import DataGrid from '../../../../../../../../../shared/components/ExtendedDataGrid'
import { DispatchDeliveryEvent } from '../../../model/events/DispatchDeliveryEvent.ts'
import { DeliveryControlMediator } from '../../DeliveryControlMediator.ts'
import './deliveryControl.scss'
import DeliveryEditor from '../DeliveryEditor'
import FileBrowserEditor from '../FileBrowserEditor'
import Accept from '../../../../../../../../../assets/images/accept.png'
import Deny from '../../../../../../../../../assets/images/deny.png'

const HeaderTitle = ({ title }) => {
	return (
		<div style={{ display: 'flex', alignItems: 'center', columnGap: '10px' }}>
			<span>{title}</span>
			{title === 'Failed To Connect' ? (
				<img src={Deny} alt="deny" />
			) : (
				<div>
					{' '}
					<img src={Accept} alt="accept" />
				</div>
			)}
		</div>
	)
}

class DeliveryControl extends EventDispatcher {
	constructor() {
		super()
		this.state = {
			deliveryEditor: false,
			browseButton: false,
			title: '',
			dataProviderFileBrowserEditor: [],
			headerIcon: '',
			icon: 'accept',
			errTxt: ''
		}
		this._deliveryControl = {}
	}

	componentDidMount() {
		this.mediator = new DeliveryControlMediator().onRegister(this)
	}

	componentWillUnmount() {
		this.mediator.onUnRegister()
	}

	activateDelivery = (e, data) => {
		const rowData = data.row.getData()
		this._deliveryControl = data
		var _selected = e.target.checked
		store.dispatch(
			showMessage(
				'Confirm Activate',
				'Are you sure you want to activate/deactivate Delivery?',
				'Yes_No',
				() => {
					if (rowData.activeFlag === 'Y') {
						rowData.activeFlag = 'N'
					} else {
						rowData.activeFlag = 'Y'
						this.dispatchEvent(new DispatchDeliveryEvent(DispatchDeliveryEvent.ACTIVATE_DELIVERY, /*_deliveryControl.id.deliveryControlId*/ data.row.getData().id.deliveryControlId, _selected))
					}
					data.cell.refreshCell()
				},
				() => {}
			)
		)
	}
	deliver = (e, data) => {
		var _deliveryControl = data.row.getData()
		this.dispatchEvent(new DispatchDeliveryEvent(DispatchDeliveryEvent.DELIVERY_EDITOR, _deliveryControl.id.deliveryControlId))
	}
	browse = (e, data) => {
		var _deliveryControl = data.row.getData()
		this.dispatchEvent(new DispatchDeliveryEvent(DispatchDeliveryEvent.REMOTE_DIR_LIST, _deliveryControl.deliveryConfigId))
	}

	render() {
		return (
			<Paper style={{ background: 'linear-gradient(to left, white, #c0cec6, white, #c0cec6, white, #c0cec6, white, #c0cec6, white)', height: '800px', marginTop: '2px' }}>
				{/* <mx:VBox width="100%" borderAlpha="1" borderStyle="solid" borderVisible="true" horizontalAlign="center" verticalAlign="middle" verticalGap="0">
                    <mx:Text id="errTxt" color="red" fontWeight="bold" />
                </mx:VBox> Need to Implement*/}
				<div className="deliveryControlGrid">
					<DataGrid id="grid" ref={g => (this.grid = g)} width="100%" height="100%" enableCopy={true} alternatingItemColors={[0xe1e8e4, 0xffffff]} styleName="gridStyle" enableEagerDraw={true}>
						<ReactDataGridColumnLevel rowHeight="20" enableFilters={true} enablePaging={true} pageSize="50">
							<ReactDataGridColumn width="100" dataField="receivingSystem" textAlign="center" headerAlign="center" enableCellClickRowSelect={false} headerText="Receiving System" />
							<ReactDataGridColumn width="350" dataField="id.deliveryControlId" headerAlign="center" enableCellClickRowSelect={false} filterControl="TextInput" filterOperation="Contains" headerText="Control Id" />
							<ReactDataGridColumn width="450" dataField="deliveryDescr" headerAlign="center" enableCellClickRowSelect={false} filterControl="TextInput" filterOperation="Contains" headerText="Delivery Control Desc" />
							<ReactDataGridColumn dataField="activeFlag" enableCellClickRowSelect={false} width="200" headerText="Active" headerAlign="center" itemRenderer={new ClassFactory(DeliveryActiveRenderer)} onHandleActivatePoll={(e, data) => this.activateDelivery(e, data)} />
							<ReactDataGridColumn sortable={false} enableCellClickRowSelect={false} width="200" headerAlign="center" headerText="Dispatch Delivery" itemRenderer={new ClassFactory(DispatchDeliveryRenderer)} onHandleDeliver={(e, data) => this.deliver(e, data)} />
							<ReactDataGridColumn
								sortable={false}
								enableCellClickRowSelect={false}
								width="200"
								headerAlign="center"
								headerText="Browse"
								fontWeight="bold"
								itemRenderer={new ClassFactory(DeliveryBrowseRenderer)}
								onHandleBrowse={(e, data) => {
									this.browse(e, data)
								}}
							/>
						</ReactDataGridColumnLevel>
					</DataGrid>
				</div>
				<AdvanceDialog open={this.state.deliveryEditor} handleClose={() => this.setState({ deliveryEditor: false })} bodyRenderer={<DeliveryEditor />} />
				<AdvanceDialog
					open={this.state.browseButton}
					headerTitle={<HeaderTitle title={this.state.title} />}
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

export default DeliveryControl
