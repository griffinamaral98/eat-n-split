import AddFriendForm from "./components/AddFriendForm";
import Button from "./components/Button";
import FriendsList from "./components/FriendsList";
import SplitBillForm from "./components/SplitBillForm";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="sidebar">
          <FriendsList />
          <AddFriendForm />
          <Button>Add Friend</Button>
        </div>
        <SplitBillForm />
      </div>
    </div>
  );
}

export default App;
