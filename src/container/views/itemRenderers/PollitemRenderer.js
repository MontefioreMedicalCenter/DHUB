import React from 'react'
import CustomColorButton from './CustomColorButton';

class PollitemRenderer extends React.Component {
    poll = (e) => {
        this.props.column.handlePoll(e, this.props)
    }
    render() {
        return (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '2px' }}>
                <CustomColorButton id="poll" variant="contained" style={{ height: '20px', width: '80px' }} onClick={(e) => this.poll(e)}>Poll</CustomColorButton>
            </div>
        )
    }
}

export default PollitemRenderer