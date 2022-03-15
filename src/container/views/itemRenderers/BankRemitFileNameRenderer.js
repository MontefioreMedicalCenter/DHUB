import React from 'react'

class BankRemitFileNameRenderer extends React.Component{
    render(){
        return(
            <div style={{padding: '5px', display: 'flex', alignItems: 'center', justifyContent: 'end'}}>
                <span id="lbl" selectable="true" style={{color:'#712464', cursor:'pointer'}} onClick={() => this.props.column.handleViewFile(this.props.row.getData().fileId, false)}>{this.props.row.getData().xmitFileName}</span>
            </div>
        )
    }
}

export default BankRemitFileNameRenderer