import React, { useState } from "react";
import Footer from "../components/Footer";
import { NavLink } from "react-router-dom";

const Signin = () => {
  const [error, setError] = useState("");
  const [credential, setCredential] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredential({ ...credential, [name]: value });
    setError("");
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const { email, password } = credential;
    if (!email || !password) {
      setError("All fields required");
    } else {
      console.log(credential);
    }
  };
  return (
    <section className="w-full min-h-screen flex items-center flex-col absolute top-0 z-50 bg-white">
      <div className="min-h-screen flex justify-center items-center flex-col md:w-96 w-52 gap-7 py-10">
        <NavLink to="/">
          <img src="target.png" alt="logo" className="w-16 h-16" />
        </NavLink>
        <form
          action=""
          onSubmit={handleFormSubmit}
          className="w-full flex items-center justify-center flex-col gap-3"
        >
          <h1 className="text-2xl font-bold my-4">
            Sign into your Target account
          </h1>
          <div className="flex justify-center items-center">
            <input type="checkbox" value="keep signed in" /> &nbsp;
            <label htmlFor="signed in">Keep me signed in</label>
          </div>
          <div className="relative border-2 w-full h-12">
            <input
              type="text"
              name="email"
              className="py-2 px-3 outline-none absolute w-full h-full z-10 bg-transparent"
              value={credential.email}
              onChange={handleChange}
            />
            <label
              className={`absolute left-2 ${
                !credential.email ? "top-3 text-base" : "-top-2 text-xs z-0"
              } bg-white px-1 capitalize`}
            >
              email or mobile phone
            </label>
          </div>
          <div className="relative border-2 w-full h-12">
            <input
              type="password"
              name="password"
              className="py-2 px-3 outline-none absolute w-full h-full z-10 bg-transparent"
              value={credential.password}
              onChange={handleChange}
            />
            <label
              className={`absolute left-2 ${
                !credential.password ? "top-3 text-base" : "-top-2 text-xs z-0"
              } bg-white px-1 capitalize`}
            >
              password
            </label>
          </div>
          <span className="text-red">{error}</span>
          <button className="bg-red hover:bg-dark_red text-white w-full py-3 rounded-3xl font-semibold text-xl">
            Sign in with password
          </button>
          <span className="underline cursor-pointer text-grey">
            Forget password
          </span>
        </form>
        <div className="bg-grey w-full h-1 flex justify-center items-center">
          <h4 className="bg-white p-2 font-bold">or</h4>
        </div>

        <div className="flex justify-center flex-col items-center w-full gap-5">
          <button className="bg-red hover:bg-dark_red text-white w-full py-3 rounded-3xl font-semibold text-xl">
            Use a passkey instead
          </button>
          <span className="underline cursor-pointer text-grey">
            What's a passkey?
          </span>
        </div>
        <NavLink
          to="/signup"
          className="bg-white border-2 border-grey hover:bg-dark_white w-full py-3 rounded-3xl font-normal text-xl capitalize text-center"
        >
          create your target account
        </NavLink>
        <div className="flex flex-col items-center gap-3">
          <p className="text-xs">By signing in, you agree to the following:</p>
          <a className="text-xs underline text-blue-800" href="">
            Target terms and conditions
          </a>
          <a className="text-xs underline text-blue-800" href="">
            Target privacy policy
          </a>
        </div>
      </div>
      <Footer />
    </section>
  );
};
export default Signin;
