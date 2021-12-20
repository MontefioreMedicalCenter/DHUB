import React from 'react'
import CustomColorButton from './CustomColorButton';
class BrowseRenderer extends React.Component{
    browse = (e) => {
        this.props.column.handleBrowse(e, this.props)
    }
    render(){
        return(
            <div style={{display:'flex', flexDirection:'column', alignItems:'center', margin:'2px'}}>
                <CustomColorButton variant="contained" style={{height:'20px', width: '100px'}} onClick={(e) => this.browse(e)} >Browse</CustomColorButton>
            </div>
        )
    }
}

export default BrowseRenderer