import { NumericRangeBox } from '../../../../../flexicious'
import MaterialTextInput from './MaterialTextInput'
import React from 'react'

export default class MaterialNumericRangeBox extends NumericRangeBox {
	createTextBox() {
		this.separatorText = 'to '
		const mti = new MaterialTextInput()

		mti.percentWidth = '40%'

		return mti
	}

	createSeparator() {
		return (
			<span key="sep" style={{ padding: '5px', minWidth: '10px' }}>
				{'--'}
			</span>
		)
	}
}
