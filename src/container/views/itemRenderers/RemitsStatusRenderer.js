import React from "react"

class RemitsStatusRenderer extends React.Component{
    render(){
        return(
            <div style={{margin:'5px'}}>
                <span>{this.props.column.parentDocument.getStatus(this.props.row.getData().status)}</span>
            </div>
        )
    }
}

export default RemitsStatusRenderer