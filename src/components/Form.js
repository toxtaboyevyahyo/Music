import "../styles/form.css";
import { forms } from "../data/forms";

const Form = () => {
  return (
    <div className="form">
      {forms.map((from) => {
        return (
          <div key={from.id}>
            <div className="form-box">
              <h1>{from.sub}</h1>
              <p>{from.ipsum}</p>
            </div>
            <form className="form-flex">
              <label>
                <input type="text" placeholder={from.email} />
                <button className="form-btn">{from.cribe}</button>
              </label>
            </form>
          </div>
        );
      })}
    </div>
  );
};

export default Form;
