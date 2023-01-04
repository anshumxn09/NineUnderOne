import React, { useState } from "react";
import "./App.css";
import data from "./data";
const App = () => {
  return (
    <div className="mainContainer">
      <h1 data-aos="zoom-in">9 IN ONE</h1>
      <div className="card">
        {data.map((elem, index) => {
          return (
            <a href={elem.link} key={index} data-aos="zoom-in-up" title="CLICK TO VISIT APPLICATION">
              <p>{elem.icon}</p>
              <span>{elem.title}</span>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default App;
