/* eslint-disable no-unused-vars */
/**
 * Flexicious
 * Copyright 2011, Flexicious LLC
 */

import React from 'react'
import { Constants, ToolbarAction, UIUtils, UIComponent } from '../../../../../flexicious'
import FormControl from '@material-ui/core/FormControl'
import FormGroup from '@material-ui/core/FormGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import { Checkbox, Typography } from '@material-ui/core'
/**
 * A SaveSettingsPopup that which can be used within the filtering/binding infrastructure.
 * @constructor
 * @class SaveSettingsPopup
 * @namespace flexiciousNmsp
 */
export default class MaterialSaveSettingsPopup extends UIComponent {
	constructor() {
		super({}, 'div')
		this.attachClass('flexiciousGrid')
		this.setWidth(800)
		this.setHeight(145)
	}

	/**
	 *
	 * @return {Array}
	 */
	getClassNames() {
		return ['SaveSettingsPopup', 'UIComponent']
	}
	showDialog() {
		const actions = [ToolbarAction.create(this.grid.enableMultiplePreferences ? Constants.SAVE_SETTINGS_REMOVE_ALL_SAVED_PREFERENCES : Constants.SAVE_SETTINGS_CLEAR_SAVED_PREFERENCES, this.onClearSettings.bind(this), true), ToolbarAction.create(Constants.SAVE_SETTINGS_SAVE_PREFERENCES, this.onSaveSettings.bind(this), true), ToolbarAction.create(Constants.SAVE_SETTINGS_CANCEL, this.onCancel.bind(this), true)]

		this.popup = UIUtils.addPopUp(this.render(), this.grid, false, null, Constants.SAVE_SETTINGS_TITLE, actions)
		this.grid.addPopup(this.popup)
	}
	setGrid(val) {
		this.grid = val
		const grid = this.grid

		this.preferencesSet = this.grid.preferencesSet
		this.filtersEnabled = this.grid.getEnableFilters()
		this.preferenceName = this.grid.getCurrentPreferenceInfo() ? grid.getCurrentPreferenceInfo().name : 'Default'
		this.preferenceIsDefault = this.grid.getCurrentPreferenceInfo() ? grid.getCurrentPreferenceInfo().name === grid.getGridPreferencesInfo().defaultPreferenceName : 'Default'
	}

	onClearSettings(evt) {
		this.grid.clearPreferences()
		UIUtils.showMessage('Preferences Cleared!')
		this.grid.removePopup(this.popup)
	}

	onCancel(evt) {
		this.grid.removePopup(this.popup)
	}

	onSaveSettings(domElementdiv) {
		const preferencesToPersist = []

		if (UIUtils.findElementWithClassName(domElementdiv, 'cbPERSIST_COLUMN_ORDER').checked) preferencesToPersist.push(Constants.PERSIST_COLUMN_ORDER)
		if (UIUtils.findElementWithClassName(domElementdiv, 'cbPERSIST_COLUMN_VISIBILITY').checked) preferencesToPersist.push(Constants.PERSIST_COLUMN_VISIBILITY)
		if (UIUtils.findElementWithClassName(domElementdiv, 'cbPERSIST_COLUMN_WIDTH').checked) preferencesToPersist.push(Constants.PERSIST_COLUMN_WIDTH)
		if (UIUtils.findElementWithClassName(domElementdiv, 'cbPERSIST_FILTER').checked) preferencesToPersist.push(Constants.PERSIST_FILTER)
		if (UIUtils.findElementWithClassName(domElementdiv, 'cbPERSIST_SORT').checked) preferencesToPersist.push(Constants.PERSIST_SORT)
		if (UIUtils.findElementWithClassName(domElementdiv, 'cbPERSIST_FOOTER_FILTER_VISIBILITY').checked) preferencesToPersist.push(Constants.PERSIST_FOOTER_FILTER_VISIBILITY)
		if (UIUtils.findElementWithClassName(domElementdiv, 'cbPERSIST_PAGE_SIZE').checked) preferencesToPersist.push(Constants.PERSIST_PAGE_SIZE)
		if (UIUtils.findElementWithClassName(domElementdiv, 'cbPERSIST_PRINT_SETTINGS').checked) preferencesToPersist.push(Constants.PERSIST_PRINT_SETTINGS)

		if (UIUtils.findElementWithClassName(domElementdiv, 'cbPERSIST_SCROLL').checked) {
			preferencesToPersist.push(Constants.PERSIST_VERTICAL_SCROLL)
			preferencesToPersist.push(Constants.PERSIST_HORIZONTAL_SCROLL)
		}
		this.grid.preferencesToPersist = preferencesToPersist.join(',')
		if (this.grid.enableMultiplePreferences) this.grid.persistPreferences(UIUtils.findElementWithClassName(domElementdiv, 'txtPreferenceName').value, UIUtils.findElementWithClassName(domElementdiv, 'cbDefaultPreference').checked)
		else this.grid.persistPreferences()
		if (this.grid.preferencePersistenceMode !== 'server') UIUtils.showMessage('Preferences Saved!')
		this.grid.removePopup(this.popup)
	}

