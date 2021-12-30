import React from 'react'
import CustomColorButton from './CustomColorButton'

class ReDeliverRenderer extends React.Component{
    render(){
        return(
            <div style={{ display:'flex', flexDirection:'row', justifyContent:'center', margin:'2px'}}>
                <CustomColorButton id='reSubmit' style={{height:'20px', width:'65px'}}>Deliver</CustomColorButton>
            </div>
        )
    }
}

export default ReDeliverRenderer