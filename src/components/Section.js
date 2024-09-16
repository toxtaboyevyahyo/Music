import "../styles/section.css";
import { sect } from "../data/sect";
import imgSong from "../assets/songs.svg";
import imgSong1 from "../assets/songs1.svg";
import imgSong2 from "../assets/songs2.svg";
import imgStar from "../assets/start.svg";
import kan from "../assets/iconka.svg";
import { Fragment } from "react";

const Section = () => {
  return (
    <div className="section">
      {sect.map((sact) => {
        return (
          <Fragment key={sact.id} className="section-box">
            <div className="section-content">
              <h1>{sact.lates}</h1>
              <p>{sact.lorem}</p>
            </div>
            <div className="section-list">
              <div className="section-items">
                <div className="bacg">
                  <img className="section-bacg" src={imgSong} alt="img" />
                  <img className="positive" src={kan} alt="img" />
                </div>

                <div className="flex">
                  <div className="section-img">
                    <img src={imgStar} alt="img" />
                  </div>
                  <div className="section-number">
                    <h6>{sact.numReyting}</h6>
                  </div>
                </div>
                <div className="bloc">
                  <div className="left">
                    <h4>{sact.read}</h4>
                  </div>
                  <div className="right">
                    <h5>{sact.nubers}</h5>
                  </div>
                </div>
              </div>
              <div className="section-items">
                <div className="bacg">
                  <img className="section-bacg1" src={imgSong1} alt="img" />
                  <img className="positive1" src={kan} alt="img" />
                </div>
                <div className="flex">
                  <div className="section-img">
                    <img src={imgStar} alt="img" />
                  </div>
                  <div className="section-number">
                    <h6>{sact.numReyting}</h6>
                  </div>
                </div>
                <div className="bloc">
                  <div className="left">
                    <h4>{sact.read}</h4>
                  </div>
                  <div className="right">
                    <h5>{sact.nubers}</h5>
                  </div>
                </div>
              </div>
              <div className="section-items">
                <div className="bacg">
                  <img className="section-bacg2" src={imgSong2} alt="img" />
                  <img className="positive2" src={kan} alt="img" />
                </div>
                <div className="flex">
                  <div className="section-img">
                    <img src={imgStar} alt="img" />
                  </div>
                  <div className="section-number">
                    <h6>{sact.numReyting}</h6>
                  </div>
                </div>
                <div className="bloc">
                  <div className="left">
                    <h4>{sact.read}</h4>
                  </div>
                  <div className="right">
                    <h5>{sact.nubers}</h5>
                  </div>
                </div>
              </div>
            </div>
          </Fragment>
        );
      })}
    </div>
  );
};

export default Section;
