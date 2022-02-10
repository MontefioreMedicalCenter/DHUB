import React from 'react'
import { FileContainerMediator } from '../../FileContainerMediator.ts'
import FileContentContainer from '../FileContentContainer'

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
        this.mediator.onUnRegister()
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
                <FileContentContainer ref={f => (this.fileContentContainer = f)} />
            </div>
        )
    }
}

export default FileContainer