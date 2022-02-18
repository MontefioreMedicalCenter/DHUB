import React from 'react'
import { FileContainerMediator } from '../../FileContainerMediator.ts'
import FileContentContainer from '../FileContentContainer'
import ReportContainer from '../ReportContainer'

class FileContainer extends React.Component {
    constructor() {
        super()
        this.state = {
            fileContentContainerWindow: false,
            fileData: null
        }
        this._file = null
    }

    componentDidMount() {
        this.mediator = new FileContainerMediator().onRegister(this)
    }
    componentWillUnmount() {
        this.mediator && this.mediator.onUnRegister()
    }

    setfile(file) {
        this._file = file;
        if (this._file.fileContent != null) {
            this.fileContentContainer.setfile(file)
        }
    }

    getfile() {
        return this._file;
    }

    render() {
        return (
            <div>
                {(this.props.parentDocument.props.parentDoc.state.fileEditorWindow || this.props.parentDocument.props.parentDoc.state.fileEditorWindow) && <FileContentContainer ref={f => (this.fileContentContainer = f)} />}
                {this.props.parentDocument.props.parentDoc.state.fileEditoriconWindow && <ReportContainer ref={f => (this.reportContainer = f)} reportContainer={this} fileData={this.props.fileData} />} 
            </div>
        )
    }
}

export default FileContainer