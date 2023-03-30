import React, { useEffect, useState } from "react";
import Avatar1 from "./avatars/Asset 1.svg";
import Avatar2 from "./avatars/Asset 2.svg";
import Avatar3 from "./avatars/Asset 3.svg";
import Avatar4 from "./avatars/Asset 4.svg";
import Avatar5 from "./avatars/Asset 5.svg";
import Avatar6 from "./avatars/Asset 6.svg";
import EditIcon from "./edit-icon.svg";
import Data from "../Host";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import { Backdrop } from "@mui/material";

const AvatarDropdown = () => {
  const host = Data.URL;
  const [avatar, setAvatar] = useState("Avatar1");
  const token = localStorage.getItem("auth-token");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const loadCourse = async () => {
      setIsLoading(true);
      const response = await fetch(`${host}/userdashboard`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token": token
        }
      });
      const completeDetails = await response.json();
      setIsLoading(false);

      setAvatar(completeDetails.avatar);
    };
    loadCourse();
  }, []);

  const handleChange = (e) => {
    setAvatar(e.target.src);
    console.log(e.target.src);
    changeAvatar(e.target.src);
  };

  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };

  const changeAvatar = (value) => {
    setIsLoading(true);

    if (localStorage["auth-token"]) {
      const data = {
        avatar: value
      };
      fetch(`${host}/profile/avatar`, {
        method: "POST",
        headers: {
          "auth-token": localStorage["auth-token"],
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Success:", data);
          setIsLoading(false);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    } else {
      console.log("error");
    }
  };

  return (
    <>
      {isLoading ? (
        <div className="user_img">
          <LoadingSpinner />
        </div>
      ) : (
        <div className="user_img">
          <img className="avatar_img" src={avatar} alt="User Avatar" />
          <button className="edit_icon">
            <img src={EditIcon} onClick={handleToggle} alt="" />
          </button>
          <Backdrop
            sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={open}
            onClick={handleClose}
          >
            <div className="dropdown">
              <img
                className="avatar_img_dd"
                value="{Avatar1}"
                src={Avatar1}
                alt="User Avatar"
                onClick={handleChange}
              />
              <img
                className="avatar_img_dd"
                value={Avatar2}
                src={Avatar3}
                alt="User Avatar"
                onClick={handleChange}
              />
              <img
                className="avatar_img_dd"
                value={Avatar3}
                src={Avatar2}
                alt="User Avatar"
                onClick={handleChange}
              />
              <img
                className="avatar_img_dd"
                value={Avatar4}
                src={Avatar4}
                alt="User Avatar"
                onClick={handleChange}
              />
              <img
                className="avatar_img_dd"
                value={Avatar5}
                src={Avatar5}
                alt="User Avatar"
                onClick={handleChange}
              />
              <img
                className="avatar_img_dd"
                value={Avatar6}
                src={Avatar6}
                alt="User Avatar"
                onClick={handleChange}
              />
            </div>
          </Backdrop>
        </div>
      )}

      {/* <Button onClick={handleToggle}>Show backdrop</Button> */}
    </>
  );
};

export default AvatarDropdown;
