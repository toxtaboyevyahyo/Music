import "../styles/hero.css";
import { herk } from "../data/herk";
import son from "../assets/song.svg";
import { Fragment } from "react";

const Hero = () => {
  return (
    <div>
      {herk.map((value) => {
        return (
          <Fragment key={value.id}>
            <h1 className="hero-title">{value.good}</h1>
            <div className="hero-box">
              <div className="hero-list">
                <div className="hero-flex">
                  <div className="hero-img">
                    <img width={150} src={value.imgBattery} alt="" />
                  </div>
                  <div className="hero-content">
                    <h2>{value.terry}</h2>
                    <p>{value.acc}</p>
                    <h3>{value.more}</h3>
                  </div>
                </div>
                <div className="hero-flex">
                  <div className="hero-img">
                    <img width={150} src={value.imgBluets} alt="" />
                  </div>
                  <div className="hero-content">
                    <h2>{value.terry}</h2>
                    <p>{value.acc}</p>
                    <h3>{value.more}</h3>
                  </div>
                </div>
                <div className="hero-flex">
                  <div className="hero-img">
                    <img width={150} src={value.imgMicrofon} alt="" />
                  </div>
                  <div className="hero-content">
                    <h2>{value.terry}</h2>
                    <p>{value.acc}</p>
                    <h3>{value.more}</h3>
                  </div>
                </div>
              </div>
              <img src={son} alt="img" />
            </div>
          </Fragment>
        );
      })}
    </div>
  );
};

export default Hero;
