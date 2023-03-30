import { React, useState, useEffect } from "react";
import styled from "styled-components";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Data from "../Host";
import { Backdrop } from "@mui/material";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

function RegisterSingle({ registersingle, setRegistersingle, eventid }) {
  const host = Data.URL;
  const navigate = useNavigate();
  var [response, setResponse] = useState("");
  const [open, setOpen] = useState(false);

  async function handleRegister(e) {
    e.preventDefault();
    setOpen(true);
    var chkbx = document.querySelectorAll(".cb");
    for (let i = 0; i < 2; i++) {
      if (!chkbx[i].checked) {
        setResponse("Please tick the check box");
        setOpen(false);
        return;
      }
    }
    console.log(localStorage["auth-token"]);
    if (localStorage["auth-token"]) {
      const config = {
        headers: {
          "auth-token": localStorage["auth-token"]
        }
      };
      const response = await axios
        .post(`${host}/eventregister/${eventid}`, {}, config)
        .then((res) => res.data)
        .catch((err) => err);
      setResponse(response.message);
      if (response.status) {
        document.body.style.overflow = "auto";
        setOpen(false);
        navigate("/");
      }
      setOpen(false);
    } else {
      setResponse("Please Login to Continue");
      setOpen(false);
    }
    setOpen(false);
  }

  return (
    // <Container
    //   style={
    //     registersingle === "Register"
    //       ? { display: "block" }
    //       : { display: "none" }
    //   }
    // >
    <>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 2 }}
        open={open}
      >
        <LoadingSpinner />
      </Backdrop>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={registersingle}
      >
        <Wrap>
          <Close
            onClick={() => {
              document.body.style.overflow = "auto";
              setRegistersingle(false);
            }}
          ></Close>
          <form action="" method="" onSubmit={handleRegister}>
            <div className="div_perin heading_perin">
              <h2 className="h2_perin">Register</h2>
              <p className="p_perin">Individual Participation</p>
              <p
                className={
                  response === "Succesfully Login"
                    ? "success_suy"
                    : "invalid_suy"
                }
              >
                {" "}
                {response}
              </p>
            </div>
            <div className="div_perin name_home">
              <p className="">Register for this event ?</p>

              <input
                type="checkbox"
                className="checkbox_perin cb"
                name=""
                required={true}
                value=""
              />
              <br />

              <label className="" for="">
                {" "}
                Yes
              </label>
            </div>
            <div className="div_perin password">
              <input
                type="checkbox"
                className="checkbox_perin cb"
                id=""
                required={true}
                name=""
                value=""
              />
              <br />
              <label for="">
                {" "}
                I hereby declare that all the information provided by me are
                correct. I also agree to follow all the guidelines of the fest
                and agree to the fact that in case of any discrepancy, the
                decision of the organizers will be final and binding.
              </label>
            </div>
            <div className="div_perin">
              <button type="submit">Register</button>
            </div>
          </form>
        </Wrap>
      </Backdrop>
    </>
    // </Container>
  );
}
export default RegisterSingle;

// const Container = styled.div`
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
  margin: auto;
  color: white;
  padding: 40px 0px;
  width: 40%;
  height: auto;
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
    background: #b2016b;
    border: 0px;

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
      border-image-source: linear-gradient(225deg, #b2016b, #1e149d);
    }
  }
  .heading_perin {
    text-align: center;
    line-height: 44px;
    .h2_perin {
      font-size: 45px;
      font-weight: 900;

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
        color: #fc0198;
        font-weight: bold;

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
