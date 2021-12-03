/* eslint-disable no-unused-vars */
import React from 'react'
import './styles.scss'
import Montefiore from '../../../../../../../../assets/images/Montefiore.gif'
import { toast } from 'react-toastify'
import preval from 'preval.macro'
import { Checkbox, Typography } from '@material-ui/core'
import TextFeildComponent from '../../../../../../../../shared/components/TextFeildComponent'
import ButtonComponent from '../../../../../../../../shared/components/ButtonComponent'
import { EventDispatcher } from '../../../../../../../../flexicious'
import ComboBox from '../../../../../../../../shared/components/ComboBox'

class Login extends EventDispatcher {
	constructor() {
		super()
		this._selServ = null
		this.state = {
			error: {
				username: false,
				password: false
			},
			username: '',
			password: '',
			serviceArea: [],
			selectedIndex: 1,
			checkBox: false,
			passwordVisiblity: 'password'
		}
	}

	get selServ(){
		return this._selServ;
	}

	handleChangeTxt = event => {
		this.setState({
			[event.target.id]: event.target.value,
			error: {
				...this.state.error,
				[event.target.id]: event.target.value === ''
			}
		})
	}

	emptyField = () => {
		toast.warning('username or password cannot be empty!!')
	}

	handleKeyUp = event => {
		if (event.keyCode === 13) {
			event.preventDefault()
			document.getElementById('loginBtn').click()
		}
	}

	handleChangeServiceArea = event => {
		this.setState({ selectedIndex: event.target.value })
	}

	findServiceAreaLabel = item => {
		var lbl = ''
		if (item != null) lbl = item.id.facilityId + ' - ' + item.serviceAreaName
		return lbl
	}

	showPassword = () => {
		debugger
		if (this.state.checkBox) {
			this.setState({ checkBox: false })
			this.setState({ passwordVisiblity: 'password' })
		} else {
			this.setState({ checkBox: true })
			this.setState({ passwordVisiblity: 'text' })
		}
	}

	changeHandler = (event) => {
		debugger
		toast.warning("Need to implement changeHandler")
		// this._selServ = event.target.selectedItem.id.serviceAreaId
	}

	render() {
		const { username, password, error } = this.state
		return (
			<div className="login-root-container">
				<div className="login-child-container" data-text="Reflection">
					<div onKeyUp={e => this.handleKeyUp(e)} className="login-continer-2">
						<div className="login-title-logo">
							<img id="montefiore" alt="Montefiorelogo" src={Montefiore} style={{ height: '30px' }} />
						</div>{' '}
						&nbsp;
						<div className="textfield">
							<Typography variant="body2" display="block" gutterBottom>
								<span className="fonts">User Name :</span>
							</Typography>
							<TextFeildComponent id="username" type="text" style={{ width: '307px' }} value={username} onChange={this.handleChangeTxt} error={error.username} />
						</div>
						<div className="passwordfield">
							<Typography variant="body2" display="block" gutterBottom>
								<span className="fonts">Password :</span>
							</Typography>
							<TextFeildComponent id="password" type={this.state.passwordVisiblity} style={{ width: '307px' }} value={password} onChange={this.handleChangeTxt} error={error.password} />
						</div>
						<div className="comboBox-field">
							<Typography variant="body2" display="block" gutterBottom>
								<span className="fonts">Service Area :</span>
							</Typography>
							<ComboBox name="serviceArea" id="serviceArea" onChange={(event) => this.changeHandler(event)} /> 
							{/* width="200" labelFunction="findServiceAreaLabel" selectedIndex="0" */}
						</div>
						<div style={{ display: 'flex', padding: '5px', width: '140px' }}>
							{/* <Checkbox id="showPassword" color={"primary"} onClick={this.showPassword} value={this.state.checkBox} /> &nbsp; <span style={{ fontSize: "smaller" }}> Show Password? </span> */}
							<input type="checkbox" id="showPassword" cstyle={{ height: '15px', width: '15px' }} onClick={this.showPassword} value={this.state.checkBox} />
							&nbsp; <span style={{ fontSize: 'smaller' }}> Show Password? </span>
						</div>
						<div className="login-button">
							<ButtonComponent id="signInButton" label="Login" />
						</div>
						{/* <p className="versionField">Version 2.0, Content © 2021, MIT .All rights reserved. Build Date: {preval`module.exports = new Date().toLocaleString();`}.</p> */}
					</div>
				</div>
			</div>
		)
	}
}

export default Login
