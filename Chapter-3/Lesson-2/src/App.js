import React, { Component } from "react";

// Class Based components
class App extends Component {
  state = {
    firstName: "Alina",
    lastName: "Joe",
    city: "Pune",
    employees: [
      {
        id: 1,
        name: "Alex",
        age: 20,
      },
      {
        id: 2,
        name: "Alina",
        age: 24,
      },
    ],
  };

  render() {
    // JSX -> Js syntax extension
    // this refers to App
    return (
      <>
        <p>
          My Name is {this.state.firstName} {this.state.lastName}, living in{" "}
          {this.state.city}
        </p>

        <p>
          {this.state.employees.map((emp) => {
            return (
              <>
                <p>
                  {emp.name} {emp.age}
                </p>
              </>
            );
          })}
        </p>
      </>
    );
  }
}

export default App;

// rcc: shortcut to get class component

// Function Based components
// rsc
// import React from "react";

// const App = () => {
//   return <p>Hello World</p>;
// };

// export default App;

// Task
// under folder structure
// Create a class based Component, display Product data in UI
