import React, { Component } from "react";
import Loading from "./Loading.gif";

const Spinner = () => {
  return (
    <div className="text-center">
      <img
        className="my-3"
        src={Loading}
        alt=""
        style={{ height: "5%", width: "5%" }}
      />
    </div>
  );
};

export default Spinner;
