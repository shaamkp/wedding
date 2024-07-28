import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Invitation from "./components/Invitation";
import RSVP from "./components/RSVP";
import Slideshow from "./components/Slideshow";

function App() {
  return (
    <div>
      <Header />
      <Slideshow />
      <Invitation />
      <RSVP />
    </div>
  );
}

export default App;
