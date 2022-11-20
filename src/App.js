import "./App.css";
import Message from "./componnennte/UserMassage/Message";

const userMassage = {
  name: "Pasha",
  message: "Hello my name is Pasha!",
};
function App() {
  return <Message userMassage={userMassage} />;
}

export default App;
