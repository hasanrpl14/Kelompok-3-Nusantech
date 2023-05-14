import React from "react";
import "./index.css";
import Signin from "./components/login/Signin";
import Signup from "./components/login/Signup";
import Account from "./components/Halaman Account/Account";
import Home from "./page/Home";
<<<<<<< HEAD
import History from "./page/History";
=======
import Tampilan from "./page/Tampilan";
>>>>>>> raffa
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Routes>
            <Route path="/" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/home" element={<Home />} />
<<<<<<< HEAD
            <Route path="/account" element={<Account/>} />
            <Route path="/history" element={<History />} />
=======
            <Route path="/tampilan" element={<Tampilan />} />

>>>>>>> raffa
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
