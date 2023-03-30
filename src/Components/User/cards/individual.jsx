const IndividualCard = (props) => {
  var status = "status";
  if (props.status === "Completed") status = "completed";
  if (props.status === "Upcoming") status = "upcoming";
  if (props.status === "Today") status = "today";

  return (
    <div className="indiCard">
      <div className="card_heading">
        <div className="c2">{props.heading}</div>
        <div className={status}>{props.status}</div>
      </div>
      <div className="card_content">{props.content}</div>
    </div>
  );
};

export default IndividualCard;
