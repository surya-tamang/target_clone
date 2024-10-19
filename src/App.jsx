import React, { useState } from "react";
import PrimaryNav from "./components/PrimaryNav";
import SecondaryNav from "./components/SecondaryNav";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signin from "./pages/Signin";
import SignUp from "./pages/SignUp";
import UserSetting from "./components/UserSetting";
import CartBox from "./components/CartBox";

const App = () => {
  const [visibilityNav, setVisibiltyNav] = useState(false);
  const [visibleSignin, setVisibleSignin] = useState(false);
  const [visibleCartBox, setVisibleCartBox] = useState(false);
  const handleNavBox = () => {
    setVisibiltyNav(!visibilityNav);
  };
  return (
    <>
      <Router>
        <SecondaryNav />
        <PrimaryNav
          visibilityNav={visibilityNav}
          visibleSignin={visibleSignin}
          visibleCartBox={visibleCartBox}
          handleClick={handleNavBox}
          handleCart={() => setVisibleCartBox(!visibleCartBox)}
          handleSigninClick={() => setVisibleSignin(!visibleSignin)}
        />
        <UserSetting
          isVisibleSignin={visibleSignin}
          handleSigninClick={() => setVisibleSignin(!visibleSignin)}
          handlebtnClick={() => setVisibleSignin(false)}
        />
        <CartBox
          isVisibleCart={visibleCartBox}
          handleClick={() => setVisibleCartBox(false)}
        />
        <Routes>
          <Route path="/target_clone" element={<Home />} />
          <Route path="/target_clone/signin" element={<Signin />} />
          <Route path="/target_clone/signup" element={<SignUp />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
