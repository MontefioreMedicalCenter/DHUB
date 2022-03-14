import * as XLSX from 'xlsx'
import * as FileSaver from 'file-saver';
import { TypedObject } from '../flexicious';

export default class ExcelXlsxExporter extends (TypedObject as any) {
  setUpExportData(grid: any, exportData: ReadonlyArray<any>) {
     const columns = grid.getColumns()

     const dataProvider = exportData.map((data) => {

      let exportData = {}
        columns.forEach((column) => {
            const headerText= column.getHeaderText()
            let items = {}
            const keys = Object.keys(data);

            keys.forEach((key, index) => {
              var localKey = key.replace("_",'')
              items = {...items, ...{[localKey]:data[key]}}
              return items
              }
            )
            const value = column.itemToLabel(items)
            
            exportData =   {...exportData, ...{[headerText]: value }}
         })

         return exportData
     })

    return dataProvider
  }

  export = (grid, exportData: ReadonlyArray<any>) => {
    const fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    const fileExtension = '.xlsx';

    const newExportData = this.setUpExportData(grid, exportData)

    const ws = XLSX.utils.json_to_sheet(newExportData)
    const wb = { Sheets: { 'data': ws }, SheetNames: ['data'] };
    const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
    console.log(excelBuffer);

    const data = new Blob([excelBuffer], {type: fileType});
    FileSaver.saveAs(data, "download" + fileExtension);
    
  }
}
