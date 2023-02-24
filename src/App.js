import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Quiz from "./pages/quiz/Quiz";
import SignUp from "./pages/signup/SignUp";
import "./App.css";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { useState } from "react";

function App() {
  const Layout = () => {
    return (
      <div className="app">
        <Outlet />
      </div>
    );
  };

  // const [redirect, setRedirect] = useState(<SignUp />);
  // if (localStorage.getItem("signUp")) {
  //   setRedirect(<Quiz />);
  // }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/signup",
          element: <SignUp />,
        },
        // {
        //   path: "/quiz",
        //   element: <Quiz />,
        // },
      ],
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
