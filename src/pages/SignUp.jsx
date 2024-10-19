import React, { useState } from "react";
import Footer from "../components/Footer";
import { NavLink } from "react-router-dom";

const SignUp = () => {
  const [userData, setUserData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    phone: "",
    password: "",
  });
  const formTemplate = [
    { placeholder: "email address", name: "email", value: userData.email },
    { placeholder: "first name", name: "firstName", value: userData.firstName },
    { placeholder: "last name", name: "lastName", value: userData.lastName },
    { placeholder: "Phone number", name: "phone", value: userData.phone },
    {
      placeholder: "create password",
      name: "password",
      value: userData.password,
    },
  ];
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
    setError("");
  };
  const [error, setError] = useState("");
  const regExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setError("");
    const { email, firstName, lastName, phone, password } = userData;
    if (!email || !firstName || !lastName || !phone || !password) {
      setError("All fields required");
    } else if (!regExp.test(email)) {
      setError("Invalid email");
    } else {
      console.log(userData);
    }
  };

  return (
    <section className="w-full min-h-screen flex items-center flex-col absolute top-0 z-50 bg-white">
      <div className="min-h-screen flex justify-center items-center flex-col md:w-96 w-52 gap-7 py-10">
        <NavLink to="/target_clone/">
          <img src="target.png" alt="logo" className="w-16 h-16" />
        </NavLink>
        <form
          method="POST"
          onSubmit={handleFormSubmit}
          className="w-full flex flex-col items-center justify-center gap-4"
        >
          <h1 className="text-xl font-bold">Create your Target account</h1>
          <span className="text-red">{error}</span>
          {formTemplate.map((attri, index) => {
            const { placeholder, name, value } = attri;
            return (
              <div key={index} className="relative border-2 w-full h-12">
                <input
                  type="text"
                  name={name}
                  className="py-2 px-3 outline-none absolute w-full h-full z-10 bg-transparent"
                  value={value}
                  onChange={handleChange}
                />
                <label
                  className={`absolute left-2 ${
                    !value ? "top-3 text-base" : "-top-2 text-xs z-0"
                  } bg-white px-1 capitalize`}
                >
                  {placeholder}
                </label>
              </div>
            );
          })}
          <label className="flex gap-2">
            <input type="checkbox" value="ok" />
            <div>
              <h1>Keep me signed in</h1>
              <p className="text-xs">
                By checking this box you won't have to sign in as often on this
                device. For your security, we recommend only checking this box
                on your personal devices.
              </p>
            </div>
          </label>
          <article className="text-xs my-1">
            By creating an account, you are agreeing to the Target terms &
            conditions and Target privacy policy, including receipt of Target
            exclusive email offers and promotions. To manage your marketing
            choices please access the Choice section of the Target Privacy
            Policy or call Target Guest Relations. Message and data rates may
            apply when including a phone number.
          </article>
          <a href="" className="underline text-grey cursor-pointer capitalize">
            terms & conditions
          </a>
          <a href="" className="underline text-grey cursor-pointer capitalize">
            privacy policy
          </a>
          <button className="bg-red hover:bg-dark_red text-white w-full py-3 rounded-3xl font-semibold text-xl">
            Create an account
          </button>
          <NavLink
            to="/target_clone/signin"
            className="underline text-grey cursor-pointer capitalize"
          >
            or signin
          </NavLink>
        </form>
      </div>
      <Footer />
    </section>
  );
};

export default SignUp;
