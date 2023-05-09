import "./index.css";
import Login from "./components/login/Login";
import Signin from "./components/login/Signin";
import Home from "./page/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
