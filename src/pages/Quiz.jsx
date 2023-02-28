import React from "react";
import { useNavigate } from "react-router-dom";
import QuizComp from "../components/quizComponents/QuizComp";

const Quiz = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("loggedin");
    navigate("/login");
  };
  return (
    <div className="quiz">
      <div className="container">
        <div className="top">
          <h1>Quiz 📖🤔🤓</h1>
          <button onClick={handleLogout} type="button" className="logout">
            Logout
          </button>
        </div>
        <div className="bottom">
          <QuizComp />
        </div>
      </div>
    </div>
  );
};

export default Quiz;
