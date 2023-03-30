import React, { useState } from "react";
import styled from "styled-components";
import SignIn from "./LoginSignUp/SignIn";
import SignUp from "./LoginSignUp/SignUp";
import Error from "./Error.svg";
import { NavLink } from "react-router-dom";

import { Outlet, Navigate } from "react-router-dom";

const PrivateRoutes = (props) => {
  const JWT = localStorage.getItem("auth-token");

  let auth;
  if (JWT == null) {
    auth = { token: false };
  } else {
    auth = { token: true };
  }

  const [login, setLogin] = useState(true);
  const [signUp, setSignUp] = useState(false);

  return auth.token ? (
    <Outlet />
  ) : (
    <>
      <Container>
        <Img src={Error} />
        <NavLink to="/">
          <Button>Back to Home</Button>
        </NavLink>
        <SignUp
          login={login}
          setLogin={setLogin}
          signUp={signUp}
          setSignUp={setSignUp}
        />
        <SignIn
          signUp={signUp}
          setSignUp={setSignUp}
          login={login}
          setLogin={setLogin}
          headPerin="Please LOGIN to Continue"
        />
      </Container>
    </>
    // <h2 className="h2_perin"> Please LOGIN to continue </h2>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 80vh;
`;

const Img = styled.img`
  width: 29.86vw;
  height: 29.5vw;

  @media (max-width: 667px) {
    width: 39.86vw;
    height: 39.5vw;
  }
`;

const Button = styled.div`
  display: flex;
  width: 173px;
  height: 55px;
  color: white;
  font-weight: 900;
  font-size: 18px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-top: 4vw;
  /* transition: all 1s ease; */
  background: linear-gradient(
    90deg,
    rgba(209, 45, 45, 0.92) 0%,
    #1e149d 65.43%
  );
  opacity: 0.93;

  &:hover {
    background: transparent;
    border: 2px solid;
    border-image-slice: 1;
    border-image-source: linear-gradient(225deg, #d12d2d, #1e149d);
  }

  @media (max-width: 1150px) {
    width: 100px;
    height: 32px;
    font-size: 10px;
  }

  @media (max-width: 600px) {
    width: 80px;
    height: 23px;
    font-size: 9px;
    font-weight: 900;
    line-height: 9px;
    letter-spacing: 0em;
    text-align: center;
  }
`;

export default PrivateRoutes;
