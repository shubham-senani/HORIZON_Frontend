import "./Card.component.css";

const Card = (props) => {
  return (
    <div className="card-list">
      <div className="card-container">
        <h2 className="heading_vis">{props.heading}</h2>
        <p className="content_vis">{props.content}</p>
      </div>
    </div>
  );
};

export default Card;
