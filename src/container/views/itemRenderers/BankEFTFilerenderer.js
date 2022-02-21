import { Tooltip } from '@material-ui/core';
import React from 'react';
import FileImg from '../../../assets/images/report_go.png'

class BankEFTFilerenderer  extends React.Component {

    render(){
        const data = this.props.row.getData()
        return (
            <div style={{width: '100%', height: '100%', display: 'flex', alignItems: 'center', columnGap: '5px'}}>
                <Tooltip title="Click to view report"><img src={FileImg} alt="file" onClick={() => this.props.column.viewFile(data.id.fileId, true)}/></Tooltip>
                <span style={{textDecoration: 'underline', color: '#712464', cursor: 'pointer'}} onClick={() => this.props.column.viewFile(data.id.fileId, false)}>{data.filename}</span>
            </div>
        )
    }
}

export default BankEFTFilerenderer