import React from 'react'

class StagedLinkRender extends React.Component {

    onMouseOver = (e) => {
        e.target.style.color = 'rgb(21, 27, 141)'
        e.target.style.fontFamily = 'tahoma'
        e.target.style.textDecoration = 'underline'
        e.target.style.fontWeight = 'bold'
    }

    onMouseOut = (e) => {
        e.target.style.color = '#000000'
        e.target.style.fontFamily = 'tahoma'
        e.target.style.textDecoration = 'none'
        e.target.style.fontWeight = 'normal'
    }

    viewStagedFiles = () => {
        this.props.column.handleViewStagedFiles(this.props)
    }


    render() {
        return (
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', padding: '5px' }}>
                <span className='text' id="lbl" style={{ cursor: 'pointer', color: '#000000', textDecoration: 'none', fontFamily: 'tahoma', }} onMouseOver={this.onMouseOver} onMouseOut={this.onMouseOut} onClick={this.viewStagedFiles}>View Staged Files</span>
            </div>
        )
    }
}

export default StagedLinkRender