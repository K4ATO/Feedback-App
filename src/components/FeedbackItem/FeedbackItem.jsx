import React from "react";
import { useContext } from "react";
import Card from "../shared/Card";
import { FaTimes } from "react-icons/fa";
import FeedbackContext from "../../context/FeedbackContext";
const FeedbackItem = ({ item }) => {
  const { deleteFeedback } = useContext(FeedbackContext);
  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <button className="close" onClick={() => deleteFeedback(item.id)}>
        <FaTimes color="purple" />
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  );
};

export default FeedbackItem;
