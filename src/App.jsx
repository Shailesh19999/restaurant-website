

import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Contact from "./pages/Contact.js";
import {   Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <>
        <Navbar />
        <Routes>
          <Route path="/" exact element= {<Home/>}/>
          <Route path="/menu" exact element={<Menu/>}/>
          <Route path="/about" exact element={<About/>}/>
          <Route path="/contact" exact element= {<Contact/>}/>
        </Routes>
        <Footer />
      </>
    </div>
  );
}

export default App;