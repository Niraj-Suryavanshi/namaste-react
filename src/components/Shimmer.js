import React from "react";
import "./../../Shimmer.css";

const Shimmer = () => {
  return (
    <div className="shimmer-container">
      <div className="shimmer-wrapper ">
        <div className="shimmer-card"></div>
        <div className="shimmer-card"></div>
        <div className="shimmer-card"></div>
        <div className="shimmer-card"></div>
      </div>
      <div className="shimmer-wrapper">
        <div className="shimmer-card"></div>
        <div className="shimmer-card"></div>
        <div className="shimmer-card"></div>
        <div className="shimmer-card"></div>
      </div>
    </div>
  );
};

export default Shimmer;
