import ArrayCollection from '../../../../../../../vo/ArrayCollection'
import VoBase from '../../../../../../../vo/VoBase'

export class EdiUserBase extends VoBase {
	private _ediUserRoleMaps: ArrayCollection = new ArrayCollection()
	private _ediMemberships: ArrayCollection = new ArrayCollection()
	private _userActiveFlag: number
	private _userAddress1: string
	private _userAddress2: string
	private _userCity: string
	private _userEmail: string
	private _userFirstName: string
	private _userLastName: string
	protected _userId: string
	private _userPhone: string
	private _userPhone2: string
	private _userState: string
	private _userZip: string

	public set ediUserRoleMaps(value: ArrayCollection) {
		this._ediUserRoleMaps = value
	}

	public get ediUserRoleMaps(): ArrayCollection {
		return this._ediUserRoleMaps
	}

	public set ediMemberships(value: ArrayCollection) {
		this._ediMemberships = value
	}

	public get ediMemberships(): ArrayCollection {
		return this._ediMemberships
	}

	public set userActiveFlag(value: number) {
		this._userActiveFlag = value
	}

	public get userActiveFlag(): number {
		return this._userActiveFlag
	}

	public set userAddress1(value: string) {
		this._userAddress1 = value
	}

	public get userAddress1(): string {
		return this._userAddress1
	}

	public set userAddress2(value: string) {
		this._userAddress2 = value
	}

	public get userAddress2(): string {
		return this._userAddress2
	}

	public set userCity(value: string) {
		this._userCity = value
	}

	public get userCity(): string {
		return this._userCity
	}

	public set userEmail(value: string) {
		this._userEmail = value
	}

	public get userEmail(): string {
		return this._userEmail
	}

	public set userFirstName(value: string) {
		this._userFirstName = value
	}

	public get userFirstName(): string {
		return this._userFirstName
	}

	public set userLastName(value: string) {
		this._userLastName = value
	}

	public get userLastName(): string {
		return this._userLastName
	}

	public set userId(value: string) {
		this._userId = value
	}

	public get userId(): string {
		return this._userId
	}

	public set userPhone(value: string) {
		this._userPhone = value
	}

	public get userPhone(): string {
		return this._userPhone
	}

	public set userPhone2(value: string) {
		this._userPhone2 = value
	}

	public get userPhone2(): string {
		return this._userPhone2
	}

	public set userState(value: string) {
		this._userState = value
	}

	public get userState(): string {
		return this._userState
	}

	public set userZip(value: string) {
		this._userZip = value
	}

	public get userZip(): string {
		return this._userZip
	}

	/*		public function readExternal(input:IDataInput):void
		{
			_ediUserRoleMaps=input.readObject() as ArrayCollection;
			_userActiveFlag=input.readObject() as int;
			_userAddress1=input.readObject() as String;
			_userAddress2=input.readObject() as String;
			_userCity=input.readObject() as String;
			_userEmail=input.readObject() as String;
			_userFirstName=input.readObject() as String;
			_userLastName=input.readObject() as String;
			_userId=input.readObject() as String;
			_userPhone=input.readObject() as String;
			_userPhone2=input.readObject() as String;
			_userState=input.readObject() as String;
			_userZip=input.readObject() as String;
		}

		public function writeExternal(output:IDataOutput):void
		{
			output.writeObject(_ediUserRoleMaps);
			output.writeObject(_userActiveFlag);
			output.writeObject(_userAddress1);
			output.writeObject(_userAddress2);
			output.writeObject(_userCity);
			output.writeObject(_userEmail);
			output.writeObject(_userFirstName);
			output.writeObject(_userLastName);
			output.writeObject(_userId);
			output.writeObject(_userPhone);
			output.writeObject(_userPhone2);
			output.writeObject(_userState);
			output.writeObject(_userZip);
		}
		*/
	public hasRole(role: string): boolean {
		if (this.isAdmin() === true) return true
		var grantedRoles: ArrayCollection = this.ediUserRoleMaps
		for (var i: Object in grantedRoles) {
			var userRole: EdiUserRoleMap = grantedRoles[i]
			if (userRole.id.roleId == role && userRole.accessActiveFlag == 1) return true
		}

		return false
	}

	public isAdmin(): boolean {
		var grantedRoles: ArrayCollection = this.ediUserRoleMaps
		for (var i: Object in grantedRoles) {
			var userRole: EdiUserRoleMap = grantedRoles[i]
			if (userRole.id.roleId === 'Admin' && userRole.accessActiveFlag === 1) return true
		}

		return false
	}
}
