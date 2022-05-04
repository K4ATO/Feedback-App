import "./App.css";
import FeedbackItem from "./components/FeedbackItem/FeedbackItem";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <Header />
      <div className="App">
        <FeedbackItem />
      </div>
    </>
  );
}

export default App;
