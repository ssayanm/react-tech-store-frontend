import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import axios from "axios";
import url from "../utils/URL";

const HomeIntro = () => {
  const [sliders, setSliders] = useState([]);

  useEffect(() => {
    axios.get(`${url}/sliders`).then((response) => {
      const sliders = response.data;
      setSliders(sliders);
    });

    return () => {};
  }, []);

  return (
    <section className="section home-intro">
      <div className="home-intro-center">
        <h1 className="section-title">About Us</h1>
        <div className="home-intro-content">
          <div className="texts">
            <h3>We are the best!</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam
              architecto expedita recusandae. Harum obcaecati provident libero
              nostrum temporibus, architecto ut debitis enim dolorem fugit
              facere beatae! Et repellat veniam officiis? Lorem ipsum dolor sit
              amet, consectetur adipisicing elit. Numquam architecto expedita
              recusandae. Harum obcaecati provident libero nostrum temporibus,
              architecto ut debitis enim dolorem fugit facere beatae! Et
              repellat veniam officiis?
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam
              architecto expedita recusandae. Harum obcaecati provident libero
              nostrum temporibus, architecto ut debitis enim dolorem fugit
              facere beatae! Et repellat veniam officiis? Lorem ipsum dolor sit
              amet, consectetur adipisicing elit. Numquam architecto expedita
              recusandae. Harum obcaecati provident libero nostrum temporibus,
              architecto ut debitis enim dolorem fugit facere beatae! Et
              repellat veniam officiis?
            </p>
            <Link to="/" className="btn btn-primary">
              Know more
            </Link>
          </div>

          <Slider className="slider" autoplay={4000}>
            {sliders.map((item, index) => {
              //   console.log(item.slide.url);
              return (
                <div
                  key={index}
                  style={{
                    backgroundImage: `url('${item.slide.url}')`,
                    backgroundPosition: `center center`,
                    backgroundSize: `cover`,
                  }}
                  className="slider-content"
                >
                  ss
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default HomeIntro;
