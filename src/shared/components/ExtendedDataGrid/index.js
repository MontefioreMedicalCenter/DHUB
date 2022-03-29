/* eslint-disable no-console */
import './index.scss'
import { Constants, StyleDefaults, ReactDataGrid, UIUtils, Point, FilterExpression } from '../../../flexicious'
import MaterialDataGrid from './material/grid/MaterialDataGrid'
import { toast } from 'react-toastify'
// import OSExportController from '../../../export/OSExportController.ts'
// import ExcelXlsxExporter from '../../../shared/ExcelXlsxExporter.ts'

const iconExpand = '/keyboard_arrow_right.svg'
const iconCollapse = '/keyboard_arrow_up.svg'

Constants.IMAGE_PATH = window.location.origin + window.location.pathname.split('main')[0] + '/images'
Constants.VERTICAL_SCROLLBAR_WIDTH = Constants.isMobileBrowser() ? 0 : 10
if (Constants.isMobileBrowser()) {
	Constants.HORIZONTAL_SCROLLBAR_HEIGHT = 10
}
// Constants.HORIZONTAL_SCROLLBAR_HEIGHT = Constants.isMobileBrowser() ? 10 : 25;
StyleDefaults.defaults.imagesRoot = Constants.IMAGE_PATH
StyleDefaults.defaults.toolbarImagesRoot = Constants.IMAGE_PATH
StyleDefaults.defaults.disclosureClosedIcon = iconExpand
StyleDefaults.defaults.disclosureOpenIcon = iconCollapse

