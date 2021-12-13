import { Checkbox } from '@material-ui/core'
import React from 'react'


class ActiveitemRenderer extends React.Component {
    activatePoll = (e) => {
        this.props.column.handleActivatePoll(e, this.props)
    }
    render() {
        return (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Checkbox
                    id="activeChk"
                    onClick={(e) => this.activatePoll(e)}
                    checked={this.props.row.getData().activeFlag === 'Y' ? true : false}
                />
            </div>
        )
    }
}

export default ActiveitemRenderer