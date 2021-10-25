// @flow
// FIXME: Add correct types where FlowFixMe's have been used

import React from 'react'
import { ClickAwayListener, Fab } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import Popover from '@material-ui/core/Popover'
import { HBox } from '../../components/Box'
// import IconButton from "../../component/IconButtonComponent";
import { Close, ArrowDropDown } from '@material-ui/icons'

type ItemType = {
	value: String | Number,
	label: String
}

type Props = {
	classes: Object,
	dataProvider: Array,
	icon?: Component,
	label?: String,
	onSelect: (event: Event, selectedItem: ItemType) => any
}

const styles = theme => ({
	root: {
		display: 'flex'
	},
	paper: {
		marginRight: theme.spacing.unit * 2
	},
	popup: {
		// position: 'fixed',
		zIndex: 10
	},
	popoverPaper: {
		overflow: 'hidden'
	},
	button: {
		padding: '5px 5px 5px 16px',
		color: '#686868',
		fontSize: '13px',
		border: '1px solid lightgray',
		background: 'none',
		boxShadow: 'none',
		height: 'auto',
		minHeight: '30px',
		textTransform: 'none',
		margin: '0px 5px',
		letterSpacing: '0',
		borderRadius: '5px',
		width: 'fit-content',
		minWidth: '100px'
	},
	button1: {
		padding: '5px 5px 5px 16px',
		fontSize: '13px',
		background: 'none',
		border: '1px solid grey',
		boxShadow: 'none',
		height: 'auto',
		minHeight: '30px',
		textTransform: 'none',
		margin: '0px 5px',
		letterSpacing: '0',
		borderRadius: '5px',
		width: 'fit-content',
		minWidth: '100px'
	},
	radioButton: {
		flexDirection: 'column'
	},
	fabLabel: {
		whiteSpace: 'nowrap'
	},
	arrowDropDown: {
		marginLeft: 5
	},
	label: {
		width: '70px',
		overflow: 'hidden',
		textOverflow: 'ellipsis',
		'@media (min-width:1360px)': {
			width: '85px'
		}
	},
	closeIcon: {
		fontSize: '20px',
		margin: '0px 5px'
	}
})

class AdvanceCustomMenu extends React.Component<Props> {
	state = {
		open: false
	}

	static defaultProps = {
		dataProvider: [],
		icon: null,
		label: '',
		defaultValueSelected: true
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.open !== this.state.open) {
			this.setState({ open: nextProps.open })
		}
	}

	handleToggle = () => {
		const { onClick } = this.props

		if (onClick) {
			onClick(!this.state.open)
		}

		this.setState(state => ({ open: !state.open }))
	}

	handleClose = event => {
		if (document.getElementById('picker-popover') || document.getElementById('addUpdate') || document.getElementById('categoryDialog') || this.anchorEl.contains(event.target)) {
			return
		}

		this.setState({ open: false })
		this.props.onClose()
	}

	toggleCloseIcon = event => {
		const { handleOnDefaultSelection } = this.props

		if (handleOnDefaultSelection) handleOnDefaultSelection()

		event.stopPropagation()
	}

	render() {
		const { classes, label, bodyComponent, selectedData, anchorOrigin, transformOrigin, buttonColor, textColor, defaultValueSelected, disableCloseIcon } = this.props
		const { open } = this.state

		return (
			<div className={classes.root}>
				<Fab
					buttonRef={node => {
						this.anchorEl = node
					}}
					classes={{
						root: selectedData ? classes.button1 : classes.button,
						label: classes.fabLabel
					}}
					color="default"
					style={{
						backgroundColor: buttonColor,
						color: textColor
					}}
					onClick={this.handleToggle}>
					<div className={classes.label}>{selectedData ? selectedData : label} </div>
					{defaultValueSelected || disableCloseIcon ? <ArrowDropDown className={classes.arrowDropDown} /> : <Close className={classes.closeIcon} onClick={this.toggleCloseIcon} />}
				</Fab>
				<Popover
					anchorEl={this.anchorEl}
					anchorOrigin={
						anchorOrigin
							? anchorOrigin
							: {
									vertical: 'bottom',
									horizontal: 'right'
							  }
					}
					classes={{ paper: classes.popoverPaper }}
					open={open}
					transformOrigin={
						transformOrigin
							? transformOrigin
							: {
									vertical: 'top',
									horizontal: 'right'
							  }
					}>
					<HBox inlineStyle={{ height: '100%', alignContent: 'baseline' }}>
						<ClickAwayListener onClickAway={this.handleClose}>{bodyComponent()}</ClickAwayListener>
					</HBox>
				</Popover>
			</div>
		)
	}
}

export default withStyles(styles)(AdvanceCustomMenu)