//need to do this because montefiore uses setters/getters on their VOs and hasOwnProperty returns false.
const hasOwnProperty = (obj, prop) => {
	return obj.hasOwnProperty(prop) || obj.hasOwnProperty('_' + prop)
}
flexiciousNmsp.FilterExpression.prototype.isMatch = function(src, grid) {
	if (this.filterControl && UIUtils.hasMethod(this.filterControl, 'isMatch')) {
		return this.filterControl.isMatch(src, this)
	}

	if (this.filterOperation === FilterExpression.FILTER_OPERATION_TYPE_NONE || this.expression === null || src === null || this.columnName === null) return true

	let object = null

	const col = grid && grid.getFilterColumn(this.columnName)
	if (col && UIUtils.hasMethodOrProperty(col, 'useLabelFunctionForFilterCompare') && col.useLabelFunctionForFilterCompare) {
		object = col.itemToLabel(src)
	} else if (col && col.filterCompareFunction != null) {
		return col.filterCompareFunction(src, this)
	} else if (col && UIUtils.hasMethodOrProperty(col, 'filterConverterFunction') && col.filterConverterFunction != null) {
		object = col.filterConverterFunction(src, col)
	} else if (this.columnName.indexOf('.') > 0) {
		//object = UIUtils.resolveExpression(src, this.columnName,null, true);
		const dotobject = UIUtils.resolveExpression(src, this.columnName, null, true)
		if (dotobject === undefined) return true
		//this means the item does not have our field/
		else if (dotobject === null) return false
		else object = dotobject
	} else if (hasOwnProperty(src, this.columnName)) object = src[this.columnName]
	else return true

	if (object == null) return false
	if (this.filterControl && UIUtils.hasMethod(this.filterControl, 'convert')) {
		object = this.filterControl.convert(object.toString())
	} else if (this.filterComparisionType !== FilterExpression.FILTER_COMPARISION_TYPE_AUTO) {
		object = FilterExpression.convert(this.filterComparisionType, object)
	}

	//begins with operation - comapre text
	if (this.filterOperation === FilterExpression.FILTER_OPERATION_TYPE_BEGINS_WITH)
		return (
			object
				.toString()
				.toLocaleLowerCase()
				.indexOf(
					this.expression
						.toString()
						.toLocaleLowerCase()
						.toString()
				) === 0
		)
	else if (this.filterOperation === FilterExpression.FILTER_OPERATION_TYPE_CONTAINS)
		return object
			.toString()
			.toLocaleLowerCase()
			.includes(
				this.expression
					.toString()
					.toLocaleLowerCase()
					.toString()
			)
	else if (this.filterOperation === FilterExpression.FILTER_OPERATION_TYPE_DOES_NOT_CONTAIN)
		return !object
			.toString()
			.toLocaleLowerCase()
			.includes(
				this.expression
					.toString()
					.toLocaleLowerCase()
					.toString()
			)
	else if (this.filterOperation === FilterExpression.FILTER_OPERATION_TYPE_BETWEEN) {
		if (this.expression == null) throw new Error('Expression is not an array collection for between filter operation')
		if (this.expression.length !== 2) throw new Error('Invalid expression for between filter operation. Between filter operation requires array collection with exactly 2 items.')
		return this.expression[0] <= object && object <= this.expression[1]
	} else if (this.filterOperation === FilterExpression.FILTER_OPERATION_TYPE_ENDS_WITH)
		return (
			object
				.toString()
				.toLowerCase()
				.lastIndexOf(this.expression.toString().toLowerCase()) ===
			object.toString().length - this.expression.toString().length
		)
	else if (this.filterOperation === FilterExpression.FILTER_OPERATION_TYPE_EQUALS) return object === this.expression
	else if (this.filterOperation === FilterExpression.FILTER_OPERATION_TYPE_GREATER_THAN) return object > this.expression
	else if (this.filterOperation === FilterExpression.FILTER_OPERATION_TYPE_GREATERTHANEQUALS) return object >= this.expression
	else if (this.filterOperation === FilterExpression.FILTER_OPERATION_TYPE_IN_LIST) {
		if (this.expression == null) throw new Error('expression is not an array collection for between filter operation')
		for (var i = 0; i < this.expression.length; i++) {
			var obj = this.expression[i]
			if (this.wasContains && obj && object) {
				if (object.toString().includes(obj.toString())) {
					return true
				}
			} else if (obj === object) return true
		}
		return false
	} else if (this.filterOperation === FilterExpression.FILTER_OPERATION_TYPE_IS_NOT_NULL) {
		return object != null
	} else if (this.filterOperation === FilterExpression.FILTER_OPERATION_TYPE_LESS_THAN) return object < this.expression
	else if (this.filterOperation === FilterExpression.FILTER_OPERATION_TYPE_LESS_THAN_EQUALS) return object <= this.expression
	else if (this.filterOperation === FilterExpression.FILTER_OPERATION_TYPE_NOT_EQUALS) return object !== this.expression
	else if (this.filterOperation === FilterExpression.FILTER_OPERATION_TYPE_NOT_IN_LIST) {
		if (this.expression == null) throw new Error('expression is not an array collection for between filter operation')
		for (i = 0; i < this.expression.length; i++) {
			obj = this.expression[i]
			if (obj === object) return false
		}
		return true
	} else throw new Error('Invalid expression for Filter expression')
}

