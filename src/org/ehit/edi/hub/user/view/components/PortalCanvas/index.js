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
import { removeMessage } from '../../../../../../../../AppConfig/store/actions/homeAction'
import { PortalMediator } from '../../PortalMediator.ts'

const PortalCanvas = () => {
    const history = useHistory()
    const dispatch = useDispatch()
    const loginModel = useSelector(state => state.loginState.loginModel)
    const dayString = `${moment()}`
    const alertData = useSelector(state => state.homeState.alertPopup)
    const dateString = `${moment().format('MMM D, YYYY')}`
    const timeString = `${moment().format('HH:mm:ss')}`
    const [tabValue, handleTabChange] = useState('/main/claims')

    var mediator = useRef(null)

	useEffect(() => {
		mediator.current = new PortalMediator().onRegister()
        if(tabValue==='/main/claims'){
            mediator.current.refreshTab(tabValue)
        }

		return () => {
			mediator.current && mediator.current.onUnRegister()
		}
		// eslint-disable-next-line
	}, [])

    useEffect(() => {
		if (Object.keys(loginModel).length === 0) {
			history.push('/')
            localStorage.clear()
		}
	}, [loginModel, history])

    const handleLogout = () => {
        localStorage.clear()
        history.push('/')
    }

    const handleTabChangefunction = (e, value) => {
        handleTabChange(value)
        mediator.current.refreshTab(value)
    }


    return (
        <div className="main-container">
            <Paper className="title" style={{ background: 'linear-gradient(to right, white, #c0cec6, white, #c0cec6, white, #c0cec6, white, #c0cec6, white)' }}>
                <div className="title-logo">
                    <img
                        id="montefiore"
                        alt="Montefiorelogo"
                        src={DoingMoreLogo}
                        style={{ height: '30px' }}
                    />
                </div>
                <div className="title-content">
                    {dayString.slice(0, 3)},&nbsp;
                    {dateString} -&nbsp;
                    {timeString} |&nbsp;
                    {loginModel && loginModel.user ? loginModel.user.userId : ''} |&nbsp;
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
                    tabList={tabList}
                    width='70%'
                    tabType="main-tab"
                />
                <div className="container-main-view">
                    <Switch>
                        {PRIVATE_ROUTES.map((route, idx) => {
                            return route.component ? (
                                <Route
                                    key={idx}
                                    path={route.url}
                                    exact={route.exact}
                                    name={route.name}
                                    render={props => <route.component {...props} />}
                                />
                            ) : null
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
