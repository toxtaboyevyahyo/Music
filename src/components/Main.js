import { mains } from "../data/mains";
import "../styles/main.css";
import ic from "../assets/icon.svg";
import icn from "../assets/icons.svg";
import icns from "../assets/iconca.svg";
import iconm from "../assets/iconc.svg";
import icol from "../assets/iconkf.svg";
import { Fragment } from "react";

const Main = () => {
  return (
    <div className="main">
      {mains.map((title) => {
        return (
          <Fragment key={title.id} className="main-box">
            <div className="main-content">
              <h1>{title.our}</h1>
            </div>
            <div className="main-list">
              <div className="main-images">
                <div className="main-img">
                  <img src={ic} alt="img" />
                </div>
              </div>
              <div className="main-images">
                <div className="main-img1">
                  <img src={icn} alt="img" />
                </div>
              </div>
              <div className="main-images">
                <div className="main-imgs">
                  <img src={icns} alt="img" />
                </div>
              </div>
              <div className="main-images">
                <div className="main-img2">
                  <img src={iconm} alt="img" />
                </div>
              </div>
              <div className="main-images">
                <div className="main-img">
                  <img src={icol} alt="img" />
                </div>
              </div>
            </div>
          </Fragment>
        );
      })}
    </div>
  );
};

export default Main;
