import { Checkbox, styled } from '@material-ui/core'
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

class CustomCheckBox extends React.Component {
    onClick = (e) => {
        this.props.onHandleClick(e, this.props)
    }
    render() {
        return (
            <div>
                <Checkbox
                    icon={<Red />}
                    checkedIcon={<Green  />}
                   onClick={(e) => this.onClick(e)}
                />
                 
            </div>
        )
    }

}

export default CustomCheckBox