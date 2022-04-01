import Admin from "../../org/ehit/edi/hub/modules/admin/view/components/Admin"
import DeliveryControl from "../../org/ehit/edi/hub/modules/admin/view/components/DeliveryControl"
import DeliveryLog from "../../org/ehit/edi/hub/modules/admin/view/components/DeliveryLog"
import ErrorLog from "../../org/ehit/edi/hub/modules/admin/view/components/ErrorLog"
import ManageUser from "../../org/ehit/edi/hub/modules/admin/view/components/ManageUser"
import PollControl from "../../org/ehit/edi/hub/modules/admin/view/components/PollControl"
import X12CombineTrigger from "../../org/ehit/edi/hub/modules/admin/view/components/X12CombineTrigger"
import BankEFT from "../../org/ehit/edi/hub/modules/BankEFT/view/components/BankEFT"
import Claims from "../../org/ehit/edi/hub/modules/claims/view/components/Claims"
import Remits from "../../org/ehit/edi/hub/modules/remits/view/components/Remits"
import Interfaces from "../../org/ehit/edi/hub/modules/interfaces/view/components/Interfaces"
import Login from "../../org/ehit/edi/hub/user/view/components/Login"
import PortalCanvas from "../../org/ehit/edi/hub/user/view/components/PortalCanvas"
import RemitsTracker from "../../org/ehit/edi/hub/modules/remits/view/components/RemitsTracker"
import MonthlyRemitRpt from "../../org/ehit/edi/hub/modules/remits/view/components/MonthlyRemitRpt"
import BankEFTTracker from "../../org/ehit/edi/hub/modules/BankEFT/view/components/BankEFTTracker"
import BankEFTSearch from "../../org/ehit/edi/hub/modules/BankEFT/view/components/BankEFTSearch"
import RemitQuickSearch from "../../org/ehit/edi/hub/modules/remits/view/components/RemitQuickSearch"

const ROUTES = [
	{ name: 'login', url: '/', private: false, component: Login, exact: true },
	{ name: 'main', url: '/main', private: true, component: PortalCanvas, exact: false }
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
		component: Remits,
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

export const remitsTabList = [
	{
		name: 'TrackRemittance',
		url: '/main/remittance',
		private: true,
		component: RemitsTracker,
		exact: true
	},
	{
		name: 'QuickSearch',
		url: '/main/remittance/quicksearch',
		private: true,
		component: RemitQuickSearch,
		exact: true
	},
	{
		name: 'RemitMonthlyReport',
		url: '/main/remittance/remitsmonthlyreport',
		private: true,
		component: MonthlyRemitRpt,
		exact: true
	}
]

export const bankEftTabList = [
	{
		name: 'TrackBankEFT',
		url: '/main/bankEFT',
		private: true,
		component: BankEFTTracker,
		exact: true
	},
	{
		name: 'EFTQuickSearch',
		url: '/main/bankEFT/bankEFTSearch',
		private: true,
		component: BankEFTSearch,
		exact: true
	}
]

export const adminTabList = [
	{
		name: 'DispatchPoll',
		url: '/main/admin',
		private: true,
		component: PollControl,
		exact: true
	},
	{
		name: 'DispatchDelivery',
		url: '/main/admin/dispatchDelivery',
		private: true,
		component: DeliveryControl,
		exact: true
	},
	{
		name: 'Triggers',
		url: '/main/admin/triggers',
		private: true,
		component: X12CombineTrigger,
		exact: true
	},
	{
		name: 'ManageUser',
		url: '/main/admin/manageUser',
		private: true,
		component: ManageUser,
		exact: true
	},
	{
		name: 'ErrorLog',
		url: '/main/admin/errorLog',
		private: true,
		component: ErrorLog,
		exact: true
	},
	{
		name: 'DeliveryLog',
		url: '/main/admin/deliveryLog',
		private: true,
		component: DeliveryLog,
		exact: true
	}
]

export default ROUTES

