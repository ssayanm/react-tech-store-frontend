import React, { createContext, useState, useEffect } from "react";
export const UserContext = createContext();

const getUserFromLocalStorage = () => {
  return localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : { username: null, token: null };
};

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(getUserFromLocalStorage);

  const [height, setHeight] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setHeight(window.pageYOffset);
    });
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  const userLogin = (user) => {
    setUser(user);
    localStorage.setItem("user", JSON.stringify(user));
  };

  const userLogout = () => {
    setUser({ username: null, token: null });
    localStorage.removeItem("user");
  };

  const [alert, setAlert] = useState({ show: false, msg: "", type: "success" });

  const showAlert = ({ msg, type = "success" }) => {
    setAlert({ show: true, msg, type });
  };

  const hideAlert = () => {
    setAlert({ ...alert, show: false });
  };

  return (
    <UserContext.Provider
      value={{
        user,
        userLogin,
        userLogout,
        alert,
        showAlert,
        hideAlert,
        height,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
