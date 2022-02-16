import moment from "moment";
import React from "react";

class ClaimServiceDateRenderer extends React.Component{
    render(){
        return(
            <div style={{margin:'5px', color:'#185b29'}}>
                <span>{moment(this.props.row.getData().serviceStartDate).format('MM/DD/YYYY')} - {moment(this.props.row.getData().serviceEndDate).format('MM/DD/YYYY')} </span>
            </div>
        )
    }
}

export default ClaimServiceDateRenderer