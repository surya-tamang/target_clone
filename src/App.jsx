import React from "react";
import PrimaryNav from "./components/PrimaryNav";
import SecondaryNav from "./components/SecondaryNav";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Router>
        <SecondaryNav />
        <PrimaryNav />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
