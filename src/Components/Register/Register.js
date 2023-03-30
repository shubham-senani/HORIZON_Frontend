import { React, useState, useEffect } from "react";
import styled from "styled-components";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Data from "../Host";
import { Backdrop } from "@mui/material";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

function Register({ register, setRegister, teamsize, eventid }) {
  const host = Data.URL;
  const navigate = useNavigate();
  const rows = [];
  var [response, setResponse] = useState("");
  const [open, setOpen] = useState(false);

  for (let i = 1; i < teamsize; i++) {
    rows[i] = i;
  }

  async function handleRegister(e) {
    e.preventDefault();
    setOpen(true);
    if (document.querySelector(".chkbx").checked) {
      if (localStorage["auth-token"]) {
        var formdata = {};
        document.querySelectorAll(".form-data-input").forEach((inp) => {
          formdata[inp.name] = inp.value;
        });
        const config = {
          headers: {
            "auth-token": localStorage["auth-token"],
            "content-type": "application/json"
          }
        };
        const response = await axios
          .post(`${host}/eventregister/${eventid}`, formdata, config)
          .then((res) => res.data)
          .catch((err) => err);
        setResponse(response.message);
        if (response.status) {
          setOpen(false);
          navigate("/");
          document.body.style.overflow = "auto";
        }
        setOpen(false);
      } else {
        setResponse("Please Login to Continue");
        setOpen(false);
      }
      setOpen(false);
    } else {
      setResponse("Please agree the terms & conditions");
      setOpen(false);
    }
    setOpen(false);
  }
  return (
    // <Container
    //   style={
    //     register === "Register" ? { display: "block" } : { display: "none" }
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
        open={register}
      >
        <Wrap>
          <Close
            onClick={() => {
              document.body.style.overflow = "auto";
              setRegister(false);
            }}
          ></Close>
          <form action="" method="" onSubmit={handleRegister}>
            <div className="div_perin heading_perin">
              <h2 className="h2_perin">Register</h2>
              <p className="p_perin">Team Participation</p>
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
            <div className="div_perin name_home">
              <label className="label_perin" htmlFor="">
                Team Name{" "}
              </label>
              <br />
              <input
                className="input_perin form-data-input"
                type="name"
                name="teamname"
                required={true}
                id=""
              />
            </div>
            <div className="div_perin email">
              <label className="label_perin" htmlFor="">
                Team Leader Email ID{" "}
              </label>
              <p>
                {" "}
                The value of this field is pre-filled and cannot be changed.
                Only the team leader needs to fill the form and in this case, it
                displays your email ID.
              </p>
              <br />
              <input
                className="input_perin form-data-input"
                type="email"
                name="leaderemail"
                id=""
                disabled={true}
                value={JSON.parse(localStorage["user"]).data.user.email}
              />
            </div>
            <div className="div_perin email">
              <br />
              <p>
                Please enter the email ID with which your teammate has
                registered on the website. If not, please ask your teammate to
                sign up & then fill the form.
              </p>
              <br />
            </div>
            {rows.map((i) => {
              return (
                <div className="div_perin email" key={i}>
                  <label className="label_perin" htmlFor="">
                    Member {i} Email ID{" "}
                  </label>
                  <br />
                  <input
                    className="input_perin form-data-input"
                    type="email"
                    required={true}
                    name={"email" + i}
                  />
                </div>
              );
            })}
            <div className="div_perin password">
              <br />
              <input
                type="checkbox"
                className="checkbox_perin chkbx"
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
    // {/* </Container> */}
  );
}
export default Register;

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
  margin: auto;
  position: relative;
  color: white;
  padding: 40px 0px;
  width: 40%;
  height: 100%;
  display: flex;
  justify-content: center;

  background: linear-gradient(
    114.88deg,
    rgba(209, 45, 45, 0.6) 9.29%,
    rgba(30, 20, 157, 0.6) 49.91%,
    rgba(209, 45, 45, 0.6) 89.51%
  );
  backdrop-filter: blur(50px);

  border-radius: 5px;
  border: 1px solid rgba(255, 255, 255, 0.18);

  @media (max-width: 667px) {
    position: none;
    width: 328px;
    margin-top: 28px;
    margin-bottom: 28px;

    .close_sign_up_button {
      width: 15px;
      height: 15px;
    }
  }

  .div_perin {
    overflow: auto;

    width: 100%;
    padding-top: 15px;
    padding-bottom: 15px;
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

      /* @media (max-width: 667px) {
        font-family: Poppins;
        font-size: 10px;
        font-weight: 400;
        letter-spacing: 0em;
        text-align: left;
        margin: 0px;
      } */
    }

    .gen {
      padding-right: 10px;
    }

    .input_perin {
      width: 100%;
      height: 46px;
      font-size: 25px;
      padding: 0 10px;
      border-radius: 5px;

      @media (min-width: 669px) and (max-width: 1150px) {
        height: 26.5px;
        font-size: 15px;
        padding: 0 5px;
      }

      @media (max-width: 669px) {
        height: 25px;
        font-size: 12px;
        padding: 0 3px;
      }

      /* @media (max-width: 667px) {
        width: 280px;
        height: 25px;
      } */
    }

    .input_file {
      font-size: 16px;
      padding-top: 6px;
      @media (max-width: 667px) {
        font-size: 5px;
        padding: 0;
      }
    }

    .input_perin:focus-visible {
      outline: none;
    }

    .checkbox_perin {
      width: 25px;
      height: 25px;

      @media (min-width: 669px) and (max-width: 1150px) {
        width: 15px;
        height: 15px;
      }
      @media (max-width: 669px) {
        /* font-family: Poppins;
        font-size: 10px;
        font-weight: 400;
        letter-spacing: 0em;
        text-align: left; */
        width: 10px;
        height: 10px;
      }
    }

    @media (min-width: 669px) and (max-width: 1150px) {
      padding: 10px 48px;
    }

    @media (max-width: 669px) {
      padding: 10px 18px;
      line-height: 17px;
    }

    /* @media (max-width: 667px) {
      padding-top: 8px;
      padding-bottom: 8px;
    } */
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
    margin-top: 20px;

    &:hover {
      background: transparent;
      border: 2px solid;
      border-image-slice: 1;
      border-image-source: linear-gradient(225deg, #b2016b, #1e149d);
    }

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

    /* @media (max-width: 667px) {
      width: 90px;
      height: 23px;
      font-size: 9px;
      font-weight: 900;
      line-height: 9px;
      letter-spacing: 0em;
      text-align: center;
      margin-top: 8px;
      margin-bottom: 50px;
    } */
  }
  .heading_perin {
    text-align: center;
    line-height: 44px;

    @media (max-width: 667px) {
      padding-top: 20px;
    }

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

      /* @media (max-width: 667px) {
        font-size: 15px;
        font-weight: 900;
        letter-spacing: 0em;
        text-align: center;
        margin: 0;
        height: 15px;
      } */
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

      /* @media (max-width: 667px) {
        font-family: Poppins;
        font-size: 10px;
        font-weight: 700;
        line-height: 30px;
        letter-spacing: 0em;
        text-align: center;
        padding: auto;
        margin: 0px;
      } */

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

        /* @media (max-width: 667px) {
          font-family: Poppins;
          font-size: 10px;
          font-weight: 400;
          letter-spacing: 0em;
          text-align: left;
        } */
      }
    }
  }

  @media (max-width: 669px) {
    width: 80%;
    padding: 5px 16px;
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
