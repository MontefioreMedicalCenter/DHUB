import { Button, styled, TextField, withStyles } from '@material-ui/core'
import React from 'react'
import LogSearchDatePicker from '../../../../../../../../../container/views/itemRenderers/LogSearchDatePicker'
import './logSearch.scss'
import search from '../../../../../../../../../assets/images/search.png'
import back2 from '../../../../../../../../../assets/images/back_2.png'
import { EdiFileBase } from '../../../../../main/model/EdiFileBase.ts'
// import { FileEditorEvent } from '../../../../../main/model/events/FileEditorEvent.ts'

const styles = {
    calStyles: {
        width: '80px',
        padding: '5px',
        fontSize: '15px',
        height: 25
    }
}

const SearchIconButton = styled(Button)(({ theme }) => ({
    width: '5px',
    backgroundColor: '#c5c5c5',
    '&:hover': {
        backgroundColor: '#969595'
    },
    border: 'solid 1px black'
}))

const twoDays = new Date().setDate(new Date().getDate() - 2)

class LogSearch extends React.Component {
    constructor() {
        super()
        this.state = {
            file: null,
            radioValue: '1',
            endDate: new Date(),
            startDate: new Date(twoDays)
        }
    }

    handleOnRadioClick = value => {
        this.setState({ radioValue: value })
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
            var file = new EdiFileBase();
            file.fileContent = this.state.file.files
            file.reportOnly = true
            // this.dispatchEvent(new FileEditorEvent(FileEditorEvent.VIEW_FILE, file))//Need to implement
            this.fileName.innerText = 'browse..'
        }
    }


    render() {
        return (
            <div>
                <div className='headerText'>
                    <span className='fontStyles'>Search Log</span>
                </div>
                {this.state.radioValue === '1' && (
                    <div className='searchField'>
                        <span>Start Date:</span>
                        <LogSearchDatePicker ref={g => (this.startDate = g)} id='startDate' selectedDate={this.state.startDate} InputProps={{ classes: { input: this.props.classes.calStyles } }} LogSearchDatePickerStyle={{ width: '160px' }} />
                        <span>End Date:</span>
                        <LogSearchDatePicker ref={g => (this.endDate = g)} id='endDate' selectedDate={this.state.endDate} InputProps={{ classes: { input: this.props.classes.calStyles } }} LogSearchDatePickerStyle={{ width: '160px' }} />
                        <SearchIconButton>
                            <img src={search} alt='search' />
                        </SearchIconButton>
                    </div>
                )}
                {this.state.radioValue === '2' && (
                    <div className='IDsearchField'>
                        <span>Id:</span>
                        <TextField
                            id='userId'
                            variant='outlined'
                            autoComplete='off'
                            InputProps={{ inputProps: { style: { height: '20px', padding: '5px', fontSize: '13px', marginLeft: '10px', fontFamily: 'sans-serif' } } }}
                            style={{ width: '440px', marginLeft: '10px' }}
                        />
                        <SearchIconButton>
                            <img src={search} alt='search' />
                        </SearchIconButton>
                    </div>
                )}
                {this.state.radioValue === '3' && (
                    <div className='reportSearchField'>
                        <span>Reports:</span>
                        <div ref={g => (this.fileName = g)} className='file-name' onClick={this.locateFile}>browse...</div>
                        <input id='uploaderBulkDocs' style={{ display: 'none' }} type='file' />
                        <SearchIconButton style={{ width: '100px', padding: '0px' }} onClick={event => this.uploadFile(event)} >
                            <img src={back2} alt='back2' />&nbsp;&nbsp;Run
                        </SearchIconButton>
                    </div>
                )}
                <div className='radioStyles'>
                    <input type='radio' id='selectDate' name='radioBtn' value='selectDate' onClick={() => this.handleOnRadioClick('1')} defaultChecked={true} />
                    <span>Date Range</span>
                    <input type='radio' id='selectIdSearch' name='radioBtn' value='selectIdSearch' onClick={() => this.handleOnRadioClick('2')} />
                    <span>Id.</span>
                    <input type='radio' id='selectRpt' name='radioBtn' value='selectRpt' onClick={() => this.handleOnRadioClick('3')} />
                    <span>Reports</span>
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(LogSearch)
