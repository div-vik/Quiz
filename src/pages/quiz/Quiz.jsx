import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import QuizComp from "../../components/quizComponents/QuizComp";
import "./Quiz.css";

const Quiz = () => {
  const [redirect, setRedirect] = useState(false);
  const logout = () => {
    localStorage.removeItem("signUp");
    setRedirect(true);
  };

  if (redirect) {
    return <Navigate to={"/signup"} />;
  }

  return (
    <div>
      <div className="container">
        <div className="top">
          <h1>Quiz 📖🤔🤓</h1>
          <button onClick={logout} className="logout">
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
