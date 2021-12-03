import Login from "../../org/ehit/edi/hub/user/view/components/Login"

const ROUTES = [
	{ name: 'login', url: '/', private: false, component: Login, exact: true }
]

export const PRIVATE_ROUTES = [
	// {
	// 	name: 'Audit Finding',
	// 	url: '/main/auditFinding',
	// 	private: true,
	// 	component: AuditFinding,
	// 	exact: false
	// }
]

export default ROUTES

