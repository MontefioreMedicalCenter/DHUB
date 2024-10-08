/* eslint-disable */
import { TriStateCheckBox } from '../../../../../flexicious'
import { Checkbox } from '@material-ui/core'
import React from 'react'

export default class MaterialTristateCheckBox extends TriStateCheckBox {
	render() {
		return super.render()
	}
	attachClass(newClass) {}
	detachClass() {}
	invalidateDisplayList() {}
	setText() {}
	setSelectedState(val) {
		super.setSelectedState(val)
		this.determineCheckBox()
		this.setState({ timeStamp: new Date() })
	}
	determineCheckBox() {
		const cb = this.getMiddle() ? this.getEnabled() ? <Checkbox key="cb" className={'materialCheckBox'} indeterminate checked={false} /> : <Checkbox key="cb" className={'materialCheckBox'} checked={false} indeterminate disabled /> : this.getEnabled() ? this.getSelected() ? <Checkbox key="cb" className={'materialCheckBox'} checked /> : <Checkbox key="cb" className={'materialCheckBox'} checked={false} /> : this.getSelected() ? <Checkbox key="cb" checked disabled /> : <Checkbox key="cb" disabled checked={false} />

		this.setAttribute('className', 'checkBoxCellRenderer')
		this.children = [cb]
	}
}
