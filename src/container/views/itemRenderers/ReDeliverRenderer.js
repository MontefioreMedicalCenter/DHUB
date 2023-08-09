import React from 'react'
import CustomColorButton from './CustomColorButton'

class ReDeliverRenderer extends React.Component{

    onRedeliver = () =>{
        this.props.column.handleRedeliver(this.props)
    }
    render(){
        return(
            <div style={{ display:'flex', flexDirection:'row', justifyContent:'center', margin:'2px'}}>
                <CustomColorButton id='reSubmit' style={{height:'20px', width:'65px'}} onClick={this.onRedeliver}>Deliver</CustomColorButton>
            </div>
        )
    }
}

export default ReDeliverRenderer