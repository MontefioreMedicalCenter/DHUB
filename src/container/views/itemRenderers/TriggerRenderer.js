import React from 'react'
import CustomColorButton from './CustomColorButton'

class TriggerRenderer extends React.Component{

    poll = (e) =>{
        this.props.column.handlePoll(e, this.props)
    }
    render(){
        return(
            <div style={{display:'flex', flexDirection:'row', justifyContent:'center', margin:'2px'}}>
                <CustomColorButton id="combine" label="Trigger" style={{ height: '20px', width: '80px' }} onClick={(e) => this.poll(e)}>Trigger</CustomColorButton>
            </div>
        )
    }
}

export default TriggerRenderer