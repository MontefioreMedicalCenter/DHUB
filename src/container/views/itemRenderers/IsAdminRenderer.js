import { Checkbox } from '@material-ui/core'
import React from 'react'
import { Green, Red } from './ColorCheckBox'

class IsAdminRenderer extends React.Component{
    activateRole0 = (e) => {
        this.props.column.handleActivateRole0(e, this.props)
    }
    render(){
        return(
            <div style={{ display: 'flex', height: '100%', justifyContent: 'center' }}>
                <Checkbox 
                id="activeChk"
                checkedIcon={this.props.row.getData().activeFlag === 'Y' ? <Green /> : <Red />}
                icon={this.props.row.getData().activeFlag === 'N' ? <Red /> : <Green />}
                onClick={e => this.activateRole0(e)}
                checked={this.props.column.parentDocument.hasRole(this.props, 'Admin')}
                disabled={this.props.column.parentDocument.hasRole(this.props, 'Admin')}
                />
            </div>
        )
    }
}

export default IsAdminRenderer