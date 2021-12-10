/**
 * Copyright (c) 2012 EHIT, Inc.
 * All Rights Reserved
 *
 * $Rev:: 1           $:  Revision of last commit
 * $Author: mmishra $:  Author of last commit
 * $Date: 2013/05/07 18:01:27 $:  Date of last commit
 */
module org.ehit.edi.hub.modules.admin.model.events
{
	import Event = flash.events.Event;

	export class CombineTriggerEvent extends Event


	{
		public static COMBINE:string='combine';

		public static ACTIVATE_POLL:string='activatePoll';
		
		private _pollId:string;
		
		private _activate:boolean;

		constructor(type:string, pollId:string=null ,activate:boolean=false)
		{
			super(type);
			
			this._pollId=pollId;
			
			this._activate = activate
			
		}
		
		
		
		public get pollId():string
		{
			return this._pollId;
		}
		
		public get isActivated():boolean
		{
			return this._activate;
		}



		/*override*/ public clone():Event
		{
			return new CombineTriggerEvent(this.type, this._pollId ,this._activate);
		}

	}
}
