import { TextField, withStyles } from '@material-ui/core'
import React from 'react'
import CustomColorButton from '../../../../../../../../../container/views/itemRenderers/CustomColorButton';
import { EventDispatcher } from '../../../../../../../../../flexicious';
import './addNewUser.scss'
import saveB from '../../../../../../../../../assets/images/saveB.png'
import { ManageUserEvent } from '../../../model/events/ManageUserEvent.ts';
import { AddUserMediator } from '../../AddUserMediator.ts';
import { toast } from 'react-toastify';


const styles = {
    input1: {
        right: "70px",
        height: "35px",
        padding: "0px",
        fontSize: "13px",
        marginLeft: "5px"
    }
};
class AddUser extends EventDispatcher {
    constructor() {
        super()
        this.state = {
            userId: '',
            firstname: '',
            lastName: '',
            address1: '',
            address2: '',
            city: '',
            stateCity: '',
            zip: '',
            phone: '',
            email: '',
            erroruserId : false,
            errorfirstName : false,
            errorUserLastName : false,
            errorUserAddress1 : false,
            errorUserAddress2 : false,
            errorUserCity : false,
            errorUserState : false,
            errorUserZip : false,
            errorUserPhone : false,
            errorUserEmail : false
        }
        this._facL = []
        this._serL = []
    }

    componentDidMount() {
        this.mediator = new AddUserMediator().onRegister(this)
    }

    componentWillUnmount() {
        this.mediator.onUnRegister()
    }

    set facL(val) {
        this._facL = val;
    }

    set serL(val) {
        this._serL = val;
    }

    saveClick = () => {
        var case_regex = /[A-Z]/;
        if (case_regex.test(this.usernameValidatorSource())) {
            toast.warning("Please type in only the lower-case letters for the user Id !")
        } else {
            this.dispatchEvent(new ManageUserEvent(ManageUserEvent.SAVE_USER));
        }
    }

    usernameValidatorSource = () => {
        return document.getElementById('userId').value;
    }

    render() {
        return (
            <div>
                <div className="add-user-containers">
                    <div style={{ overflow: "auto" }}>
                        <div style={{ flexDirection: "column", justifyContent: "center", display: "flex", overflow: "auto", alignItems: "center" }}>
                            <div className="container-space" style={{ marginLeft: "24px" }}>
                                User Id : <TextField
                                    id="userId"
                                    variant="outlined"
                                    value={this.state.userId}
                                    onChange={e => this.setState({ userId: e.target.value })}
                                    error={this.state.erroruserId}
                                    autoComplete='off'
                                    InputProps={{ classes: { input: this.props.classes.input1 } }}
                                    style={{ width: "200px", marginLeft: "10px" }}
                                />
                            </div>
                            <div className="container-space" style={{ marginLeft: "24px" }}>
                                First Name : <TextField
                                    id="firstname"
                                    variant="outlined"
                                    value={this.state.firstname}
                                    onChange={e => this.setState({ firstname: e.target.value })}
                                    error={this.state.errorfirstName}
                                    autoComplete='off'
                                    InputProps={{ classes: { input: this.props.classes.input1 } }}
                                    style={{ width: "200px", marginLeft: "10px" }}
                                />
                            </div>
                            <div className="container-space" style={{ marginLeft: "24px" }}>
                                Last Name : <TextField
                                    id="lastName"
                                    variant="outlined"
                                    value={this.state.lastName}
                                    onChange={e => this.setState({ lastName: e.target.value })}
                                    error={this.state.errorUserLastName}
                                    autoComplete='off'
                                    InputProps={{ classes: { input: this.props.classes.input1 } }}
                                    style={{ width: "200px", marginLeft: "10px" }}
                                />
                            </div>
                            <div className="container-space" style={{ marginLeft: "24px" }}>
                                User Address : <TextField
                                    id="address1"
                                    variant="outlined"
                                    value={this.state.address1}
                                    onChange={e => this.setState({ address1: e.target.value })}
                                    error={this.state.errorUserAddress1}
                                    autoComplete='off'
                                    InputProps={{ classes: { input: this.props.classes.input1 } }}
                                    style={{ width: "200px", marginLeft: "10px" }}
                                />
                            </div>
                            <div className="container-space" style={{ marginLeft: "24px" }}>
                                User Address : <TextField
                                    id="address2"
                                    variant="outlined"
                                    value={this.state.address2}
                                    onChange={e => this.setState({ address2: e.target.value })}
                                    error={this.state.errorUserAddress2}
                                    autoComplete='off'
                                    InputProps={{ classes: { input: this.props.classes.input1 } }}
                                    style={{ width: "200px", marginLeft: "10px" }}
                                />
                            </div>
                            <div className="container-space" style={{ marginLeft: "24px" }}>
                                City : <TextField
                                    id="city"
                                    variant="outlined"
                                    value={this.state.city}
                                    onChange={e => this.setState({ city: e.target.value })}
                                    error={this.state.errorUserCity}
                                    autoComplete='off'
                                    InputProps={{ classes: { input: this.props.classes.input1 } }}
                                    style={{ width: "200px", marginLeft: "10px" }}
                                />
                            </div>
                            <div className="container-space" style={{ marginLeft: "24px" }}>
                                State : <TextField
                                    id="state"
                                    variant="outlined"
                                    value={this.state.stateCity}
                                    onChange={e => this.setState({ stateCity: e.target.value })}
                                    error={this.state.errorUserState}
                                    autoComplete='off'
                                    InputProps={{ classes: { input: this.props.classes.input1 } }}
                                    style={{ width: "200px", marginLeft: "10px" }}
                                />
                            </div>
                            <div className="container-space" style={{ marginLeft: "24px" }}>
                                ZIP : <TextField
                                    id="zip"
                                    variant="outlined"
                                    value={this.state.zip}
                                    onChange={e => this.setState({ zip: e.target.value })}
                                    error={this.state.errorUserZip}
                                    autoComplete='off'
                                    InputProps={{ classes: { input: this.props.classes.input1 } }}
                                    style={{ width: "200px", marginLeft: "10px" }}
                                />
                            </div>
                            <div className="container-space" style={{ marginLeft: "24px" }}>
                                Phone : <TextField
                                    id="phone"
                                    variant="outlined"
                                    value={this.state.phone}
                                    onChange={e => this.setState({ phone: e.target.value })}
                                    error={this.state.errorUserPhone}
                                    autoComplete='off'
                                    InputProps={{ classes: { input: this.props.classes.input1 } }}
                                    style={{ width: "200px", marginLeft: "10px" }}
                                />
                            </div>
                            <div className="container-space" style={{ marginLeft: "24px" }}>
                                Email : <TextField
                                    id="email"
                                    variant="outlined"
                                    value={this.state.email}
                                    onChange={e => this.setState({ email: e.target.value })}
                                    error={this.state.errorUserEmail}
                                    autoComplete='off'
                                    InputProps={{ classes: { input: this.props.classes.input1 } }}
                                    style={{ width: "200px", marginLeft: "10px" }}
                                />
                            </div>
                            <div className="container-space">
                                <CustomColorButton
                                    id="save"
                                    variant="contained"
                                    size="large"
                                    onClick={this.saveClick}
                                    style={{ width: '100px', maxWidth: '100px', height: '30px', fontSize: 'xx-small', justifyContent: 'space-between', display: 'flex' }}
                                >
                                    <img src={saveB} alt="saveB" />
                                    Save
                                </CustomColorButton>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(AddUser)