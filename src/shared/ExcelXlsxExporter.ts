import * as XLSX from 'xlsx'
import * as FileSaver from 'file-saver'
import { TypedObject } from '../flexicious'

export default class ExcelXlsxExporter extends (TypedObject as any) {

	setUpExportData(grid: any, exportData: ReadonlyArray<any>, selectedData) {
		const columns = grid.getColumns()

		const dataProvider = exportData.map(data => {
			let exportingData = {}
			columns.forEach(column => {
				// const colGroupHeaders = column.level.columnGroups.map( x => x.getHeaderText())//[1].getHeaderText()

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
					if(!column.columnGroup){
						exportingData = { ...exportingData, ...{ [headerText]: value } }
					}else{
						let groupedData = selectedData.map(x => x.name)
						let selectedgrpData = column.columnGroup._columns.map(x => x.getHeaderText())
						for(var j=0; j< selectedgrpData.length; j++){
							if(groupedData.includes(selectedgrpData[j])){
								for( var i = 0 ; i < column.columnGroup._columns.map(x => x.getHeaderText()).length; i++ ){
									i === 0 ? exportingData = {...exportingData, ...{ [column.columnGroup.getHeaderText()+'-'+column.columnGroup._columns[i].getHeaderText()]: '$' + numberWithCommas(String(Number(data[column.columnGroup._columns[i].getDataField()] || 0).toFixed(2))) }} : exportingData = {...exportingData, ...{ [column.columnGroup.getHeaderText()+'-'+column.columnGroup._columns[i].getHeaderText()]: numberWithCommas(String(Number(data[column.columnGroup._columns[i].getDataField()] || 0))) }}							
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

	export = (grid, exportData: ReadonlyArray<any>, selectedData) => {
		const fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8'
		const fileExtension = '.xlsx'

		const newExportData = this.setUpExportData(grid, exportData, selectedData.columnsToExport)

		const ws = XLSX.utils.json_to_sheet(newExportData)
		const wb = { Sheets: { data: ws }, SheetNames: ['data'] }
		const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' })

		const data = new Blob([excelBuffer], { type: fileType })
		FileSaver.saveAs(data, 'download' + fileExtension)
	}
}
