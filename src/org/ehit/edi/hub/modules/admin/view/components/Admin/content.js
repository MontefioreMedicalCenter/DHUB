import DeliveryControl from "../DeliveryControl";
import DeliveryLog from "../DeliveryLog";
import ErrorLog from "../ErrorLog";
import ManageUser from "../ManageUser";
import PollControl from "../PollControl";
import X12CombineTrigger from "../X12CombineTrigger";

export const adminTabList = [
    { label: 'Dispatch Poll', value: 0, path: '/main/admin', component: PollControl },
    { label: 'Dispatch Delivery', value: 1, path: '/main/admin/detailsComments', component: DeliveryControl },
    { label: 'Triggers', value: 2, path: '/main/admin/codingReview', component: X12CombineTrigger },
    { label: 'Manage User', value: 3, path: '/main/admin/opcdi', component: ManageUser },
    { label: 'Error Log', value: 4, path: '/main/admin/financials', component: ErrorLog },
    { label: 'Delivery Log', value: 5, path: '/main/admin/denials', component: DeliveryLog }
]