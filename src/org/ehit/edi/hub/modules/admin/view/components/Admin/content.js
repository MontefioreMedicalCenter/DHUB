// import DeliveryControl from "../DeliveryControl";
// import DeliveryLog from "../DeliveryLog";
// import ErrorLog from "../ErrorLog";
// import ManageUser from "../ManageUser";
// import PollControl from "../PollControl";
// import X12CombineTrigger from "../X12CombineTrigger";

export const adminTabListTab = [
    { label: 'Dispatch Poll', value: 0, path: '/main/admin'},
    { label: 'Dispatch Delivery', value: 1, path: '/main/admin/dispatchDelivery' },
    { label: 'Triggers', value: 2, path: '/main/admin/triggers'},
    { label: 'Manage User', value: 3, path: '/main/admin/manageUser'},
    { label: 'Error Log', value: 4, path: '/main/admin/errorLog'}//,
    //{ label: 'Delivery Log', value: 5, path: '/main/admin/deliveryLog'}
]



export const tabStyles = {
	backgroundColor: '#c0cec6',
	tabColor: 'black',
	indicatorHeight: 2,
	indicatorColor: 'black',
	textTransform: 'none',
	color: "white",
	boxShadow: '0px 2px 2px 0px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 2px 2px -1px rgba(0,0,0,0.12)',
	containerPadding: 2,
	tabHeight: '50vh',
}