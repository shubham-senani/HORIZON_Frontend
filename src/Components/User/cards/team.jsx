const TeamCard = (props) => {
  var status = "status";
  if (props.status === "Completed") status = "completed";
  if (props.status === "Upcoming") status = "upcoming";
  if (props.status === "Ongoing") status = "ongoing";

  return (
    <div className="teamCard">
      <div className="card_heading">
        <div className="c2">{props.heading}</div>
        <div className={status}>{props.status}</div>
      </div>
      <div className="card_content">{props.content}</div>
      <div className="teamName">
        Team <span className="c2">{props.teamName}</span>
      </div>
      <div className="card_content2">
        <div>Leader:&nbsp;{props.leader}</div>
        {props.members.map((output) => (
          <div>Member:&nbsp;{output}</div>
        ))}
      </div>
    </div>
  );
};

export default TeamCard;
