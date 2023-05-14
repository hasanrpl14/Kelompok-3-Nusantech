import "./index.css";
import Signin from "./components/login/Signin";
import Signup from "./components/login/Signup";
import Home from "./page/Home";
import History from "./page/History";
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
            <Route path="/history" element={<History />} />
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
