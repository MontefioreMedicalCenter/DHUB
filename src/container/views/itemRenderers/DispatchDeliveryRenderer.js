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
    deliver = (e) => {
        this.props.column.handleDeliver(e, this.props)
    }
    render() {
        return (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '2px' }}>
                <ColorButton id="poll" variant="contained" style={{ height: '20px', width: '80px' }} onClick={(e) => this.deliver(e)}>Deliver</ColorButton>
            </div>
        )
    }
}

export default PollitemRenderer