import { Button, Paper } from '@material-ui/core'
import React from 'react'
import PlayerNameEditor from '../../../../../../../../../container/views/itemRenderers/PlayerNameEditor'
import { ClassFactory, EventDispatcher, ReactDataGridColumn, ReactDataGridColumnLevel, ToolbarAction } from '../../../../../../../../../flexicious'
import MontefioreUtils from '../../../../../../../../../service/utils/MontefioreUtils'
import DataGrid from '../../../../../../../../../shared/components/ExtendedDataGrid'
import { RemitMonthRptMediator } from '../../RemitMonthRptMediator.ts'
import CustomAutoComplete from '../../../../../../../../../shared/components/CustomAutoComplete'
import './monthlyRemitRpt.scss'

const playerNameEditor = new ClassFactory(PlayerNameEditor.editorWrapper)

class MonthlyRemitRpt extends EventDispatcher {
	constructor() {
		super()
		this.state = {
			remitPayerComBoxDataProvider: [],
			remitMonthComBoxDataProvider: [],
			remitPayerComBox: '',
			remitMonthComBox: ''
		}
		this._indEdit = -1
	}

	set indEdit(val) {
		this._indEdit = val
	}
	get indEdit() {
		return this._indEdit
	}

	componentDidMount() {
		this.mediator = new RemitMonthRptMediator().onRegister(this)
		this.grid.toolbarActions.push(new ToolbarAction('Add', -1, '', 'Add Record', '../../../../../../../../../assets/images/add.png', false, true))
		this.grid.rebuildPager()
	}

	componentWillUnmount() {
		this.mediator.onUnRegister()
	}

	isCellEditable = cell => {
		const column = cell.getColumn()
		return (cell.rowInfo.getData().add && column.getHeaderText() !== 'Save' && column.getHeaderText() !== 'Delete' && column.getHeaderText() !== 'Edit' && column.getHeaderText() !== 'Active' && column.getHeaderText() !== 'Update Date' && column.getHeaderText() !== 'Updated By') || (cell.rowInfo.getData().edit === true && (column.getDataField() === 'remarkName' || column.getDataField() === 'remarkCategory'))
	}

	handleOnChange = e => {
		this.setState({ [e.target.name]: e.target.value })
	}

	onClickClear = e => {
		this.setState({
			remitPayerComBox: '',
			remitMonthComBox: ''
		})
	}

	onSearch = () => {
		this.mediator.search()
	}

