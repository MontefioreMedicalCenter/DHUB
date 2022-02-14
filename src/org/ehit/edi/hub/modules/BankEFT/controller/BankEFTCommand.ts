import { BankEFTService } from "../service/BankEFTService.ts";

export class BankEFTCommand
	{

		
		public bankEFTService:BankEFTService;

		public event:BankEFTEvent;



		 public execute():void
		{
			if (this.event.type == BankEFTEvent.GET_BANKEFT_HEADER)
				this.bankEFTService.findbankEFTHeader()
			else
				this.bankEFTService.findBankEFTProcesses(this.event.startDate, this.event.endDate);
		}

	}

