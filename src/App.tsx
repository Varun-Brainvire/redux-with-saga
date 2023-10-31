import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <Home />
    </div>

    //  <Router>
    //   <Routes>
    //     <Route path="/" element={<Add />} />
    //     <Route path="/add-user" element={<Home />} />
    //   </Routes>
    // </Router>
  );
}

export default App;
