import React, { useEffect, useRef, useState } from 'react'
import './main.style.scss'
import { useHistory, Switch, Route } from 'react-router'
import DoingMoreLogo from '../../../../../../../../../src/assets/images/Montefiore.gif'
import moment from 'moment'
import CustomizedTabs from '../../../../../../../../shared/components/Tabs'
import { tabStyles, tabList } from './content'
import { PRIVATE_ROUTES } from '../../../../../../../../AppConfig/AppRouter/constant'
import { Paper } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import AlertDialog from '../../../../../../../../shared/components/AlertDialog'
import { removeMessage, showMessage } from '../../../../../../../../AppConfig/store/actions/homeAction'
import { PortalMediator } from '../../PortalMediator.ts'
import LoginModel from '../../../model/LoginModel'
import IdleTimer from './IdleTimer'
import { LoginService } from '../../../service/LoginService.ts'
import store from '../../../../../../../../AppConfig/store/configureStore'
import { setClaimsHeader, setRemitsHeader } from '../../../../../../../../AppConfig/store/actions/headersAction'

const PortalCanvas = () => {
	const history = useHistory()
	const dispatch = useDispatch()
	const loginModel = useSelector(state => state.loginState.loginModel)
	const dayString = `${moment()}`
	const alertData = useSelector(state => state.homeState.alertPopup)
	const dateString = `${moment(localStorage.getItem('login-time')).format('MM/DD/YYYY')}`
	const timeString = `${moment(localStorage.getItem('login-time')).format('hh:mm:ss A')}`
	const [tabValue, handleTabChange] = useState('/main/claims')
	const [mainTabData, setTabData] = useState([])

	var mediator = useRef(null)

	useEffect(() => {
		mediator.current = new PortalMediator().onRegister()
		if (tabValue === '/main/claims') {
			mediator.current.refreshTab(history.location.pathname)
		}

		return () => {
			mediator.current && mediator.current.onUnRegister()
		}
		// eslint-disable-next-line
	}, [])

	useEffect(() => {
		const timer = new IdleTimer({
			timeout: 2100, // checkin ideal time for 35 mins
			onTimeout: () => {
				handleOnSessionTimeout()
			}
		})

		return () => {
			timer.cleanup()
		}
		// eslint-disable-next-line
	}, [])

	const handleOnSessionTimeout = () => {
		dispatch(
			showMessage('Session Timeout', 'Session Timeout, Please login again.', 'Ok', () => {
				handleLogout()
			})
		)
	}

	useEffect(() => {
		var loginModel = LoginModel.getInstance()
		if (Object.keys(loginModel).length) {
			var hasAdmin = loginModel.user.hasRole('Admin')
			var hasClaims = loginModel.user.hasRole('Claims')
			var hasRemits = loginModel.user.hasRole('Remits')
			var hasInterfaces = loginModel.user.hasRole('Interfaces')
			var hasBankEFT = loginModel.user.hasRole('Bank EFT')

			let tabData = []
			if (hasClaims) {
				tabData.push(tabList[0])
			}
			if (hasRemits) {
				tabData.push(tabList[1])
			}
			if (hasBankEFT) {
				tabData.push(tabList[2])
			}
			if (hasInterfaces) {
				// tabData.push(tabList[3])
			}
			if (hasAdmin) {
				tabData.push(tabList[4])
			}
			if ( hasRemits || hasInterfaces || hasAdmin) {
				//Not Implemented Tab
				// var userTab:NavigatorContent=new NavigatorContent();
				// userTab.label=this.loginModel.user.userId + '\'sTab'
				// var myTab:MyTab=new MyTab()
				// myTab.initialIndex=index
				// userTab.addElement(myTab);
				// this.portalCanvas.viewStack.addElementAt(userTab, index);
			}
			setTabData(tabData)
		} else {
			history.push('/')
		}
	}, [loginModel, history])

	useEffect(() => {
		if (Object.keys(loginModel).length === 0) {
			history.push('/')
			localStorage.clear()
		}
	}, [loginModel, history])

	const onSuccessLogout = () => {
		localStorage.clear()
		history.push('/')
	}

	const handleLogout = () => {
		store.dispatch(setClaimsHeader([]))
		store.dispatch(setRemitsHeader([]))
		LoginService.getInstance().logOut(onSuccessLogout)
	}

	const handleTabChangefunction = (e, value) => {
		handleTabChange(value)
	}

	return (
		<div className="main-container">
			<Paper className="title" style={{ background: 'linear-gradient(to right, white, #c0cec6, white, #c0cec6, white, #c0cec6, white, #c0cec6, white)' }}>
				<div className="title-logo">
					<img id="montefiore" alt="Montefiorelogo" src={DoingMoreLogo} style={{ height: '30px' }} />
				</div>
				<div className="title-content">
					{dayString.slice(0, 3)},&nbsp;
					{dateString} -&nbsp;
					{timeString} |&nbsp;
					{loginModel && loginModel.user ? loginModel.user.userId : ''} |&nbsp;
					{loginModel && loginModel.serviceAreaName ? loginModel.serviceAreaName : ''} |&nbsp;
					<span className="logout-btn" onClick={handleLogout}>
						logout
					</span>
				</div>
			</Paper>
			<div>
				<CustomizedTabs
					customstyle={tabStyles}
					setTabValue={(e, value) => {
						handleTabChangefunction(e, value)
					}}
					tabValue={tabValue}
					tabList={mainTabData}
					width="70%"
					tabType="main-tab"
				/>
				<div className="container-main-view">
					<Switch>
						{PRIVATE_ROUTES.map((route, idx) => {
							return route.component ? <Route key={idx} path={route.url} exact={route.exact} name={route.name} render={props => <route.component {...props} />} /> : null
						})}
					</Switch>
				</div>
			</div>
			<p
				style={{
					fontSize: '13px',
					textAlign: 'right',
					margin: '5px',
					padding: '0px 10px'
				}}>
				Version 2.0, Content © 2022, MIT .All rights reserved.
			</p>
			<AlertDialog {...alertData} onClose={() => dispatch(removeMessage())} />
		</div>
	)
}

export default PortalCanvas
