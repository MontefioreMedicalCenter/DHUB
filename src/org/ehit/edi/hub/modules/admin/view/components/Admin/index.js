import { Paper, Tab, Tabs } from '@material-ui/core'
import React from 'react'
import { EventDispatcher } from '../../../../../../../../../flexicious'
import DeliveryControl from '../DeliveryControl'
import DeliveryLog from '../DeliveryLog'
import ErrorLog from '../ErrorLog'
import ManageUser from '../ManageUser'
import PollControl from '../PollControl'
import X12CombineTrigger from '../X12CombineTrigger'
import './admin.scss'
// import { adminTabList } from './content'

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
            <div style={{ marginTop: '5px' }}>
                {/* <Paper className="audit-inner-tab-cont">
							<Tabs
								value={this.state.tabValue}
								onChange={(e,value) => {
									this.handleTabChange(e, value)
								}}
								indicatorColor="primary"
								textColor="primary"
								centered>
								{adminTabList.map(tab => (
									<Tab style={{ margin: '0px' }} label={tab.label} />
								))}
							</Tabs>
                </Paper> */}
                <div style={{ display: 'inline-block' }}>
                    <Paper style={{ width: "100%", marginTop: "5px", marginBottom: "5px", background: '#c0cec6', border: '1px solid black' }}>
                        <Tabs value={this.state.tabValue} onChange={(e, value) => this.handleTabChange(e, value)} indicatorColor="primary" textColor="primary" centered >
                            <Tab name="Dispatch Poll" label="Dispatch Poll" style={{ borderRight: "1px solid black", textTransform: "none" }} />
                            <Tab name="Dispatch Delivery" label="Dispatch Delivery" style={{ borderRight: "1px solid black", textTransform: "none" }} />
                            <Tab name="Triggers" label="Triggers" style={{ borderRight: "1px solid black", textTransform: "none" }} />
                            <Tab name="Manage User" label="Manage User" style={{ borderRight: "1px solid black", textTransform: "none" }} />
                            <Tab name="Error Log" label="Error Log" style={{ borderRight: "1px solid black", textTransform: "none" }} />
                            <Tab name="Delivery Log" label="Delivery Log" style={{ textTransform: "none" }} />
                        </Tabs>
                    </Paper>
                </div>
                <Paper className="paper-Style" >
                    {this.state.tabValue === 0 && <PollControl />}
                    {this.state.tabValue === 1 && <DeliveryControl />}
                    {this.state.tabValue === 2 && <X12CombineTrigger />}
                    {this.state.tabValue === 3 && <ManageUser />}
                    {this.state.tabValue === 4 && <ErrorLog />}
                    {this.state.tabValue === 5 && <DeliveryLog />}
                </Paper>
            </div>
        )
    }
}

export default Admin