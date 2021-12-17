import Mediator from "../../../../../../../modules/main/view/Mediator.ts"
import { AdminModel } from "../model/AdminModel.ts"
import { AdminEvent } from "../model/events/AdminEvent.ts"
import { DispatchDeliveryEvent } from "../model/events/DispatchDeliveryEvent.ts"
import { AdminService } from "../service/AdminService.ts"
import DeliveryControl from "./components/DeliveryControl"
import FileBrowserEditor from "./components/FileBrowserEditor"
import Accept from '../../../../../../../../src/assets/images/accept.png'

export class DeliveryControlMediator extends Mediator {
	/*[Inject]*/
	public view: DeliveryControl

	/*[Inject]*/
	public adminModel: AdminModel = AdminModel.getInstance()

	/*[Inject]*/
	public service: AdminService = AdminService.getInstance()

	// private log: ILogger = this.Log.getLogger('DeliveryControlMediator')

	private listFiles: FileBrowserEditor

	/*[Embed('org/ehit/edi/hub/assets/img/accept.png')]*/
	private static acceptIcon: Class

	/*[Embed('org/ehit/edi/hub/assets/img/deny.png')]*/
	private static denyIcon: Class

	/*override*/ public onRegister(view): void {
		this.view = view
		this.mapListener(this.eventDispatcher, AdminEvent.DELIVERY_CONTROL, this.getDeliveries, AdminEvent)
		this.mapListener(this.eventDispatcher, AdminEvent.ERROR_MSG, this.getDeliveries, AdminEvent)
		this.mapListener(this.view, DispatchDeliveryEvent.DELIVERY_EDITOR, this.dispatchDelivery)
		this.mapListener(this.view, DispatchDeliveryEvent.ACTIVATE_DELIVERY, this.activateDelivery, DispatchDeliveryEvent)
		this.mapListener(this.view, DispatchDeliveryEvent.REMOTE_DIR_LIST, this.getRemoteDirListing)
		//eventMap.mapListener(eventDispatcher, DispatchDeliveryEvent.REMOTE_SUBDIR_LIST, getRemoteDirListing);
		this.mapListener(this.eventDispatcher, DispatchDeliveryEvent.REMOTE_DIR_LIST_RESULT, this.remoteDirListingResult)
	}

	private getDeliveries(event: AdminEvent): void {
		this.view.grid && this.view.grid.setDataProvider(this.adminModel.deliveryControl)
		this.view.grid && this.view.grid.rebuildBody()
	}

	private dispatchDelivery(event: DispatchDeliveryEvent): void {
		// var deliveryEditor: DeliveryEditor = new DeliveryEditor()
		// deliveryEditor.height = this.contextView.height - 50
		// deliveryEditor.width = this.contextView.width - 50
		// deliveryEditor.label = 'Deliver Payload to : ' + event.deliveryId
		// PopUpManager.addPopUp(deliveryEditor, this.contextView, true)
		// PopUpManager.centerPopUp(deliveryEditor)
		// deliveryEditor.deliveryControlId = event.deliveryId
		// this.mediatorMap.createMediator(deliveryEditor)
		this.view.setState({deliveryEditor : true})
	}

	private activateDelivery(event: DispatchDeliveryEvent): void {
		this.service.activateDelivery(event.deliveryId, event.isActivated)
	}

	private getRemoteDirListing(event: DispatchDeliveryEvent): void {
		// this.listFiles = new FileBrowserEditor()
		// this.listFiles.height = this.contextView.height - 50
		// this.listFiles.width = this.contextView.width - 50
		// PopUpManager.addPopUp(this.listFiles, this.contextView, true)
		// PopUpManager.centerPopUp(this.listFiles)
		// this.service.getRemoteDirListing('Delivery', event.deliveryId, event.dirName)
		// this.listFiles.pollControlId = event.deliveryId
		this.view.setState({browseButton : true})
		this.service.getRemoteDirListing('Delivery', event.deliveryId, event.dirName)
	}

	private remoteDirListingResult(event: DispatchDeliveryEvent): void {
		if (event.dirListErrorMsg == null) {
			if (event.dirListResult != null) {
			// 	this.listFiles.title = event.dirListResult.getItemAt(0).fileName + '  - Successfully Connected'
			// 	this.listFiles.titleIcon = DeliveryControlMediator.acceptIcon
			// 	event.dirListResult.removeItemAt(0)
			// 	this.listFiles.grid.dataProvider = event.dirListResult
			// 	this.listFiles.grid.refreshCells()
			var title = event.dirListResult.getItemAt(0).fileName
			var titleIcon = Accept
			event.dirListResult.removeItemAt(0)
			this.view.fileBrowserEditor.grid.setDataProvider(event.dirListResult)
			// var dataProviderFileBrowserEditor = event.dirListResult
			this.view.setState({title: title, headerIcon:titleIcon})
			}
		} else {
			this.listFiles.title = 'Failed To Connect'
			this.listFiles.titleIcon = DeliveryControlMediator.denyIcon
			this.listFiles.errTxt.text = event.dirListErrorMsg
		}
	}

	/*override*/ public onRemove(): void {
		this.eventMap.unmapListeners()
		super.onRemove()
	}
}
