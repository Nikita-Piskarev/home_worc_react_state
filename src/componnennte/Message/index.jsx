import { Component } from "react";
import ButtonRead from "../ButtonRead";
import ButtonReload from "../ButtonReload";
import UserMessage from "../UserMassage";
class Message extends Component {
  state = {
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
    const { userMassage } = this.props;

    return (
      <div>
        <UserMessage userMassage={userMassage} />
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
