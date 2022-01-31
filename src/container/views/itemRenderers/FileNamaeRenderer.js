import { Tooltip } from '@material-ui/core'
import React from 'react'
import reportpng from '../../../assets/images/report_go.png'

class FileNamaeRenderer extends React.Component {
    render() {
        return (
            <div style={{ margin: "5px", cursor:"pointer"}}>
                <Tooltip title="Report Error">
                    <img  id="infoIcon" alt='file' src={reportpng} />
                </Tooltip>
            </div>
        )
    }
}

export default FileNamaeRenderer