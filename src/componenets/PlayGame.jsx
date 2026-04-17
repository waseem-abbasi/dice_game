import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import RoleDice from "./RoleDice";
const PlayGame = ({ selectValue, setSelectValue, error, setError }) => {
  const NumberArr = [1, 2, 3, 4, 5, 6];

  const numberSelectorHandler = (value) => {
    setSelectValue(value);
    setError("");
  };

  console.log("selectvalue", selectValue);
  return (
    <>
      {/* <Col md={6}>
                    <h1>0</h1>
                    <p>Total Score</p>
                </Col> */}
      <p>{error}</p>
      <div className="">
        <div className="row">
          {NumberArr.map((value, index) => (
            <div className="col-4 mb-2" key={index}>
              <div
                className={`border p-3 text-center ${selectValue === value ? "bg-dark text-light" : "bg-white"}`}
                onClick={() => numberSelectorHandler(value)}
              >
                {value}
              </div>
            </div>
          ))}
        </div>

        <p className="mt-3 text-end">Select Number</p>
      </div>
    </>
  );
};

export default PlayGame;
