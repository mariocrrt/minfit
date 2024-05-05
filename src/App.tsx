import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useState } from "react";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import "./App.css";

function App() {
  const [userLoggedIn, setUserLoggedIn] = useState(true);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={userLoggedIn ? <Dashboard /> : <Navigate to="/login" />}
          />
          <Route
            path="/login"
            element={!userLoggedIn ? <Login /> : <Navigate to="/" />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
