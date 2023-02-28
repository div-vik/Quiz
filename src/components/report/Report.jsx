import React from "react";

const Report = ({ score, questionBank, onClick }) => {
  return (
    <div className="report">
      <div className="container score">
        <div>
          <h1 className="score-text">
            You have scored {score} out of {questionBank.length}
          </h1>
          <br />
          <>
            <button type="submit" onClick={onClick}>
              Play Again
            </button>
          </>
        </div>
      </div>
    </div>
  );
};

export default Report;
