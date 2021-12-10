import { Button, styled } from '@material-ui/core';
import React from 'react'

const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText("#cec0c0"),
    backgroundColor: "#e0693f",
    '&:hover': {
      backgroundColor: "#C13504",
    },
  }));

class BrowseRenderer extends React.Component{
    browse = (e) => {
        this.props.column.handleBrowse(e, this.props)
    }
    render(){
        return(
            <div style={{display:'flex', flexDirection:'column', alignItems:'center', marginTop:'5px', marginBottom:'3px'}}>
                <ColorButton variant="contained" style={{height:'25px', width: '100px'}} onClick={(e) => this.browse(e)} >Browse</ColorButton>
            </div>
        )
    }
}

export default BrowseRenderer