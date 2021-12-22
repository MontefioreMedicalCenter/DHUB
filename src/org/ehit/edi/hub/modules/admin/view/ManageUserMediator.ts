import Mediator from "../../../../../../../modules/main/view/Mediator.ts"
import { AdminModel } from "../model/AdminModel.ts"
import { AdminEvent } from "../model/events/AdminEvent.ts"
import { ManageUserEvent } from "../model/events/ManageUserEvent.ts"
import { AdminService } from "../service/AdminService.ts"
import { ManageUserService } from "../service/ManageUserService.ts"
import ManageUser from "./components/ManageUser"

export class ManageUserMediator extends Mediator {
	/*[Inject]*/
	public view: ManageUser
	/*[Inject]*/
	public adminModel: AdminModel = AdminModel.getInstance()

	/*[Inject]*/
	public service: ManageUserService = ManageUserService.getInstance()
	/*[Inject]*/
	public adService: AdminService = AdminService.getInstance()

	// private log: ILogger = this.Log.getLogger('ManageUserMediator')
	// private _facL: ArrayCollection
	// private _serL: ArrayCollection

	/*override*/ public onRegister(view): ManageUserMediator {
		this.view = view
		this.mapListener(this.eventDispatcher, AdminEvent.USERS_AND_ROLES, this.getUsers, AdminEvent)
		this.mapListener(this.eventDispatcher, AdminEvent.ERROR_MSG, this.getUsers, AdminEvent)
		this.mapListener(this.eventDispatcher, AdminEvent.FILL_USER_ROLE, this.popUserRole, AdminEvent)
		this.mapListener(this.view, ManageUserEvent.EDIT_USER, this.editUser, ManageUserEvent)
		this.mapListener(this.view, ManageUserEvent.ADD_USER_START1, this.addNewUser1, ManageUserEvent)
		this.mapListener(this.eventDispatcher, ManageUserEvent.ADD_USER_START2, this.addNewUser2, ManageUserEvent)
		this.mapListener(this.eventDispatcher, ManageUserEvent.ADD_USER_END, this.addNewUser, ManageUserEvent)
		this.mapListener(this.view, ManageUserEvent.DELETE_USER, this.deleteUser, ManageUserEvent)
		this.mapListener(this.view, ManageUserEvent.MANAGE_ROLE, this.manageRole, ManageUserEvent)
		this.mapListener(this.eventDispatcher, ManageUserEvent.SAVE_USER_DONE, this.saveUserDone, ManageUserEvent)
		this.mapListener(this.view, ManageUserEvent.ACTIVE_USER, this.activateUser, ManageUserEvent)
		return this
	}

	private getUsers(event: AdminEvent): void {
		this.view.grid && this.view.grid.setDataProvider(this.adminModel.usersAndRoles)
		this.view.grid && this.view.grid.rebuildBody()

		/*
			if (adminModel.errMsg == null)
			{

				view.errTxt.text="";
				view.grid.dataProvider=adminModel.usersAndRoles;
				view.grid.refreshCells();
			}
			else
				view.errTxt.text=adminModel.errMsg;

	*/
	}

	private popUserRole(event: AdminEvent): void {
		debugger
		this.view.usrRoles = event.eventData
	}

	private editUser(event: ManageUserEvent): void {
		var addUser: AddUser = new AddUser()
		PopUpManager.addPopUp(addUser, this.contextView, true)
		PopUpManager.centerPopUp(addUser)
		this.mediatorMap.createMediator(addUser)
		this.service.editUser('userID')
	}

	private addNewUser1(event: ManageUserEvent): void {
		//Alert.show("addNewUser1")
		this.adService.getAllFacility()
	}

	private addNewUser2(event: ManageUserEvent): void {
		//Alert.show("addNewUser2")
		this.adService.getAllServy()
		this._facL = event.eventData
	}

	private addNewUser(event: ManageUserEvent): void {
		this._serL = event.eventData
		var addUser: AddUser = new AddUser()
		//Alert.show("addNewUser: " + addUser.facL)
		addUser.facL = this._facL
		addUser.serL = this._serL
		//addUser.facLs.dataProvider=_facL;
		//addUser.serLs.dataProvider=_serL;
		PopUpManager.addPopUp(addUser, this.contextView, true)
		PopUpManager.centerPopUp(addUser)
		this.mediatorMap.createMediator(addUser)
		//addUser.userId.setFocus();
	}

	private deleteUser(event: ManageUserEvent): void {
		this.service.deleteUser(event.userFacServ)
	}

	private activateUser(event: ManageUserEvent): void {
		this.service.activateUser(event.userFacServ, event.activate)
	}

	private manageRole(event: ManageUserEvent): void {
		this.service.manageRole(event.userFacServ, event.activate, event.roleId)
	}

	private saveUserDone(event: ManageUserEvent): void {
		//Alert.show("ManageUserMediator:saveUserDone(): " + adminModel.userRoleMap)
		var mrEvent: ManageUserEvent = new ManageUserEvent(ManageUserEvent.MANAGE_ROLE)
		if (this.adminModel.userRoleMap != null) {
			this.service.manageRole4User(this.adminModel.userRoleMap.id.facilityId, this.adminModel.userRoleMap.id.serviceAreaId, this.adminModel.userRoleMap.id.userId, true, this.adminModel.userRoleMap.id.roleId)
		}
	}

	/*override*/ public onRemove(): void {
		this.eventMap.unmapListeners()
		super.onRemove()
	}
}