	render() {
		return (
			<Paper className="page_style_remits">
				<Paper style={{ height: '140px' }}>
					<div className="searchField">
						<div className="selectionField">
							<div className="line">
								<span className="font">Payer Name</span>
								<div>
									
									<CustomAutoComplete ref={g => (this.remitPayerComBox = g)} id="remitPayerComBox" name="remitPayerComBox" value={this.state.remitPayerComBox} data={this.state.remitPayerComBoxDataProvider} onChange={(e, value) => this.setState({ remitPayerComBox: value })} onSelect={value => this.setState({ remitPayerComBox: value })} handleOnChange={this.handleOnChange} textBoxStyle={{ width: '300px' }} />
								</div>
							</div>
							<div className="line">
								<span className="font">Remit Month</span>
								<div>
									
									<CustomAutoComplete ref={g => (this.remitMonthComBox = g)} id="remitMonthComBox" name="remitMonthComBox" value={this.state.remitMonthComBox} data={this.state.remitMonthComBoxDataProvider} onChange={(e, value) => this.setState({ remitPayerComBox: value })} onSelect={value => this.setState({ remitMonthComBox: value })} handleOnChange={this.handleOnChange} textBoxStyle={{ height: '35px', width: '200px' }} />
								</div>
							</div>
						</div>
						<div className="line">
							<Button variant="contained" color="primary" onClick={this.onSearch}>
								Search
							</Button>
							<Button variant="contained" color="primary" onClick={this.onClickClear}>
								Clear
							</Button>
						</div>
					</div>
				</Paper>
				<div className="gridStyle">
					<DataGrid ref={g => (this.grid = g)} id="grid" width="100%" height="100%" editable={true} cellEditableFunction={this.isCellEditable} enableCopy={true} enableEagerDraw={true} enableExport={true} enableFooters={true} styleName="gridStyle" enableToolbarActions={true} footerVisible={true} pagerRenderer={MontefioreUtils.pagerFactory}>
						<ReactDataGridColumnLevel rowHeight="21" enableFilters={true} enablePaging={true} pageSize="50">
							<ReactDataGridColumn textAlign="left" columnWidthMode="fitToContent" width="120" dataField="id.payerName" enableCellClickRowSelect={false} filterControl="TextInput" filterOperation="Contains" headerText="Payer Name" itemEditorApplyOnValueCommit={true} itemEditor={playerNameEditor} footerLabel="Total Amount:" parentDocument={this} />
							<ReactDataGridColumn textAlign="left"  width="110" dataField="id.remitMonth" enableCellClickRowSelect={false} filterControl="TextInput" filterOperation="Contains" headerText="Month" itemEditorApplyOnValueCommit={true} footerLabel="" />
							<ReactDataGridColumn textAlign="left" width="110" dataField="hb" enableCellClickRowSelect={false} headerText="HB-EPIC" itemEditorApplyOnValueCommit={true} footerAlign="center" footerOperation="sum" footerOperationPrecision="2"  />
							<ReactDataGridColumn textAlign="left" width="110" dataField="pb" enableCellClickRowSelect={false} headerText="PB-EPIC" itemEditorApplyOnValueCommit={true} footerAlign="center" footerOperation="sum" footerOperationPrecision="2"  />
							<ReactDataGridColumn textAlign="left" width="110" dataField="epichh" enableCellClickRowSelect={false} headerText="HH-EPIC" itemEditorApplyOnValueCommit={true} footerAlign="center" footerOperation="sum" footerOperationPrecision="2"  />
							<ReactDataGridColumn textAlign="left" width="110" dataField="cerc" enableCellClickRowSelect={false} headerText="CERC" itemEditorApplyOnValueCommit={true} footerAlign="center" footerOperation="sum" footerOperationPrecision="2"  />
							<ReactDataGridColumn textAlign="left" width="110" dataField="hsr" enableCellClickRowSelect={false} headerText="EAGLE" itemEditorApplyOnValueCommit={true} footerAlign="center" footerOperation="sum" footerOperationPrecision="2"  />
							<ReactDataGridColumn textAlign="left" width="110" dataField="fpp" enableCellClickRowSelect={false} headerText="IDXMOT" itemEditorApplyOnValueCommit={true} footerAlign="center" footerOperation="sum" footerOperationPrecision="2"  />
							<ReactDataGridColumn textAlign="left" width="110" dataField="hh" enableCellClickRowSelect={false} headerText="HH" itemEditorApplyOnValueCommit={true} footerAlign="center" footerOperation="sum" footerOperationPrecision="2"  />
							<ReactDataGridColumn textAlign="left" width="110" dataField="satp" enableCellClickRowSelect={false} headerText="SATP" itemEditorApplyOnValueCommit={true} footerAlign="center" footerOperation="sum" footerOperationPrecision="2"  />
							<ReactDataGridColumn textAlign="left" width="110" dataField="cmo" enableCellClickRowSelect={false} headerText="CMO" itemEditorApplyOnValueCommit={true} footerAlign="center" footerOperation="sum" footerOperationPrecision="2"  />
							<ReactDataGridColumn textAlign="left" width="110" dataField="total" enableCellClickRowSelect={false} headerText="TOTAL" itemEditorApplyOnValueCommit={true} footerAlign="center" footerOperation="sum" footerOperationPrecision="2"  /> 
						</ReactDataGridColumnLevel>
					</DataGrid>
				</div>
			</Paper>
		)
	}
}

export default MonthlyRemitRpt
