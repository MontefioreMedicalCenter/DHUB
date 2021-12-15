import { toast } from "react-toastify"
import Mediator from "../../../../../../../modules/main/view/Mediator.ts"
import { AdminModel } from "../model/AdminModel.ts"
import { AdminEvent } from "../model/events/AdminEvent.ts"
import { DispatchPollEvent } from "../model/events/DispatchPollEvent.ts"
import { AdminService } from "../service/AdminService.ts"
import FileBrowserEditor from "./components/FileBrowserEditor"
import PollControl from "./components/PollControl"
import Accept from '../../../../../../../../src/assets/images/accept.png'

export class PollControlMediator extends Mediator {
	/*[Inject]*/
	public view: PollControl

	/*[Inject]*/
	public adminModel: AdminModel = AdminModel.getInstance()

	/*[Inject]*/
	public service: AdminService = AdminService.getInstance()

	// private log: ILogger = this.Log.getLogger('PollControlMediator')

	private listFiles: FileBrowserEditor

	/*[Embed('org/ehit/edi/hub/assets/img/accept.png')]*/
	private static acceptIcon: Class

	/*[Embed('org/ehit/edi/hub/assets/img/deny.png')]*/
	private static denyIcon: Class

	/*override*/ public onRegister(view): PollControlMediator {
		this.view = view
		this.mapListener(this.eventDispatcher, AdminEvent.POLL_CONTROL, this.getPollers, AdminEvent)
		this.mapListener(this.eventDispatcher, AdminEvent.POLLER_STATUS, this.setPollerStatus, AdminEvent)
		this.mapListener(this.view, DispatchPollEvent.DISPATCH_POLL, this.dispatchPoll)
		this.mapListener(this.view, DispatchPollEvent.ACTIVATE_POLL, this.activatePoll, DispatchPollEvent)
		this.mapListener(this.view, DispatchPollEvent.REMOTE_DIR_LIST, this.getRemoteDirListing)
		//eventMap.mapListener(eventDispatcher, DispatchPollEvent.REMOTE_SUBDIR_LIST, getRemoteDirListing); commented in flexcode
		this.mapListener(this.eventDispatcher, DispatchPollEvent.REMOTE_DIR_LIST_RESULT, this.remoteDirListingResult)
		return this
	}

	private getPollers(event: AdminEvent): void {
		// this.view.grid.dataProvider = this.adminModel.pollControl
		this.view.grid.setDataProvider(this.adminModel.pollControl)
		// this.view.grid.refreshCells()
		this.view.grid.rebuildBody()
	}

	private setPollerStatus(event: AdminEvent): void {
		// this.view.pollStatusChk.selected = this.adminModel.pollerStatus
		this.view.setState({pollStatusChk : this.adminModel.pollerStatus })
	}

	private dispatchPoll(event: DispatchPollEvent): void {
		this.service.dispatchPoll(event.pollId)
	}

	private activatePoll(event: DispatchPollEvent): void {
		if (event.pollId == 'DeliveryHub') this.service.activatePoller(event.isActivated)
		else this.service.activatePoll(event.pollId, event.isActivated)
	}

	private getRemoteDirListing(event: DispatchPollEvent): void {
		// toast.warning(" Need to Implement getRemoteDirListing")
		// this.listFiles = new FileBrowserEditor()
		// this.listFiles.height = this.contextView.height - 50
		// this.listFiles.width = this.contextView.width - 50
		// PopUpManager.addPopUp(this.listFiles, this.contextView, true)
		// PopUpManager.centerPopUp(this.listFiles)
		this.service.getRemoteDirListing('Poll', event.pollId, event.dirName)
		// this.listFiles.pollControlId=event.pollId
		var pollControlId = event.pollId
		this.view.setState({ browseButton : true, pollControlId : pollControlId})
	}

	private remoteDirListingResult(event: DispatchPollEvent): void {
		if (event.dirListErrorMsg == null) {
			// this.listFiles.title = event.dirListResult.getItemAt(0).fileName + '  - Successfully Connected'
			// this.listFiles.titleIcon = PollControlMediator.acceptIcon
			// event.dirListResult.removeItemAt(0)
			// this.listFiles.grid.dataProvider = event.dirListResult
			// this.listFiles.grid.refreshCells()
			var title = event.dirListResult.getItemAt(0).fileName
			var titleIcon = Accept
			event.dirListResult.removeItemAt(0)
			var dataProviderFileBrowserEditor = event.dirListResult
			this.view.setState({title: title, dataProviderFileBrowserEditor: dataProviderFileBrowserEditor, headerIcon:titleIcon})
		} else {
			// this.listFiles.title = 'Failed To Connect'
			// this.listFiles.titleIcon = PollControlMediator.denyIcon
			// this.listFiles.errTxt.text = event.dirListErrorMsg
			var title = 'Failed To Connect'
			this.view.setState({title: title})
		}
	}

	/*override*/ public onRemove(): void {
		this.eventMap.unmapListeners()
		super.onRemove()
	}
}
