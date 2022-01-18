import { Checkbox } from '@material-ui/core'
import React from 'react'
import { Green, Red } from './ColorCheckBox'

class HasEFTRenderer extends React.Component{
    activateRole0 = (e) => {
        this.props.column.handleActivateRole0(e, this.props)
    }
    render(){
        return(
            <div style={{ display: 'flex', height: '100%', justifyContent: 'center' }}>
                <Checkbox 
                id="activeChk"
                checkedIcon={this.props.column.parentDocument.hasRole(this.props, 'Bank EFT') === true ? <Green /> : <Red />}
                icon={this.props.column.parentDocument.hasRole(this.props, 'Bank EFT') === false ? <Red /> : <Green />}
                onClick={e => this.activateRole0(e)}
                checked={this.props.column.parentDocument.hasRole(this.props, 'Bank EFT')}
                disabled={this.props.column.parentDocument.hasRole(this.props, 'Admin')}
                />
            </div>
        )
    }
}

export default HasEFTRenderer