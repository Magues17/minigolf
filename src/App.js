import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/home.js"; // Make sure this file exists and contains your homepage content
import Booking from "./Pages/booking.js"; 
import About from "./Pages/about.js"; 
import Gallery from "./Pages/gallery.js"; 
import Contact from "./Pages/Contact.js"; 
import Snowcones from "./Pages/snowcones.js"
import Navbar from "./Components/Navbar/Navbar.js";
import Footer from "./Components/Footer/Footer.js";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Add more routes like this: */}
        <Route path="/booking" element={<Booking />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Snowcones" element={<Snowcones />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
