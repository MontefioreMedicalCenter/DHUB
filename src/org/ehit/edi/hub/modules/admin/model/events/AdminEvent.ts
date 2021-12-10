import { BaseEvent } from "../../../../../../../../flexicious";
import ArrayCollection from "../../../../../../../../vo/ArrayCollection";

export class AdminEvent extends BaseEvent
	
	
{
	public static ADMIN:string  = 'admin';
	public static REMOVE_ADMIN:string  = 'removeAdmin';
	public static GET_POLL_LOG:string  = 'getPollLog';
	public static GET_POLL_LOG_BYID:string  = 'getPollLogById';
	public static REMOVE_POLL_LOG:string  = 'removeLog';
	public static GET_DELIVERY_LOG:string  = 'getDeliveryLog';
	public static GET_DELIVERY_LOG_BYID:string  = 'getDeliveryLogById';
	public static GET_COMBINE_TRIGGER:string  = 'getCombineTrigger';
	public static GET_POLL_CONTROL:string  = 'getPollControl';
	public static GET_DELIVERY_CONTROL:string  = 'getDeliveryControl';
 	public static GET_ERROR_LOG:string  = 'getErrorLog';
	public static GET_ERROR_LOG_BYID:string  = 'getErrorLogById';
	public static GET_USERS_AND_ROLES:string  = 'getUsers';
	public static FILL_USER_ROLE:string = 'fillUserRole';
	public static MAP_USER_ROLE:string='mapUserRole';
	public static POLL_LOG:string  = 'pollLog';
	public static DELIVERY_LOG:string  = 'deliveryLog';
	public static COMBINE_TRIGGER:string  = 'combineTrigger';
	public static DELIVERY_CONTROL:string  = 'deliveryControl';

	public static POLL_CONTROL:string  = 'pollControl';
	public static POLLER_STATUS:string  = 'pollerStatus';
	public static ERROR_LOG:string  = 'errorLog';
	public static ERROR_MSG:string  = 'error';
	public static USERS_AND_ROLES:string  = 'users';
	
	
		
	constructor(type:string ,startDate : Date =null,endDate : Date= null,logId:string= null,error :string = null)
	{
		super(type);
	    this._error = error;
		this._startDate=startDate;
		this._endDate= endDate;
		this._logId = logId;
		
	}
	
	private _error : string;
	private _startDate : Date;
	private _endDate : Date;
	private _logId : string;
	private _eventData:ArrayCollection;
	
	public get errMsg():string
	{
		return this._error;
	}
	
	

	public get startDate():Date
	{
		return this._startDate;
	}
	
	
	public get endDate():Date
	{
		return this._endDate;
	}
	
	public get logId():string
	{
		return this._logId;
	}
	public set eventData(val:ArrayCollection){
		this._eventData=val;
	}
	public get eventData():ArrayCollection{
		return this._eventData;
	}
	
	
	/*override*/ public clone():Event
	{
		return new AdminEvent(this.type ,this._startDate ,this._endDate ,this._logId ,this._error);
	}
	
}
