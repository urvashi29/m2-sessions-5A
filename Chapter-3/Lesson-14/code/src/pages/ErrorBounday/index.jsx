import React, { Component } from "react";

class index extends Component {
  
  componentDidCatch = (error, info) => {
    console.log(error, info);
  };

  render() {
    return this.props.childern;
  }
}

export default index;
