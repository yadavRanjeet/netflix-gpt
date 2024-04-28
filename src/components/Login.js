import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import { login, signup } from "../utils/apiCallfunct";
import { addUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";
import { BG_URL } from "../utils/Constant";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = async () => {
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return;

    const signupData = {
      username: name?.current?.value,
      email: email?.current?.value,
      password: password?.current?.value,
    };
    const signinData = {
      identifier: email?.current?.value,
      password: password?.current?.value,
    };

    try {
      if (isSignInForm) {
        const response = await login(signinData);
        dispatch(addUser(response.data));
      } else {
        const response = await signup(signupData);
        dispatch(addUser(response.data));
      }
      
    } catch (error) {
      console.error("Authentication error:", error);
      setErrorMessage("Authentication failed. Please try again.");
    }
  };
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className=" absolute">
        <img className="w-screen h-screen aspect-auto" src={BG_URL} alt="" />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-3/12 text-xl absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-55 rounded-lg cursor-pointer"
      >
        <h1 className="font-bold text-3xl py-4 ">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder=" Full Name"
            className="p-4 my-4 w-full text-xl bg-gray-700 rounded-lg"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full text-xl bg-gray-700 rounded-lg"
        />
        <input
          ref={password}
          type="password"
          placeholder="password"
          className="p-4 my-4 w-full text-xl bg-gray-700 rounded-lg"
        />
        <p className="text-red-500">{errorMessage}</p>
        <button
          className="p-4 my-4 bg-red-700 w-full rounded-lg"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="p-4" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix? Sign Up Now"
            : "Already registerd? Sign In Now."}
        </p>
      </form>
    </div>
  );
};

export default Login;
