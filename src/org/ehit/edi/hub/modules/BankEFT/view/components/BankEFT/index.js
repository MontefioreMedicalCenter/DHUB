import { Paper } from '@material-ui/core'
import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { bankEftTabList } from '../../../../../../../../../AppConfig/AppRouter/constant'
import { EventDispatcher } from '../../../../../../../../../flexicious'
import CustomizedTabs from '../../../../../../../../../shared/components/Tabs'
import { tabStyles } from '../../../../../user/view/components/PortalCanvas/content'
import './bankEFTStyle.scss'
import { bankEftSubTab } from './content'

class BankEFT extends EventDispatcher {
    constructor() {
        super()
        this.state = {
            tabValue: '/main/bankEFT',
        }
    }

    handleTabChange = (e, value) => {
        this.setState({ tabValue: value })
    } 

    render() {
        return (
            <Paper className='paper'>
                <CustomizedTabs
                        customstyle={tabStyles}
                        setTabValue={(e, value) => {
                            this.handleTabChange(e, value)
                        }}
                        tabValue={this.state.tabValue}
                        tabList={bankEftSubTab}
                        width='25%'
                    />
                    <Switch>
                        {bankEftTabList.map((route, idx) => {
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
            </Paper>
        )
    }
}

export default BankEFT