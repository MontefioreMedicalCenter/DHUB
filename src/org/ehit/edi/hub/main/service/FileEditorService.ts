import { AxiosPromise } from 'axios'
import { toast } from 'react-toastify'
import ServiceProxyBase from '../../../../../../service/cfc/ServiceProxyBase'
import GlobalEventDispatcher from '../../../../../../service/utils/GlobalEventDispatcher'
import { EdiFileBase } from '../model/EdiFileBase.ts'
import { FileEditorEvent } from '../model/events/FileEditorEvent.ts'

export class FileEditorService extends ServiceProxyBase {
	dispatch(evt) {
		GlobalEventDispatcher.instance().dispatchEvent(evt)
	}

	static instance: any
	static getInstance: () => any

	public static REMOTE_DESTINATION: string = 'FileManagerService'

	public fileService: RemoteObject

	public getFile(fileId: number, removeCRLF: boolean): AxiosPromise<any> {
		var formData = {
			fileId: fileId,
			removeCRLF: removeCRLF
		}
		return this.callServiceMethod('post', 'DHub/api/fileManagersvc/getFile', formData, null, this.successResultEvent.bind(this), this.failureFaultEvent.bind(this), 'form', this.getHeaderFormData())
	}

	public explainPayload(fileId: number): void {
		var rpcCall: AsyncToken = this.fileService.explainPayload(fileId)
		rpcCall.addResponder(new AsyncResponder(this.explainSuccessResultEvent, this.explainFailureFaultEvent))
	}

	public runReport(ediFile: EdiFileBase): void {
		var rpcCall: AsyncToken = this.fileService.runReport(ediFile)
		rpcCall.addResponder(new AsyncResponder(this.reportSuccessResultEvent, this.explainFailureFaultEvent))
	}

	/**
	 * Handles the login result event
	 * @param event
	 * @param token
	 * @event(org.ehit.edihub.user.model.events.LoginEvent) Sends a LOGIN_SUCCESS event
	 */
	private file: EdiFileBase = new EdiFileBase()

	protected successResultEvent(event: ResultEvent, token: Object = null): void {
		var obj = event.result
		this.file = new EdiFileBase()
		this.file.fileId = obj.fileId
		this.file.fileContent = obj.fileContent
		this.file.origFileName = obj.origFileName
		this.file.transType = obj.transType
		this.dispatch(new FileEditorEvent(FileEditorEvent.FILE_CONTENT, this.file))
	}

	/**
	 * Handles the login fault event
	 * @param event
	 * @param token
	 */
	protected failureFaultEvent(event: FaultEvent, token: Object = null): void {
		var msg: ErrorMessage = <ErrorMessage>event.message
		// Alert.show('Error opening file!!', 'File not found', this.mx.controls.Alert.OK)
		toast.error('Error opening file!!, File not found')
	}

	protected explainSuccessResultEvent(event: ResultEvent, token: Object = null): void {
		this.dispatch(new ReportEvent(ReportEvent.EXPLAIN_REPORT, <Object>event.result))
	}

	protected reportSuccessResultEvent(event: ResultEvent, token: Object = null): void {
		this.dispatch(new ReportEvent(ReportEvent.REPORT, <Object>event.result))
	}

	protected explainFailureFaultEvent(event: FaultEvent, token: Object = null): void {
		var msg: ErrorMessage = <ErrorMessage>event.message
		this.dispatch(new ReportEvent(ReportEvent.EXPLAIN_ERROR, null, msg.faultString))
	}
}

FileEditorService.prototype.typeName = FileEditorService.typeName = 'FileEditorService' //for quick inspection
FileEditorService.instance = null
FileEditorService.getInstance = () => {
	if (FileEditorService.instance == null) {
		FileEditorService.instance = new FileEditorService()
	}
	return FileEditorService.instance
}
