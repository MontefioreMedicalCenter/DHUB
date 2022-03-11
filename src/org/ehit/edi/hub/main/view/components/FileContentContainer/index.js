import { Button, ButtonGroup, styled, TextField } from '@material-ui/core';
import React from 'react'
import { EventDispatcher } from '../../../../../../../../flexicious';
import './fileContentContainer.scss'
import binocular from '../../../../../../../../assets/images/binocular_copy.png'
import binocularForward from '../../../../../../../../assets/images/binocular-forward.png'
import binaocularBackward from '../../../../../../../../assets/images/binocular-backward.png'
import store from '../../../../../../../../AppConfig/store/configureStore';
import { showMessage } from '../../../../../../../../AppConfig/store/actions/homeAction';
// import { EdiFileBase } from '../../../model/EdiFileBase.ts';
import { FileContentContainerMediator } from '../../FileContentContainerMediator.ts';
const CustomButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText('#9d9c9c'),
    backgroundColor: '#c6c6c6',
    '&:hover': {
        backgroundColor: '#bebebb',
    },
    border: '1px solid black'
}));

class FileContentContainer extends EventDispatcher {
    constructor(props) {
        super(props)
        this.state = {
            searchTxt: '',
            ediContent: ''
        }
        this.oldSearchResult = 0
        this._file = props.fileData
        this.arr = [];
    }


    setfile(fileData) {
        var file = fileData
        this.label = file.origFileName;
        this._file = file;
        this._file.fileContent = new Buffer(this._file.fileContent.toString(), 'base64').toString('ascii')
        // eslint-disable-next-line no-lone-blocks
        {
            this.arr.push({ label: "view", icon: "@Embed(source='../../../assets/img/readme.png')" });
            this.arr.push({ label: "wrap", icon: "@Embed(source='../../../assets/img/wrap.png')" });
            this.arr.push({ label: "unwrap", icon: "@Embed(source='../../../assets/img/unwrap.png')" });
        }
        this.arr.push({ label: "save", icon: "@Embed(source='../../../assets/img/saveB.png')" });

        if (this._file.fileContent != null)
            this.loadContent(this.arr);
    }

    getfile() {
        return this._file;
    }

    componentDidMount() {
        this.mediator = new FileContentContainerMediator().onRegister(this)
    }

    loadContent(arr) {
        if (this._file != null) {
            if (this._file.transType != null && (this._file.transType === '999' || this._file.transType.indexOf('277') >= 0)) {
                arr.push({ label: "explain", icon: "@Embed(source='org/ehit/edi/hub/assets/img/readme.png')" });

            }
            if (this._file.transType != null && this._file.transType === '835') {
                arr.push({ label: "reports", icon: "@Embed(source='org/ehit/edi/hub/assets/img/readme.png')" });
                arr.push({ label: "split X12", icon: "@Embed(source='org/ehit/edi/hub/assets/img/readme.png')" });

            }
            if (this._file.transType != null && this._file.transType === '835S') {
                arr.push({ label: "reports", icon: "@Embed(source='org/ehit/edi/hub/assets/img/readme.png')" });
            }

        }
        // editorMenu.dataProvider=new ArrayCollection(arr);//Need to Implement
        if (this._file.fileContent.toString().length > 4000000) {
            store.dispatch(
                showMessage(
                    'Alert',
                    'File is too big for the editor.Save it?',
                    'OK_CANCEL',
                    () => {
                        // eslint-disable-next-line no-use-before-define
                        var fileReference=new fileReference();
					    fileReference.save(this._file.fileContent, this._file.origFileName);
                    },
                    () => {}
                )
            )
        }
        else {
            // let buff = new Buffer(this._file.fileContent.toString(), 'base64')
            // this.setState({ediContent: buff.toString('ascii')})
            this.setState({ediContent: this._file.fileContent.toString()})
        }

    }

    button1_clickHandler = () => {
        this.oldSearchResult = 0;
        var search_Str = this.state.searchTxt
        var truncatedText = this.state.ediContent

        var search_result = truncatedText.search(search_Str)
        document.getElementById('ediContent').focus()
        if (search_result !== -1) {
            this.oldSearchResult = this.oldSearchResult + search_result + search_Str.length;
        }
        else {
            store.dispatch(
                showMessage(
                    '',
                    'No more results',
                    'OK',
                    () => { },
                )
            )
        }
    }

