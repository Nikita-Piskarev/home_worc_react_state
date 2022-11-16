import React, { Component } from "react";

class UserMessage extends Component {
  render() {
    const {
      userMassage: { name, message },
    } = this.props;
    return (
      <>
        <p>Name user: {name ? name : "Guest"}</p>
        <p>Mesege: {message ? message : "Hello guest"}</p>
      </>
    );
  }
}

export default UserMessage;
