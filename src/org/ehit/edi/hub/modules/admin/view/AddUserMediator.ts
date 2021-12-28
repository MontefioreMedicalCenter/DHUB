import { toast } from 'react-toastify'
import Mediator from '../../../../../../../modules/main/view/Mediator.ts'
import { EdiUserBase } from '../../../user/model/vo/EdiUserBase.ts'
import EdiUserRoleMap from '../../../user/model/vo/EdiUserRoleMap.ts'
import { EdiUserRoleMapPK } from '../../../user/model/vo/EdiUserRoleMapPK.ts'
import { AdminModel } from '../model/AdminModel.ts'
import { ManageUserEvent } from '../model/events/ManageUserEvent.ts'
import { ManageUserService } from '../service/ManageUserService.ts'
import AddUser from './components/AddUser'

export class AddUserMediator extends Mediator {
	public view: AddUser
	public service: ManageUserService = ManageUserService.getInstance()
	public adminModel: AdminModel = AdminModel.getInstance()
	// public usernameValidator: Validator
	private _urm: EdiUserRoleMap
	// private log: ILogger = this.Log.getLogger('AddUserMediator')

	public onRegister(view): AddUserMediator {
		this.view = view
		// this.mapListener(this.view, CloseEvent.CLOSE, this.dispose, CloseEvent)
		// this.usernameValidator.source = this.view.usernameValidatorSource
		// this.usernameValidator.property = this.view.usernameValidatorProperty
		this.mapListener(this.view, ManageUserEvent.SAVE_USER, this.saveUser, ManageUserEvent)
		this.mapListener(this.eventDispatcher, ManageUserEvent.SAVE_USER_DONE, this.saveUserDone, ManageUserEvent)
		return this
	}

	private saveUser(event: ManageUserEvent): void {
		var numb_regex: RegExp = /^[a-zA-Z]+([\s][a-zA-Z]+)*$/
		if (!numb_regex.test(this.view.state.userId)) {
			toast.error('User Id should be string')
			this.view.setState({ erroruserId: true })
		} else if (this.view.state.userId && this.view.state.firstname && this.view.state.lastName && this.view.state.address1 && this.view.state.address2 && this.view.state.city && this.view.state.stateCity && this.view.state.zip && this.view.state.phone && this.view.state.email) {
			var user: EdiUserBase = new EdiUserBase()
			user.userActiveFlag = 1
			user.userId = this.view.state.userId
			user.userFirstName = this.view.state.firstname
			user.userLastName = this.view.state.lastName
			user.userAddress1 = this.view.state.address1
			user.userAddress2 = this.view.state.address2
			user.userCity = this.view.state.city
			user.userState = this.view.state.stateCity
			user.userZip = this.view.state.zip
			user.userPhone = this.view.state.phone
			user.userEmail = this.view.state.email
			var urmpk: EdiUserRoleMapPK = new EdiUserRoleMapPK()
			var urm: EdiUserRoleMap = new EdiUserRoleMap()
			//urmpk.facilityId=view.facLs.selectedItem.facilityId
			//urmpk.serviceAreaId=view.serLs.selectedItem.id.serviceAreaId
			urmpk.userId = this.view.state.userId
			urmpk.roleId = 'None'
			//Alert.show("view.serLs.selectedItem: " + view.serLs.selectedItem.id.serviceAreaId)
			urm.id = urmpk
			this._urm = urm
			this.adminModel.userRoleMap = urm
			//Alert.show("urm.id: " + _urm.id.facilityId + "/" + _urm.id.serviceAreaId);
			this.service.addNewUser(user)
			this.view.props.closePopup()
		} else {
			!this.view.state.userId ? this.view.setState({ erroruserId: true }) : this.view.setState({ erroruserId: false })
			!this.view.state.firstname ? this.view.setState({ errorfirstName: true }) : this.view.setState({ errorfirstName: false })
			!this.view.state.lastName ? this.view.setState({ errorUserLastName: true }) : this.view.setState({ errorUserLastName: false })
			!this.view.state.address1 ? this.view.setState({ errorUserAddress1: true }) : this.view.setState({ errorUserAddress1: false })
			!this.view.state.address2 ? this.view.setState({ errorUserAddress2: true }) : this.view.setState({ errorUserAddress2: false })
			!this.view.state.city ? this.view.setState({ errorUserCity: true }) : this.view.setState({ errorUserCity: false })
			!this.view.state.stateCity ? this.view.setState({ errorUserState: true }) : this.view.setState({ errorUserState: false })
			!this.view.state.zip ? this.view.setState({ errorUserZip: true }) : this.view.setState({ errorUserZip: false })
			!this.view.state.phone ? this.view.setState({ errorUserPhone: true }) : this.view.setState({ errorUserPhone: false })
			!this.view.state.email ? this.view.setState({ errorUserEmail: true }) : this.view.setState({ errorUserEmail: false })
		}
	}

	//saveUserDone
	private saveUserDone(event: ManageUserEvent): void {
		var mrEvent: ManageUserEvent = new ManageUserEvent(ManageUserEvent.MANAGE_ROLE)
		if (this._urm != null) {
			mrEvent.userRoleMap = this._urm
			mrEvent.activate = true
			this.dispatch(mrEvent)
		}
	}

	public dispose(event: CloseEvent): void {
		this.onRemove()
	}

	public onRemove(): void {
		PopUpManager.removePopUp(this.view)
		this.eventMap.unmapListeners()
		this.mediatorMap.removeMediatorByView(this.view)
		super.onRemove()
	}
}
