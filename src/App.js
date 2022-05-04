import "./App.css";
import FeedBackList from "./components/Feedbacklist/FeedBackList";
import Header from "./components/Header/Header";
import { useState } from "react";
import FeedbackData from "./data/FeedbackData";
function App() {
  const [feedback, setFeedback] = useState(FeedbackData);
  const deleteFeedback = (id) => {
    console.log(id);
    if (window.confirm("Are you sure you want to delete?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };
  return (
    <>
      <Header />
      <div className="App">
        <FeedBackList feedback={feedback} handleDelete={deleteFeedback} />
      </div>
    </>
  );
}

export default App;
