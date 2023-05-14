import "./index.css";
import Signin from "./components/login/Signin";
import Signup from "./components/login/Signup";
import Account from "./components/Halaman Account/Account";
import Home from "./page/Home";
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
            <Route path="/account" element={<Account/>} />
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
