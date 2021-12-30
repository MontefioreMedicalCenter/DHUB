import { Button } from '@material-ui/core'
import React from 'react'
import deleteicon from '../../../assets/images/delete.png'

class DeleteErrorLogRenderer extends React.Component{

    onErrorDelete = () => {
        this.props.column.handleRemove(this.props)
    }
    render(){
        return(
            <div>
                <Button onClick={this.onErrorDelete}><img src={deleteicon} alt='delete'/></Button>
            </div>
        )
    }
}

export default DeleteErrorLogRenderer