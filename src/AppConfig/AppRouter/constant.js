import Admin from "../../org/ehit/edi/hub/modules/admin/view/components/Admin"
import BankEFT from "../../org/ehit/edi/hub/modules/BankEFT/view/components/BankEFT"
import Claims from "../../org/ehit/edi/hub/modules/claims/view/components/Claims"
import ClaimStatus from "../../org/ehit/edi/hub/modules/claimStatus/view/components"
import Interfaces from "../../org/ehit/edi/hub/modules/interfaces/view/components/Interfaces"
import Login from "../../org/ehit/edi/hub/user/view/components/Login"
import PortalCanvas from "../../org/ehit/edi/hub/user/view/components/PortalCanvas"

const ROUTES = [
	{ name: 'login', url: '/', private: false, component: Login, exact: true },
	{ name: 'main', url: '/main', private: true, component: PortalCanvas, exact: false },
]

export const PRIVATE_ROUTES = [
	{
		name: 'Claims',
		url: '/main/claims',
		private: true,
		component: Claims,
		exact: false
	},
	{
		name: 'Remittance',
		url: '/main/remittance',
		private: true,
		component: ClaimStatus,
		exact: false
	},
	{
		name: 'Bank EFT',
		url: '/main/bankEFT',
		private: true,
		component: BankEFT,
		exact: false
	},
	{
		name: 'Interface',
		url: '/main/interface',
		private: true,
		component: Interfaces,
		exact: false
	},
	{
		name: 'Admin',
		url: '/main/admin',
		private: true,
		component: Admin,
		exact: false
	}
]

export default ROUTES

