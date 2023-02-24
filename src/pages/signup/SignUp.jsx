import React, { useEffect, useRef, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import Quiz from "../quiz/Quiz";

const SignUp = () => {
  const name = useRef();
  const email = useRef();
  const password = useRef();
  const [redirect, setRedirect] = useState(false);

  const localsignUp = localStorage.getItem("signUp");

  useEffect(() => {
    if (localsignUp) {
      setRedirect(true);
    }
  }, []);

  const handleClick = (e) => {
    e.preventDefault();

    if (name.current.value && email.current.value && password.current.value) {
      localStorage.setItem("name", name.current.value);
      localStorage.setItem("email", email.current.value);
      localStorage.setItem("password", password.current.value);
      localStorage.setItem("signUp", email.current.value);
      alert("Account created successfully.");
      window.location.reload();
    }
  };

  //   if (redirect) {
  //     return <Navigate to={"/quiz"} />;
  //   }

  return (
    <>
      {redirect ? (
        <Quiz />
      ) : (
        <div className="signup">
          <div className="container">
            <h1>Sign Up</h1>
            <form>
              <label htmlFor="">Username</label>
              <input type="text" ref={name} />
              <label htmlFor="">Email</label>
              <input type="email" ref={email} />
              <label htmlFor="">Password</label>
              <input type="password" ref={password} />
              <button onClick={handleClick}>Sign Up</button>
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
      )}
    </>
  );
};

export default SignUp;
