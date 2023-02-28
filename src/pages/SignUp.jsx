import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    localStorage.setItem("user", JSON.stringify(input));
    navigate("/login");
  };
  return (
    <div className="signup">
      <div className="container">
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="">Username</label>
          <input
            autoComplete="off"
            type="text"
            name="username"
            value={input.username}
            onChange={(e) =>
              setInput({ ...input, [e.target.name]: e.target.value })
            }
          />
          <label htmlFor="">Email</label>
          <input
            autoComplete="off"
            type="email"
            name="email"
            value={input.email}
            onChange={(e) =>
              setInput({ ...input, [e.target.name]: e.target.value })
            }
          />
          <label htmlFor="">Password</label>
          <input
            autoComplete="off"
            type="password"
            name="password"
            value={input.password}
            onChange={(e) =>
              setInput({ ...input, [e.target.name]: e.target.value })
            }
          />
          <button>Sign Up</button>
          <p>
            Already have an account?
            <span>
              <Link to="/login" className="link">
                Login
              </Link>
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
