import React, { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import css from "../Styles/Login.module.css";

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();

  const handleLogin = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    let payload = { email:"foo", password:"bar" };
    localStorage.setItem("login", JSON.stringify(payload));
    if (email==="foo" && password==="bar") {
      navigate("/home");
    } else {
      alert("Invalid email/Password");
    }
  };

  return (
    <div className={css.container}>
      <form className={css.forms} onSubmit={handleLogin}>
        <h1>Login Form</h1>
        <div>
          <p>Email :- </p>
          <input
            type="text"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <p className={css.password}>Password :-</p>
          <input
            type="password"
            placeholder="Enter your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export { Login };
