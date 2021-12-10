/**
 * Copyright (c) 2012 EHIT, Inc.
 * All Rights Reserved
 *
 * $Rev:: 1           $:  Revision of last commit
 * $Author: mmishra $:  Author of last commit
 * $Date: 2013/09/23 18:52:09 $:  Date of last commit
 */
module org.ehit.edi.hub.modules.admin.model.events
{
	import Event = flash.events.Event;

	import ArrayCollection = mx.collections.ArrayCollection;

	import EdiErrorStore = org.ehit.edi.hub.modules.admin.model.vo.EdiErrorStore;

	export class ErrorLogEvent extends Event


	{
		public static RESUBMIT_CONTENT:string='resubmitContent';
		public static REPUBLISH_MSG:string='republish';

		public static DELETE_ERROR:string='deleteError';

		private _error:string;
		private _errorLog:EdiErrorStore;

		private _errorLogs:ArrayCollection;
		constructor(type:string, errorLog:EdiErrorStore = null ,errorLogs:ArrayCollection=null)
		{
			super(type);
			//	_error=error;
			this._errorLog=errorLog;
			this._errorLogs=errorLogs;

		}


		public get errMsg():string
		{
			return this._error;
		}

		public get errLog():EdiErrorStore
		{
			return this._errorLog;
		}

		public get errLogs():ArrayCollection
		{
			return this._errorLogs;
		}

		/*override*/ public clone():Event
		{
			return new ErrorLogEvent(this.type, this._errorLog);
		}

	}
}


