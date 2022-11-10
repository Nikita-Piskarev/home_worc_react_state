import React, { Component } from "react";

class ButtonReload extends Component {
  render() {
    const { onСlickDisableButton, read } = this.props;
    return (
      <button onClick={onСlickDisableButton} disabled={read}>
        {read ? "Еще не прочитано" : "Отмениить прочитанное "}
      </button>
    );
  }
}

export default ButtonReload;
