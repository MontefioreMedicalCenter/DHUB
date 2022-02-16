import React from 'react'
import reportpng from '../../../assets/images/report_go.png'


class FileNameRenderer extends React.Component{
    render(){
        return(
            <div>
                {this.props.row.getData().xhubTransmission && <img alt='reportpng' src={reportpng} />}
                <span id="lbl" style={{color:'#712464', cursor:'pointer'}} onClick={(e) => {this.props.column.handleFileName(e, this.props.row.getData().xhubTransmission.fileId, false)}}> {this.props.row.getData().xhubTransmission && this.props.row.getData().xhubTransmission.xmitFileName}</span>
            </div>
        )
    }
}

export default FileNameRenderer