import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Quiz from "../quiz/Quiz";

const Login = () => {
  const email = useRef();
  const password = useRef();
  const [redirect, setRedirect] = useState(false);

  const localEmail = localStorage.getItem("email");
  const localPassword = localStorage.getItem("password");

  const localsignUp = localStorage.getItem("login");

  useEffect(() => {
    if (localsignUp) {
      setRedirect(true);
    }
  }, []);

  const handleClick = () => {
    if (
      email.current.value === localEmail &&
      password.current.value === localPassword
    ) {
      localStorage.setItem("login", email.current.value);
      window.location.reload();
    }
  };

  return (
    <>
      {redirect ? (
        <Quiz />
      ) : (
        <div className="login">
          <div className="container">
            <h1>Login</h1>
            <form>
              <label htmlFor="">Email</label>
              <input type="email" ref={email} />
              <label htmlFor="">Password</label>
              <input type="password" ref={password} />
              <button onClick={handleClick}>Login</button>
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
      )}
    </>
  );
};

export default Login;
