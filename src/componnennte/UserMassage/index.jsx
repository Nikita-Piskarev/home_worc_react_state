import React, { Component } from "react";

class UserMessage extends Component {
  render() {
    const {
      userMassage: { name, message },
    } = this.props;
    return (
      <>
        <p>Name user: {name}</p>
        <p>Message: {message}</p>
      </>
    );
  }
}

export default UserMessage;
