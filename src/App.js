import Home from "./pages/Home";
import Login from "./pages/Login";
import Quiz from "./pages/Quiz";
import SignUp from "./pages/SignUp";
import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
} from "react-router-dom";
import { useState } from "react";
import ProtectedRoute from "./services/ProtectedRoute";

function App() {
  const Layout = () => {
    return (
      <div className="app">
        <Outlet />
      </div>
    );
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<ProtectedRoute />}>
          <Route path="/quiz" element={<Quiz />} />
        </Route>
        <Route index path="/" element={<Home />} />
      </Route>
    )
  );

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
