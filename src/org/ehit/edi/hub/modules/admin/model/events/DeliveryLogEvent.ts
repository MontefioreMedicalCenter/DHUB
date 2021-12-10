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
	import DeliveryLog = org.ehit.edi.hub.modules.admin.model.vo.DeliveryLog;

	export class DeliveryLogEvent extends Event


	{
		public static REDELIVER:string='redeliver';

		private _deliveryLog:DeliveryLog;

		constructor(type:string, deliveryLog:DeliveryLog=null)
		{
			super(type);

			this._deliveryLog=deliveryLog;

		}



		public get deliveryLog():DeliveryLog
		{
			return this._deliveryLog;
		}


		/*override*/ public clone():Event
		{
			return new DeliveryLogEvent(this.type, this._deliveryLog);
		}

	}
}
