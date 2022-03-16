// @flow
// FIXME: Add correct types where FlowFixMe's have been used

import { ClickAwayListener, Grow, IconButton, InputAdornment, MenuItem, MenuList, Paper, Popover, Popper, TextField, Tooltip } from '@material-ui/core'
import { PopperPlacementType, PopperProps } from '@material-ui/core/Popper'
import { TooltipProps } from '@material-ui/core/Tooltip'
import { withStyles } from '@material-ui/core/styles'
import { TextFieldProps } from '@material-ui/core/TextField'
import ArrowDropDown from '@material-ui/icons/ArrowDropDown'
import React from 'react'
import { Constants } from '../../../flexicious'

type ItemType = {
	value: String | Number,
	label: String
}

type Props = {
	classes: Object,
	dataProvider: Array,
	enableTooltip?: Boolean,
	icon?: Component,
	label?: String,
	labelField?: String,
	value?: String,
	PopperProps: PopperProps,
	TooltipProps: TooltipProps,
	menuPlacement: PopperPlacementType,
	TextFieldProps: TextFieldProps,
	onValueChanged: (event: Event, item: ItemType) => any,
	valueChangeOnBlur?: Boolean,
	handleArrowKey?: Boolean,
	style?: Object,
	variant?: String
}

const styles = theme => ({
	root: {
		display: 'flex',
		width: '170px'
	},
	paper: {
		marginRight: theme.spacing.unit * 2
	},
	popup: {
		maxHeight: 250,
		width: 'inherit !important',
		overflow: 'auto'
	},
	popup2: {
		position: 'fixed !important',
		maxHeight: 250,
		width: 'auto'
	},
	popup1: {
		position: 'fixed !important',
		zIndex: 10000,
		width: 'auto'
	},
	tooltip: {
		fontSize: 14
	},
	ellipsisText: {
		overflow: 'hidden',
		whitespace: 'no-wrap',
		textOverflow: 'ellipsis',
		width: '100%',
		height: '100%'
	},
	input: {
		height: '100%'
	},
	textInput: {
		padding: '5px !important'
	},
	inputMultiline: {
		overflow: 'hidden'
	},
	shrinkInputLabel: {
		fontSize: '0.875em'
	}
})

class InputComboBox extends React.Component<Props> {
	changeButtonCondition = false

	constructor(props) {
		super(props)
		this.state = {
			open: false,
			value: this.props.value || '',
			changed: false,
			selectedData: this.props.value || null,
			condition: true
		}
	}

	static defaultProps = {
		value: '',
		icon: null,
		label: '',
		variant: 'outlined',
		dataProvider: [],
		TextFieldProps: {},
		menuPlacement: 'bottom-start',
		style: {},
		enableTooltip: false,
		TooltipProps: {},
		PopperProps: {},
		showDropIcon: true,
		valueChangeOnBlur: true,
		handleArrowKey: false,
		dontSelectTextOnFocus: false
	}
	//SH - changed so that we only open the auto complete when user
	//types something, a value is found in the auto complete so there is
	//something to show.
	handleOnChange = event => {
		const value = event.target.value
		const { labelField, onValueChanged } = this.props
		const stateObj = { value, changed: true }

		if (value) {
			if (this.props.searchValue) {
				if (this.props.dataProvider.map(firstLetter => firstLetter[0]).includes(value) || this.props.dataProvider.map(firstLetter => firstLetter[0]).includes(value.toUpperCase()) ) {
					const filteredDataProvider = this.getFilteredDataProvider(value, labelField)

					if (filteredDataProvider.length) stateObj.open = true
					else stateObj.open = false
				}
			} else {
				const filteredDataProvider = this.getFilteredDataProvider(value, labelField)

				if (filteredDataProvider.length) stateObj.open = true
				else stateObj.open = false
			}
		}
		stateObj.userSelectedValue = value
		this.setState(stateObj)
		// if (stateObj.open && this.menuList) {
		//   this.menuList.setState({ currentTabIndex: 0 });
		// }

		if (onValueChanged && !this.props.valueChangeOnBlur) {
			onValueChanged(event, value)
		}
	}
	handleFocus = event => {
		const value = event.target.value

		if (this.props.dontSelectTextOnFocus) {
			event.target.value = ''
			event.target.value = value
		} else {
			event.target.select()
		}

		this.setState({ autoFocus: true })
		this.valueInFocus = value
	}
	//I have no idea why we were opening the auto complete on blur
	//also we were changing the value on blur. Please test to ensure this
	//is not breaking any functionality
	handleOnBlur = event => {
		//SH - why are setting value changed here? what if the user simply clicks inside and clicks away?
		// const value = event.target.value;
		// const stateObj = { value, changed: true, open: value ? true : false, autoFocus: false };
		// // if( this.props.onValueChanged ) {
		//     this.props.onValueChanged(event, value);
		// }
		// this.setState(stateObj);

		if(this.props.onBlur) {
			this.props.onBlur(event, event.target.value)
		}

		const value = event.target.value
		const { onValueChanged } = this.props

		if (onValueChanged && this.props.valueChangeOnBlur && this.valueInFocus !== value) {
			onValueChanged(event, value)
		}
	}

