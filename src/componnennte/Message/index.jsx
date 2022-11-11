import { Component } from "react";
import ButtonRead from "../ButtonRead";
import ButtonReload from "../ButtonReload";
import UserMessage from "../UserMassage";
class Message extends Component {
  state = {
    name: "Admin",
    message: "Hello admin",
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
    const { read } = this.state;

    return (
      <div>
        <UserMessage state={this.state} />
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
