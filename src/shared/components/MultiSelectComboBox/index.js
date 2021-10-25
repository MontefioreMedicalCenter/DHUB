import { Button, Checkbox, List, ListItem, ListItemIcon, ListItemText, withStyles } from '@material-ui/core'
import React from 'react'
import AdvanceCustomMenu from '../AdvanceCustomMenu'

const styles = () => ({
	checkboxRoot: {
		padding: '5px 0px',
		marginLeft: '0px'
	},
	customMenuPaper: {
		maxHeight: 450,
		maxWidth: 250,
		padding: 10
	},
	descRoot: {
		borderBottom: '1px solid #e5e5e5',
		fontSize: '0.813em',
		padding: '5px 12px'
	},
	labelPlacement: {
		justifyContent: 'flex-end',
		marginLeft: '0px',
		padding: '0 15px',
		width: '100%'
	},
	listitemRoot: {
		//   marginRight: "8px",
	},
	listRoot: {
		boxShadow: 'inset 0 -1px 0px rgba(0,0,0,0.12), inset 0 1px 0px rgba(0,0,0,0.12)',
		maxHeight: 250,
		overflowY: 'auto'
	},
	okCancelContainer: {
		padding: 5,
		width: '100%'
	},
	onlyStyle: {
		display: 'block'
	}
})

class MultiSelectComboBox extends React.Component {
	constructor(props) {
		super(props)
		this.state={
			openMenu: false
		}
		this.previousData = []
	}

	componentDidUpdate(prevProps, prevState, snapshot){
		if(this.state.openMenu && this.state.openMenu !== prevState.openMenu){
			this.previousData = [...this.props.selectedData]
		}
	}

	handleOnListChanged = (e, item) => {
		const { valueField, labelField, id = '', name = '' } = this.props
		e.id = id
		e.name = name
		var data = this.props.selectedData
		if (e.target.checked) {
			data.push(item)
		} else {
			data = valueField ? data.filter(data => data[valueField] !== item[valueField]) : data.filter(data => data !== item)
		}
		var label = ''
		data.forEach(item => {
			label = (label ? label + ', ' : '') + (labelField ? item[labelField] : item)
		})
		this.props.onChange(data, label, e, item)
	}

	checkChecked = comboData => {
		const { valueField } = this.props
		var data = this.props.selectedData
		data = valueField ? data.filter(item => item[valueField] === comboData[valueField]) : data.filter(item => item === comboData)
		return data.length ? true : false
	}

	handleOnSelectAll = e => {
		const { labelField, id = '', name = '' } = this.props
		e.id = id
		e.name = name
		var data = []
		if (e.target.checked) {
			data = this.props.dataProvider
		} else {
			data = []
		}
		var label = ''
		data.forEach(item => {
			label = (label ? label + ', ' : '') + (labelField ? item[labelField] : item)
		})
		this.props.onChange(data, label, e, data)
	}

	checkSelectAll = () => {
		return this.props.selectedData.length === this.props.dataProvider.length
	}

	handleOnCancel = e => {
		const { labelField, id = '', name = '' } = this.props
		e.id = id
		e.name = name
		var data = this.previousData
		var label = ''
		data.forEach(item => {
			label = (label ? label + ', ' : '') + (labelField ? item[labelField] : item)
		})
		this.props.onChange(data, label, e, data)
		this.setState({ openMenu: false })
	}
	handleOnOk = () => {
		this.setState({ openMenu: false })
	}

	renderBodyComponent = () => {
		const { dataProvider, classes, valueField, labelField, id = '', name = '' } = this.props
		return (
			<div id={id} name={name}>
				<div style={{ display: 'flex', alignItems: 'center', paddingLeft: '12px', fontSize: '14px' }}>
					<Checkbox
						disableRipple
						checked={this.checkSelectAll()}
						classes={{
							root: classes.checkboxRoot
						}}
						edge="start"
						inputProps={{ 'aria-labelledby': 'Select All' }}
						onClick={this.handleOnSelectAll}
					/>
					<span style={{paddingLeft: '30px'}}> Select All</span>
				</div>
				<List className={classes.listRoot}>
					{dataProvider.map(item => {
						const labelId = valueField ? item[valueField] : item

						return (
							<ListItem key={valueField ? item[valueField] : item} button dense role={undefined} style={{ padding: '0 12px', background: this.checkChecked(item) ? 'lightgray' : 'white' }}>
								<ListItemIcon classes={{ root: classes.listitemRoot }}>
									<Checkbox
										disableRipple
										checked={this.checkChecked(item)}
										classes={{
											root: classes.checkboxRoot
										}}
										edge="start"
										inputProps={{ 'aria-labelledby': labelId }}
										onClick={e => {
											this.handleOnListChanged(e, item)
										}}
									/>
								</ListItemIcon>
								<div style={{ width: '100%' }}>
									<ListItemText id={labelId}>
										<span style={{ color: item.textColor }}>{labelField ? item[labelField] : item}</span>
									</ListItemText>
								</div>
							</ListItem>
						)
					})}
				</List>
				<div style={{display: 'flex', flexDirection: 'row-reverse'}}>
					<Button onClick={this.handleOnCancel}>Cancel</Button>
					<Button onClick={this.handleOnOk}>Ok</Button>
				</div>
			</div>
		)
	}
	render() {
		return <AdvanceCustomMenu open={this.state.openMenu} onClick={() => this.setState({ openMenu: true })} onClose={() => this.setState({ openMenu: false })}bodyComponent={this.renderBodyComponent} label={' '} selectedData={this.props.label}  />
	}
}

export default withStyles(styles, { withTheme: true })(MultiSelectComboBox)
