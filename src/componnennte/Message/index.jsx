import { Component } from "react";
import ButtonRead from "../ButtonRead";
import ButtonReload from "../ButtonReload";
class Message extends Component {
  state = {
    name: "User",
    message: "Hello user",
    read: false,
  };
  onСlickDisableButton = () => {
    const { read } = this.state;
    const newReand = {
      read: !read,
    };
    this.setState(newReand);
  };

  render() {
    const { name, message, read } = this.state;

    return (
      <div>
        <p>Name user: {name}</p>
        <p>Mesege: {message}</p>
        <ButtonRead
          onСlickDisableButton={this.onСlickDisableButton}
          read={read}
        />
        <ButtonReload
          onСlickDisableButton={this.onСlickDisableButton}
          read={!read}
        />
      </div>
    );
  }
}

export default Message;
