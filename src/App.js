import { useState } from "react";
import RepresentativeItem from "./components/RepresentativeItem";

import Header from "./components/shared/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Sidebar from "./components/shared/Sidebar";
import Footer from "./components/shared/Footer";
import Contact from "./components/pages/Contact";
import Privacy from "./components/pages/Privacy";
import Home from "./components/pages/Home";
import Newsletter from "./components/pages/Newsletter";
import Votes from "./components/pages/Votes";
import SignUp from "./components/pages/SignUp";
import Politicians from "./components/pages/Politicians";
import Login from "./components/pages/Login";
import SendEmail from "./components/pages/SendEmail";
import { RepresentativeProvider } from "./context/RepresentativeContext";
import { FormProvider } from "./context/FormContext";

function App() {
  return (
    <div className="App">
      <RepresentativeProvider>
        <FormProvider>
          <Router>
            <div className="main-container">
              <Header className="Header" />
              <main className="content">
                <Routes>
                  <Route exact path="/" element={<Home />} />
                  <Route exact path="/Votes" element={<Votes />} />
                  <Route exact path="/Politicians" element={<Politicians />} />
                  <Route exact path="/SendEmail" element={<SendEmail />} />
                  <Route exact path="/SignUp" element={<SignUp />} />
                  <Route exact path="/Login" element={<Login />} />
                  <Route exact path="/Newsletter" element={<Newsletter />} />
                  <Route exact path="/Contact" element={<Contact />} />
                  <Route exact path="/Privacy" element={<Privacy />} />
                </Routes>
              </main>
              <Sidebar className="Sidebar" />
            </div>
            <Footer className="Footer" />
          </Router>
        </FormProvider>
      </RepresentativeProvider>
    </div>
  );
}
export default App;
