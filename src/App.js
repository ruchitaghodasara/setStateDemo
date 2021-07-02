import "./styles.css";
import React, { Component } from "react";

class Home extends Component {
  state = {
    firstName: ""
  };

  handleFormchange = (e) => {
    this.setState({
      firstName: e.target.value
    });
  };

  render() {
    return (
      <>
        <h6>User Info</h6>
        <label>First Name: {this.state.firstName}</label>

        <form>
          <label>First Name</label>
          <input type="text" onChange={this.handleFormchange} />
        </form>
      </>
    );
  }
}

export default Home;
