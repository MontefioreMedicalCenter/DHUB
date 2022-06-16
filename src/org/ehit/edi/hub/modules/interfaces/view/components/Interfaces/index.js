import { Paper } from '@material-ui/core'
import React from 'react'
import { EventDispatcher, ReactDataGridColumn, ReactDataGridColumnLevel } from '../../../../../../../../../flexicious'
import MontefioreUtils from '../../../../../../../../../service/utils/MontefioreUtils'
import DataGrid from '../../../../../../../../../shared/components/ExtendedDataGrid'
import { InterfacesMediator } from '../../InterfacesMediator.ts'
import './interfaces.scss'
import Connect from '../../../../../../../../../assets/images/connect.png'
import upIcon from '../../../../../../../../../assets/images/upIcon.png'
import downIcon from '../../../../../../../../../assets/images/downIcon.png'

class Interfaces extends EventDispatcher {
    constructor() {
		super()
		this.state = {
			tabValue: '/main/interface',
			fileEditorWindow: false,
			fileContentContainerWindow: false,
			fileData: null,
			claimsHeader: ''
		}
	}

	componentDidMount() {
		this.mediator = new InterfacesMediator().onRegister(this)
	}
	componentWillUnmount() {
		this.mediator.onUnRegister()
	}

    dynamicIconFunction(cell, state = ''): any {
		var img
		if (cell.rowInfo.getIsDataRow && !cell.rowInfo.getIsHeaderRow()) {
			if (cell.rowInfo.getData().channelStatus === 'UP') img = upIcon
			else img = downIcon
			
		}
		return img
	}

    render() {
        return (
            <Paper style={{ background: 'linear-gradient(to left, white, #c0cec6, white, #c0cec6, white, #c0cec6, white, #c0cec6, white)', height: "calc(100vh - 105px)", marginTop: "5px" }}>
                <div className="interfacesGridStyle">
					<DataGrid ref={g => (this.grid = g)} id="grid" width="100%" height="100%" enablePrint={true} styleName="gridStyle" enableDrillDown={true} enableExport={true} enableExportAll={true} enableCopy={true} /*parentDocument={this}*/ pagerRenderer={MontefioreUtils.pagerFactory}>
						<ReactDataGridColumnLevel rowHeight="21" /*childrenField="_processInstanceSteps"*/ enableFilters={true} enablePaging={true} /*pagerRenderer="org.ehit.edi.hub.uitl.MyCustomPager"*/ pageSize="50" /*rowTextColorFunction={this.getRowTextColor}*/>
							<ReactDataGridColumn headerAlign="center" textAlign="center" width="100" /*columnWidthMode="fitToContent"*/ dataField="channelId" enableCellClickRowSelect={false} filterControl="TextInput" filterOperation="Contains" filterWaterMark="Contains" headerText="ID" />
							<ReactDataGridColumn headerAlign="center" textAlign="center" columnWidthMode="fitToContent" dataField="channelDescr" enableCellClickRowSelect={false} filterControl="TextInput" filterOperation="Contains" filterWaterMark="Contains" headerText="Channel Description" useHandCursor={true} useUnderLine={true} />
							<ReactDataGridColumn headerAlign="center" textAlign="center" enableIcon="true" iconLeft="15" hideText="true" width="100"  dataField="channelStatus" enableCellClickRowSelect={false} filterControl="TextInput" filterOperation="Contains" filterWaterMark="Contains" headerText="Status" iconFunction={this.dynamicIconFunction}/>
							<ReactDataGridColumn headerAlign="center" textAlign="center" columnWidthMode="fitToContent" dataField="lastUpdate" enableCellClickRowSelect={false} filterControl="TextInput" filterOperation="Contains" filterWaterMark="Contains" headerText="Last Updats" />
							<ReactDataGridColumn headerAlign="center" textAlign="left" width="900" /*columnWidthMode="fitToContent"*/ dataField="statusReason" enableCellClickRowSelect={false} headerText="Status Reason" />
							<ReactDataGridColumn headerAlign="center" textAlign="center" hideText="true" headerText="Ping" enableIcon="true" iconToolTip="Ping the payer." iconHandCursor="true" icon={Connect} columnWidthMode="fixed" width="50" iconLeft="10"/>
						</ReactDataGridColumnLevel>
					</DataGrid>
				</div>

            </Paper>
        )
    }
}

export default Interfaces