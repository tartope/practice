import React, { useRef } from "react";
// Use useNavigate to send to home page when button is clicked
import { useNavigate } from "react-router-dom";

// Create a personkey
const PERSON_KEY = "PersonKey";

export const Login = () => {
    // Assign initial state of username and password to null using useRef()
    let refUserName = useRef(null);
    let refPassword = useRef(null);
    // Assign variable name to useNavigate()
    let navigate = useNavigate();

    const handleClick = () => {
    // console.log(refUserName.current.value, refPassword.current.value);
    
    // Create object with firstname and password
    const user = {
        firstName: refUserName.current.value,
        password: refPassword.current.value,
    };
    // console.log(user);

    // Set local storage with personkey and stringify user object
    localStorage.setItem(PERSON_KEY, JSON.stringify(user));

    // Parse object in local storage and log to console
    const u = JSON.parse(localStorage.getItem(PERSON_KEY));
    console.log(u);

    // Reset username and password to empty string
    refUserName.current.value = "";
    refPassword.current.value = "";

    // Navigate user to home page at end
    navigate("/");
    };

  return (
    <div>
      Login
      <br />
      <input type="text" ref={refUserName} placeholder="Username"></input>
      <br />
      <input type="password" ref={refPassword} placeholder="Password"></input>
      <br />
      <button onClick={() => handleClick()}>Submit</button>
    </div>
  );
};


// Know how and when to use these methods below (take a look at the docs):

// localStorage.setItem
// localStorage.getItem
// localStorage.removeItem (know how to use it in the browser)

// JSON.stringify()
// JSON.parse()
// .json()  --will not be tested