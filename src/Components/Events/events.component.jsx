import Card from "../Tile-card/Card.component";
import "./events.component.css";
import TalkCard from "../Tile-card/talkcard";
import { NavLink } from "react-router-dom";

const Events = () => {
  const checkvalid = () => {
    const authtoken = localStorage.getItem("auth-token");
    if (!authtoken) {
      alert("Login");
    }
  };
  return (
    <div>
      <div className="event-page">
        <h1 className="events-header">Technical</h1>
        <div className="events_cards">
          <Card
            heading="Code Combat"
            content="Want to test out your DSA and Problem-Solving skills? The battle has begun, get ready for CodeCombat! 8 challenging problems with increasing difficulty levels and a total of 3 hours at hand."
            link="/event/T2"
          />
          <Card
            heading="Capture Point 5353"
            content="Get ready to debug! 36 hours, puzzling problems, and intense competition is all that is standing between you and the prizes. Compete in teams of 2 to Capture the Flag as quickly as possible!         "
            link="/event/T3"
          />
          <Card
            heading="SWOT The Trends
            "
            content="Interested in trading? SWOT the Trends - the virtual trading event for those who are interested in everything finance. Get ready to analise the trends! "
            link="/event/T8"
          />
          <Card
            heading="The Choice Matrix
            "
            content="From Finance to Programming to Gaming and much more! The Choice Matrix – a two-round quiz with intriguing questions and increasing pressure. Participate in teams of 2."
            link="/event/T4"
          />
          <Card
            heading="CEO’s Conference
            
            "
            content="
            A two-day real-world problem-solving event. With 10 minutes to present your solution, are you up for the challenge? Participate in teams of 4."
            link="/event/T5"
          />
          <Card
            heading="Hackoverflow
            "
            content="
            48 hours to cook up innovative solutions to real-life problems and implement them using Android or Web development. 
            This a golden opportunity to showcase your creative and development skills! 
            "
            link="/event/T6"
          />
        </div>

        <h1 className="events-header">Gaming</h1>
        <div className="events_cards">
          <Card
            heading="The Cadence Valour"
            content="
            Amateur or pro, your opportunity to shine at Valorant is here! Cadence Valour is the flagship valorant event of “Horizon”. Participate in teams of 5.
            "
            link="/event/T1"
          />
          <Card
            heading="Call Of Duty: Resurgence"
            content="Guns loaded, armour equipped, meds ready!
            Call Of Duty: Resurgence aims at creating a competitive and fun experience. Participate in teams of 5 and get the maximum number of kills!
            ."
            link="/event/T9"
          />
        </div>

        <h1 className="events-header">Designing</h1>
        <div className="events_cards">
          <Card
            heading="De5igne4 - Designing Event
            "
            content="Channelize your inner Picasso! Online graphic design and artwork contest accepting individual participation. Use any design software of your choice to create on the given theme. "
            link="/event/T7"
          />
        </div>
        <h1 className="events-header">Talks</h1>
        <div className="events_cards">
          <TalkCard
            heading="Ignitor 3.0"
            content="
            The third session in the series of IIITV-ICD’s Ignitor talks, Ignitor 3.0 - the talk by Prashant Kumar (Founder and CEO of Eigenlytics). Come one, come all! Speaker session revolving around evolving startup culture, technical aspects, and much more."
            link="/event/T8"
          />
        </div>
      </div>
      <div className="events-timeline">
        <div className="event-div one">
          <h2 className="timeline-heading">TIMELINE</h2>
          <h4 className="timeline-content">
            Sync your schedules with timeline, so that you miss nothing!
          </h4>
        </div>
        <div className="event-div two">
          <NavLink className="btn" to="/timeline">
            {" "}
            <button className="timeline-button">
              <h4 className="timeline-button-text">VIEW TIMELINE</h4>
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Events;
