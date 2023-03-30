import { Accordion } from "@chakra-ui/react";
import "./css/about.css";
import AutoCarousal from "./auto-carousal";
import Question from "./question";

const About = () => {
  return (
    <div className="about_body">
      <br />
      <div className="about_main">
        <h1 className="about_heading0_suy">
          About&ensp;<span className="c2">Horizon</span>
        </h1>
        <p className="h_text">
          Welcome to "HORIZON", the technical fest of IIIT Vadodara -
          International Campus Diu. Get ready to immerse yourself in the world
          of technology at this year's Technical Fest. HORIZON is a platform
          where students come together to showcase, share and learn the latest
          advancements and trends in technology. This year we have a wide range
          of exciting events and workshops to keep you engaged and inspired.
        </p>

        <p className="h_text">
          In addition, there will be a range of competitions, such as
          hackathons, coding challenges and table discussions, where
          participants can showcase their technical skills and compete for
          prizes.
        </p>

        <p className="h_text">
          {" "}
          Whether you're a student of IIITV-ICD or not, we hope you'll take
          advantage of this opportunity to learn, network, and be inspired by
          the amazing technology around us. Once again, Welcome to the "HORIZON"
          Technical Summit!
        </p>
        {/* <h1 className="about_heading1_suy">
          <span className="c2">Directors's</span>&ensp;Word
        </h1>
        <p className="h_text">
          sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula
          ipsum a arcu cursus vitae congue mauris rhoncus aenean vel elit
          scelerisque mauris pellentesque pulvinar pellentesque sollicitudin
          nibh sit amet commodo nulla facilisi nullam vehicula ipsum a arcu
          cursus vitae congue mauris rhoncus aenean vel elit scelerisque mauris
          pellentesque pulvinar pellentesque vehicula ipsum a arcu cursus vitae
          congue mauris rhoncus aenean vel elit scelerisque mauris pellentesque
          pulvinar pellentesque.
        </p> */}
        <h1 className="about_heading2_suy">
          Our&ensp;<span className="c2">Sponsors</span>
        </h1>
        <AutoCarousal />
        <h1 id="FAQ" className="about_heading3_suy">
          Frequently Asked Questions
        </h1>
        <h1 className="about_heading4_suy">FAQ's</h1>
        <div>
          <Accordion allowToggle className="lol">
            <Question
              ques="What is HORIZON?"
              ans="HORIZON is the annual technical festival of IIITV-ICD that takes the form of a eleven-day, intense and exhilarating experience consisting of sensational events, intriguing lessons, and impelling prizes."
            />
            <Question
              ques="What is the history of HORIZON?"
              ans="HORIZON is starting its journey in the year 2023. It aims to provide an exhilarating experience while simultaneously achieving milestones & creating history;"
              ans2="'A Journey of a Thousand Miles begins with a Single Step' – Lao Tzu. "
            />
            <Question
              ques="How many events are there?"
              ans="From coding contests to gaming events to entrepreneurship problem-solving, a total of 11 events.  "
            />
            <Question
              ques="What are the participate criteria?"
              ans="You can participate if you are a student in any of the IITs, NITs, IIITs, or any other reputed government institute.  "
            />
            <Question
              ques="What kind of events are there?              "
              ans="There are 4 types of events: 5 Technical Events, 2 Gaming Events, 1 Designing Event, and 2 Talks.  "
            />
            <Question
              ques="What is the timeline for the festival?"
              ans="HORIZON will commence on the 9th of February, 2023, and end on the 19th of February, 2023."
            />
            <Question
              ques="How to participate in events?"
              ans="To participate in an event, go to the EVENTS section. Choose the event, and click on register. You are all set! Don’t forget to check the timeline and rules and regulations.              "
            />
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default About;
