import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import loginUser from "../strapi/loginUser";
import registerUser from "../strapi/registerUser";
import { UserContext } from "../context/user";

const Login = () => {
  const history = useHistory();
  const { userLogin, alert, showAlert } = useContext(UserContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("default");
  const [isMember, setIsMember] = useState(true);

  let isEmpty = !email || !password || !username || alert.show;

  const toggelMember = () => {
    setIsMember((prevMember) => {
      let isMember = !prevMember;
      return isMember ? setUsername("default") : setUsername("");
    });
  };

  const handleSubmit = async (e) => {
    showAlert({ msg: "accessing user data..please wait" });
    e.preventDefault();
    let response;
    if (isMember) {
      response = await loginUser({ email, password });
    } else {
      response = await registerUser({ email, password, username });
    }
    if (response) {
      const {
        jwt: token,
        user: { username },
      } = response.data;
      const newUser = { token, username };
      userLogin(newUser);
      showAlert({ msg: `you are logged in: ${username}. shop away my friend` });
      history.push("/products");
    } else {
      showAlert({
        msg: `there was an error, please try again`,
        type: "danger",
      });
      console.log("error");
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
