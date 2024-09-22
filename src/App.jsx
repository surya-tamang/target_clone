import React from "react";
import PrimaryNav from "./components/PrimaryNav";
import SecondaryNav from "./components/SecondaryNav";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import { Router, Routes, Route } from "react-router";

const App = () => {
  return (
    <>
      <SecondaryNav />
      <PrimaryNav />
      <Home />
      <Footer />
    </>
  );
};

export default App;
