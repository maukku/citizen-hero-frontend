import { useState } from "react";
import Representative from "./components/Representative";
import RepresentativesList from "./components/RepresentativesList";
import Header from "./components/shared/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Sidebar from "./components/shared/Sidebar";
import Footer from "./components/shared/Footer";
import Contact from "./components/pages/Contact";
import Legal from "./components/pages/Legal";
import Privacy from "./components/pages/Privacy";
import Home from "./components/pages/Home";
import Votes from "./components/pages/Votes";
import Politicians from "./components/pages/Politicians";
import Login from "./components/pages/Login";

function App() {
  

  return (
    <Router>
      <div className="App">
        <Header />
        <div className="main-container">
          <main className="content">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/Votes" element={<Votes />} />
              <Route exact path="/Politicians" element={<Politicians />} />
              <Route exact path="/Login" element={<Login />} />
              <Route exact path="/Legal" element={<Legal />} />
              <Route exact path="/Contact" element={<Contact />} />
              <Route exact path="/Privacy" element={<Privacy />} />
            </Routes>
          </main>
          <Sidebar />
          <Footer />
        </div>
  
      </div>
    </Router>
  );
}
export default App;
