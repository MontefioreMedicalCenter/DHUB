import React from "react";

class EFTFileNameRenderer extends React.Component{
    render(){
        return(
            <div style={{margin: '5px'}}>
                <span id="lbl" selectable="true" style={{color:'#712464', cursor:'pointer'}} onClick={() => this.props.column.handleViewFile(this.props.row.getData().instanceId , false)}>{this.props.row.getData().sourceFilename}</span>
            </div>
        )
    }
}

export default EFTFileNameRenderer