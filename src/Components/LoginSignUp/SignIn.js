import { React, useState, useEffect } from "react";
import styled from "styled-components";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";
import Data from "../Host";
import { Backdrop } from "@mui/material";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import "./login_signup.css";

function SignIn({ setLogin, setSignUp, login, headPerin }) {
  const host = Data.URL;
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();

  const [ML, SetML] = useState("");
  const [PD, SetPD] = useState("");
  var [response, setResponse] = useState("");

  async function postUserDetails(e) {
    setOpen(true);
    e.preventDefault();

    const response = await fetch(`${host}/loginuser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: ML,
        password: PD
      })
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {
      // Save the auth token and redirect
      localStorage.setItem("auth-token", json.authtoken);
      localStorage.setItem("user", JSON.stringify(json.user));
      setResponse("Succesfully Login");
      window.location.reload(false);
      setOpen(false);
      document.body.style.overflow = "auto";
    } else {
      setResponse("Invalid credentials");
      setOpen(false);
    }
    setOpen(false);
  }

  return (
    <>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 2 }}
        open={open}
      >
        <LoadingSpinner />
      </Backdrop>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={login}
      >
        <Wrap>
          <Close
            onClick={() => {
              document.body.style.overflow = "auto";
              return setLogin(false);
            }}
          ></Close>
          <form
            action=""
            method=""
            onSubmit={postUserDetails}
            style={{ width: "100%" }}
          >
            <div className="div_perin heading_perin">
              <h2 className="h2_perin">{headPerin}</h2>
              <p className="p_perin">
                New User?{" "}
                <a
                  className="a_perin"
                  onClick={() => {
                    setLogin(false);
                    setSignUp(true);
                  }}
                >
                  SignUp
                </a>
              </p>
              <p
                className={
                  response === "Succesfully Login"
                    ? "success_suy"
                    : "invalid_suy"
                }
              >
                {response}
              </p>
            </div>
            <div className=" div_perin email">
              <label className="label_perin" htmlFor="">
                Email
              </label>
              <br />
              <input
                value={ML}
                onChange={(e) => SetML(e.target.value)}
                className="input_perin"
                type="email"
                required={true}
                name=""
                id=""
              />
            </div>
            <div className="div_perin password">
              <label className="label_perin" htmlFor="">
                Password
              </label>
              <br />
              <input
                value={PD}
                onChange={(e) => SetPD(e.target.value)}
                className="input_perin"
                type="password"
                required={true}
                name=""
                id=""
              />
            </div>
            <div className="div_perin">
              <button type="submit">LOGIN</button>
            </div>
          </form>
        </Wrap>
      </Backdrop>
    </>
  );
}

export default SignIn;

// const container = styled.div`
//   position: fixed;
//   width: 100vw;
//   height: 100vh;
//   top: 0;
//   background-color: rgba(7, 7, 7, 0.75);
//   z-index: 2;
//   font-family: "bujji", sans-serif;
// `;

const Wrap = styled.div`
  &::-webkit-scrollbar {
    display: none;
  }

  overflow: auto;
  position: relative;
  color: white;
  padding: 40px 0px;
  width: 40%;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);

  background: linear-gradient(
    114.88deg,
    rgba(209, 45, 45, 0.6) 9.29%,
    rgba(30, 20, 157, 0.6) 49.91%,
    rgba(209, 45, 45, 0.6) 89.51%
  );
  backdrop-filter: blur(50px);

  border-radius: 5px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  display: flex;
  justify-content: center;

  .div_perin {
    width: 100%;
    padding-top: 30px;
    padding-bottom: 30px;
    padding-left: 100px;
    padding-right: 100px;
    .label_perin {
      font-family: Poppins;
      font-size: 20px;
      font-weight: 700;
      color: rgba(181, 176, 176, 1);

      @media (min-width: 669px) and (max-width: 1150px) {
        font-size: 11.5px;
      }

      @media (max-width: 669px) {
        font-size: 10px;
      }
    }
    .input_perin {
      width: 100%;
      height: 46px;
      font-size: 25px;
      padding: 0 10px;
      border-radius: 5px;

      @media (min-width: 669px) and (max-width: 1150px) {
        height: 26.5px;
        padding: 0 5px;
        font-size: 15px;
      }

      @media (max-width: 669px) {
        height: 25px;
        padding: 0 3px;
        font-size: 12px;
      }
    }
    .input_perin:focus-visible {
      outline: none;
    }

    @media (min-width: 669px) and (max-width: 1150px) {
      padding: 13px 60px;
    }

    @media (max-width: 669px) {
      padding: 10px 18px;
      line-height: 17px;
    }
  }
  button {
    margin: auto;
    display: flex;
    width: 150px;
    height: 55px;
    color: white;
    font-weight: 900;
    font-size: 18px;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    background: #d12d2d;
    border: 0px;
    font-family: "bujji", sans-serif;

    @media (min-width: 669px) and (max-width: 1150px) {
      font-size: 8px;
      width: 67px;
      height: 33px;
    }

    @media (max-width: 669px) {
      font-size: 9px;
      width: 90px;
      height: 23px;
    }

    &:hover {
      background: transparent;
      border: 2px solid;
      border-image-slice: 1;
      border-image-source: linear-gradient(90deg, #d12d2d, #1e149d);
    }
  }
  .heading_perin {
    text-align: center;
    line-height: 44px;
    .h2_perin {
      font-size: 45px;
      font-weight: 900;
      font-family: "bujji";

      @media (min-width: 669px) and (max-width: 1150px) {
        font-size: 26px;
        line-height: 26px;
      }

      @media (max-width: 669px) {
        font-size: 15px;
      }
    }
    .p_perin {
      font-family: Poppins;
      font-size: 20px;
      font-weight: 700;
      color: rgba(181, 176, 176, 1);

      @media (min-width: 669px) and (max-width: 1150px) {
        font-size: 11.5px;
      }

      @media (max-width: 669px) {
        font-size: 10px;
        margin: 0;
      }

      .a_perin {
        cursor: pointer;
        font-family: Poppins;
        font-size: 20px;
        font-weight: 400;
        text-align: left;
        text-decoration: underline;
        color: #d12d2d;
        font-weight: bold;
        box-shadow: none;

        @media (min-width: 669px) and (max-width: 1150px) {
          font-size: 11.5px;
        }
        @media (max-width: 669px) {
          font-size: 10px;
        }
      }
    }
  }

  @media (max-width: 669px) {
    width: 80%;
    padding: 9px 40px;
  }
`;
/* Line 2 */

const Close = styled(CloseIcon)`
  position: absolute;
  top: 20px;
  left: 20px;
  border-radius: 50%;
  color: black;
  background-color: #dbdbdb;
  opacity: 0.7;
  cursor: pointer;
`;
