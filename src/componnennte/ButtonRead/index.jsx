import React, { Component } from "react";

class ButtonRead extends Component {
  render() {
    const { onСlickDisableButton, read } = this.props;
    return (
      <button onClick={onСlickDisableButton} disabled={read}>
        {read ? "прочиитано" : "Не прочитано"}
      </button>
    );
  }
}

export default ButtonRead;
