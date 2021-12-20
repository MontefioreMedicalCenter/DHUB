import React from 'react'
import CustomColorButton from '../../../../../../../../../container/views/itemRenderers/CustomColorButton'
import { EventDispatcher } from '../../../../../../../../../flexicious'
import './deliveryEditor.scss'
import back_2 from '../../../../../../../../../assets/images/back_2.png'
import store from '../../../../../../../../../AppConfig/store/configureStore'
import { showMessage } from '../../../../../../../../../AppConfig/store/actions/homeAction'
import { DispatchDeliveryEvent } from '../../../model/events/DispatchDeliveryEvent.ts'
import { DeliveryEditorMediator } from '../../DeliveryEditorMediator.ts'

class DeliveryEditor extends EventDispatcher {
    constructor() {
        super()
        this.state = {
            file: null,
            propertiesContent: '',
        }
        this._deliveryControlId = ''
    }

    get deliveryControlId()
    {
        return this._deliveryControlId;
    }

    set deliveryControlId(value)
    {
        this._deliveryControlId=value;
    }

    componentDidMount(){
        this.mediator = new DeliveryEditorMediator().onRegister(this)
    }

    locateFile = (event) => {
        const ele = document.getElementById('uploaderBulkDocs')
        ele.value = ''
        this.setState({ file: null })
        this.fileName.innerText = 'browse...'
        this.fileName.style.color = 'grey'
        if (ele) {
            ele.onchange = e => this.onFileSelect(e)
            ele.click()
        }
    }

    onFileSelect = event => {
        var tempFile = event.target
        this.setState({ file: event.target })
        if (tempFile.files[0]) {
            this.fileName.innerText = tempFile.files[0].name
            this.fileName.style.fontSize = '13px'
            this.fileName.style.color = 'black'
            this.fileName.style.fontStyle = 'italic'
        }
    }

    uploadFile = event => {
        if (this.state.file && this.state.file.files.length) {
            store.dispatch(showMessage('Confirm Delivery', 'Are you sure you want to trigger this Delivery?', 'YES_NO', () => { this.onConfirm(event) }, () => { }))
        }
    }

    onConfirm = event => {
        var deliveryEvent = new DispatchDeliveryEvent(DispatchDeliveryEvent.DISPATCH_DELIVERY);
        deliveryEvent.fileContent = this.state.file.files
        deliveryEvent.fileProperties = this.state.propertiesContent
        this.dispatchEvent(deliveryEvent)
        this.fileName.innerText = 'browse..'
    }

    render() {
        return (
            <div style={{ height: 600, width: '1143px' }}>
                <textarea ref={g => (this.propertiesContent = g)} id="propertiesContent" name="propertiesContent" style={{ height: '556px', width: '1137px', margin: 0, resize: 'none' }} value={this.state.propertiesContent} onChange={(e) => this.setState({ propertiesContent: e.target.value })} />
                <div className='contentBox'>
                    <span>Attache File:</span>
                    <div ref={g => (this.fileName = g)} className="upload-file-name" onClick={this.locateFile}>browse...</div>
                    <input id="uploaderBulkDocs" style={{ display: 'none' }} type="file" /> &nbsp;
                    <CustomColorButton style={{ height: '22px' }} onClick={event => this.uploadFile(event)} >
                        <img src={back_2} alt="back" />&nbsp;
                        Dispatch Delivery
                    </CustomColorButton>
                </div>
            </div>
        )
    }
}

export default DeliveryEditor