import React from "react";
import Footer from "../components/Footer";

const Signin = () => {
  return (
    <section className="w-full min-h-screen flex items-center flex-col absolute top-0 z-50 bg-white">
      <div className="min-h-screen flex justify-center items-center flex-col md:w-96 w-52 gap-7 py-10">
        <img src="target.png" alt="logo" className="w-16 h-16" />
        <form
          action=""
          className="w-full flex items-center justify-center flex-col gap-3"
        >
          <h1 className="text-2xl font-bold my-4">
            Sign into your Target account
          </h1>
          <div className="flex justify-center items-center">
            <input type="checkbox" value="keep signed in" /> &nbsp;
            <label htmlFor="signed in">Keep me signed in</label>
          </div>
          <input
            className="px-2 py-3 border-2 border-black w-full rounded-md"
            type="text"
            name="email"
          />
          <input
            className="px-2 py-3 border-2 border-black w-full rounded-md"
            type="password"
            name="email"
          />
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
        <button className="bg-white border-2 border-grey hover:bg-dark_white w-full py-3 rounded-3xl font-normal text-xl capitalize">
          create your target account
        </button>
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
