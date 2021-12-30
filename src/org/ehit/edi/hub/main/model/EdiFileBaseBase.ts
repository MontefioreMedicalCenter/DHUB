import VoBase from "../../../../../../vo/VoBase"

export class EdiFileBaseBase extends VoBase{
	private _fileContent: ByteArray
	private _fileId: Number
	private _fileProps: String
	private _fileType: String
	private _origFileModTime: Date
	private _origFileName: String
	private _origFilePath: String
	private _origFilePerms: String
	private _origFileSize: Number
	private _payloadId: Number
	private _processName: String
	private _receiverName: String
	private _senderName: String
	private _systemId: String
	private _transType: String

	public set fileContent(value: ByteArray) {
		this._fileContent = value
	}

	public get fileContent() {
		return this._fileContent
	}

	public set fileId(value: Number) {
		this._fileId = value
	}

	public get fileId(): Number {
		return this._fileId
	}

	public set fileProps(value: String) {
		this._fileProps = value
	}

	public get fileProps(): String {
		return this._fileProps
	}

	public set fileType(value: String) {
		this._fileType = value
	}

	public get fileType(): String {
		return this._fileType
	}

	public set origFileModTime(value: Date) {
		this._origFileModTime = value
	}

	public get origFileModTime(): Date {
		return this._origFileModTime
	}

	public set origFileName(value: String) {
		this._origFileName = value
	}

	public get origFileName(): String {
		return this._origFileName
	}

	public set origFilePath(value: String) {
		this._origFilePath = value
	}

	public get origFilePath() {
		return this._origFilePath
	}

	public set origFilePerms(value: String) {
		this._origFilePerms = value
	}

	public get origFilePerms(): String {
		return this._origFilePerms
	}

	public set origFileSize(value: Number) {
		this._origFileSize = value
	}

	public get origFileSize() {
		return this._origFileSize
	}

	public set payloadId(value: Number) {
		this._payloadId = value
	}

	public get payloadId() {
		return this._payloadId
	}

	public set processName(value: String) {
		this._processName = value
	}

	public get processName() {
		return this._processName
	}

	public set receiverName(value: String) {
		this._receiverName = value
	}

	public get receiverName(): String {
		return this._receiverName
	}

	public set senderName(value: String) {
		this._senderName = value
	}

	public get senderName() {
		return this._senderName
	}

	public set systemId(value: String) {
		this._systemId = value
	}

	public get systemId() {
		return this._systemId
	}

	public set transType(value: String) {
		this._transType = value
	}

	public get transType() {
		return this._transType
	}

	/*public function readExternal(input:IDataInput):void
         {
             _fileContent=input.readObject() as ByteArray;
             _fileId=function(o:*):Number
             {
                 return (o is Number ? o as Number : Number.NaN)
             }(input.readObject());
             _fileProps=input.readObject() as String;
             _fileType=input.readObject() as String;
             _origFileModTime=input.readObject() as Date;
             _origFileName=input.readObject() as String;
             _origFilePath=input.readObject() as String;
             _origFilePerms=input.readObject() as String;
             _origFileSize=function(o:*):Number
             {
                 return (o is Number ? o as Number : Number.NaN)
             }(input.readObject());
             _payloadId=function(o:*):Number
             {
                 return (o is Number ? o as Number : Number.NaN)
             }(input.readObject());
             _processName=input.readObject() as String;
             _receiverName=input.readObject() as String;
             _senderName=input.readObject() as String;
             _systemId=input.readObject() as String;
             _transType=input.readObject() as String;
 
         }
 
         public function writeExternal(output:IDataOutput):void
         {
             output.writeObject(_fileContent);
             output.writeObject(_fileId);
             output.writeObject(_fileProps);
             output.writeObject(_fileType);
             output.writeObject(_origFileModTime);
             output.writeObject(_origFileName);
             output.writeObject(_origFilePath);
             output.writeObject(_origFilePerms);
             output.writeObject(_origFileSize);
             output.writeObject(_payloadId);
             output.writeObject(_processName);
             output.writeObject(_receiverName);
             output.writeObject(_senderName);
             output.writeObject(_systemId);
             output.writeObject(_transType);
         }*/
}