export default class DataGrid extends MaterialDataGrid {
	constructor(props, arg1, arg2) {
		super(props, arg1, arg2)
		this.enableActiveCellHighlight = false
		this.enableHideBuiltInContextMenuItems = true
		this.setRowHeight(Constants.GLOBAL_ROW_HEIGHT)
		if (!props.headerRowHeight) this.setHeaderRowHeight(Constants.GLOBAL_ROW_HEIGHT)
		this.exportFileName = props.exportFileName
		this.setDataProvider(props.dataProvider || []) // initially no data
		if (props.dataProvider) {
			this.showSpinnerOnFilterPageSort = false
		}
		this.headerPaddingLeft = 4
		this.headerColors = this.columnGroupColors = [0xffffff, 0x82988c]
		this.rollOverColor = 0xffe79d
		this.enableActiveCellHighlight = true
		this.activeCellColor = 0xbdd4f1
		//Vertical Grid Lines for all Grids
		// this.verticalGridLines = true
		// this.verticalGridLineColor = 0xcccccc
		// this.headerVerticalGridLines = true
		this.alternatingItemColors = [0xe1e8e4, 0xffffff]
		this.measurerClassName = 'common-row-height-style'
		// this.nativeExcelExporter = new ExcelXlsxExporter()//
		this.setFooterRowHeight(25)
		this.propertyBag = {
			...this.propertyBag,
			id: props.id
		}
		// eslint-disable-next-line no-unused-vars
		this.addEventListener(this, ReactDataGrid.EVENT_SCROLL, evt => {
			if (flexiciousNmsp.DisplayList.isMouseDown) this.localLastHScroll = this.getHorizontalScrollPosition()
			if (this.getVerticalScrollPosition() === 0 && !flexiciousNmsp.DisplayList.isMouseDown) {
				//this means user is not scrolling to zero - just the grid is rebiulding.
				return
			}
			this.localLastVScroll = this.getVerticalScrollPosition()
			this.lastCalculatedTotalHeight = this.getBodyContainer()._calculatedTotalHeight
		})

		this.addEventListener(this, ReactDataGrid.ITEM_RIGHT_CLICK, this.onGridRightClick)
		this.popupFactoryContextMenuPopup = UIUtils.adapter ? UIUtils.createContextMenuPopup() : null
		this.getBodyContainer().enableHorizontalRecycling = false
		if (this.variableRowHeight) this.recalculateSeedOnEachScroll = true
		this.paddingRight = Constants.GLOBAL_ROW_HEIGHT > 30 ? 5 : 2
		this.paddingLeft = this.paddingRight
		this.headerPaddingLeft = this.paddingRight
		this.headerPaddingRight = this.paddingRight
		this.enableHorizontalScrollOptimizationsBETA = true
		this.footerDrawTopBorder = true
		// this.enableMultiColumnSort = true
		flexiciousNmsp.UIUtils.pasteToClipBoard = strToPaste => {
			// if (!navigator.clipboard) {
				try {
					window.clipboardData.setData('text', strToPaste)
				} catch (n) {
					var t = document.createElement('textarea')
					t.value = strToPaste
					t.id = 'pasteArea'
					t.setAttribute('readonly', '')
					t.style.position = 'absolute'
					// t.style.left = '-9999px'
					t.style.top = '0px'
					t.style.height = '500px'
					t.style.width = '200px'
					t.style.zIndex = 55555555555555555
					t.tabIndex = -1
					document.body.appendChild(t)
					var i = document.getSelection().rangeCount > 0 && document.getSelection().getRangeAt(0)
					t.select()

					try {
						var ele = document.getElementById('modal-dialog')
						if(ele) {
							prompt("Data to Copy", strToPaste)
							document.execCommand('copy')
						}else {
							document.execCommand('copy')
						}
					} catch (e) {
						console.log('Error occured ' + e)
						prompt(strToPaste)
					}

					document.body.removeChild(t)
					if(i) {
						document.getSelection().removeAllRanges()
						document.getSelection().addRange(i)
					}
				}
				return
			// }

			// navigator.clipboard.writeText(strToPaste).then(
			// 	function() {},
			// 	function(err) {
			// 		console.log('failed to copy')
			// 		alert(err)
			// 	}
			// )
		}
	}

	onMouseWheel(event) {
		super.onMouseWheel(event)
		if (this.getVerticalScrollPosition() === 0) {
			this.localLastVScroll = 0
		}
	}
	getCurrentEditingCell() {
		return this.getCurrentEditCell()
	}
	refreshGrid = () => {
		this.rebuildBody()
	}

	/**
	 * @override
	 */
	getClassNames() {
		return ['Montefiore', ...super.getClassNames()]
	}

	onGridRightClick(event: $FlowFixMe) {
		if (this.popupFactoryContextMenuPopup) {
			const popup = this.popupFactoryContextMenuPopup.newInstance()

			popup.addEventListener(this, Constants.EVENT_CLOSE, this.onContextMenuClosed)

			popup.setGrid(this)
			popup.showDialog()

			let pt = new Point(event.triggerEvent.triggerEvent.clientX, event.triggerEvent.triggerEvent.clientY)

			pt = this.globalToLocal(pt)
			popup.move(pt.x, pt.y)
		}
	}
	setErrorByObject(item, fld, errorMsg) {
		super.setErrorByObject(item, fld, errorMsg)
		if (this.lastErrorMessage !== errorMsg) {
			this.lastErrorMessage = errorMsg
			toast.warning(errorMsg)
		}
	}
}
