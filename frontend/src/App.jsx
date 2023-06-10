import React from "react";
import "./index.css";
import Signup from "./components/login/Signup";
import Account from "./components/HalamanAccount/ContentAccount";
import History from "./page/History";
import Tampilan from "./page/Tampilan";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signin from "./components/login/Signin";
import HomeUser from "./page/homeUser";
import Sesudah from "./components/Selfie Absen/Sesudah";
import Dashboard from "./components/Admin/Dashboard";
import DataKaryawan from "./components/Admin/DataKaryawan";
import Datauser from "./components/Admin/Datauser";
import Datajabatan from "./components/Admin/Datajabatan";
import Dataabsen from "./components/Admin/Dataabsen";
import Dataaketerangan from "./components/Admin/Dataketerangan";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Routes>
            <Route path="/" exact element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
            {/* <Route path="/home" element={<Home />} /> */}
            <Route path="/homeUser" element={<HomeUser />} />
            <Route path="/account" element={<Account />} />
            <Route path="/history" element={<History />} />
            <Route path="/tampilan" element={<Tampilan />} />
            <Route path="/sesudah" element={<Sesudah />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/admindatakaryawan" element={<DataKaryawan />} />
            <Route path="/admindatauser" element={<Datauser />} />
            <Route path="/admindatajabatan" element={<Datajabatan />} />
            <Route path="/admindataabsen" element={<Dataabsen />} />
            <Route path="/admindataketerangan" element={<Dataaketerangan />} />
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
