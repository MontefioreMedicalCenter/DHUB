import { Paper } from '@material-ui/core'
import { Tooltip, withStyles,Button } from '@material-ui/core'
import SaveIcon from '@material-ui/icons/Save'
import Edit from '../../../../../../../../../assets/images/Edit-active.png'
import moment from 'moment'
import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../../../../../../../../../AppConfig/store/actions/headersAction'
import { DateRange, EventDispatcher, ReactDataGridColumn, ReactDataGridColumnLevel, ReactDataGridColumnGroup } from '../../../../../../../../../flexicious'
import MontefioreUtils from '../../../../../../../../../service/utils/MontefioreUtils'
import AdvanceDialog from '../../../../../../../../../shared/components/AdvanceDialog'
import DataGrid from '../../../../../../../../../shared/components/ExtendedDataGrid'
// import { EdiDateComboBox } from '../../../../../../../../../utils/dateFormatCombo/EdiDateComboBox.ts'
import EdiDateRangeCombo from '../../../../../../../../../utils/dateFormatCombo/EdiDateRangeCombo'
import ExampleUtils from '../../../../../../../../../utils/ExampleUtils'
import FileEditor from '../../../../../main/view/components/FileEditor'
import { ClaimsMediator } from '../../ClaimsMediator.ts'
import './claims.scss'
import dataArray from '../../../../../../../../../sample/findClaimProcesses.js'
import StatusRenderer from '../../../../../../../../../shared/components/StatusRenderer'
import dialog_warning from '../../../../../../../../../assets/images/dialog_warning.png'

const bgcolorarray = ['0xC0C0C0', '0xEEEEEE']

const headerbgcolorarray = ['0xEEEEEE', '0xC0C0C0']

const edit= props => {
	const onSave = () => {
		props.column.handleSave(props)
	}
	if (props.cell.rowInfo && props.cell.rowInfo.getIsDataRow()) {
		
			
			return (
				<Button style={{ height: '100%' }}>
					<img
						id="Edit"
						alt="Edit"
						src={Edit}
					/>
				</Button>

		)
	} else {
		return <div />
	}
}
const save= props => {
	const onSave = () => {
		props.column.handleSave(props)
	}
	if (props.cell.rowInfo && props.cell.rowInfo.getIsDataRow()) {
		return (
			<Button onClick={onSave} style={{height:"100%"}}>
				<SaveIcon fontSize="small" />
			</Button>
		)
	} else {
		return <div />
	}
}


const styles = {
	statusContainer: {
		height: '100%',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
		paddingLeft: '3px'
	},
	tooltipContainer: {
		width: 500,
		height: 400,
		display: 'flex',
		flexDirection: 'column'
	},
	tooltipContent: {
		padding: 10,
		height: '100%',
		width: 'calc(100% - 20px)',
		background: '#FFFFE5'
	},
	tooltipheader: {
		padding: 10,
		borderBottom: '1px solid black'
	}
}
const HtmlTooltip = withStyles(theme => ({
	tooltip: {
		backgroundColor: '#FFFF99',
		opacity: 0.9,
		color: 'rgba(0, 0, 0, 0.87)',
		maxWidth: 500,
		fontSize: theme.typography.pxToRem(12),
		border: '1px solid black',
		padding: 0
	}
}))(Tooltip)
class Claims extends EventDispatcher {
	constructor() {
		super()
		this.state = {
			tabValue: '/main/claims',
			fileEditorWindow: false,
			fileContentContainerWindow: false,
			fileData: null,
			claimsHeader: ''
		}
	}

	componentDidMount() {
		//this.mediator = new ClaimsMediator().onRegister(this)
		this.grid.expandAll()
	}
	componentWillUnmount() {
		//this.mediator.onUnRegister()
	}

	currencyFormatter = (item, col) => {
		return item.totalDollarAmt ? ExampleUtils.globalCurrencyFormatter.format(item.totalDollarAmt) : null
	}
	globalDateFormatter = item => {
		if (item.logDatetime != null) return moment(new Date(new Date(Date.parse(item.logDatetime)).getTime() - new Date(Date.parse(item.logDatetime)).getTimezoneOffset() * 60000)).format('MM/DD/YYYY h:mm A')
	}

