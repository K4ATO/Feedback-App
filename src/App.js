import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import FeedBackList from "./components/Feedbacklist/FeedBackList";
import Header from "./components/Header/Header";
import FeedbackStats from "./components/FeedbackStats/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm/FeedbackForm";
import About from "./components/About/About";
import { FeedbackProvider } from "./context/FeedbackContext";
import AboutIconLink from "./components/AboutIconLink/AboutIconLink";
function App() {
  return (
    <>
      <FeedbackProvider>
        <Router>
          <Header />
          <div className="container">
            <Routes>
              <Route
                exact
                path="/"
                element={
                  <>
                    <FeedbackForm />
                    <FeedbackStats />
                    <FeedBackList />
                  </>
                }
              ></Route>
              <Route path="/about" element={<About />} />
            </Routes>
            <AboutIconLink />
          </div>
        </Router>
      </FeedbackProvider>
    </>
  );
}

export default App;