	handleOnKeyDown = event => {
		if(this.props.onKeyDown){
			this.props.onKeyDown(event, event.target.value)
		}
	}

	focusOnMenu() {
		// if (
		//   this.menuList.state.currentTabIndex < this.menuList.props.children.length
		// ) {
		//   this.menuList.focus();
		//   this.menuFocused = true;
		// }
	}
	//SH - added this function to support keyboard events.
	//Arrow keys go up and down on the menu list, escape closes it, enter
	//navigates to the next item in the grid (if there is a grid)
	handleKeyPress = event => {
		if (!this.props.handleArrowKey) return //I am keeping this here, because this behavior might not
		//be appropriate for screens like info popup. Down arrow will cause text input to lose focus,
		//which will cause on blur to occur, and that will send value change, and that is sending a server call.

		if (event.keyCode === Constants.KEYBOARD_DOWN && !this.menuFocused && this.menuList) {
			this.focusOnMenu()
		} else if (event.keyCode === Constants.KEYBOARD_DOWN && !this.menuFocused && this.menuList) {
			this.focusOnMenu()
		} else if (event.keyCode === Constants.KEYBOARD_ESCAPE && this.state.open) {
			this.handleClose()
			if (this.anchorEl) this.anchorEl.focus()
		} else if (event.keyCode === Constants.KEYBOARD_ENTER) {
			if (this.state.open) {
				this.handleClose()
				if (this.anchorEl) this.anchorEl.focus()
			} else {
				if (this.props.grid && this.props.row && this.props.column) {
					const thisCell = this.props.grid.getCellForRowColumn(this.props.row.getData(), this.props.column)

					if (thisCell) {
						const nextCell = this.props.grid.getCellInDirection(thisCell, Constants.CELL_POSITION_BELOW)

						if (nextCell && nextCell.domElement && nextCell.domElement.getElementsByTagName('input').length) {
							nextCell.domElement.getElementsByTagName('input')[0].focus()
						}
					}
				}
			}
		}
	}

	handleToggle = () => {
		this.setState({ open: !this.state.open }, () => {
			this.changeButtonCondition = false
		})
	}

	handleOnItemSelected = item => event => {
		const { labelField, onValueChanged, onValueSelected } = this.props

		var value = labelField ? item[labelField] : item

		if (onValueSelected) {
			onValueSelected(event, value)
		} else if (onValueChanged) {
			onValueChanged(event, value)
		}
		this.setState({
			userSelectedValue: value,
			value: value,
			changed: true,
			selectedData: value
		})
		var ref = this.textInput
		ref.children[0].getElementsByTagName('input')[0].focus()
		this.handleClose(event)
	}

	handleOnClickAway = event => {
		if (!this.changeButtonCondition) {
			event.stopImmediatePropagation()
			this.handleClose(event)
		}
	}

	handleClose = () => {
		this.setState({ open: false })
		this.menuFocused = false
		// if (this.menuList) this.menuList.setState({ currentTabIndex: 0 });
	}

	getFilteredDataProvider = (value, searchField) => {
		const dataProvider = this.props.dataProvider || []

		if (
			!value ||
			!(value = value
				.toString()
				.trim()
				.toLowerCase())
		) {
			return dataProvider
		}
		// if(selectedvalue && selectedvalue.trim().toLowerCase() === value.trim().toLowerCase()){
		//     return dataProvider;
		// }

		// This code is to show the complete data whenwver user clicks the dropdown button.
		if (this.changeButtonCondition) {
			return dataProvider
		}

		const filteredDataProvider = dataProvider.filter(item => {
			const itemLabel = (searchField ? item[searchField] : item) ? (searchField ? item[searchField] : item).toLowerCase() : ''

			return itemLabel.indexOf(value) !== -1
		})

		filteredDataProvider.sort()

		return filteredDataProvider
	}

	static getDerivedStateFromProps = (newProps, prevState) => {
		const { value, changed, row } = prevState
		const presetValue = newProps.value
		const stateObj = { changed: false }

		if (newProps.row !== row) {
			stateObj.userSelectedValue = ''
		}
		if (value !== presetValue) {
			//For removing old value
			if (!changed) {
				stateObj.value = presetValue
				stateObj.userSelectedValue = presetValue
			}

			return stateObj
		} else if (changed) {
			return { changed: false }
		}

		return null
	}

