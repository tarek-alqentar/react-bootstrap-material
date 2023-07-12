import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Docs from "./components/Docs";
import Components from "./components/Components";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Docs" element={<Docs />} />
          <Route path="/Components/*" element={<Components />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
