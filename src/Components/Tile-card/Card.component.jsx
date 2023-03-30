import "./Card.component.css";
import { NavLink } from "react-router-dom";

const Card = (props) => {
  return (
    <div className="card-list">
      <div className="card-container">
        <h2 className="heading_vis">{props.heading}</h2>
        <p className="content_vis">{props.content}</p>
        <button className="view-button_vis">
          <NavLink to={props.link}>
            <h3 className="btn button-text_suy">VIEW</h3>
          </NavLink>
        </button>
      </div>
    </div>
  );
};

export default Card;
