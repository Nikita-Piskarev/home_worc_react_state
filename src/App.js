import logo from "./logo.svg";
import "./App.css";
import Message from "./componnennte/Message";

const userMassage = {
  name: "Admin",
  message: "Hello admin",
};
function App() {
  return <Message userMassage={userMassage} />;
}

export default App;
