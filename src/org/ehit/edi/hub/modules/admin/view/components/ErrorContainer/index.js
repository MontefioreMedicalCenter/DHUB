import React from 'react'
import CustomColorButton from '../../../../../../../../../container/views/itemRenderers/CustomColorButton'
import { ClassFactory, EventDispatcher, ReactDataGridColumn, ReactDataGridColumnLevel } from '../../../../../../../../../flexicious'
import { ErrorContainerMediator } from '../../ErrorContainerMediator.ts'
import './errorContainer.scss'
import publish from '../../../../../../../../../assets/images/publish.png'

class ErrorContainer extends EventDispatcher {
    constructor(props) {
        super()
        this.state = {
            msgContent: props.parentDoc.state.msg,
            showPublish: props.parentDoc.state.withPublish
        }
        this._ediErrorStore = null
    }

    componentDidMount() {
        this.mediator = new ErrorContainerMediator().onRegister(this)
    }

    componentWillUnmount() {
        this.mediator.onUnRegister()
    }

    setErrorStore(data) {
        this._ediErrorStore = data;
    }

    getErrorStore() {
        return this._ediErrorStore;
    }

    republish = () => {
        const mediator = this.mediator
        console.log('inside ErrorContainer/index.js republish(): errorId: ', this.props.errorId)
        //console.log('inside ErrorContainer/index.js republish(): this.props.msg: ', this.props.msg)
        mediator.republishError(this.props.errorId, this.state.msgContent)
    }

    render() {
        return (
            <div className='errorContainer'>
                <textarea id="msgContent" name="msgContent" className='textAreaStyle' style={{ height: '600px', width: '950px', margin: 0, resize: 'none' }} value={this.state.msgContent} onChange={(e) => { this.setState({ msgContent: e.target.value }) }} />
                {this.state.showPublish && (
                <div style={{ textAlign: "center" }}>
                    <CustomColorButton id="publishBtn" variant="contained" style={{ height: '30px', width: '100px' }} onClick={this.republish}>
                    <img src={publish} alt='publish'/>
                        Publish
                    </CustomColorButton>
                </div> )}
            </div>
        )
    }
}

export default ErrorContainer