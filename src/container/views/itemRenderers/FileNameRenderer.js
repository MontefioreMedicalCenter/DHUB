import React from 'react'
import reportpng from '../../../assets/images/report_go.png'


class FileNameRenderer extends React.Component{
    render(){
        return(
            <div>
                {this.props.row.getData() && <img alt='reportpng' src={reportpng} />}
                <span id="lbl" style={{color:'#712464', cursor:'pointer'}} onClick={(e) => {this.props.column.handleFileName(e, this.props.row.getData().fileId, false)}}> {this.props.row.getData() && this.props.row.getData().xmitFileName}</span>
            </div>
        )
    }
}

export default FileNameRenderer