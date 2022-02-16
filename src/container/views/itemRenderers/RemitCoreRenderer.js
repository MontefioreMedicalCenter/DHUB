import React from 'react'

class RemitCoreRenderer extends React.Component {

    linkMouseOver = (e) => {
        e.target.style.fontFamily = 'Calibri'
        e.target.style.color = '#000000'
        e.target.style.fontWeight = 'bold'
    }

    linkMouseOut = (e) => {
        e.target.style.fontFamily = 'Calibri'
        e.target.style.color = '#357dae'
        e.target.style.fontWeight = 'bold'
        e.target.style.textDecoration = 'underline'
    }

    render(){
        return(
            <div>
                <span id="lbl" style={{color:'#712464', cursor:'pointer'}} onMouseOver={this.linkMouseOver} onMouseOut={this.linkMouseOut} onClick={(e) => this.props.column.handleClick(e, this.props.row.getData())}>Detail</span>
            </div>
        )
    }
}

export default RemitCoreRenderer