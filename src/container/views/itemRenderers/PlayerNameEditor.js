import React from 'react'
import { UIComponent } from '../../../flexicious'
import ComboBox from '../../../shared/components/ComboBox'

class PlayerNameEditor extends React.Component{

    cbxState_changeHandler = event => {
        this.props.grid.getCurrentEditingCell().rowInfo.getData().financialClass = event.target.value
        this.props.cell.refreshCell()
        const container = this.props.cell.getGrid().getBodyContainer()
        if (container._inEdit) {
            container.endEdit(container.getEditor())
        }
    }
    render(){
        return(
            <div>
                <ComboBox labelKey="payerName" valueKey="payerName" onChange={this.cbxState_changeHandler} comboBoxStyle={{ height: '21px', width: '100px' }}/>
            </div>
        )
    }
}

class EditorWrapper extends UIComponent {
	render() {
		const cell = this.cell
		const cellProps = {
			cell: cell,
			row: cell.rowInfo,
			column: cell._column,
			level: cell.level,
			grid: cell.level.grid
		}
		this.children = [<PlayerNameEditor {...cellProps} />]
		return super.render()
	}
}
PlayerNameEditor.editorWrapper = EditorWrapper
export default PlayerNameEditor
