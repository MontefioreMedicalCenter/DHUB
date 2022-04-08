import Mediator from '../../../../../../../modules/main/view/Mediator.ts'
import { InterfacesModel } from '../model/InterfacesModel.ts'
import { InterfacesEvent } from '../model/events/InterfacesEvent.ts'
import { InterfacesService } from '../service/InterfacesService.ts'
import Interfaces from './components/Interfaces'
import { FlexDataGridColumn, ClassFactory, UIUtils, Timer, FlexDataGridEvent } from '../../../../../../../flexicious'
import tickIcon from '../../../../../../../assets/images/tick.png'
import waitIcon from '../../../../../../../assets/images/clock.png'
import naIcon from '../../../../../../../assets/images/minus_black.png'
import { toast } from 'react-toastify'
import ArrayCollection from '../../../../../../../vo/ArrayCollection'


export class InterfacesMediator extends Mediator {
	public view: Interfaces
	public interfacesModel: InterfacesModel = InterfacesModel.getInstance()
	public interfacesService: InterfacesService = InterfacesService.getInstance()
	//public fileEditorService: FileEditorService = FileEditorService.getInstance()
	private claimsTimer
	private dateRange: DateRangeEvent

	public onRegister(view): InterfacesMediator {
		this.view = view
		this.mapListener(this.eventDispatcher, InterfacesEvent.INTERFACES, this.addInterfaces, InterfacesEvent)
		this.mapListener(this.eventDispatcher, InterfacesEvent.GET_INTERFACES, this.getInterfaces, InterfacesEvent)
		//this.mapListener(this.eventDispatcher, ClaimsEvent.REMOVE_CLAIMS, this.removeClaims, ClaimsEvent)
		// this.mapListener(this.view, DateRangeEvent.SEARCH_BY_DATE_RANGE, this.searchByDateRange, DateRangeEvent)
		//this.mapListener(this.view.grid, FlexDataGridEvent.ITEM_CLICK, this.viewFile, FlexDataGridEvent)
		this.mapListener(this.view.grid, FlexDataGridEvent.ICON_CLICK, this.ping, FlexDataGridEvent)
		//this.claimsTimer = new Timer(600000)
		// this.mapListener(this.claimsTimer, TimerEvent.TIMER, this.refreshClaims)
        var interfacesEvent: InterfacesEvent = new InterfacesEvent(InterfacesEvent.GET_INTERFACES)
        this.dispatch(interfacesEvent)
		return this
	}

    private getInterfaces(event: InterfacesEvent): void{
        this.interfacesService.getInterfaces()
    }

    private addInterfaces(event: InterfacesEvent): void {

			this.view.grid.setDataProvider(this.interfacesModel.interfaces)
			this.view.grid.refreshCells()
	}

    private ping(event: FlexDataGridEvent):void{

        if (event.cell&& event.cell.getColumn() != null && (event.cell.getColumn().getColIndex() == 5)){
            this.interfacesService.ping(event.cell.rowInfo.getData().channelId)
        }
    }
}