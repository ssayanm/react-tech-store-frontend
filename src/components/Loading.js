import React from "react";
import loading from "../assets/loading.gif";

const Loading = () => {
  return (
    <div className="loading">
      <h2>loading...</h2>
      <img src={loading} alt="loading" />
    </div>
  );
};

export default Loading;
