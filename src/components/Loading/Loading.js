import React from "react";
import { RingLoader } from "react-spinners";
//design
import "./Loading.scss";

const Loading = () => {
  return (
    <div className="loading">
      <RingLoader color={"#4299E1"} size={100} />
    </div>
  );
};

export default Loading;
