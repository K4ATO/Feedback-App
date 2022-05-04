import "./App.css";
import FeedBackList from "./components/Feedbacklist/FeedBackList";
import Header from "./components/Header/Header";
import { useState } from "react";
import FeedbackData from "./data/FeedbackData";
function App() {
  const [feedback, setFeedback] = useState(FeedbackData);
  return (
    <>
      <Header />
      <div className="App">
        <FeedBackList feedback={feedback} />
      </div>
    </>
  );
}

export default App;
