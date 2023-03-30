import styled from "styled-components";
import EventsCarousel from "./EventsCarousel";
import SponsorsCarousel from "./SponsorsCarousel";
import Animation from "./Animation/animation";
import { NavLink } from "react-router-dom";

function Home() {
  function goToSection(id) {
    const section = document.getElementById(id);
    if (!section) return;
    window.scrollTo({
      top: section.offsetTop,
      behavior: "smooth"
    });
  }

  return (
    <Container>
      <Wrap>
        <Description>
          <Title>HORIZON</Title>
          <Data>
            Join us for the annual "HORIZON" Technical Fest. Showcase your
            talents and learn about the latest innovations in technology. From
            coding challenges to panel discussions, this event has something for
            everyone. Don't miss out!
          </Data>
          <a className="underlined_button" href="#abt_suy">
            <Button>Know More</Button>
          </a>
        </Description>
      </Wrap>
      <NumTag>
        <Event>
          <EventNum>11</EventNum>
          <EventName>events</EventName>
        </Event>
        <Price>
          <PriceNum>500K+</PriceNum>
          <PriceName>Worth Rewards</PriceName>
        </Price>
        <Days>
          <DaysNum>11</DaysNum>
          <DaysName>days</DaysName>
        </Days>
      </NumTag>

      <ComboSection>
        <About id="abt_suy">
          {/* <img src="/images/about-illustration.svg" alt="illustration"></img> */}
          <div className="animation_perin">
            <Animation className="animation_perin_2" />
          </div>
          <Content>
            <h2>
              About <span>HORIZON</span>
            </h2>
            <p>
              “Horizon” is the premier edition of the annual technical festival
              of IIITV-ICD that takes place in the form of a twelve-day, intense
              and exhilarating experience consisting of sensational events,
              interesting learnings, and impelling prizes. The fest contains a
              total of 11 amazing events covering 5 technical events, 2 gaming
              events, 1 designing event, 1 workshop and 2 speaker sessions
              forming the pillars of this frenzy and amusing festival. With 2023
              being the first year of “Horizon”, we aim to achieve new heights
              while simultaneously creating history.
            </p>
            <NavLink
              className="underlined_button"
              onClick={() => goToSection("header")}
              to="/about"
            >
              <Button>Read More</Button>
            </NavLink>
          </Content>
        </About>
        <EventsCarousel />

        <SponsorsCarousel />
      </ComboSection>
    </Container>
  );
}

export default Home;

const Container = styled.div`
  position: relative;
  overflow: hidden;
  font-family: "Bujji", sans-serif;
  height: 100%;
  width: 100%;
  .underlined_button {
    text-decoration: none;
  }
`;

// Wrap Css
const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: black;
  background-image: url("./images/background.svg");

  @media (max-width: 1150px) {
    width: 100vw;
    height: auto;
    padding-bottom: 121px;
    padding-top: 90px;
  }
  @media (max-width: 667px) {
    background-image: none;
    display: block;
    width: 100vw;
    height: auto;
    padding-top: 0px;
    padding-bottom: 0px;
  }
`;
const Description = styled.div`
  width: 70%;
  color: white;
  padding-left: 76px;
  /* margin-top: 80px; */

  @media (max-width: 1150px) {
    width: 100vw;
    padding-left: 34px;
    padding-right: 34px;
  }
  @media (max-width: 667px) {
    width: 100vw;
    padding-left: 16px;
    padding-right: 16px;
  }
`;
const Title = styled.div`
  height: 92px;
  font-size: 90px;
  font-weight: 900;
  margin: 26px 0 26px;

  @media (max-width: 1150px) {
    font-size: 52px;
    font-weight: 900;
    line-height: 51px;
    text-align: left;
    margin: 0;
    height: auto;
  }
  @media (max-width: 667px) {
    font-size: 25px;
    font-weight: 900;
    line-height: 25px;
    text-align: left;
    margin: 0;
    height: auto;
  }
`;
const Data = styled.div`
  font-family: "Poppins", sans-serif;
  font-size: 20px;
  font-weight: 400;
  line-height: 30px;
  letter-spacing: 0em;
  text-align: left;
  color: #b5b0b0;
  margin: 26px 0 26px;

  @media (max-width: 1150px) {
    font-family: Poppins;
    font-size: 12px;
    font-weight: 400;
    line-height: 17px;
    letter-spacing: 0em;
    text-align: left;
    max-width: 480px;
  }
  @media (max-width: 667px) {
    font-family: Poppins;
    font-size: 10px;
    font-weight: 400;
    line-height: 13px;
    letter-spacing: 0em;
    text-align: left;
    margin: 20px 0 20px;
  }
