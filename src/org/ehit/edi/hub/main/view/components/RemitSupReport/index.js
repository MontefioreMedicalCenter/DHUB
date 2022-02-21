import React from 'react'
import { ReactDataGridColumn, ReactDataGridColumnLevel } from '../../../../../../../../flexicious'
import DataGrid from '../../../../../../../../shared/components/ExtendedDataGrid'

class RemitSupReport extends React.Component {
	render() {
		return (
			<div style={{ height: 'calc(100% - 5px)', width: '100%' }}>
				<DataGrid ref={g => (this.grid = g)} id="grid" width="100%" height="100%" enableCopy={true} enableExport={true} enablePrint={true} styleName="gridStyle" horizontalScrollPolicy="auto" footerDrawTopBorder={true} enableEagerDraw={true}>
					<ReactDataGridColumnLevel rowHeight="20" enablePaging={true} pageSize="1000" enableFooters={true} enableFilters={true}>
						<ReactDataGridColumn columnWidthMode="fitToContent" dataField="jp9" enableCellClickRowSelect={false} headerText="JP9" />
						<ReactDataGridColumn columnWidthMode="fitToContent" dataField="grpNo" enableCellClickRowSelect={false} headerText="GRP#" />
						<ReactDataGridColumn columnWidthMode="fitToContent" dataField="provNo" enableCellClickRowSelect={false} headerText="PROV#" />
						<ReactDataGridColumn columnWidthMode="fitToContent" dataField="loc" enableCellClickRowSelect={false} headerText="LOC" />
						<ReactDataGridColumn columnWidthMode="fitToContent" dataField="status" enableCellClickRowSelect={false} headerText="STATUS" />
						<ReactDataGridColumn columnWidthMode="fitToContent" dataField="invoiceNo" enableCellClickRowSelect={false} headerText="INVOICE#" filterControl="TextInput" filterOperation="Contains" filterWaterMark="Contains" />
						<ReactDataGridColumn columnWidthMode="fitToContent" dataField="claimRef" enableCellClickRowSelect={false} headerText="CLM REF#" />
						<ReactDataGridColumn columnWidthMode="fitToContent" dataField="claimRef2" enableCellClickRowSelect={false} />
						<ReactDataGridColumn columnWidthMode="fitToContent" dataField="invType" enableCellClickRowSelect={false} headerText="INV TYPE" />
						<ReactDataGridColumn columnWidthMode="fitToContent" dataField="clmLn" enableCellClickRowSelect={false} headerText="CLM LINE" />
						<ReactDataGridColumn columnWidthMode="fitToContent" dataField="invNo" enableCellClickRowSelect={false} headerText="INV#" />
						<ReactDataGridColumn columnWidthMode="fitToContent" dataField="adjudDate" enableCellClickRowSelect={false} headerText="ADJUD DT" />
						<ReactDataGridColumn columnWidthMode="fitToContent" dataField="billDate" enableCellClickRowSelect={false} headerText="BILL DT" />
						<ReactDataGridColumn columnWidthMode="fitToContent" dataField="certNo" enableCellClickRowSelect={false} headerText="CERT#" />
						<ReactDataGridColumn columnWidthMode="fitToContent" dataField="lastName" enableCellClickRowSelect={false} headerText="LASTNAME" filterControl="TextInput" filterOperation="Contains" filterWaterMark="Contains" />
						<ReactDataGridColumn columnWidthMode="fitToContent" dataField="firstName" enableCellClickRowSelect={false} headerText="FIRSTNAME" filterControl="TextInput" filterOperation="Contains" filterWaterMark="Contains" />
						<ReactDataGridColumn columnWidthMode="fitToContent" dataField="mi" enableCellClickRowSelect={false} headerText="MI" />
						<ReactDataGridColumn columnWidthMode="fitToContent" dataField="recycleNo" enableCellClickRowSelect={false} headerText="RECYCLE#" />
						<ReactDataGridColumn columnWidthMode="fitToContent" dataField="dosFrom" enableCellClickRowSelect={false} headerText="DOS FR" />
						<ReactDataGridColumn columnWidthMode="fitToContent" dataField="dosTo" enableCellClickRowSelect={false} headerText="DOS TO" />
						<ReactDataGridColumn columnWidthMode="fitToContent" dataField="cpt" enableCellClickRowSelect={false} headerText="CPT" />
						<ReactDataGridColumn columnWidthMode="fitToContent" dataField="col" enableCellClickRowSelect={false} headerText="3" />
						<ReactDataGridColumn columnWidthMode="fitToContent" dataField="units" enableCellClickRowSelect={false} headerText="UNITS" />
						<ReactDataGridColumn columnWidthMode="fitToContent" dataField="chrgs" enableCellClickRowSelect={false} headerText="CHGS" />
						<ReactDataGridColumn columnWidthMode="fitToContent" dataField="pmt" enableCellClickRowSelect={false} headerText="PMT" />
						<ReactDataGridColumn columnWidthMode="fitToContent" dataField="z" enableCellClickRowSelect={false} headerText="Z" />
						<ReactDataGridColumn columnWidthMode="fitToContent" dataField="edit1" enableCellClickRowSelect={false} headerText="EDIT-1" />
						<ReactDataGridColumn columnWidthMode="fitToContent" dataField="msg1" enableCellClickRowSelect={false} headerText="MESSAGE-1" />
						<ReactDataGridColumn columnWidthMode="fitToContent" dataField="edit2" enableCellClickRowSelect={false} headerText="EDIT-2" />
						<ReactDataGridColumn columnWidthMode="fitToContent" dataField="msg2" enableCellClickRowSelect={false} headerText="MESSAGE-2" />
						<ReactDataGridColumn columnWidthMode="fitToContent" dataField="edit" enableCellClickRowSelect={false} headerText="EDIT" />
						<ReactDataGridColumn columnWidthMode="fitToContent" dataField="groupNpi" enableCellClickRowSelect={false} headerText="GROUP NPI#" />
						<ReactDataGridColumn columnWidthMode="fitToContent" dataField="provNpi" enableCellClickRowSelect={false} headerText="PROV NPI#" />
					</ReactDataGridColumnLevel>
				</DataGrid>
			</div>
		)
	}
}

export default RemitSupReport
