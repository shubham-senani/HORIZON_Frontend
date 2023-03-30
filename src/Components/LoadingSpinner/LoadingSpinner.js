import React from "react";
import "./spinner.css";
import spinner from "./Frame_2.gif";

export default function LoadingSpinner() {
  return (
    <div class="loader">
      <img src={spinner} alt="loading" />
    </div>
  );
}