	/**
	 * Initializes the auto complete and watermark plugins
	 */
	render() {
		const prefName = 'The preferences you specify below will be retained when this grid is loaded in the future:'

		if (this.grid.enableMultiplePreferences) {
			return (
				<div>
					<div style={{ float: 'left' }}>
						<span> {Constants.SAVE_SETTINGS_PREFERENCE_NAME}</span>
						<input className={'txtPreferenceName'} value={this.preferenceName} />
						<Checkbox className={'cbDefaultPreference'} defaultChecked={this.preferenceIsDefault}>
							{' '}
							Is Default?
						</Checkbox>
					</div>
					<div style={{ clear: 'both' }} />
				</div>
			)
		}

		return (
			<div>
				<Typography style={{ fontSize: 20, margin: 10 }}>{prefName}</Typography>
				<table style={{ width: '800px', margin: 10 }}>
					<tbody>
						<tr>
							<td>
								<div>
									<FormControl>
										<FormGroup>
											<FormControlLabel control={<Checkbox className={'cbPERSIST_COLUMN_ORDER'} defaultChecked={true} />} label={Constants.SAVE_SETTINGS_ORDER_OF_COLUMNS} />
											<FormControlLabel control={<Checkbox className={'cbPERSIST_COLUMN_VISIBILITY'} defaultChecked={true} />} label={Constants.SAVE_SETTINGS_VISIBILITY_OF_COLUMNS} />
											<FormControlLabel control={<Checkbox className={'cbPERSIST_COLUMN_WIDTH'} defaultChecked={true} />} label={Constants.SAVE_SETTINGS_WIDTHS_OF_COLUMNS} />
										</FormGroup>
									</FormControl>
								</div>
							</td>
							<td>
								<div>
									<FormControl>
										<FormGroup>
											<FormControlLabel control={<Checkbox className={'cbPERSIST_FILTER'} defaultChecked={true} />} label={Constants.SAVE_SETTINGS_FILTER_CRITERIA} />
											<FormControlLabel control={<Checkbox className={'cbPERSIST_SORT'} defaultChecked={true} />} label={Constants.SAVE_SETTINGS_SORT_SETTINGS} />
											<FormControlLabel control={<Checkbox className={'cbPERSIST_SCROLL'} defaultChecked={true} />} label={Constants.SAVE_SETTINGS_SCROLL_POSITIONS} />
										</FormGroup>
									</FormControl>
								</div>
							</td>
							<td>
								<div>
									<FormControl>
										<FormGroup>
											<FormControlLabel control={<Checkbox className={'cbPERSIST_FOOTER_FILTER_VISIBILITY'} defaultChecked={true} />} label={Constants.SAVE_SETTINGS_FILTER_AND_FOOTER_VISIBILITY} />
											<FormControlLabel control={<Checkbox className={'cbPERSIST_PAGE_SIZE'} defaultChecked={true} />} label={Constants.SAVE_SETTINGS_RECORDS_PER_PAGE} />
											<FormControlLabel control={<Checkbox className={'cbPERSIST_PRINT_SETTINGS'} defaultChecked={true} />} label={Constants.SAVE_SETTINGS_PRINT_SETTINGS} />
										</FormGroup>
									</FormControl>
								</div>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		)
	}
}

/**
 *
 * @type {Function}
 * */
MaterialSaveSettingsPopup.prototype.typeName = MaterialSaveSettingsPopup.typeName = 'MaterialSaveSettingsPopup' //for quick inspection
