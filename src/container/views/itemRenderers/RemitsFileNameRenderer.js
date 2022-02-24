import { Tooltip } from '@material-ui/core'
import React from 'react'
import reportpng from '../../../assets/images/report_go.png'

class RemitsFileNameRenderer extends React.Component {
    render() {
        return (
            <div>
                <Tooltip title="Click to view report">
                 <img  id="infoIcon" alt='file' src={reportpng} onClick={() => this.props.column.handleFileName(this.props.row.getData().id.fileId, true)}/>
                </Tooltip>
                 <span id="lbl" selectable="true" style={{color:'#712464', cursor:'pointer'}} onClick={() => this.props.column.handleFileName(this.props.row.getData().id.fileId, false)}>{this.props.row.getData().filename}</span>
            </div>
        )
    }
}

export default RemitsFileNameRenderer