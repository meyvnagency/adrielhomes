import React from "react";
import { FaBell } from "react-icons/fa6";

function offer() {
  return (
    <>
      <div className="container">
        <div className="offer">
          <div className="left">
            <div className="icon">
              <FaBell />
            </div>
            <div className="text">
              <h3>Offer Updates</h3>
              <p>Stay automatically informed of all new homes from our offer</p>
            </div>
          </div>
          <div className="right">
            <a href="">Receive updates automatically</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default offer;
