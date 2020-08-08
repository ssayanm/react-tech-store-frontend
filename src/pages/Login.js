import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import loginUser from "../strapi/loginUser";
import registerUser from "../strapi/registerUser";

const Login = () => {
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("default");
  const [isMember, setIsMember] = useState(true);

  let isEmpty = !email || !password || !username;

  const toggelMember = () => {
    setIsMember((prevMember) => {
      return isMember ? setUsername("default") : setUsername("");
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let response;
    if (isMember) {
      //response= await
    } else {
    }
    if (response) {
    } else {
    }
  };

  return (
    <section className="form section">
      <h2 className="section-title">{isMember ? "sign In" : "register"}</h2>
      <form className="login-form">
        <div className="form-control">
          <label htmlFor="email">email</label>
          <input
            type="email"
            value={email}
            id="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="password">password</label>
          <input
            type="password"
            value={password}
            id="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {!isMember && (
          <div className="form-control">
            <label htmlFor="username">username</label>
            <input
              type="text"
              value={username}
              id="username"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
        )}

        {isEmpty && (
          <p className="form-empty">Please fill out the form fields</p>
        )}

        {!isEmpty && (
          <button
            type="submit"
            className="btn btn-primary btn-block"
            onClick={handleSubmit}
          >
            submit
          </button>
        )}

        <p className="register-link">
          {isMember ? "need to register" : "already a member"}
          <button type="button" onClick={toggelMember}>
            click here
          </button>
        </p>
      </form>
    </section>
  );
};

export default Login;
