/* eslint-disable no-unused-vars */
import React from 'react'
import './styles.scss'
import TextFeildComponent from '../../../../../shared/components/TextFeildComponent'
import ButtonComponent from '../../../../../shared/components/ButtonComponent'
import Montefiore from '../../../../../assets/images/Doing-More-Logo.jpg'
import { toast } from 'react-toastify'
import preval from 'preval.macro'
import { EventDispatcher } from '../../../../../flexicious'
import { Typography } from '@material-ui/core'

class Login extends EventDispatcher {
	constructor() {
		super()
		this.state = {
			error: {
				username: false,
				password: false
			},
			username: '',
			password: '',
			serviceArea: [],
			selectedIndex: 1
		}
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

	render() {
		const { username, password, error } = this.state
		return (
			<div className="login-root-container">
				<div className="login-child-container">
					<div onKeyUp={e => this.handleKeyUp(e)} className="login-continer-2">
						<div className="login-title-logo">
							<img id="montefiore" alt="Montefiorelogo" src={Montefiore} style={{ height: '40px' }} />
						</div>{' '}
						&nbsp;
						<div className="textfield">
							<Typography variant="body2" display="block" gutterBottom>
								User Name :
							</Typography>
							<TextFeildComponent id="username" type="text" value={username} onChange={this.handleChangeTxt} error={error.username} />
						</div>
						<div className="passwordfield">
							<Typography variant="body2" display="block" gutterBottom>
								Password :
							</Typography>
							<TextFeildComponent id="password" type="password" value={password} onChange={this.handleChangeTxt} error={error.password} />
						</div>
						<div className="login-button">
							<ButtonComponent id={'loginBtn'} />
						</div>
						<p className="versionField">Version 2.0, Content © 2021, MIT .All rights reserved. Build Date: {preval`module.exports = new Date().toLocaleString();`}.</p>
					</div>
				</div>
			</div>
		)
	}
}

export default Login
