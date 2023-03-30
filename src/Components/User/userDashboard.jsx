import "./user.css";
import TeamCard from "./cards/team";
import IndividualCard from "./cards/individual";
import AvatarDropdown from "./avatarDropdown";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Data from "../Host";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

// import Avatar2 from "./avatars/Avatar 2.svg";
// import Avatar3 from "./avatars/Avatar 3.svg";
// import Avatar4 from "./avatars/Avatar 4.svg";
// import Avatar5 from "./avatars/Avatar 5.svg";
// import Avatar6 from "./avatars/Avatar 6.svg";

const UserDashboard = () => {
  const host = Data.URL;
  const [name, setName] = useState();
  const [team, setTeam] = useState([]);
  const [ind, setind] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const token = localStorage.getItem("auth-token");

  useEffect(() => {
    setIsLoading(true);
    const loadCourse = async () => {
      const response = await fetch(`${host}/userdashboard`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token": token
        }
      });
      const completeDetails = await response.json();
      setName(completeDetails.name);
      setTeam(completeDetails.teampart);
      setind(completeDetails.indpart);
      setIsLoading(false);
    };
    loadCourse();
  }, []);
  const navigate = useNavigate();

  const logout = (e) => {
    e.preventDefault();
    localStorage.removeItem("auth-token");
    localStorage.removeItem("user");
    navigate("/");
  };
  return (
    <>
      {isLoading ? (
        <div className="cover">
          <LoadingSpinner />
        </div>
      ) : (
        <div className="user_main">
          <div className="user_info">
            <div>
              <AvatarDropdown />
            </div>
            <div className="details">
              <div className="name">{name}</div>
              <div className="participation">
                Participated in{" "}
                <span className="name">{ind.length + team.length}</span> events
                so far
              </div>
              <button className="logout" onClick={logout}>
                Logout
              </button>
            </div>
          </div>
          <div className="heading_suy">
            <span className="c2">Individual</span>&nbsp;{" "}
            <span className="rem">Participations</span>
          </div>
          <div className="card_grid">
            {ind.length === 0 ? (
              <IndividualCard
                heading="You have not participated in any individual event yet!! "
                content="NA"
              />
            ) : (
              <></>
            )}
            {ind.map((output) => (
              <IndividualCard
                heading={output.eventname}
                content={output.description}
                status={output.eventstatus}
              />
            ))}
          </div>
          <div className="heading_suy">
            <span className="c2">Team</span>&nbsp;{" "}
            <span className="rem">Participations</span>
          </div>
          <div className="card_grid">
            {team.length === 0 ? (
              <TeamCard
                heading="You have not participated in any team event yet!! "
                content="NA"
                members={[]}
                leader="NA"
                teamName="NA"
              />
            ) : (
              <></>
            )}
            {team.map((output) => (
              <TeamCard
                heading={output.eventname}
                content={output.description}
                status={output.eventstatus}
                leader={output.leader}
                members={output.members}
                teamName={output.teamname}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default UserDashboard;
