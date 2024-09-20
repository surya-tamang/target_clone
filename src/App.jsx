import React from "react";
import PrimaryNav from "./components/PrimaryNav";
import SecondaryNav from "./components/SecondaryNav";
import Home from "./pages/Home";

const App = () => {
  return (
    <>
      <SecondaryNav />
      <PrimaryNav />
      <Home />
    </>
  );
};

export default App;
