import { Paper } from '@material-ui/core'
import React from 'react'
import { EventDispatcher } from '../../../../../../../../../flexicious'

class ErrorLog extends EventDispatcher {
    render() {
        return (
            <Paper style={{ background: 'linear-gradient(to left, white, #c0cec6, white, #c0cec6, white, #c0cec6, white, #c0cec6, white)', height: "750px", marginTop: "5px" }}>
                Need To Implement ErrorLog
            </Paper>
        )
    }
}

export default ErrorLog