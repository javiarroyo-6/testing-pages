import React from "react";
import "../App.css";
import "./NotFound.css";
import { IoWarningOutline } from "react-icons/io5";

function NotFound() {
  return (
    <div className="hero-container">
      <h1 style={{ textAlign: "center" }}>
        <IoWarningOutline color="red" />
        Under Construction
        <IoWarningOutline color="red" />
      </h1>
      <div className="hero-btns">
        <h2
          style={{
            color: "#fff",
          }}
        >
          Diversified Aerospace Finishing's is currently unavailable. Please
          come back soon!
        </h2>
      </div>
      <h3
        style={{
          color: "#fff",
          marginTop: 150,
        }}
      >
        Contact us:{" "}
        <a color="red" href="mailto:email@example.com">
          LCortes@Diversified-AF.com
        </a>
      </h3>
    </div>
  );
}

export default NotFound;
