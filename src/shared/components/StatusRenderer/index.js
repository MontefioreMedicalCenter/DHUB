import { Tooltip, withStyles } from '@material-ui/core'
import React from 'react'
import dialog_warning from '../../../assets/images/dialog_warning.png'
import UpArrow from '../../../assets/images/upIcon.png'
import DownArrow from '../../../assets/images/downIcon.png'



const styles = {
	statusContainer: {
		height: '100%',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
		paddingLeft: '3px'
	},
	tooltipContainer: {
		width: 500,
		height: 400,
		display: 'flex',
		flexDirection: 'column'
	},
	tooltipContent: {
		padding: 10,
		height: '100%',
		width: 'calc(100% - 20px)',
		background: '#FFFFE5'
	},
	tooltipheader: {
		padding: 10,
		borderBottom: '1px solid black'
	}
}

const HtmlTooltip = withStyles(theme => ({
	tooltip: {
		backgroundColor: '#FFFF99',
		opacity: 0.9,
		color: 'rgba(0, 0, 0, 0.87)',
		maxWidth: 500,
		fontSize: theme.typography.pxToRem(12),
		border: '1px solid black',
		padding: 0
	}
}))(Tooltip)

const StatusRenderer = props => {
	const selectedRequest = true
		// props.cell.rowInfo.getData().constructorName === 'IdWorklist'

	const statusList = props.cell.rowInfo.getData().processStatus
	if (statusList === 'OutAlarm') {
		return (
			<div style={styles.statusContainer}>
								<HtmlTooltip
						title={
							<div style={styles.tooltipContainer}>
								<span style={styles.tooltipheader}>Status</span>
								<span style={styles.tooltipContent}>
									{statusList}
								</span>
							</div>
						}>
						<img
							id="dialog_warning"
							alt="dialog_warning"
							src={DownArrow}
						/>
					</HtmlTooltip>
				
			</div>
		)
	} if(statusList === 'InAlarm') {
		return <div style={styles.statusContainer}>
            <HtmlTooltip
						title={
							<div style={styles.tooltipContainer}>
								<span style={styles.tooltipheader}>Status</span>
								<span style={styles.tooltipContent}>
									{statusList}
								</span>
							</div>
						}>
						<img
							id="dialog_warning"
							alt="dialog_warning"
							src={dialog_warning}
						/>
					</HtmlTooltip>
        </div>
	}
    if(statusList === 'Normal') {
		return <div style={styles.statusContainer}>
            <HtmlTooltip
						title={
							<div style={styles.tooltipContainer}>
								<span style={styles.tooltipheader}>Status</span>
								<span style={styles.tooltipContent}>
									{statusList}
								</span>
							</div>
						}>
						<img
							id="dialog_warning"
							alt="dialog_warning"
							src={UpArrow}
						/>
					</HtmlTooltip>
           
        </div>
	}
    return null
    

}

export default StatusRenderer