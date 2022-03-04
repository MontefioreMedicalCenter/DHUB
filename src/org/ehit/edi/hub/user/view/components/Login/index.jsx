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
import { LoginMediator } from '../../LoginMediator.ts'
import { LoginEvent } from '../../../model/events/LoginEvent.ts'
import EdiUser from '../../../model/vo/EdiUser.ts'
import LoaderBar from '../../../../../../../../shared/components/LoaderBar'

const VALIDATOR_PROPERTY = ''
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
			checkBox: true,
			passwordVisiblity: 'password',
			serviceAreaValue: ''
		}
	}

	get selServ() {
		return this._selServ
	}

	get usernameValidatorSource() /** :IValidatorListener*/ {
		return this.state.username
	}

	get passwordValidatorSource() /** :IValidatorListener*/ {
		return this.state.password
	}

	get usernameValidatorProperty() /** :String*/ {
		return VALIDATOR_PROPERTY
	}

	get passwordValidatorProperty() /** :String*/ {
		return VALIDATOR_PROPERTY
	}

	componentDidMount() {
		this.mediator = new LoginMediator()
		this.mediator.onRegister(this)
	}

	resetFocus() /** :void*/ {
		this.state.username.setFocus()
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

	loginUser = event => {
		if (this.state.username === '' || this.state.password === '' || this.state.selectedIndex === '') {
			this.emptyField()
		}
		if (this.state.username && this.state.password) {
			var user = new EdiUser(this.state.username, this.state.password)
			this.dispatchEvent(new LoginEvent(LoginEvent.LOGIN, user))
		}
	}

	handleKeyUp = event => {
		if (event.keyCode === 13) {
			event.preventDefault()
			document.getElementById('signInButton').click()
		}
	}

	handleChangeServiceArea = event => {
		this.setState({ selectedIndex: event.target.value })
	}

	showPassword = () => {
		if (this.state.checkBox) {
			this.setState({ checkBox: false })
			this.setState({ passwordVisiblity: 'text' })
		} else {
			this.setState({ checkBox: true })
			this.setState({ passwordVisiblity: 'password' })
		}
	}

	changeHandler = event => {
		this._selServ = event.target.value
		this.setState({ serviceAreaValue: event.target.value })
	}

	render() {
		const { error, serviceArea } = this.state
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
							<TextFeildComponent id="username" type="text" style={{ width: '307px' }} value={this.state.username} onChange={this.handleChangeTxt} error={error.username} />
						</div>
						<div className="passwordfield">
							<Typography variant="body2" display="block" gutterBottom>
								<span className="fonts">Password :</span>
							</Typography>
							<TextFeildComponent id="password" type={this.state.passwordVisiblity} style={{ width: '307px' }} value={this.state.password} onChange={this.handleChangeTxt} error={error.password} onBlur={this.loginUser} />
						</div>
						<div className="comboBox-field">
							<Typography variant="body2" display="block" gutterBottom>
								<span className="fonts">Service Area :</span>
							</Typography>
							<ComboBox name="serviceArea" id="serviceArea" valueKey="label" labelKey="label" dataProvider={serviceArea} onChange={event => this.changeHandler(event)} value={this.state.serviceAreaValue} />
						</div>
						<div style={{ display: 'flex', padding: '5px', width: '140px' }}>
							<input type="checkbox" id="showPassword" cstyle={{ height: '15px', width: '15px' }} onClick={this.showPassword} value={this.state.checkBox} />
							&nbsp; <span style={{ fontSize: 'smaller' }}> Show Password? </span>
						</div>
						<div className="login-button">
							<ButtonComponent id="signInButton" label="Login" onClick={() => this.mediator.onServiceArea()} />
						</div>
						{/* <p className="versionField">Version 2.0, Content © 2021, MIT .All rights reserved. Build Date: {preval`module.exports = new Date().toLocaleString();`}.</p> */}
					</div>
				</div>
				<div>
					<LoaderBar />
				</div>
			</div>
		)
	}
}

export default Login
