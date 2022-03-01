import { ClickAwayListener, TextField, withStyles } from '@material-ui/core'
import React from 'react'
import Autocomplete from 'react-autocomplete'
import { List, CellMeasurer, CellMeasurerCache } from 'react-virtualized'
const styles = {
	input1: {
		right: '70px',
		height: '25px',
		padding: '3px',
		fontSize: '13px',
		marginLeft: '5px'
	}
}

class CustomAutoComplete extends React.Component {
	constructor(props) {
		super()
		this.state = {
			open: false
		}
		this.cellHeightCache = new CellMeasurerCache({
			defaultHeight: 42,
			fixedWidth: true
		})
	}

	handleOnFocus = () => {
		document.getElementById(this.props.id || 'harNumText').select()
	}

	handleOnClose = () => {
		this.setState({ open: false })
		if (this.props.handleClickAway) {
			this.props.handleClickAway()
		}
	}

	renderItem = item => {
		return (
			<div id={item} key={item} className="searchItem">
				<span style={{padding: '5px'}}>{item}</span>
			</div>
		)
	}

	renderMenu = (items, _, autocompleteStyle) => {
		this.cellHeightCache.clearAll()
		const rowRenderer = ({ key, index, parent, style }) => {
			// style.padding = "5px"
			// style.cursor = "default"
			const Item = items[index]
			const onMouseDown = e => {
				if (e.button === 0) {
					this.props.onSelect(Item.props.children.props.children)
					this.setState({ open: false })
				}
			}
			return (
				<div className="pop-over">
					<CellMeasurer cache={this.cellHeightCache} key={key} parent={parent} rowIndex={index}>
						{React.cloneElement(Item, {
							style: {...style , 
								display: 'flex',
								borderBottom: '1px solid #00000038',
								alignItems: 'center',
								minHeight: '35px'
							},
							key: key,
							onMouseEnter: null,
							onMouseDown: onMouseDown
						})}
					</CellMeasurer>
				</div>
			)
		}
		return (
			<List
				rowHeight={this.cellHeightCache.rowHeight}
				height={207}
				rowCount={items.length}
				rowRenderer={rowRenderer}
				width={autocompleteStyle.minWidth || 0}
				style={{
					position: 'absolute',
					backgroundColor: 'white',
					height: 'auto',
					maxHeight: '207px',
					overflowY: 'scroll',
					zIndex: 999,
					textAlign: 'left',
					boxShadow: '#80808094 1px 2px 8px 0px'
				}}
			/>
		)
	}

	render() {
		const { classes, textBoxStyle, handleOnBlur = () => {}, handleOnKeyDown = () => {}, id = 'harNumText', name = 'harNum', includes = false } = this.props
		const searchTerm = this.props.value
		let data = includes ? (searchTerm ? this.props.data.filter(item => item.toLowerCase().includes(searchTerm.toLowerCase())) : []) : searchTerm ? this.props.data.filter(item => item.toLowerCase().startsWith(searchTerm.toLowerCase())) : []
		return (
			<ClickAwayListener onClickAway={this.handleOnClose}>
				<Autocomplete
					ref={g => (this.input = g)}
					items={data}
					value={this.props.value}
					renderItem={this.renderItem}
					renderMenu={this.renderMenu}
					getItemValue={item => item}
					onChange={this.props.onChange}
					open={this.state.open}
					isItemSelectable={() => false}
					onSelect={this.props.onSelect}
					renderInput={params => (
						<TextField
							{...params}
							id={id}
							name={name}
							variant="outlined"
							onChange={e => {
								this.setState({ open: true })
								this.props.handleOnChange(e)
							}}
							onBlur={handleOnBlur}
							onKeyDown={handleOnKeyDown}
							onFocus={this.handleOnFocus}
							style={textBoxStyle}
							InputProps={{
								...params.InputProps,
								type: 'search',
								classes: { input: classes.input1 }
							}}
						/>
					)}
				/>
			</ClickAwayListener>
		)
	}
}

export default withStyles(styles)(CustomAutoComplete)
