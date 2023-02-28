import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <div className="container">
        <h1>Quiz 📖🤔🤓</h1>
        <Link className="link" to="/login">
          <button>Login</button>
        </Link>
        <Link className="link" to="/signup">
          <button>SignUp</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
