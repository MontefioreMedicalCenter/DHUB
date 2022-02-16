import React from "react";

class BankEFTStatusRenderer extends React.Component {
    render(){
        return(
            <div>
                <span>{this.props.column.parentDocument.getStatus(this.props.row.getData().status)}</span>
            </div>
        )
    }
}

export default BankEFTStatusRenderer