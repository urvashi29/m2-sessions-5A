import React, { Component } from "react";
import axios from "axios";

class Lifecycle extends Component {
  // Initialization
  constructor() {
    super();
    this.state = {
      name: "alina",
      users: [],
    };
  }

  static getDerivedStateFromProps = (props, state) => {
    console.log(state);
    return 20;
  };

  componentDidMount = () => {
    //API calls
    // on initial rendering get thee data from an API

    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(async (res) => {
        let response = await res.data;
        console.log(response);
        this.setState({
          users: response,
        });
      })
      .catch((err) => {
        console.log(err);
      });

    console.log("component Did Mount");
  };

  handleUpdate = () => {
    this.setState({
      name: "alex",
    });
  };

  shouldComponentUpdate = (nextProps, nextState) => {
    // if() {}
    return true;
  };

  getSnapshotBeforeUpdate = (prevProps, prevState) => {
    return "get snapshot!";
  };

  componentDidUpdate = (prevProps, prevState, snapshot) => {
    console.log(snapshot, prevState.name, " - ", this.state.name);
  };

  componentWillUnmount = () => {
    //remove event listerner
    // clearTimeout
    // clearInterval
  };

  render() {
    const userList = this.state.users.length ? (
      this.stateusers.map((user) => {
        return <p>{user.email}</p>;
      })
    ) : (
      <p>No Post Yet</p>
    );

    return (
      <>
        <div>My name is {this.state.name}</div>
        <button onClick={this.handleUpdate}>Update</button>
        {userList}
      </>
    );
  }
}

export default Lifecycle;
