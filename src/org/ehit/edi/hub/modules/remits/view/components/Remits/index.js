import { Paper } from '@material-ui/core'
import React from 'react'
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import * as actions from '../../../../../../../../../AppConfig/store/actions/headersAction'
import { remitsTabList } from '../../../../../../../../../AppConfig/AppRouter/constant'
import { EventDispatcher } from '../../../../../../../../../flexicious'
import CustomizedTabs from '../../../../../../../../../shared/components/Tabs'
import { tabStyles } from '../../../../../user/view/components/PortalCanvas/content'
import { RemitsMediator } from '../../RemitsMediator.ts'
import { remitsTabListTab } from './content'
import './remits.scss'

class Remits extends EventDispatcher {
    constructor() {
        super()
        this.state = {
            tabValue: '/main/remittance',
        }
    }

    componentDidMount(){
        this.mediator = new RemitsMediator().onRegister(this)
    }

    componentWillUnmount(){
        this.mediator.onUnRegister()
    }

    handleTabChange = (e, value) => {
        this.setState({ tabValue: value })
        // this.mediator.refreshTab(value)
    } 

    render() {
        return (
            <Paper className="audit-inner-tab-cont">
                <div className='sub-Tab'>
                <CustomizedTabs
                        customstyle={tabStyles}
                        setTabValue={(e, value) => {
                            this.handleTabChange(e, value)
                        }}
                        tabValue={this.state.tabValue}
                        tabList={remitsTabListTab}
                        width='25%'
                    />
                    <Switch>
                        {remitsTabList.map((route, idx) => {
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

const mapStateToProps = state => {
	return {
		remitsHeader: state.headerState.remitsHeaderState
	}
}

const mapDispatchToProps = dispatch =>
	bindActionCreators(
		{
			...actions
		},
		dispatch
	)

export default connect(mapStateToProps, mapDispatchToProps)(Remits)