import "../styles/header.css";
import { head } from "../data/head";
import { Fragment } from "react";
import logotip from "../assets/logo.svg";
import serch from "../assets/search.svg";
import brek from "../assets/break.svg";
import peop from "../assets/people.svg";
import burg from "../assets/burger.svg";
import musc from "../assets/music.svg";
function Header() {
  return (
    <div className="header">
      {head.map((item) => {
        return (
          <Fragment key={item.id}>
            <div className="header-box">
              <div className="header-logo">
                <img src={logotip} alt="img" />
              </div>
              <div className="images-flex">
                <div className="imgs">
                  <img src={serch} alt="img" />
                </div>
                <span className="span"></span>
                <div className="imgs">
                  <img src={brek} alt="img" />
                </div>
                <span className="span"></span>
                <div className="imgs">
                  <img src={peop} alt="img" />
                </div>
              </div>
              <img src={burg} alt="img" />
            </div>
            <div className="header-list">
              <div className="header-images">
                <img src={musc} alt="img" />
              </div>
              <div className="header-content">
                <h3>{item.heart}</h3>
                <h1>{item.move}</h1>
                <span>{item.dollar}</span>
                <span className="span-btn"></span>
                <span className="spn">{item.dollars}</span>
                <br />
                <br />
                <button>{item.btn}</button>
              </div>
            </div>
          </Fragment>
        );
      })}
    </div>
  );
}

export default Header;
