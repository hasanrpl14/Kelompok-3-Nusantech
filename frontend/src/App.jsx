import React from "react";
import "./index.css";
import Signup from "./components/login/Signup";
import Account from "./components/Halaman Account/Account";
import Home from "./page/Home";
import History from "./page/History";
import Tampilan from "./page/Tampilan";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signin from "./components/login/Signin";
import HomeUser from "./page/homeUser";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Routes>
            <Route path="/" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/home" element={<Home />} />
            <Route path="/homeUser" element={<HomeUser />} />
            <Route path="/account" element={<Account />} />
            <Route path="/history" element={<History />} />
            <Route path="/tampilan" element={<Tampilan />} />
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
