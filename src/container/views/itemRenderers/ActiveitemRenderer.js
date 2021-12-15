import { Checkbox, styled } from '@material-ui/core';
import React from 'react'

const Red = styled("span")(({ theme }) => ({
    padding:"2px",
    borderRadius: "50%",
    width: 10,
    height: 10,
    alignItems: "center",
    backgroundImage: "linear-gradient(to bottom, #ff0000, #ff7d7d, #ffffff)",
    border: '1px solid black'
  }));

  const Green = styled("span")(({ theme }) => ({
    padding:"2px",
    borderRadius: "50%",
    width: 10,
    height: 10,
    alignItems: "center",
    backgroundImage: "linear-gradient(to bottom, #04ff00, #7cff7a, #ffffff)",
    border: '1px solid black'
  }));

class ActiveitemRenderer extends React.Component {
    activatePoll = (e) => {
        this.props.column.handleActivatePoll(e, this.props)
    }
    render() {
        return (
            <div style={{ display: 'flex', height: '100%', justifyContent: 'center'}}>
                <Checkbox
                    id="activeChk"
                    checkedIcon={this.props.row.getData().activeFlag === 'Y' ? <Green  /> : <Red />}
                    icon={this.props.row.getData().activeFlag === 'N' ? <Red /> : <Green  />  }
                    onClick={(e) => this.activatePoll(e)}
                    checked={this.props.row.getData().activeFlag === 'Y' ? true : false}
                />
            </div>
        )
    }
}

export default ActiveitemRenderer