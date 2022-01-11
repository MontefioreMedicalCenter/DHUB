import React from 'react'
import { FileEditorMediator } from '../../FileEditorMediator.ts'
import FileContainer from '../FileContainer'

class FileEditor extends React.Component {
    constructor() {
        super()
        this.state = {}
    }

    componentDidMount() {
        this.mediator = new FileEditorMediator().onRegister(this)
    }

    componentWillUnmount() {
        this.mediator.onUnRegister()
    }

    render() {
        return (
            <div>
                <FileContainer ref={g => this.fileContainer = g} id="container" parentDocument={this} />
            </div>
        )
    }
}

export default FileEditor