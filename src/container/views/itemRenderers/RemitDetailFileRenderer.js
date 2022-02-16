import React from 'react'
import reportpng from '../../../assets/images/report_go.png'


class RemitDetailFileRenderer extends React.Component{
    render(){
        return(
            <div>
                {this.props.row.getData().xremitCoreTracking.xhubTransmission && <img alt='reportpng' src={reportpng} />}
                <span id="lbl" style={{color:'#712464', cursor:'pointer'}} onClick={(e) => {this.props.column.handleFileName(e, this.props.row.getData().xremitCoreTracking.xhubTransmission.fileId, false)}}> {this.props.row.getData().xremitCoreTracking.xhubTransmission && this.props.row.getData().xremitCoreTracking.xhubTransmission.xmitFileName}</span>
            </div>
        )
    }
}

export default RemitDetailFileRenderer