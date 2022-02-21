import React from 'react'

class AckReportContainer extends React.Component{
    constructor(){
        super()
        this.state = {
            ackContent:''
        }
    }
    render(){
        return(
            <div style={{height:'800px', width: '1143px'}}>
                <textarea ref={g => (this.ackContent = g)} id="ackContent" name="ackContent" value={this.state.ackContent} onChange={e => this.setState({ ackContent: e.target.value })} style={{ height: '736px', width: '1125px', margin: '4px', resize: 'none' }} />
            </div>
        )
    }
}

export default AckReportContainer