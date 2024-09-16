import "../styles/footer.css";
import { footers } from "../data/footers";
import logotip from "../assets/logo.svg";
import inst from "../assets/instgram.svg";
import linked from "../assets/linkedin.svg";
import facce from "../assets/facebook.svg";

const Footer = () => {
  return (
    <div className="footer">
      {footers.map((fball) => {
        return (
          <div key={fball.id} className="footer-flex">
            <div className="footer-logo">
              <img src={logotip} alt="img" />
            </div>
            <div className="footer-spans">
              <span>{fball.home}</span>
              <span>{fball.about}</span>
              <span>{fball.product}</span>
            </div>
            <div className="footer-img_flex">
              <div className="footer-imgs">
                <img src={inst} alt="img" />
              </div>
              <div className="footer-imgs">
                <img src={linked} alt="img" />
              </div>
              <div className="footer-imgs">
                <img src={facce} alt="img" />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Footer;
