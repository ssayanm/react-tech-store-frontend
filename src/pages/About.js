import React from "react";
import aboutimage from "../assets/about.jpg";

const About = () => {
  return (
    <section className="section about-page">
      {" "}
      <h1 className="section-title">About Us</h1>
      <div className="about-section">
        <div>
          <img src={aboutimage} alt="about" />
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam
          architecto expedita recusandae. Harum obcaecati provident libero
          nostrum temporibus, architecto ut debitis enim dolorem fugit facere
          beatae! Et repellat veniam officiis? Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Numquam architecto expedita recusandae.
          Harum obcaecati provident libero nostrum temporibus, architecto ut
          debitis enim dolorem fugit facere beatae! Et repellat veniam officiis?
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam
          architecto expedita recusandae. Harum obcaecati provident libero
          nostrum temporibus, architecto ut debitis enim dolorem fugit facere
          beatae! Et repellat veniam officiis? Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Numquam architecto expedita recusandae.
          Harum obcaecati provident libero nostrum temporibus, architecto ut
          debitis enim dolorem fugit facere beatae! Et repellat veniam officiis?
        </p>
      </div>
    </section>
  );
};

export default About;
