import React, { Component } from "react";
import Details from "./Details";

class App extends Component {
  state = {
    firstName: "Alina",
    age: 20,
    city: "Hyderabad",
    contact: {
      email: "admin@gmail.com",
      contact_number: 9999999999,
    },
  };

  handleUpdate = () => {
    // to update state in class
    this.setState({
      city: "Pune",
    });
  };

  render() {
    return (
      <>
        <p>
          My name is {this.state.firstName}, living in {this.state.city}
        </p>

        <button onClick={this.handleUpdate}>Update</button>
        <Details firstName={this.state.firstName} contact={this.state.contact} />
      </>
    );
  }
}

export default App;


// add = (props) => {

// }

// add({firstName:10, c:20});

{
  /* in HTML
    <button onclick="update()"></button> */
}
