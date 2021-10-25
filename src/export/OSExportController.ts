
import { ExcelExporter, ExtendedExportController } from '../flexicious'
import { deepClone } from './OSUIUtils.ts'
import MaterialDataGridColumn from '../shared/components/ExtendedDataGrid/material/grid/MaterialDataGridColumn'
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
    return dataProvider.map((data) => {
      const rowData = data

      rowData.children =
        (level && level.getChildren(data, true, false, true)) || []

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
    const dataProvider = this.getExportData(
      deepClone(grid.getFilteredPagedSortedData(iCollectionView)),
      grid.getColumnLevel(),
    )

    /* @ts-expect-error auto-src: non-strict-conversion */
    this._exportOptions.exporter.exportOptions = this._exportOptions
    grid.nativeExcelExporter.export(grid, dataProvider)

    grid.inExport = false
    grid.recordBeingExported = null
  }
} // OSExportController.prototype.typeName = OSExportController.typeName = 'OSExportController'; //for quick inspection

/* @ts-expect-error auto-src: non-strict-conversion */
OSExportController._instance = new OSExportController()
