import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import Homepage from "./components/pages/homepage";
import Privacy from "./components/privacy/privacy";
import Menupage from "./components/pages/menupage";
import Aboutpage from "./components/pages/aboutpage";
import PrivacyPage from "./components/pages/privacypage";
import "./App.css";
import Termos from "./components/pages/termos";
import Contact from "./components/contact/contact";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/menu" element={<Menupage />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/contatos" element={<Contact />} />
          <Route path="/sobre" element={<Aboutpage />} />
          <Route path="/privacidade" element={<PrivacyPage />} />
          <Route path="/termos" element={<Termos />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
