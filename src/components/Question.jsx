import React, { useState } from "react";
import { arrowdown, arrowup } from "../helper/icons";
import questions from "../helper/data";

const Card = () => {
  const [takeId, setTakeId] = useState(null);

  const handleShowButton = (id) => {
    // Tıklanan sorunun ID'sini setTakeId ile güncelle
    setTakeId(takeId === id ? null : id);
  };

  return questions.map(({ id, question, answer }) => (
    <div className="card-group" key={id}>
      <div className="card">
        <div className="ques-answer">
          <h5>{question}</h5>
          <button
            className="btn-minus"
            onClick={() => handleShowButton(id)}
            style={{ display: takeId === id ? "none" : "block" }}
          >
            {arrowdown}
          </button>
          <button
            className="btn-minus"
            onClick={() => handleShowButton(id)}
            style={{ display: takeId === id ? "block" : "none" }}
          >
            {arrowup}
          </button>
        </div>
        <p style={{ display: takeId === id ? "block" : "none" }}>{answer}</p>
      </div>
    </div>
  ));
};

export default Card;
