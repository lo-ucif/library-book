import "./App.css";
import Home from "./component/home";
import Navbar from "./component/navbar";
import Offer from "./component/offer";
import Weektitle from "./component/weektitle";
import Borrowbook from "./component/borrowbook";
import Event from "./component/event";
import Statistics from "./component/Statistics";
import Loop from "./component/loop";
import Join from "./component/join";
import Question from "./component/Question";
import Member from "./component/Member";
import Finalpart from "./component/finalpart";

function App() {
  return (
    <div className="container">
      <div id="home">
        <Navbar />
      </div>
      <hr />
      <div id="home">
        <Home />
      </div>
      <div id="offer">
        <Offer />
      </div>
      <div id="weektitle">
        <Weektitle />
      </div>
      <div id="borrowbook">
        <Borrowbook />
      </div>
      <div id="event">
        <Event />
      </div>
      <div id="statistics">
        <Statistics />
      </div>
      <div id="loop">
        <Loop />
      </div>
      <div id="join">
        <Join />
      </div>
      <div id="question">
        <Question />
      </div>
      <div id="member">
        <Member />
      </div>
      <div id="finalpart">
        <Finalpart />
      </div>
    </div>
  );
}

export default App;
