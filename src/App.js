import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import UnderConstruction from "./pages/UnderConstruction";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      {/* <Navbar /> */}
      <Routes>
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/products" element={<Products />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/" element={<UnderConstruction />} />
      </Routes>
    </>
  );
}

export default App;
