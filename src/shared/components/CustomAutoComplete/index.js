import { TextField, withStyles } from '@material-ui/core'
import React from 'react'
import Autocomplete from 'react-autocomplete'
import { List, CellMeasurer, CellMeasurerCache } from 'react-virtualized'
const styles = {
	input1: {
		right: '70px',
		height: '25px',
		padding: '3px',
		fontSize: '15px',
		marginLeft: '5px'
	}
}

class CustomAutoComplete extends React.Component {
	constructor(props) {
		super()
		this.cellHeightCache = new CellMeasurerCache({
			defaultHeight: 42,
			fixedWidth: true
		})
	}

	renderItem = item => {
		return <div className="searchItem">{item}</div>
	}

	renderMenu = (items, _, autocompleteStyle) => {
		this.cellHeightCache.clearAll()
		const rowRenderer = ({ key, index, parent, style }) => {
			// style.padding = "5px"
			// style.cursor = "default"
			const Item = items[index]
			const onMouseDown = e => {
				if (e.button === 0) {
					Item.props.onClick(e)
				}
			}
			return (
				<div className="pop-over">
					<CellMeasurer cache={this.cellHeightCache} key={key} parent={parent} rowIndex={index}>
						{React.cloneElement(Item, {
							style: style,
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
					zIndex: 9999,
					textAlign: 'left'
				}}
			/>
		)
	}

	render() {
		const { classes } = this.props
		const searchTerm = this.props.value
		let data = searchTerm ? this.props.data.filter(item => item.toLowerCase().startsWith(searchTerm.toLowerCase())) : []
		return (
			<Autocomplete
				ref={g => (this.input = g)}
				items={data}
				value={this.props.value}
				renderItem={this.renderItem}
				renderMenu={this.renderMenu}
				getItemValue={item => item}
				onChange={this.props.onChange}
				onSelect={this.props.onSelect}
				autoHighlight={true}
				renderInput={params => (
					<TextField
						{...params}
						id="harNumTxt"
						name="harNum"
						variant="outlined"
						onChange={this.props.handleOnChange}
						InputProps={{
							...params.InputProps,
							type: 'search',
							classes: { input: classes.input1 }
						}}
					/>
				)}
			/>
		)
	}
}

export default withStyles(styles)(CustomAutoComplete)
