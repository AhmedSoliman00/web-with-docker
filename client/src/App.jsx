import {Link} from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Sidebar from "./Sidebar";
import Home from "./pages/Home";
import Students from "./pages/Students";

function App() {
  return (
    <BrowserRouter>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/students" element={<Students />} />
        </Routes>
      
    </BrowserRouter>
  );
}

export default App;
