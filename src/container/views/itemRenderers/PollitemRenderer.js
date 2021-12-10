import { Button, styled } from '@material-ui/core';
import React from 'react'
// import { toast } from 'react-toastify';

const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText("#cec0c0"),
    backgroundColor: "#e0693f",
    '&:hover': {
        backgroundColor: "#C13504",
    },
}));

class PollitemRenderer extends React.Component {
    poll = (e) => {
        this.props.column.handlePoll(e, this.props)
    }
    render() {
        return (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '5px', marginBottom: '3px' }}>
                <ColorButton id="poll" variant="contained" style={{ height: '25px', width: '80px' }} onClick={(e) => this.poll(e)}>Poll</ColorButton>
            </div>
        )
    }
}

export default PollitemRenderer