	renderInputAdornment = () =>
		this.props.showDropIcon ? (
			<InputAdornment position="end">
				<IconButton
					disabled={this.props.disabled ? this.props.disabled : false}
					style={{ padding: 0 }}
					onClick={this.handleToggle}
					onMouseDown={() => {
						this.changeButtonCondition = true
					}}>
					<ArrowDropDown />
				</IconButton>
			</InputAdornment>
		) : null

	renderTextInput = () => (
		<TextField
			ref={el => (this.textInput = el)}
			fullWidth
			error={this.props.error}
			helperText={this.props.helperText}
			id={this.props.id ? this.props.id : ''}
			disabled={this.props.disabled ? this.props.disabled : false}
			autoFocus={this.state.autoFocus}
			InputProps={{
				maxLength: this.props.maxLength,
				autoComplete: 'off',
				inputRef: node => {
					this.anchorEl = node
				},
				style: { fontSize: '13px' },
				endAdornment: this.renderInputAdornment(),
				classes: {
					root: this.props.classes.input,
					inputMultiline: this.props.classes.inputMultiline,
					input: this.props.classes.textInput
				}
			}}
			name={`${this.props.page}`}
			/** userSelectedValue takes preference over the state.value. state.value comes from props. so even
			 * value is coming from props, if user has overridden that value, we will always show what
			 * the user has done.
			 */
			variant={this.props.variant || 'outlined'}
			value={this.state.userSelectedValue || this.state.value}
			InputLabelProps={{
				shrink: true,
				classes: {
					shrink: this.props.classes.shrinkInputLabel
				}
			}}
			onFocus={this.handleFocus}
			onChange={this.handleOnChange}
			onBlur={this.handleOnBlur}
			onKeyDown={this.handleOnKeyDown}
			{...this.props.TextFieldProps}
			multiline={this.props.multiline}
		/>
	)

	renderMenuList = filteredDataProvider => {
		const { labelField, classes, enableTooltip, TooltipProps } = this.props

		return filteredDataProvider.map((item, index) => {
			const selectedData = this.state.selectedData || this.props.value
			const selected = selectedData === (labelField ? item[labelField] : item)

			// if (!labelField || !item.hasOwnProperty(labelField)) throw new Error("Item must have a field 'label' or must specify valid 'labelField'!")

			const menuItem = (
				<MenuItem
					key={index}
					id={selected ? 'selectedmenu' : 'notselected'}
					selected={selected}
					style={{
						fontSize: '13px',
						whiteSpace: 'pre-line',
						height: 'max-content'
					}}
					onClick={this.handleOnItemSelected(item)}>
					<div className={classes.ellipsisText}>{labelField ? item[labelField] : item}</div>
				</MenuItem>
			)

			return enableTooltip && (labelField ? item[labelField] : item) ? (
				<Popover classes={{ tooltip: classes.tooltip }} placement="right" title={labelField ? item[labelField] : item} {...TooltipProps}>
					{menuItem}
				</Popover>
			) : (
				menuItem
			)
		})
	}

	getScrollPosition = g => {
		const elm = document.getElementById('selectedmenu')

		if (g && elm) {
			g.scrollTop = elm.offsetTop
		}
	}

	render() {
		const { classes, enableTooltip, menuPlacement, PopperProps, TooltipProps, labelField, style } = this.props
		const { open, value } = this.state
		const filteredDataProvider = this.getFilteredDataProvider(value, labelField)

		return (
			<div ref={node => (this.containerNode = node)} className={classes.root} style={style} onKeyDown={this.handleKeyPress}>
				{enableTooltip && value ? (
					<Tooltip classes={{ tooltip: classes.tooltip }} placement="right" title={value} {...TooltipProps}>
						{this.renderTextInput()}
					</Tooltip>
				) : (
					this.renderTextInput()
				)}
				{filteredDataProvider.length > 0 && (
					<Popper
						transition
						anchorEl={this.anchorEl}
						className={classes.popup1}
						open={open}
						placement={menuPlacement || 'bottom-start'}
						style={{
							width: this.containerNode ? this.containerNode.clientWidth : null
						}}
						// style = {{ width : 'auto', maxWidth:600}}
						{...PopperProps}>
						{({ TransitionProps, placement }) => (
							<Grow
								{...TransitionProps}
								id="menu-list-grow"
								style={{
									transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom'
								}}>
								<Paper className={classes.popup2}>
									<ClickAwayListener onClickAway={this.handleOnClickAway}>
										<div
											ref={g => this.getScrollPosition(g)}
											className={classes.popup}
											style={{
												width: this.containerNode ? this.containerNode.clientWidth : null
											}}>
											<MenuList ref={el => (this.menuList = el)}>{this.renderMenuList(filteredDataProvider)}</MenuList>
										</div>
									</ClickAwayListener>
								</Paper>
							</Grow>
						)}
					</Popper>
				)}
			</div>
		)
	}
}

export default withStyles(styles)(InputComboBox)
