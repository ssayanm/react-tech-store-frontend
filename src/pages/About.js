import React, { useEffect, useState } from "react";
import aboutimage from "../assets/mainBcg.jpeg";
import axios from "axios";
import url from "../utils/URL";

const About = () => {
  const [aboutcontent, setAboutcontent] = useState([]);

  useEffect(() => {
    axios.get(`${url}/innerpages/1`).then((response) => {
      const aboutcontent = response.data;
      console.log(aboutcontent.image.url);
      setAboutcontent(aboutcontent);
    });

    return () => {};
  }, []);
  return (
    <section className="section about-page">
      <h1 className="section-title">{aboutcontent.title || "default title"}</h1>
      <div className="about-section">
        <div>
          {aboutcontent.image.url && (
            <img src={aboutcontent.image.url} alt="about" />
          )}
        </div>
        <p>{aboutcontent.description}</p>
      </div>
    </section>
  );
};

export default About;
