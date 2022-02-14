import React from 'react';
import FileImg from '../../../assets/images/report_go.png'

class BankEFTFilerenderer  extends React.Component {

    render(){
        return (
            <div style={{width: '100%', height: '100%', display: 'flex', alignItems: 'center', columnGap: '5px'}}>
                <img src={FileImg} alt="file"/>
                <span>{this.props.row.getData().filename}</span>
            </div>
        )
    }
}

export default BankEFTFilerenderer