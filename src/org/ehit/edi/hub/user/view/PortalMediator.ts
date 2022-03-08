import { toast } from "react-toastify";
import Mediator from "../../../../../../modules/main/view/Mediator.ts";
import { AdminEvent } from "../../modules/admin/model/events/AdminEvent.ts";
import { AdminService } from "../../modules/admin/service/AdminService.ts";
import { ClaimsEvent } from "../../modules/claims/model/events/ClaimsEvent.ts";
import { ClaimsService } from "../../modules/claims/service/ClaimsService.ts";
import LoginModel from "../model/LoginModel";
import { LoginService } from "../service/LoginService.ts";

	export class PortalMediator extends Mediator
	{
		/*[Inject]*/
		public portalCanvas:PortalCanvas;

		/*[Inject]*/
		public loginModel:LoginModel;
		/*[Inject]*/
		public loginService:LoginService = LoginService.getInstance();
		/*[Inject]*/
		public adminService:AdminService = AdminService.getInstance();
		/*[Inject]*/
		public claimsService:ClaimsService = ClaimsService.getInstance();
		

		/*[Inject('serverUrl')]*/
		public serverUrl:string;

		// private _moduleInfo:IModuleInfo;
		// private moduleObj:DisplayObject;



		public onRegister():PortalMediator
		{
			// this.mapListener(this.portalCanvas.systemManager, FlexEvent.IDLE, this.onUserIDLE);
			// var dateFormatter:DateFormatter=new DateFormatter();
			// dateFormatter.formatString="EEEE, MMM. D, YYYY - H:NN:SS A";
			// this.portalCanvas.linkbar.dataProvider=[dateFormatter.format(new Date()), this.loginModel.user.userId+'  |  '+this.loginModel.serviceAreaName, 'logout'];
			// this.mapListener(this.eventDispatcher, AdminEvent.MAP_USER_ROLE, this.whenUser, AdminEvent);//NEED TO IMPLEMENT
			// this.whenUser();//NEED TO IMPLEMENT
			// this.mapListener(this.portalCanvas.linkbar, ItemClickEvent.ITEM_CLICK, this.logoutUser, ItemClickEvent);
			// this.mapListener(this.eventDispatcher, LoginEvent.USER, this.whenUser, LoginEvent);//NEED TO IMPLEMENT
			// this.mapListener(this.portalCanvas.viewStack, Event.CHANGE, this.refreshTab, Event);//Directly called in handleTabChangefunction
			return this
		}


		// private onUserIDLE(e:FlexEvent):void
		// {
		// 	// 35 mins Elapsed while Being Idle!!
		// 	if (e.currentTarget.mx_internal::idleCounter == 18000)
		// 	{
		// 		this.eventMap.unmapListeners();
		// 		Alert.show("Session time Out");
		// 		this.loginService.logOut();
		// 	}
		// }


		private logoutUser(event:ItemClickEvent):void
		{	
			if (event.label.toLocaleLowerCase().indexOf('logout')>=0) 
			{
				this.loginService.logOut();
			}
		}

		
		private whenUser():void
		{
			var index:number=0;
			var hasAdmin:boolean=this.loginModel.user.hasRole("Admin");
			var hasClaims:boolean=this.loginModel.user.hasRole("Claims")
			var hasRemits:boolean=this.loginModel.user.hasRole("Remits");
			var hasInterfaces:boolean=this.loginModel.user.hasRole("Interfaces");
			var hasBankEFT:boolean=this.loginModel.user.hasRole("Bank EFT");
			var hasClaimStatus:boolean=false 
			
			if (hasClaims)
			{
				var claimsTab:NavigatorContent=new NavigatorContent();
				claimsTab.label="Claims"
				var claims:Claims=new Claims()
				claims.initialIndex=index
				claimsTab.addElement(claims);
				this.portalCanvas.viewStack.addElementAt(claimsTab, index);
				index++
			}
			if (hasRemits)
			{
				var remitsTab:NavigatorContent=new NavigatorContent();
				remitsTab.label="Remittance"
				var remits:Remits=new Remits();
				remits.initialIndex=index
				remitsTab.addElement(remits);
				this.portalCanvas.viewStack.addElementAt(remitsTab, index);
				index++
				
			}
			if (hasBankEFT)  
			{
				var bankEFT:NavigatorContent=new NavigatorContent();
				bankEFT.label="Bank EFT"
				var eft:BankEFT=new BankEFT()
				eft.initialIndex=index
				bankEFT.addElement(eft);
				this.portalCanvas.viewStack.addElementAt(bankEFT, index);
				index++
			}
			if (hasInterfaces)
			{
				var interfaceTab:NavigatorContent=new NavigatorContent();
				interfaceTab.label="Interfaces"
				var interfaces:Interfaces=new Interfaces()
				interfaces.initialIndex=index
				interfaceTab.addElement(interfaces);
				this.portalCanvas.viewStack.addElementAt(interfaceTab, index);
				index++
			}
			
			if (hasClaimStatus)
			{
				var claimStatusTab:NavigatorContent=new NavigatorContent();
				claimStatusTab.label="Claim Status"
				var claimStatus:ClaimStatus=new ClaimStatus()
				claimStatus.initialIndex=index
				claimStatusTab.addElement(claimStatus);
				this.portalCanvas.viewStack.addElementAt(claimStatusTab, index);
				index++
			}
			if (hasAdmin)
			{
				var adminTab:NavigatorContent=new NavigatorContent();
				adminTab.label="Admin"
				var admin:Admin=new Admin()
				admin.initialIndex=index
				adminTab.addElement(admin);
				this.portalCanvas.viewStack.addElementAt(adminTab, index);
				index++
				
			}
			if (hasClaims || hasRemits || hasInterfaces || hasAdmin)
			{
				
				var userTab:NavigatorContent=new NavigatorContent();
				userTab.label=this.loginModel.user.userId + '\'sTab'
				var myTab:MyTab=new MyTab()
				myTab.initialIndex=index
				userTab.addElement(myTab);
				this.portalCanvas.viewStack.addElementAt(userTab, index);
			}
			
			
			
			
		}

		

		private refreshTab(value):void 
		{
			// var labelStr:string=(<NavigatorContent>this.portalCanvas.viewStack.getChildAt(this.portalCanvas.viewStack.selectedIndex) ).label
			// if(value === "/main/claims"){
				// this.dispatch(new ClaimsEvent(ClaimsEvent.GET_CLAIMS));
				// this.claimsService.findClaimProcesses();//event.startDate, event.endDate
			// 	this.dispatch(new RemitsEvent(RemitsEvent.REMOVE_REMITS));
			// 	this.dispatch(new InterfacesEvent(InterfacesEvent.REMOVE_INTERFACES));
			// 	this.dispatch(new InterfacesEvent(AdminEvent.REMOVE_ADMIN));
			// }
			// if (labelStr == "Claims")
			// {
			// 	this.dispatch(new ClaimsEvent(ClaimsEvent.GET_CLAIMS));
			// 	this.dispatch(new RemitsEvent(RemitsEvent.REMOVE_REMITS));
			// 	this.dispatch(new InterfacesEvent(InterfacesEvent.REMOVE_INTERFACES));
			// 	this.dispatch(new InterfacesEvent(AdminEvent.REMOVE_ADMIN));
			// }
			// if (labelStr == "Remittance")
			// {
			// 	this.dispatch(new RemitsEvent(RemitsEvent.GET_REMITS));
			// 	this.dispatch(new ClaimsEvent(ClaimsEvent.REMOVE_CLAIMS))
			// 	this.dispatch(new InterfacesEvent(InterfacesEvent.REMOVE_INTERFACES));
			// 	this.dispatch(new AdminEvent(AdminEvent.REMOVE_POLL_LOG));

			// }
			// if (labelStr == "Bank EFT")
			// {
			// 	this.dispatch(new BankEFTEvent(BankEFTEvent.GET_BANKEFT)); 
      		// 	this.dispatch(new RemitsEvent(RemitsEvent.REMOVE_REMITS));
			// 	this.dispatch(new ClaimsEvent(ClaimsEvent.REMOVE_CLAIMS))
			// 	this.dispatch(new InterfacesEvent(InterfacesEvent.REMOVE_INTERFACES));
			// 	this.dispatch(new AdminEvent(AdminEvent.REMOVE_POLL_LOG));
				
			// }
			// if (labelStr == "Eligibility")
			// {
			// 	this.dispatch(new ClaimsEvent(ClaimsEvent.REMOVE_CLAIMS));
			// 	this.dispatch(new RemitsEvent(RemitsEvent.REMOVE_REMITS));
			// 	this.dispatch(new InterfacesEvent(InterfacesEvent.REMOVE_INTERFACES));
			// 	this.dispatch(new AdminEvent(AdminEvent.REMOVE_POLL_LOG));

			// }
			// if (labelStr == "Claim Status")
			// {
			// 	this.dispatch(new ClaimStatusEvent(ClaimStatusEvent.GET_CLAIMSTATUS));
			// 	this.dispatch(new ClaimsEvent(ClaimsEvent.REMOVE_CLAIMS));
			// 	this.dispatch(new RemitsEvent(RemitsEvent.REMOVE_REMITS));
			// 	this.dispatch(new InterfacesEvent(InterfacesEvent.REMOVE_INTERFACES));
			// 	this.dispatch(new AdminEvent(AdminEvent.REMOVE_POLL_LOG));

			// }
			// if (labelStr == "Interfaces")
			// {
			// 	this.dispatch(new InterfacesEvent(InterfacesEvent.GET_INTERFACES));
			// 	this.dispatch(new ClaimsEvent(ClaimsEvent.REMOVE_CLAIMS));
			// 	this.dispatch(new RemitsEvent(RemitsEvent.REMOVE_REMITS));
			// 	this.dispatch(new AdminEvent(AdminEvent.REMOVE_POLL_LOG));

			// }
			// if (labelStr == "Admin")
			// {
			// 	this.dispatch(new AdminEvent(AdminEvent.GET_POLL_CONTROL));  
			// 	this.dispatch(new ClaimsEvent(ClaimsEvent.REMOVE_CLAIMS));
			// 	this.dispatch(new RemitsEvent(RemitsEvent.REMOVE_REMITS));
			// 	this.dispatch(new InterfacesEvent(InterfacesEvent.REMOVE_INTERFACES));
			// }
			// if (labelStr.indexOf("Tab") >= 0)
			// {
			// 	this.dispatch(new AdminEvent(AdminEvent.GET_POLL_LOG));
			// 	this.dispatch(new ClaimsEvent(ClaimsEvent.REMOVE_CLAIMS));
			// 	this.dispatch(new RemitsEvent(RemitsEvent.REMOVE_REMITS));
			// 	this.dispatch(new InterfacesEvent(InterfacesEvent.REMOVE_INTERFACES));
			// }

		}


		/*override*/ public onRemove():void
		{
			this.eventMap.unmapListeners();
			super.onRemove();

		}

	}

