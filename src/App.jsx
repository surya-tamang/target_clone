import React from "react";
import PrimaryNav from "./components/PrimaryNav";
import SecondaryNav from "./components/SecondaryNav";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signin from "./pages/signin";

const App = () => {
  return (
    <>
      <Router>
        <SecondaryNav />
        <PrimaryNav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<Signin />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
