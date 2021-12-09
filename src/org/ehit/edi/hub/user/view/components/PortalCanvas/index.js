import React, { useState } from 'react'
import './main.style.scss'
import { useHistory, Switch, Route } from 'react-router'
import DoingMoreLogo from '../../../../../../../../../src/assets/images/Montefiore.gif'
import moment from 'moment'
import CustomizedTabs from '../../../../../../../../shared/components/Tabs'
import { tabStyles, tabList } from './content'
import { PRIVATE_ROUTES } from '../../../../../../../../AppConfig/AppRouter/constant'
import { Paper } from '@material-ui/core'

const PortalCanvas = () => {
    const history = useHistory()
    const dayString = `${moment()}`
    const dateString = `${moment().format('MMM D, YYYY')}`
    const timeString = `${moment().format('HH:mm:ss')}`
    const [tabValue, handleTabChange] = useState(0)

    const handleLogout = () => {
        history.push('/')
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
                    {/* {loginModel && loginModel.user ? loginModel.user.userId : ''} |&nbsp; */}
                    <span className="logout-btn" onClick={handleLogout}>
                        logout
                    </span>
                </div>
            </Paper>
            <div style={{ marginTop: '5px' }}>
                <CustomizedTabs
                    customstyle={tabStyles}
                    setTabValue={handleTabChange}
                    tabValue={tabValue}
                    tabList={tabList}
                    width='70%'
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
                    margin: '0px',
                    padding: '0px 10px'
                }}>
                Version 2.0, Content © 2020, MIT .All rights reserved.
            </p>
        </div>
    )
}

export default PortalCanvas
