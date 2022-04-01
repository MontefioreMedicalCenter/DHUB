import { Tooltip } from '@material-ui/core'
import React from 'react'
import reportpng from '../../../assets/images/report_go.png'

class RemitsFileNameRenderer extends React.Component {
    handleOnClick = (fileId, reportOnly) => {
        this.props.column.handleFileName(fileId, reportOnly)
        this.props.grid.props.parentDocument.setState({
            selectedColumnFileId: fileId,
        })
    }
    render() {
        return (
            <div style={{display:"flex", flexDirection:"row", padding:'3px', columnGap:'5px'}}>
                <Tooltip title="Click to view report">
                 <img  id="infoIcon" alt='file' src={reportpng} onClick={() => this.handleOnClick(this.props.row.getData().id.fileId, true)}/>
                </Tooltip>
                 <span id="lbl" selectable="true" style={{color:'#712464', cursor:'pointer', textDecoration:'underline'}} onClick={() => this.handleOnClick(this.props.row.getData().id.fileId, false)}>{this.props.row.getData().filename}</span>
            </div>
        )
    }
}

export default RemitsFileNameRenderer