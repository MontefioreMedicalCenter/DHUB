import { Tooltip } from '@material-ui/core'
import React from 'react'
//import reportpng from '../../../assets/images/report_go.png'

class ErrorFileRenderer extends React.Component {
    handleOnClick = (error, dataField) => {
        console.log('Inside ErrorFileRenderer.js handleOnClick(). The dataField is: ' , dataField)
        console.log('Inside ErrorFileRenderer.js handleOnClick(). The error is: ' , error)
        var withPublishButton: Boolean = false
        var msgContent: string =''
        if (dataField === 'userProps'){
            withPublishButton = true
            msgContent = error.userProps
        }else if (dataField === 'errorMessage'){
            msgContent = error.errorMessage
        }else if (dataField === 'stackTrace'){
            msgContent = error.stackTrace
        }
        console.log('Inside ErrorFileRenderer.js handleOnClick(). The msgContent is: ' , msgContent)
        this.props.column.handleFileName(msgContent, withPublishButton)
        this.props.grid.props.parentDocument.setState({
            errorLog: true,
            msg: msgContent,
            errorId: error.id.errorId,
            withPublish: withPublishButton
        })  
        console.log('Inside ErrorFileRenderer.js handleOnClick(). The msg is: ' , this.props.grid.props.parentDocument.state.msg)
    }
    render() {
        return (
            <div style={{display:"flex", flexDirection:"row", padding:'3px', columnGap:'5px'}}>
                {/*<Tooltip title="Click to view report">
                 <img  id="infoIcon" alt='file' src={reportpng} onClick={() => this.handleOnClick(this.props.row.getData().id.fileId, true)}/>
                 </Tooltip>
                */}
                 <span id="lbl" selectable="true" style={{color:'#712464', cursor:'pointer', textDecoration:'underline'}} onClick={() => this.handleOnClick(this.props.row.getData(), this.props.column.dataField)}>{this.props.row.getData().errorMessage}</span> 
            </div>
        )
    }
}

export default ErrorFileRenderer