import React from 'react'
import ServiceProxyBase from '../../service/cfc/ServiceProxyBase'
import { UIUtils, Constants } from '../../flexicious'
import AlertDialog from './AlertDialog'
import store from '../../AppConfig/store/configureStore'
import { removeMessage } from '../../AppConfig/store/actions/homeAction'
// import AdvancedDialog from './AdvancedDialog';
// import { Loader2 } from '../assets/Resources';

export default class LoaderBar extends React.Component {
	constructor(props) {
		super(props)
		// this.state = {
		//     busy: false
		// }
		this.state = {
			showErrorMessage: false,
			errorMessage: ''
		}

		ServiceProxyBase.progressHook(({ busy, message }) => {
			// this.setState({ busy });
			if (busy) UIUtils.attachClass(document.body, 'waiting')
			else UIUtils.detachClass(document.body, 'waiting')

			if (Constants.isMobileBrowser()) {
				document.body.style.opacity = busy ? '0.5' : '1'
			}

			this.homeContainer = document.getElementById('main-container')

			if (this.homeContainer) {
				this.homeContainer.style.cssText = busy ? 'pointer-events: none' : ''
				const childElements = document.body.children
				const dialogElements = []

				for (let idx = 0; idx < childElements.length; idx++) {
					const childEle = childElements[idx]

					if (childEle.getAttribute('role') === 'dialog') {
						dialogElements.push(childEle)
					}
				}

				dialogElements.forEach(dialogEle => {
					dialogEle.children[0].style.background = busy ? '#FFF' : ''
					dialogEle.children[0].style.zIndex = busy ? '1' : ''
					dialogEle.children[0].style.opacity = busy ? '0.5' : '1'
				})
			}

			if (message) {
				this.setState({ showErrorMessage: true, errorMessage: message })
			}
		})
	}

	render = () => window.location.origin.indexOf('localhost') >= 0 && this.state.showErrorMessage && <AlertDialog title="Error" content={this.state.errorMessage} action="Ok" onClose={() => store.dispatch(removeMessage())} />
}
