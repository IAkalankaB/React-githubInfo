import React, { Component } from "react";
//import Sidebar from "../layouts/Sidebar";

class About extends Component {
  render() {
    return (
      <div>
        <h2 className="text-center">About github.info...</h2>
        <p className="text-center">
          A place where you can find github profile information of your friends and more....
        </p>
        <p>
          <div className="grid-3 m-3">
            <div className="container">
              <img
                src="https://avatars3.githubusercontent.com/u/38803419?s=400u=524619c0cc4c7915fc487b8d67fd579e6f460979v=4"
                className="round-img"
                style={{ width: "120px" }}
                alt=""
              />
            </div>
            <div className="container">
              <img
                src="https://avatars0.githubusercontent.com/u/15853418?s=400v=4"
                className="round-img"
                style={{ width: "120px" }}
                alt=""
              />
            </div>
            <div className="container">
              <img
                src="https://avatars2.githubusercontent.com/u/25411156?s=400v=4"
                className="round-img"
                style={{ width: "120px" }}
                alt=""
              />
            </div>
          </div>
        </p>
      </div>
    );
  }
}

export default About;