`;
const Button = styled.div`
  display: flex;
  width: 210px;
  height: 55px;
  margin: 26px 0 26px;
  color: white;
  font-weight: 900;
  font-size: 18px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background: transparent;
  border: 2px solid;
  border-image-slice: 1;
  border-image-source: linear-gradient(
    90deg,
    rgba(209, 45, 45, 0.92) 0%,
    #1e149d 65.43%
  );

  &:hover {
    background: linear-gradient(
      90deg,
      rgba(209, 45, 45, 0.92) 0%,
      #1e149d 65.43%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
  }

  @media (max-width: 1150px) {
    width: 121px;
    height: 34px;
    font-size: 9px;
    font-weight: 900;
    line-height: 9px;
    letter-spacing: 0em;
    text-align: center;
  }
  @media (max-width: 667px) {
    width: 89px;
    height: 23px;
    font-size: 6px;
    font-weight: 900;
    line-height: 6px;
    letter-spacing: 0em;
    text-align: center;
  }
`;

// Numtag CSS

const Days = styled.div`
  padding-right: 150px;

  @media (max-width: 1150px) {
    padding-right: 100px;
  }
  @media (max-width: 667px) {
    padding-right: 38px;
  }
`;

const DaysNum = styled.div`
  font-weight: 900;
  font-size: 60px;
  height: 65px;
  color: white;

  @media (max-width: 1150px) {
    font-size: 35px;
    font-weight: 900;
    line-height: 34px;
    letter-spacing: 0em;
    text-align: left;
    height: auto;
  }
  @media (max-width: 667px) {
    font-size: 16px;
    font-weight: 900;
    line-height: 16px;
    letter-spacing: 0em;
    text-align: left;
    height: auto;
  }
`;

const DaysName = styled.div`
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  font-size: 30px;
  color: #b5b0b0;

  @media (max-width: 1150px) {
    font-family: Poppins;
    font-size: 17px;
    font-weight: 700;
    letter-spacing: 0em;
    text-align: left;
  }
  @media (max-width: 667px) {
    font-family: Poppins;
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 0em;
    text-align: left;
  }
`;

const Price = styled.div``;

const PriceNum = styled.div`
  font-weight: 900;
  font-size: 60px;
  height: 65px;
  color: white;

  @media (max-width: 1150px) {
    font-size: 35px;
    font-weight: 900;
    line-height: 34px;
    letter-spacing: 0em;
    text-align: left;
    height: auto;
  }
  @media (max-width: 667px) {
    font-size: 16px;
    font-weight: 900;
    line-height: 16px;
    letter-spacing: 0em;
    text-align: left;
    height: auto;
  }
`;

const PriceName = styled.div`
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  font-size: 30px;
  color: #b5b0b0;

  @media (max-width: 1150px) {
    font-family: Poppins;
    font-size: 17px;
    font-weight: 700;
    letter-spacing: 0em;
    text-align: left;
  }
  @media (max-width: 667px) {
    font-family: Poppins;
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 0em;
    text-align: left;
  }
`;

const Event = styled.div`
  padding-left: 150px;

  @media (max-width: 1150px) {
    padding-left: 100px;
  }
  @media (max-width: 667px) {
    padding-left: 38px;
  }
`;

const EventNum = styled.div`
  font-style: normal;
  font-weight: 900;
  font-size: 60px;
  height: 65px;
  color: white;

  @media (max-width: 1150px) {
    font-size: 35px;
    font-weight: 900;
    line-height: 34px;
    letter-spacing: 0em;
    text-align: left;
    height: auto;
  }
  @media (max-width: 667px) {
    font-size: 16px;
    font-weight: 900;
    line-height: 16px;
    letter-spacing: 0em;
    text-align: left;
    height: auto;
  }
`;

const EventName = styled.div`
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  font-size: 30px;
  color: #b5b0b0;

  @media (max-width: 1150px) {
    font-family: Poppins;
    font-size: 17px;
    font-weight: 700;
    letter-spacing: 0em;
    text-align: left;
  }
  @media (max-width: 667px) {
    font-family: Poppins;
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 0em;
    text-align: left;
  }
`;
const NumTag = styled.div`
  height: 213px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: linear-gradient(90deg, #d12d2d 37.74%, #0b0371 93.02%);

  @media (max-width: 1150px) {
    width: 100vw;
    height: 123px;
  }
  @media (max-width: 667px) {
    width: 100vw;
    height: 60px;
  }
`;

// ComboSection CSS

const ComboSection = styled.div`
  background-color: black;
  color: white;
  width: 100vw;
`;
const About = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .animation_perin {
    float: left;
    border-radius: 0px;
    margin-left: 80px;
    padding-right: 25px;
    margin-right: 100px;

    @media (max-width: 1150px) {
      padding-right: 0px;
      margin-right: 50px;
    }
    @media (max-width: 667px) {
      display: none;
    }
  }
  @media (max-width: 667px) {
    height: auto;
  }
  @media (max-width: 1150px) {
    height: auto;
  }
`;
const Content = styled.div`
  padding-right: 100px;

  @media (max-width: 1150px) {
    padding-right: 70px;
  }

  @media (max-width: 667px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  h2 {
    color: white;
    font-weight: 900;
    font-size: 40px;
    line-height: 39px;
    padding-top: 37px;

    span {
      background: linear-gradient(90deg, #d12d2d 37.74%, #0b0371 93.02%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      text-fill-color: transparent;
    }

    @media (max-width: 1150px) {
      font-size: 23px;
      font-weight: 900;
      letter-spacing: 0em;
      text-align: left;
      padding-bottom: 7px;
    }
    @media (max-width: 667px) {
      font-size: 20px;
      font-weight: 900;
      letter-spacing: 0em;
      text-align: center;
    }
  }
  p {
    font-family: "Poppins", sans-serif;
    font-size: 20px;
    font-weight: 400;
    line-height: 30px;
    letter-spacing: 0em;
    text-align: left;
    color: #b5b0b0;
    padding-top: 25px;

    @media (max-width: 1150px) {
      font-family: Poppins;
      font-size: 12px;
      font-weight: 400;
      line-height: 17px;
      letter-spacing: 0em;
      text-align: left;
      padding-top: 0px;
    }
    @media (max-width: 667px) {
      font-family: Poppins;
      font-size: 10px;
      font-weight: 400;
      line-height: 13px;
      text-align: center;
      padding-top: 13px;
    }
  }

  .About_Button {
    @media (max-width: 667px) {
      margin: 17px auto;
    }
  }

  @media (max-width: 667px) {
    padding-right: 0;
    padding-left: 16px;
    padding-right: 16px;
  }
`;