    button2_clickHandler = () => {
        var search_Str = this.state.searchTxt
        var truncatedText = this.state.ediContent.substring(this.oldSearchResult)

        var search_result = truncatedText.search(search_Str)
        document.getElementById('ediContent').focus()
        if (search_result !== -1) {
            this.oldSearchResult = this.oldSearchResult + search_result + search_Str.length;
        } else {
            store.dispatch(
                showMessage(
                    '',
                    'No more results',
                    'OK',
                    () => { },
                )
            )
        }
    }

    button3_clickHandler = () => {
        var search_Str = this.state.searchTxt
        var truncatedText = this.state.ediContent.substring(0, this.oldSearchResult)

        var search_result = truncatedText.search(search_Str)
        document.getElementById('ediContent').focus()
        if (search_result !== -1) {
            this.oldSearchResult = this.oldSearchResult + search_result + search_Str.length;
        } else {
            store.dispatch(
                showMessage(
                    '',
                    'No more results',
                    'OK',
                    () => { },
                )
            )
        }
    }

    reportPopUp = () => {
        var rootPage = this.props.parentDocument.props.parentDocument.props.parentDoc
        rootPage.viewFile(rootPage.state.selectedColumnFileId, true)
        rootPage.setState({ fileEditorWindow: false })
    }

    render() {
        return (
            <div className='pop-up_size'>
                <textarea ref={g => (this.ediContent = g)} id="ediContent" name="ediContent" value={this.state.ediContent} onChange={e => this.setState({ ediContent: e.target.value })} style={{ height: ' calc(100vh - 160px)', width: 'calc(100% - 15px)', margin: '4px', resize: 'none' }} />
                <div className='lowerDiv'>
                    <ButtonGroup id="editorMenu">
                        <Button id='view' variant="contained" color="primary" onClick={e => this.mediator.changeContent(e, 'view')}>View</Button>
                        <Button id='wrap' variant="contained" color="primary" onClick={e => this.mediator.changeContent(e, 'wrap')}>Wrap</Button>
                        <Button id='unwrap' variant="contained" color="primary" onClick={e => this.mediator.changeContent(e, 'unwrap')}>UnWrap</Button>
                        <Button id='save' variant="contained" color="primary" onClick={e => this.mediator.changeContent(e, 'save')}>Save</Button>
                        {this.props.fileData && this.props.fileData.transType && (this.props.fileData.transType === '835' || this.props.fileData.transType === '835S') && <Button id='save' variant="contained" color="primary" onClick={this.reportPopUp}>Reports</Button>/* <Button id='save' variant="contained" color="primary" onClick={}>split X12</Button> */}
                        {this.props.fileData && this.props.fileData.transType && (this.props.fileData.transType === '999' || this.props.fileData.transType.indexOf('277') >= 0) && <Button id='save' variant="contained" color="primary">explain</Button>}
                    </ButtonGroup>
                    <TextField variant="outlined" id="searchTxt" value={this.state.searchTxt} onChange={event => this.setState({ searchTxt: event.target.value })} InputProps={{ inputProps: { style: { padding: '0px', height: '40px', width: '182px', marginLeft: '5px' } } }} />
                    <CustomButton id="searchBtn" style={{ minWidth: '20px', width: '35px', height: '40px' }} onClick={this.button1_clickHandler}>
                        <img src={binocular} alt="binocular" />
                    </CustomButton>
                    <CustomButton id="searchFwdBtn" style={{ minWidth: '20px', width: '35px', height: '40px' }} onClick={this.button2_clickHandler}>
                        <img src={binocularForward} alt="binocularForward" />
                    </CustomButton>
                    <CustomButton id="searchBckBtn" style={{ minWidth: '20px', width: '35px', height: '40px' }} onClick={this.button3_clickHandler}>
                        <img src={binaocularBackward} alt="binaocularBackward" />
                    </CustomButton>
                </div>
            </div>
        )
    }
}

export default FileContentContainer