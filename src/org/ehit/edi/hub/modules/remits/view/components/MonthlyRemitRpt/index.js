import { Paper } from '@material-ui/core'
import React from 'react'
import PlayerNameEditor from '../../../../../../../../../container/views/itemRenderers/PlayerNameEditor'
import { ClassFactory, EventDispatcher, ReactDataGridColumn, ReactDataGridColumnLevel, ToolbarAction } from '../../../../../../../../../flexicious'
import DataGrid from '../../../../../../../../../shared/components/ExtendedDataGrid'
import { RemitMonthRptMediator } from '../../RemitMonthRptMediator.ts'
import './monthlyRemitRpt.scss'

const playerNameEditor = new ClassFactory(PlayerNameEditor.editorWrapper)


class MonthlyRemitRpt extends EventDispatcher {
	constructor() {
		super()
		this._indEdit = -1

	}

	set indEdit(val) {
		this._indEdit = val
	}
	get indEdit() {
		return this._indEdit
	}

	componentDidMount() {
		this.grid.toolbarActions.push(new ToolbarAction('Add', -1, '', 'Add Record', '../../../../../../../../../assets/images/add.png', false, true))
		this.grid.rebuildPager()
		this.mediator = new RemitMonthRptMediator().onRegister(this)
	}

	componentWillUnmount() {
		this.mediator.onUnRegister()
	}

	isCellEditable = cell => {
		const column = cell.getColumn()
		return (cell.rowInfo.getData().add && column.getHeaderText() !== 'Save' && column.getHeaderText() !== 'Delete' && column.getHeaderText() !== 'Edit' && column.getHeaderText() !== 'Active' && column.getHeaderText() !== 'Update Date' && column.getHeaderText() !== 'Updated By') || (cell.rowInfo.getData().edit === true && (column.getDataField() === 'remarkName' || column.getDataField() === 'remarkCategory'))
	}

	render() {
		return (
			<Paper className="page_style_remits">
				<div className="gridStyle">
					<DataGrid ref={g => (this.grid = g)} id="grid" width="100%" height="100%" editable={true} cellEditableFunction={this.isCellEditable} enableCopy={true} enableEagerDraw={true} enableExport={true} enableFooters={true} styleName="gridStyle" enableToolbarActions={true} footerVisible={true}>
						<ReactDataGridColumnLevel rowHeight="21" enableFilters={true} enablePaging={true} pageSize="50">
							<ReactDataGridColumn
								columnWidthMode="fitToContent"
								width="120"
								dataField="id.payerName"
								enableCellClickRowSelect={false}
								filterControl="TextInput"
								filterOperation="Contains"
								headerText="Payer Name"
								itemEditorApplyOnValueCommit={true}
								itemEditor={playerNameEditor}
								footerLabel="Total Amount:"
								parentDocument={this}
							/>
							<ReactDataGridColumn columnWidthMode="fitToContent" width="50" dataField="id.remitMonth" enableCellClickRowSelect={false} filterControl="TextInput" filterOperation="Contains" headerText="Month" itemEditorApplyOnValueCommit={true} footerLabel="" />
						</ReactDataGridColumnLevel>
					</DataGrid>
				</div>
			</Paper>
		)
	}
}

export default MonthlyRemitRpt