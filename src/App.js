import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import FeedBackList from "./components/Feedbacklist/FeedBackList";
import Header from "./components/Header/Header";
import { useState } from "react";
import FeedbackData from "./data/FeedbackData";
import FeedbackStats from "./components/FeedbackStats/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm/FeedbackForm";
import About from "./components/About/About";
function App() {
  const [feedback, setFeedback] = useState(FeedbackData);
  const deleteFeedback = (id) => {
    console.log(id);
    if (window.confirm("Are you sure you want to delete?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };
  return (
    <>
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  <FeedbackForm handleAdd={addFeedback} />
                  <FeedbackStats feedback={feedback} />
                  <FeedBackList
                    feedback={feedback}
                    handleDelete={deleteFeedback}
                  />
                </>
              }
            ></Route>
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
