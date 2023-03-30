import React, { useState } from "react";
import styled from "styled-components";
import MemberCarousel from "./MemberCarousel";
import { MemberNames } from "./MemberNames";
import MemberList from "./MemberListMobile";
import { Accordion } from "@chakra-ui/react";
import "../About/css/about.css";

function Teams() {
  const [teamName, setTeamName] = useState(MemberNames.CoreTeam);
  const [active, setActive] = useState();

  function handleClickTeams(teamName) {
    setTeamName(teamName);
  }

  return (
    <Container>
      <Heading>
        <div className="parent_div">
          <span className="heading_teams">Teams</span>
          <p className="desc_teams">
            Nothing was possible without these talented folks! Check out the
            teams for the events and connect with them.
          </p>
          <ul className="member_list">
            <li
              className="item_perin"
              onClick={() => handleClickTeams(MemberNames.CoreTeam)}
            >
              Core Team
            </li>
            <li
              className="item_perin"
              onClick={() => handleClickTeams(MemberNames.Designing)}
            >
              Designing Team
            </li>
            <li
              className="item_perin"
              onClick={() => handleClickTeams(MemberNames.Development)}
            >
              Development
            </li>
            <li
              className="item_perin"
              onClick={() => handleClickTeams(MemberNames.Hackoverflow)}
            >
              Hackoverflow
            </li>
            <li
              className="item_perin"
              onClick={() => handleClickTeams(MemberNames.CapturePoint)}
            >
              Capture Point 5353
            </li>
            <li
              className="item_perin"
              onClick={() => handleClickTeams(MemberNames.Swot)}
            >
              SWOT the Trends
            </li>
            <li
              className="item_perin"
              onClick={() => handleClickTeams(MemberNames.ChoiceMatrixQuiz)}
            >
              Choice Matrix Quiz
            </li>
            <li
              className="item_perin"
              onClick={() => handleClickTeams(MemberNames.CodeCombat)}
            >
              Code Combat
            </li>
            <li
              className="item_perin"
              onClick={() => handleClickTeams(MemberNames.Valorant)}
            >
              The Cadence Valour
            </li>
            <li
              className="item_perin"
              onClick={() => handleClickTeams(MemberNames.CODM)}
            >
              COD: Resurgence
            </li>
            <li
              className="item_perin"
              onClick={() => handleClickTeams(MemberNames.De5igne4)}
            >
              De5igne4
            </li>
            <li
              className="item_perin"
              onClick={() => handleClickTeams(MemberNames.Igniter)}
            >
              Igniter 3.0
            </li>
          </ul>
        </div>
        <Accordion className="toggle_member_list">
          <MemberList setTeamName={setTeamName} />
        </Accordion>
      </Heading>
      <MemberCarousel teamName={teamName} />
    </Container>
  );
}

export default Teams;

const Container = styled.div`
  color: white;
  margin-left: 75px;
  margin-right: 75px;
  padding-top: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 100px;
  height: 100%;
  font-family: "Bujji", sans-serif;

  .toggle_member_list {
    display: none;
  }

  @media (max-width: 1150px) {
    margin-left: 46px;
    margin-right: 46px;
    display: block;
    padding-top: 0px;
    padding-bottom: 36px;

    .toggle_member_list {
      display: block;
    }
  }

  @media (max-width: 667px) {
    margin-left: 16px;
    margin-right: 16px;
    display: block;
    padding-top: 0px;
    padding-bottom: 36px;

    .toggle_member_list {
      display: block;
    }
  }
`;
const Heading = styled.div`
  width: 50%;

  @media (max-width: 1150px) {
    width: 100%;
  }

  .parent_div {
    width: 417px;
    @media (max-width: 1150px) {
      width: 100%;
    }
  }

  .heading_teams {
    font-size: 40px;
    line-height: 39px;
    background: linear-gradient(99.32deg, #d12d2d 0%, #1e149d 119.64%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .desc_teams {
    padding-top: 21px;
    font-family: "Poppins";
    font-weight: 400;
    font-size: 22px;
    line-height: 30px;
    color: #b5b0b0;
  }
  .member_list {
    padding-top: 15px;
    font-size: 16px;
    font-weight: 900;
    padding-left: 0;
  }
  .item_perin {
    list-style: none;
    padding-top: 10px;
    padding-bottom: 10px;
    cursor: pointer;

    &:hover {
      background: linear-gradient(90deg, #d12d2d 26.26%, #1e149d 94.71%);
      opacity: 0.9;
    }
  }

  @media (max-width: 1150px) {
    .heading_teams {
      font-size: 25px;
      font-weight: 900;
      line-height: 25px;
      letter-spacing: 0em;
      text-align: left;
    }
    .desc_teams {
      font-size: 14px;
      font-weight: 400;
      line-height: 17px;
      letter-spacing: 0em;
      text-align: left;
      padding-top: 20px;
    }
    .member_list {
      display: none;
    }
  }
  @media (max-width: 768px) {
    .heading_teams {
      font-size: 20px;
      font-weight: 900;
      line-height: 20px;
      letter-spacing: 0em;
      text-align: left;
    }
    .desc_teams {
      font-family: Poppins;
      font-size: 10px;
      font-weight: 400;
      line-height: 13px;
      letter-spacing: 0em;
      text-align: left;
      padding-top: 10px;
    }
    .member_list {
      display: none;
    }
  }
`;
