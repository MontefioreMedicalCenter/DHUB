import { ExcelExporter, ExtendedExportController } from '../flexicious'
import { deepClone } from './OSUIUtils.ts'
import MaterialDataGridColumn from '../shared/components/ExtendedDataGrid/material/grid/MaterialDataGridColumn'
import * as XLSX from 'xlsx'
import * as FileSaver from 'file-saver'
export default class OSExportController extends ExtendedExportController {
	static instance() {
		/* @ts-expect-error auto-src: non-strict-conversion */
		return OSExportController._instance
	}

	getClassNames() {
		super.getClassNames().unshift('OSExportController')
	}

	getExportData(dataProvider: any, level: MaterialDataGridColumn) {
		/* @ts-expect-error auto-src: strict-conversion */
		return dataProvider.map(data => {
			const rowData = data

			rowData.children = (level && level.getChildren(data, true, false, true)) || []

			if (rowData.children.length > 0) {
				this.getExportData(rowData.children, level.nextLevel)
			}

			return rowData
		})
	}

	runExport(iCollectionView: any, allOrSelectedPages: boolean) {
		if (typeof allOrSelectedPages === 'undefined') {
			allOrSelectedPages = false // eslint-disable-line no-param-reassign
		}

		/* @ts-expect-error auto-src: non-strict-conversion */
		const grid = this._grid
		grid.inExport = true
		if (grid.enableDynamicLevels) {
			grid.ensureLevelsCreated()
		}
		const dataProvider = this.getExportData(deepClone(grid.getFilteredPagedSortedData(iCollectionView)), grid.getColumnLevel())

		/* @ts-expect-error auto-src: non-strict-conversion */
		this._exportOptions.exporter.exportOptions = this._exportOptions
		this.excelXlsxExporter()

		grid.inExport = false
		grid.recordBeingExported = null
	}

	excelXlsxExporter() {
		var grid = this._grid
		var exportData = this._grid.getDataProvider()
		var selectedData = this._grid.excelOptions
		// const export = (grid, exportData: ReadonlyArray<any>, selectedData) => {
		const fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8'
		const fileExtension = '.xlsx'

		const newExportData = this.setUpExportData(grid, exportData, selectedData.columnsToExport)

		const ws = XLSX.utils.json_to_sheet(newExportData)
		const wb = { Sheets: { data: ws }, SheetNames: ['data'] }
		const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' })

		const data = new Blob([excelBuffer], { type: fileType })
		FileSaver.saveAs(data, 'download' + fileExtension)
		// }
	}

	setUpExportData(grid: any, exportData: ReadonlyArray<any>, selectedData) {
		const columns = grid.getColumns()

		const dataProvider = exportData.map(data => {
			let exportingData = {}
			columns.forEach(column => {
				const headerText = column.getHeaderText()
				let selectedList = []
				selectedData.forEach(x => {
					selectedList.push(x.headerText)
				})
				const numberWithCommas = x => {
					return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')
				}
				if (selectedList.includes(headerText) || column.columnGroup) {
					let items = {}
					const keys = Object.keys(data)

					keys.forEach((key, index) => {
						var localKey = key.replace('_', '')
						items = { ...items, ...{ [localKey]: data[key] } }
						return items
					})
					const value = column.itemToLabel(items)
					if (!column.columnGroup) {
						exportingData = { ...exportingData, ...{ [headerText]: value } }
					} else {
						let groupedData = selectedData.map(x => x.name)
						let selectedgrpData = column.columnGroup._columns.map(x => x.getHeaderText())
						for (var j = 0; j < selectedgrpData.length; j++) {
							if (groupedData.includes(selectedgrpData[j])) {
								for (var i = 0; i < column.columnGroup._columns.map(x => x.getHeaderText()).length; i++) {
									i === 0 ? (exportingData = { ...exportingData, ...{ [column.columnGroup.getHeaderText() + '-' + column.columnGroup._columns[i].getHeaderText()]: '$' + numberWithCommas(String(Number(data[column.columnGroup._columns[i].getDataField()] || 0).toFixed(2))) } }) : (exportingData = { ...exportingData, ...{ [column.columnGroup.getHeaderText() + '-' + column.columnGroup._columns[i].getHeaderText()]: numberWithCommas(String(Number(data[column.columnGroup._columns[i].getDataField()] || 0))) } })
								}
							}
						}
					}
				}
			})
			return exportingData
		})
		return dataProvider
	}
} // OSExportController.prototype.typeName = OSExportController.typeName = 'OSExportController'; //for quick inspection

/* @ts-expect-error auto-src: non-strict-conversion */
OSExportController._instance = new OSExportController()
