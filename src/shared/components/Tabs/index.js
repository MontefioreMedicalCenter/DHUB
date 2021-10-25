import React from 'react'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Typography from '@material-ui/core/Typography'
import Badge from '@material-ui/core/Badge'
import { useHistory } from 'react-router-dom'

const StyledTabs = withStyles({
	indicator: {
		height: props => props.customstyle.indicatorHeight,
		borderTopLeftRadius: 3,
		borderTopRightRadius: 3,
		backgroundColor: props => props.customstyle.indicatorColor
	},
	flexContainer: {
		width: props => (props.customstyle.centered ? 'fit-content' : '100%'),
		marginLeft: 'auto',
		marginRight: 'auto',
		height: '35px'
	},
	root: {
		minHeight: 'unset'
	}
})(props => {
	const { customStyle, ...rest } = props
	return <Tabs {...rest} textColor="primary" TabIndicatorProps={{ children: <div /> }} />
})

const StyledTab = withStyles(theme => ({
	root: {
		textTransform: props => props.customstyle.textTransform,
		color: props => props.customstyle.tabColor,
		fontWeight: theme.typography.fontWeightRegular,
		width: '100%',
		flex: 1,
		minWidth: 0,
		padding: '5px',
		minHeight: '35px',
		margin: '0px',
		maxWidth: 'unset',
		border: '1px solid lightGrey',
		'&:focus': {
			opacity: 1
		}
	},
	selected: {
		backgroundColor: '#b3d7fd'
	},
	wrapper: {
		display: 'flow-root',
		overflow: 'hidden',
		whiteSpace: 'nowrap',
		textOverflow: 'ellipsis'
	}
}))(props => {
	const { customStyle, ...rest } = props
	return <Tab style={{ outline: 0 }} disableRipple {...rest} />
})

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1
	},
	padding: {
		padding: theme.spacing(0)
	},
	demo: {
		backgroundColor: props => props.customstyle.backgroundColor,
		boxShadow: props => props.customstyle.boxShadow,
		width: props => (props.customstyle.centered ? 'fit-content' : '100%'),
		marginLeft: 'auto',
		marginRight: 'auto'
	}
}))

function CustomizedTabs(props) {
	const history = useHistory()

	const classes = useStyles(props)

	const handleCallToRouter = (event, value) => {
		history.push(value)
	}
	const path = history.location.pathname
	return (
		<div className={classes.root}>
			<div className={classes.demo}>
				<StyledTabs
					variant={props.variant}
					customstyle={{
						indicatorHeight: props.customstyle.indicatorHeight,
						centered: props.customstyle.centered,
						containerPadding: props.customstyle.containerPadding,
						indicatorColor: props.customstyle.indicatorColor
					}}
					value={props.tabType === 'main-tab' ? `/${path.split('/')[1]}/${path.split('/')[2]}` : path}
					onChange={handleCallToRouter}
					aria-label="styled tabs example">
					{props.tabList
						? props.tabList.map((tab, index) => (
								<StyledTab
									key={tab.path}
									customstyle={{
										tabColor: props.customstyle.tabColor,
										textTransform: props.customstyle.textTransform
									}}
									label={
										tab.badge ? (
											<Badge invisible={!tab.badge.active} badgeContent={'!'} color="secondary" variant="dot">
												{tab.label}
											</Badge>
										) : (
											tab.label
										)
									}
									value={tab.path}
								/>
						  ))
						: ''}
				</StyledTabs>
				<Typography className={classes.padding} />
			</div>
		</div>
	)
}

export default CustomizedTabs
