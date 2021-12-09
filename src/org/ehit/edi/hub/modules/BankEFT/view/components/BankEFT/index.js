import { Paper } from '@material-ui/core'
import React from 'react'
import { EventDispatcher } from '../../../../../../../../../flexicious'

class BankEFT extends EventDispatcher {
    render() {
        return (
            <Paper style={{ background: 'linear-gradient(to left, white, #c0cec6, white, #c0cec6, white, #c0cec6, white, #c0cec6, white)', height: "calc(100% - 5px)", marginTop: "5px" }}>
                Need To Implement BankEFT
            </Paper>
        )
    }
}

export default BankEFT