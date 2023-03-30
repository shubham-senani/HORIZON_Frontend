import { useState } from "react";
import Arrow from "../About/Arrow.svg";
import {
  AccordionItem,
  Accordion,
  AccordionButton,
  AccordionPanel,
  Box
} from "@chakra-ui/react";
import { MemberNames } from "./MemberNames";
import styled from "styled-components";

const Question = (props) => {
  const [rotate, setRotate] = useState("arrow_down");

  const RotateLogo = () => {
    if (rotate === "arrow_down") {
      setRotate("arrow_up");
      // document.getElementsByClassName('just_for_fun').style.display='block';
    } else {
      setRotate("arrow_down");
      // document.getElementsByClassName('just_for_fun').style.display='none';
    }
  };

  function handleClickTeams(teamName) {
    props.setTeamName(teamName);

    RotateLogo();
  }

  return (
    <Container>
      <AccordionItem className="mobile_list_bg">
        <h2>
          <AccordionButton className="q_btn" onClick={RotateLogo}>
            <Box as="span" flex="1" textAlign="left" className="members_option">
              Choose to view
            </Box>
            <img className={rotate} src={Arrow} alt="Arrow" />
          </AccordionButton>
        </h2>
        <AccordionPanel
          style={{ display: rotate === "arrow_down" ? "none" : "block" }}
          pb={4}
        >
          <MobileList>
            <ul className="member_list_mobile">
              <li onClick={() => handleClickTeams(MemberNames.CoreTeam)}>
                Core Team
              </li>
              <li onClick={() => handleClickTeams(MemberNames.Designing)}>
                Designing Team
              </li>
              <li onClick={() => handleClickTeams(MemberNames.Development)}>
                Development
              </li>
              <li onClick={() => handleClickTeams(MemberNames.Hackoverflow)}>
                Hackoverflow
              </li>
              <li onClick={() => handleClickTeams(MemberNames.CapturePoint)}>
                Capture Point 5353
              </li>
              <li onClick={() => handleClickTeams(MemberNames.Swot)}>
                SWOT the Trends
              </li>
              <li
                onClick={() => handleClickTeams(MemberNames.ChoiceMatrixQuiz)}
              >
                Choice Matrix Quiz
              </li>
              <li onClick={() => handleClickTeams(MemberNames.CodeCombat)}>
                Code Combat
              </li>
              <li onClick={() => handleClickTeams(MemberNames.Valorant)}>
                The Cadence Valour
              </li>
              <li onClick={() => handleClickTeams(MemberNames.CODM)}>
                COD: Resurgence
              </li>
              <li onClick={() => handleClickTeams(MemberNames.De5igne4)}>
                De5igne4
              </li>
              <li onClick={() => handleClickTeams(MemberNames.Igniter)}>
                Igniter 3.0
              </li>
            </ul>
          </MobileList>
        </AccordionPanel>
      </AccordionItem>
    </Container>
  );
};

export default Question;

const Container = styled.div`
  background: linear-gradient(90deg, #d12d2d 16%, #3333ff 94.71%);
  opacity: 0.8;
  @media (max-width: 1150px) {
    .members_option {
      font-family: Poppins;
      font-size: 15px;
      color: white;
    }
  }
  @media (max-width: 667px) {
    .members_option {
      font-family: Poppins;
      font-size: 10px;
      color: white;
    }
  }
`;

const MobileList = styled.div`
  .member_list_mobile {
    padding-top: 15px;
    padding-left: 0;

    @media (max-width: 1150px) {
      font-size: 15px;
      font-weight: 900;
      line-height: 45px;
      letter-spacing: 0em;
      text-align: left;
    }
    @media (max-width: 667px) {
      font-size: 10px;
      font-weight: 900;
      line-height: 30px;
      letter-spacing: 0em;
      text-align: left;
    }
  }
  .member_list_mobile li {
    list-style: none;
    padding-left: 12px;
    cursor: pointer;

    &:hover {
      /* background: linear-gradient(90deg, #d12d2d 26.26%, #1e149d 94.71%); */
      opacity: 0.9;
    }
  }
`;
