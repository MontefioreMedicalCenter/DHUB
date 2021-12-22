import { Button } from '@material-ui/core'
import React from 'react'
import userDrop from '../../../assets/images/User Drop.png'

class DeleteUser extends React.Component {
    deleteUser0 = (e) => {
        this.props.column.handleDeleteUser0(e, this.props)
    }
    render() {
        return(
            <div style={{ display: 'flex', height: '100%', justifyContent: 'center' }}>
                <Button onClick={(e)=>{this.deleteUser0(e)}}><img src={userDrop} alt='userDrop' style={{ cursor: 'pointer'}}/></Button>
            </div>
        )
    }
}

export default DeleteUser
