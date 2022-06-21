import React, { useState } from "react";
import "./loginForm.css";

export const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [disable, setIsDisable] = useState(true);
  const [alert, setAlert] = useState("");

  const loginBtn = document.getElementById("login-button");

  const handleUsername = (event) => {
    setUsername(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (username && password) {
      setAlert("Submitted");
      console.log("Submit");
      // console.log(username);
      // console.log(password);

    } else if (!username && !password) {
      setIsDisable(false);
    } else {
      setAlert("");
    }
  };

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <h2>Login Form</h2>
        <span id="alert">{alert}</span>
        <input
          type="text"
          id="username-input"
          placeholder="username"
          value={username}
          onChange={handleUsername}
        />
        <input
          type="password"
          id=" password-input"
          placeholder="password"
          value={password}
          onChange={handlePassword}
        />
        <button type="submit" id="login-button" disable={disable.toString()}>
          Submit
        </button>
      </form>
    </main>
  );
};

export default LoginForm;