	dateForm = (item, col) => {
		const dataField = col.dataField.split('.')
		return item[dataField] ? moment(new Date(item[dataField])).format('MM/DD/YY hh:mm A') : null
	}

	getRowTextColor = cell => {
		var status = cell
			.getRowInfo()
			.getData()
			.processStatus.toString()
		if (status.indexOf('In-process') === 0) {
			return 0x0000ff
		}
		if (status.indexOf('Rejected') === 0) {
			return 0xff0000
		}
		return null
	}
	textFilterFunction = (item, filter) => {
		// Check if filter is provided
		if (!filter || !filter.expression) {
			return true // Return true to include all items initially, representing the original array
		}

		if (typeof filter.expression === 'string') {
			const dispStatus = item[filter.columnName]
			return (
				dispStatus
					.toString()
					.toLowerCase()
					.indexOf(filter.expression.toLowerCase()) !== -1
			)
		} else if (typeof filter.expression === 'object' && filter.expression.length > 0) {
			// Check if any expression in the array matches
			const filteredArr = filter.expression.map(data => {
				const temp =
					item[filter.columnName]
						.toString()
						.toLowerCase()
						.indexOf(data.toLowerCase()) !== -1
				return temp
			})

			// Return true if at least one match is found
			return filteredArr.includes(true)
		}
		// Default return value if no match is found
		return false
	}
	textFilterFunction1 = (item, filter) => {
		if (typeof filter.expression === 'string') {
			// Filter all systems based on matching fileName
			console.log(item)
			item.systems = item.systems.filter(system => {
				const fileName = system.fileName
				return (
					fileName
						.toString()
						.toLowerCase()
						.indexOf(filter.expression.toLowerCase()) !== -1
				)
			})
		}
		return item // Ensure to return the modified item
	}
	render() {
		return (
			<Paper className="page-style">
				<div className="claimsGridStyle">
					<DataGrid
						ref={g => (this.grid = g)}
						textAlign={'center'}
						height={'100%'}
						width={'100%'}
						id="Requestor_WorkList_Grid"
						clearOpenItemsOnDataProviderChange={false}
						selectedKeyField={'uniqueIdentifier'}
						alternatingItemColors={[0xffffff, 0xffffff]}
						enablePrint
						// enablePreferencePersistence
						// enableDrag
						showSpinnerOnFilterPageSort
						enableEagerDraw
						// enableDrop
						// enableExport
						enableCopy
						preferencePersistenceKey={'simpleGrid'}
						// enableMultiColumnSort
						useCompactPreferences
						horizontalScrollPolicy={'auto'}
						footerDrawTopBorder
						enablePdf
						//cellBackgroundColorFunction="getColor"
						
						dataProvider ={dataArray}
						enableToolbarActions
						styleName="gridStyle"
						editable
						enableDrillDown
						showAddEmployee
						showRefresh
						filterVisible={false}
						headerWordWrap
						headerHeight={60}
						enableDefaultDisclosureIcon={false}
						headerSortSeparatorRight={3}
						// selectionMode="none"
						// variableRowHeight
						// getRowHeightFunction={getRowHeight}
						// toolbarActionExecutedFunction={onExecuteToolbarAction}
						// cellEditableFunction={isCellEditable}
					>
						<ReactDataGridColumnLevel rowHeight={10} enablePaging={true} horizontalGridLines={true} pageSize={10000} childrenField="systems" alternatingItemColors={[0xe1eef7, 0xe1eef7]} enableFilters={true} horizontalGridLineColor={0x99bbe8} horizontalGridLineThickness={1} >
							<ReactDataGridColumnGroup headerText="ID">
								<ReactDataGridColumn
									dataField="worklistId"
									headerText="#"
									width={125}
									columnLockMode={'left'}
									enableCellClickRowSelect={false}
									editable={false}
									filterControl="TextInput"
									filterOperation="Contains"
									filterWaterMark="Contains"
									enableExpandCollapseIcon
									enableHierarchicalNestIndent
									//expandCollapseIconPlacementFunction={placeExpandCollapseIcon}
									filterCompareFunction={null}
									// filterWaterMark={"Contains"}
								/>
								<ReactDataGridColumn dataField="systemId" headerText="System ID" width={50} columnLockMode={'left'} editable={false} enableCellClickRowSelect={false} filterControl="TextInput" filterOperation="Contains" filterWaterMark="Contains" />
							</ReactDataGridColumnGroup>
							<ReactDataGridColumn
								headerText="Status"
								dataField="processStatus"
								width={70}
								columnLockMode={'left'}
								enableCellClickRowSelect={false}
								editable={false}
								itemRenderer={StatusRenderer}
								//cellBackgroundColorFunction={getCellBackgroundColor}
								filterCompareFunction={null}
								filterComboBoxWidth={150}
							/>
							<ReactDataGridColumnGroup headerText="File Details" dataField="requester-user-id">
								<ReactDataGridColumn
									textAlign={'left'}
									dataField="fileId"
									headerText="Control ID"
									width={150}
									filterControl="TextInput"
									filterOperation="Contains"
									filterWaterMark="Contains"
									headerWordWrap={true}
									//itemEditor={textInputEditor}
									enableRecursiveSearch={true}
									itemEditorApplyOnValueCommit={true}
									enableCellClickRowSelect={false}
									//itemEditorValidatorFunction={validateLname}
									filterCompareFunction={null}
								/>
								<ReactDataGridColumn
									textAlign={'left'}
									dataField="fileName"
									headerText="Interface ID"
									width={300}
									filterControl="TextInput"
									filterOperation="Contains"
									filterWaterMark="Contains"
									headerWordWrap={true}
									enableRecursiveSearch={true}
									//itemEditor={textInputEditor}
									itemEditorApplyOnValueCommit={true}
									enableCellClickRowSelect={false}
									//itemEditorValidatorFunction={validateFname}
									filterCompareFunction={null}
								/>
								<ReactDataGridColumn
									dataField="senderName"
									headerText="Sender ID"
									width={150}
									headerWordWrap={true}
									itemEditorApplyOnValueCommit={true}
									enableCellClickRowSelect={false}
									//itemEditor={textInputEditor}
									sortable={false}
									//itemEditorValidatorFunction={validateInitial}
								/>
							
								
								<ReactDataGridColumn
									textAlign={'left'}
									dataField="processDescription"
									headerText="FTP Type"
									width={150}
									//itemEditor={textInputEditor}
									headerWordWrap={true}
									//itemEditorValidatorFunction={validatePersonEmail}
									itemEditorApplyOnValueCommit={true}
									enableCellClickRowSelect={false}
									sortable={false}
								/>
							</ReactDataGridColumnGroup>
							<ReactDataGridColumnGroup headerText="Interface Details" dataField="requester-user-id">
								
								<ReactDataGridColumn
									textAlign={'left'}
									dataField="instanceStartTime"
									headerText="Last Update"
									width={150}
									filterControl="TextInput"
									filterOperation="Contains"
									filterWaterMark="Contains"
									enableRecursiveSearch={true}
									//itemEditor={textInputEditor}
									headerWordWrap="true"
									//itemEditorValidatorFunction={validateCompanyCode}
									itemEditorApplyOnValueCommit={true}
									enableCellClickRowSelect={false}
									sortable={false}
									filterCompareFunction={null}
								/>
								<ReactDataGridColumn
									textAlign={'left'}
									dataField="campusCode"
									headerText="Current Conditions"
									width={100}
									filterControl="TextInput"
									filterOperation="Contains"
									filterWaterMark="Contains"
									enableRecursiveSearch={true}
									//headerWordWrap={true}
									itemEditorApplyOnValueCommit={false}
									enableCellClickRowSelect={false}
									itemEditorManagesPersistence={true}
									//itemEditor={campusCodeEditorWrapper}
									filterCompareFunction={null}
								/>
								<ReactDataGridColumn
									textAlign={'left'}
									dataField="title"
									headerText="Prev Condition"
									width={100}
									filterControl="TextInput"
									filterOperation="Contains"
									filterWaterMark="Contains"
									enableRecursiveSearch={true}
									headerWordWrap={true}
									itemEditorApplyOnValueCommit={false}
									enableCellClickRowSelect={false}
									itemEditorManagesPersistence={true}
									//itemEditor={titleEditorWrapper}
									filterCompareFunction={null}
								/>
								<ReactDataGridColumn
									textAlign={'left'}
									dataField="department"
									headerText="Log"
									width={100}
									filterControl="TextInput"
									filterOperation="Contains"
									filterWaterMark="Contains"
									enableRecursiveSearch={true}
									headerWordWrap={true}
									itemEditorApplyOnValueCommit={false}
									enableCellClickRowSelect={false}
									itemEditorManagesPersistence={true}
									//itemEditor={departmenteEditorWrapper}
									filterCompareFunction={null}
								/>
								<ReactDataGridColumn
									dataField="instanceStartTime"
									headerText="Last Update"
									width={120}
									editorDataField="selectedDate"
									//filterRenderer={dateFilter}
									// filterControl="DateComboBox"
									enableRecursiveSearch={true}
									headerWordWrap={false}
									formatter={ExampleUtils.dateFormatter5}
									itemEditorApplyOnValueCommit={true}
									enableCellClickRowSelect={false}
									//itemEditor={startDateRendererEditorWrapper}
									// itemEditorValidatorFunction={validateStartDate}
									filterDateRangeOptions={[DateRange.DATE_RANGE_CUSTOM]}
									// filterCompareFunction={null}
								/>
								
								
							</ReactDataGridColumnGroup>
							
							<ReactDataGridColumn
								dataField="Save"
								headerText="Save"
								width={50}
								columnLockMode={'right'}
								itemRenderer={this?save:null}
								editable={false}
								hideText={true}
								//  enableIcon useIconRollOverTimer={false}={true}
								//  iconFunction="dynamicIconFunctionSave"
								iconToolTip="Save Request"
								iconHandCursor={true}
								columnWidthMode="fixed"
								iconLeft="20"
								sortable={false}
								//onHandleSave={iconClick}
							/>
							<ReactDataGridColumn
								dataField="Edit"
								headerText="Edit"
								width={50}
								columnLockMode={'right'}
								itemRenderer={edit}
								editable={false}
								hideText={true}
								//  enableIcon useIconRollOverTimer={false}={true}
								//  iconFunction="dynamicIconFunctionEdit"
								iconToolTip="Edit Request"
								iconHandCursor={true}
								columnWidthMode="fixed"
								iconLeft="20"
								sortable={false}
								//onHandleEdit={iconClick}
							/>
							
							<ReactDataGridColumnLevel enableFooters parentField={'invoice'} horizontalGridLines={false} horizontalGridLineColor="0xffffff" horizontalGridLineThickness="0" rowHeight="23" reusePreviousLevelColumns={true} alternatingItemColors={[0xffffff, 0xffffff]} initialSortField="id.worklistSeqNum" />
						</ReactDataGridColumnLevel>
					</DataGrid>
					<AdvanceDialog
						open={this.state.fileEditorWindow}
						headerTitle={this.state.claimsHeader}
						handleClose={() => this.setState({ fileEditorWindow: false })}
						bodyRenderer={
							<FileEditor
								ref={g => (this.fileEditor = g)}
								parentDoc={this}
								fileData={this.state.fileData}
								closePopup={() => {
									return this.setState({ fileEditorWindow: false })
								}}
							/>
						}
					/>
				</div>
			</Paper>
		)
	}
}

const mapStateToProps = state => {
	return {
		claimsHeaders: state.headerState.claimsHeaderState
	}
}

const mapDispatchToProps = dispatch =>
	bindActionCreators(
		{
			...actions
		},
		dispatch
	)

export default connect(mapStateToProps, mapDispatchToProps)(Claims)
