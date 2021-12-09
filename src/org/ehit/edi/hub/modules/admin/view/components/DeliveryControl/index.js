import { Paper } from '@material-ui/core'
import React from 'react'
import { EventDispatcher } from '../../../../../../../../../flexicious'

class DeliveryControl extends EventDispatcher {
    render() {
        return (
            <Paper style={{ background: 'linear-gradient(to left, white, #c0cec6, white, #c0cec6, white, #c0cec6, white, #c0cec6, white)', height: "750px", marginTop: "5px" }}>
                Need To Implement DeliveryControl
            </Paper>
        )
    }
}

export default DeliveryControl