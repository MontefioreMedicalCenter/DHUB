import React from "react";

class RemitFileNameRenderer extends React.Component{
    render(){
        return(
            <div style={{margin: '5px'}}>
                <span id="lbl" selectable="true" style={{color:'#712464', cursor:'pointer'}} onClick={() => this.props.column.handleViewFile835(this.props.row.getData().coreInstanceId, false)}>{this.props.row.getData().remitFilename}</span>
            </div>
        )
    }
}

export default RemitFileNameRenderer