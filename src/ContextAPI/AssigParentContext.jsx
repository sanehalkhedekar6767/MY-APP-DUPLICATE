import React, { Component } from "react";
import AssigContextChild1 from "./AssigContextChild1";
import AssignContext from "./AssignContext";

class AssigParentContext extends Component {
  constructor() {
    super();
    this.state = {
      message: "hello i am in parent comp",
    };
  }

  render() {
    return (
      <>
        <h1>This is Parent comp Context</h1>
        <AssignContext.Provider value={this.state.message}>
          <AssigContextChild1/>
        </AssignContext.Provider>
      </>
    );
  }
}
export default AssigParentContext;
