import styled from "styled-components";
import { useState, useEffect } from "react";
import SignUp from "../LoginSignUp/SignUp";
import SignIn from "../LoginSignUp/SignIn";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate, NavLink } from "react-router-dom";
import "./header.css";
import { Login } from "@mui/icons-material";

function Header() {
  var navigate = useNavigate();
  var [user, setUser] = useState(false);
  var [log, setLog] = useState("Login");
  var authtoken = localStorage["auth-token"];

  useEffect(() => {
    if (localStorage["auth-token"] !== undefined) {
      setUser(true);
      setLog("Profile");
    } else {
      setUser(false);
      setLog("Login");
    }
  }, [authtoken]);

  const [login, setLogin] = useState(false);
  const [signUp, setSignUp] = useState(false);

  const [closeState, setCloseState] = useState(true);

  function handleClickBurgerNav() {
    if (!closeState) document.body.style.overflow = "auto";
    else {
      document.body.style.overflow = "hidden";
    }
    setCloseState(!closeState);
  }

  function handleClickLogin() {
    if (user) {
      navigate("/profile");
    } else {
      document.body.style.overflow = "hidden";
      setLogin(true);
    }
  }

  return (
    <>
      <Nav id="header">
        <Menu onClick={handleClickBurgerNav}>
          <svg
            width="25"
            height="3"
            viewBox="0 0 25 3"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="25" height="3" fill="url(#paint0_linear_811_1500)" />
            <defs>
              <linearGradient
                id="paint0_linear_811_1500"
                x1="0"
                y1="0"
                x2="12.1285"
                y2="16.5899"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#d12d2d" />
                <stop offset="1" stop-color="#1E149D" />
              </linearGradient>
            </defs>
          </svg>
          <svg
            width="25"
            height="3"
            viewBox="0 0 25 3"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="25" height="3" fill="url(#paint0_linear_811_1500)" />
            <defs>
              <linearGradient
                id="paint0_linear_811_1500"
                x1="0"
                y1="0"
                x2="12.1285"
                y2="16.5899"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#d12d2d" />
                <stop offset="1" stop-color="#1E149D" />
              </linearGradient>
            </defs>
          </svg>
          <svg
            width="25"
            height="3"
            viewBox="0 0 25 3"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="25" height="3" fill="url(#paint0_linear_811_1500)" />
            <defs>
              <linearGradient
                id="paint0_linear_811_1500"
                x1="0"
                y1="0"
                x2="12.1285"
                y2="16.5899"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#d12d2d" />
                <stop offset="1" stop-color="#1E149D" />
              </linearGradient>
            </defs>
          </svg>
        </Menu>
        <BurgerWrap style={{ display: closeState ? "none" : "block" }}>
          <BurgerNav show={closeState}>
            <CloseWrapper>
              <CustomClose onClick={handleClickBurgerNav} />
            </CloseWrapper>

            <li>
              <NavLink to="/" onClick={handleClickBurgerNav}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/events" onClick={handleClickBurgerNav}>
                Events
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" onClick={handleClickBurgerNav}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/teams" onClick={handleClickBurgerNav}>
                Teams
              </NavLink>
            </li>
            <li>
              <NavLink
                className="tri_link"
                to="/tribute"
                onClick={handleClickBurgerNav}
              >
                Tribute
              </NavLink>
            </li>
            {/* <LoginLogo className="login_burger_nav" onClick={handleClickLogin}>
              {log}
            </LoginLogo> */}
          </BurgerNav>
        </BurgerWrap>

        <NavMenu className="nav_nav">
          <NavLink to="/" className="navbar__link">
            Home
          </NavLink>
          <NavLink to="/events" className="navbar__link">
            Events
          </NavLink>
          <NavLink to="/about" className="navbar__link">
            About
          </NavLink>
          <NavLink to="/teams" className="navbar__link">
            Teams
          </NavLink>
          <NavLink to="/tribute" className="tri_link">
            Tribute
          </NavLink>
        </NavMenu>
        <LoginLogo onClick={handleClickLogin}>{log}</LoginLogo>
      </Nav>
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
        headPerin="LOGIN"
      />
    </>
  );
}

export default Header;

const Nav = styled.div`
  padding: 30px 76px 30px 41px;
  display: flex;
  align-items: center;
  font-weight: 900;
  font-size: 18px;
  z-index: 1;
  font-family: "Bujji", sans-serif;
  color: white;
  background-color: black;
  a {
    box-shadow: none;
  }

  .burger_nav_icon {
    display: none;
  }

  @media (max-width: 1150px) {
    font-size: 10px;
    padding: 30px;
  }

  @media (max-width: 600px) {
    display: flex;
    justify-content: space-between;
    padding: 0px;
    padding-inline: 16px;
    padding-block: 25px;
  }
`;
const NavMenu = styled.div`
  color: white;
  flex: 1;
  cursor: pointer;

  @media (max-width: 600px) {
    display: none;
    background: linear-gradient(90deg, #d12d2d 37.74%, #0b0371 93.02%);
  }

  /* #home-nav {
    background: linear-gradient(99.32deg, #d12d2d 0%, #5346f8 119.64%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
  } */

  a:hover {
    background: #d12d2d;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
  }
`;

const Menu = styled.div`
  display: none;
  cursor: pointer;
  @media (max-width: 600px) {
    display: block;
    display: flex;
    flex-direction: column;
    height: 19px;
    svg {
      margin: 2px;
    }
  }
`;

const LoginLogo = styled.a`
  display: flex;
  width: 173px;
  height: 55px;
  color: white;
  font-weight: 900;
  font-size: 18px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
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

const BurgerNav = styled.div`
  height: 100vh;
  width: 180px;
  background: white;
  z-index: 100; // to show above all when it opens
  text-align: start;
  padding: 20px;
  background: linear-gradient(56.74deg, #D12D2D 39.61%, #1E149D 120.53%);;
   ${"" /* to hide and show right menu bar on click */}
  transform: ${(props) => (props.show ? "translateX(-120%)" : "translate(0)")};
  transition: transform 0.2s; 
  li {
    padding: 10px 0;
    list-style: none;
    border-bottom: 1px solid rgba(0,0,0,0.2);
    a{ 
      text-decoration: none;
      font-weight: 600;
      font-size: 17px;
      color: white;
      font-size: 10px;
      font-weight: 900;
      line-height: 10px;
      letter-spacing: 0em;
      text-align: left;

    }
  }
  
  .login_burger_nav {
    margin-top: 40px;
  }
  
`;
const CustomClose = styled(CloseIcon)`
  cursor: pointer;
`;
const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const BurgerWrap = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 2;
  display: none;

  background-color: rgba(7, 7, 7, 0.75);
`;
