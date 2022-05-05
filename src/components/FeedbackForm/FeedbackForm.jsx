import React from "react";
import Card from "../shared/Card";
import { useState, useContext } from "react";
import Button from "../shared/Button";
import Rating from "../Rating/Rating";
import FeedbackContext from "../../context/FeedbackContext";

const FeedbackForm = () => {
  const [text, setText] = useState("");
  const [rating, setRating] = useState(10);
  const [btnDisabled, setbtnDisabled] = useState(true);
  const [message, setMessage] = useState("");
  const { addFeedback } = useContext(FeedbackContext);

  const handleTextChange = (e) => {
    if (text === "") {
      setbtnDisabled(true);
      setMessage(null);
    } else if (text !== "" && text.trim().length < 9) {
      setMessage("Text must be at least 10 characters");
      setbtnDisabled(true);
    } else {
      setMessage(null);
      setbtnDisabled(false);
    }
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length > 9) {
      const newFeedback = {
        text,
        rating,
      };
      addFeedback(newFeedback);
      setText("");
    }
  };
  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate your service with us?</h2>
        <Rating select={(rating) => setRating(rating)} />
        <div className="input-group">
          <input
            onChange={handleTextChange}
            type="text"
            placeholder="write a review"
            value={text}
          ></input>
          <Button type="submit" isDisabled={btnDisabled}>
            Send
          </Button>
        </div>
        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  );
};

export default FeedbackForm;
