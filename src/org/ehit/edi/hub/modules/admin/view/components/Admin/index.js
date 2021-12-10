import { Paper } from '@material-ui/core'
import React from 'react'
import { Switch, Route } from 'react-router'
import { adminTabList } from '../../../../../../../../../AppConfig/AppRouter/constant'
import { EventDispatcher } from '../../../../../../../../../flexicious'
import CustomizedTabs from '../../../../../../../../../shared/components/Tabs'
import { tabStyles } from '../../../../../user/view/components/PortalCanvas/content'
import './admin.scss'
import { adminTabListTab } from './content'


class Admin extends EventDispatcher {
    constructor() {
        super()
        this.state = {
            tabValue: 0,
        }
    }

    handleTabChange = (e, value) => {
        debugger
        this.setState({ tabValue: value })
    }

    render() {
        return (
                <Paper className="audit-inner-tab-cont">
                    <hr className='hrTag'/>
                    <div className='sub-Tab' >
                        <CustomizedTabs
                            customstyle={tabStyles}
                            setTabValue={(e, value) => {
                                this.handleTabChange(e, value)
                            }}
                            tabValue={this.state.tabValue}
                            tabList={adminTabListTab}
                            width='70%'
                        />
                        <Switch>
                            {adminTabList.map((route, idx) => {
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
                </Paper>
        )
    }
}

export default Admin