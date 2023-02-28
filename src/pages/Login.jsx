import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const handleLogin = (e) => {
    e.preventDefault();

    const loggedUser = JSON.parse(localStorage.getItem("user"));

    if (
      input.email === loggedUser.email &&
      input.password === loggedUser.password
    ) {
      localStorage.setItem("loggedin", true);
      navigate("/quiz");
    } else {
      alert("Wrong credentials!");
    }
  };
  return (
    <div className="login">
      <div className="container">
        <h1>Login</h1>
        <form onSubmit={handleLogin}>
          <label htmlFor="">Email</label>
          <input
            type="email"
            name="email"
            value={input.email}
            onChange={(e) =>
              setInput({ ...input, [e.target.name]: e.target.value })
            }
          />
          <label htmlFor="">Password</label>
          <input
            type="password"
            name="password"
            value={input.password}
            onChange={(e) =>
              setInput({ ...input, [e.target.name]: e.target.value })
            }
          />
          <button>Login</button>
          <p>
            Create an account.
            <span>
              <Link to="/signup" className="link">
                SignUp
              </Link>
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
