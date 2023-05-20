import React from "react";
import "./index.css";
import Signup from "./components/login/Signup";
import Account from "./components/HalamanAccount/ContentAccount";
import History from "./page/History";
import Tampilan from "./page/Tampilan";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signin from "./components/login/Signin";
import HomeUser from "./page/homeUser";
import Sebelum from "./components/Selfie Absen/Sebelum";
import Sesudah from "./components/Selfie Absen/Sesudah";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Routes>
            <Route path="/" exact element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
            {/* <Route path="/home" exact element={<Home />} /> */}
            <Route path="/homeUser" element={<HomeUser />} />
            <Route path="/account" element={<Account />} />
            <Route path="/history" element={<History />} />
            <Route path="/tampilan" element={<Tampilan />} />
            <Route path="/sebelum" element={<Sebelum />} />
            <Route path="/sesudah" element={<Sesudah />} />
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
