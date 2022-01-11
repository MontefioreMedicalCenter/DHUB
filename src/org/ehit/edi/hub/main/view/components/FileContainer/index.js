import React from 'react'
import { FileContainerMediator } from '../../FileContainerMediator.ts'

class FileContainer extends React.Component {
    constructor() {
        super()
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
        if (this._file.fileContent != null){
            // fileContentContainer.setfile(file);
        }
    }

    getfile() {
        return this._file;
    }

    render() {
        return (
            <div>
                FileContainer
            </div>
        )
    }
}

export default FileContainer