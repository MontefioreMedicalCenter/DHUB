import { Button, Paper } from '@material-ui/core'
import React from 'react'
import PlayerNameEditor from '../../../../../../../../../container/views/itemRenderers/PlayerNameEditor'
import { ClassFactory, EventDispatcher, ReactDataGridColumn, ReactDataGridColumnLevel, ToolbarAction } from '../../../../../../../../../flexicious'
import MontefioreUtils from '../../../../../../../../../service/utils/MontefioreUtils'
import ComboBox from '../../../../../../../../../shared/components/ComboBox'
import DataGrid from '../../../../../../../../../shared/components/ExtendedDataGrid'
import { RemitMonthRptMediator } from '../../RemitMonthRptMediator.ts'
import './monthlyRemitRpt.scss'

const playerNameEditor = new ClassFactory(PlayerNameEditor.editorWrapper)

class MonthlyRemitRpt extends EventDispatcher {
	constructor() {
		super()
		this.state={
			remitPayerComBoxDataProvider:[],
			remitMonthComBoxDataProvider:[],
			remitPayerComBox:'',
			remitMonthComBox:''
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
			remitPayerComBox:'',
			remitMonthComBox:''
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
									<ComboBox name="remitPayerComBox" labelKey="remitPayerComBox" valueKey="remitPayerComBox" value={this.state.remitPayerComBox} dataProvider={this.state.remitPayerComBoxDataProvider} onChange={this.handleOnChange} comboBoxStyle={{ height: '35px', width: '300px' }} />
								</div>
							</div>
							<div className="line">
								<span className="font">Remit Month</span>
								<div>
									<ComboBox name="remitMonthComBox" labelKey="remitMonthComBox" valueKey="remitMonthComBox" value={this.state.remitMonthComBox} dataProvider={this.state.remitMonthComBoxDataProvider} onChange={this.handleOnChange} comboBoxStyle={{ height: '35px', width: '300px' }} />
								</div>
							</div>
						</div>
						<div className="line">
							<Button variant="contained" color="primary" onClick={this.onSearch}>
								Search
							</Button>
							<Button variant="contained" color="primary"  onClick={this.onClickClear}>
								Clear
							</Button>
						</div>
					</div>
				</Paper>
				<div className="gridStyle">
					<DataGrid ref={g => (this.grid = g)} id="grid" width="100%" height="100%" editable={true} cellEditableFunction={this.isCellEditable} enableCopy={true} enableEagerDraw={true} enableExport={true} enableFooters={true} styleName="gridStyle" enableToolbarActions={true} footerVisible={true} pagerRenderer={MontefioreUtils.pagerFactory}>
						<ReactDataGridColumnLevel rowHeight="21" enableFilters={true} enablePaging={true} pageSize="50">
							<ReactDataGridColumn columnWidthMode="fitToContent" width="120" dataField="id.payerName" enableCellClickRowSelect={false} filterControl="TextInput" filterOperation="Contains" headerText="Payer Name" itemEditorApplyOnValueCommit={true} itemEditor={playerNameEditor} footerLabel="Total Amount:" parentDocument={this} />
							<ReactDataGridColumn columnWidthMode="fitToContent" width="50" dataField="id.remitMonth" enableCellClickRowSelect={false} filterControl="TextInput" filterOperation="Contains" headerText="Month" itemEditorApplyOnValueCommit={true} footerLabel="" />
						</ReactDataGridColumnLevel>
					</DataGrid>
				</div>
			</Paper>
		)
	}
}

export default MonthlyRemitRpt
