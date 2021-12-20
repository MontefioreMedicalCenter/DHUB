import React from 'react'
import CustomColorButton from './CustomColorButton';
class PollitemRenderer extends React.Component {
    deliver = (e) => {
        this.props.column.handleDeliver(e, this.props)
    }
    render() {
        return (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '2px' }}>
                <CustomColorButton id="poll" variant="contained" style={{ height: '20px', width: '80px' }} onClick={(e) => this.deliver(e)}>Deliver</CustomColorButton>
            </div>
        )
    }
}

export default PollitemRenderer