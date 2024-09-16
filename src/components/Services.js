import "../styles/services.css";
import rest from "../assets/restange.svg";
import { reset } from "../data/reset";

const Services = () => {
  return (
    <div className="services">
      {reset.map((flex) => {
        return (
          <div key={flex.id} className="services-flex">
            <div className="services left">
              <img src={rest} alt="img" />
            </div>
            <div className="services-right">
              <h1>{flex.box}</h1>
              <p className="services-text">{flex.char}</p>
              <span className="services-span"></span>
              <p className="services-text">{flex.extra}</p>
              <span className="services-span"></span>
              <p className="services-text">{flex.bag}</p>
              <span className="services-span"></span>
              <p className="services-text">{flex.user}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Services;
