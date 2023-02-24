import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <div className="container">
        <h1>Quiz 📖🤔🤓</h1>
        <button>
          <Link className="link" to="/login">
            Login
          </Link>
        </button>
        <button>
          <Link className="link" to="/signup">
            SignUp
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Home;
