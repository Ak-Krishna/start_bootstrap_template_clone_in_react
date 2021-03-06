import React from "react";
import"../App.css";
const Portfolio=()=>{
return (
  <div className="portfolio">
    <h1 className="port">Portfolio</h1>
    <div class="design">
      <div class="line1"></div>
      <div class="star1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-star-fill"
          viewBox="0 0 16 16"
        >
          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
        </svg>
      </div>
      <div class="line1"></div>
    </div>
    <div className="container">
      <div className="box">
        <img
          className="cabin-photo"
          src={require("./cabin.png")}
          alt={"cabin image"}
        />
      </div>
      <div className="box">
        <img
          className="cabin-photo"
          src={require("./cake.png")}
          alt={"cabin image"}
        />
      </div>
      <div className="box">
        <img
          className="cabin-photo"
          src={require("./circus.png")}
          alt={"cabin image"}
        />
      </div>
      <div className="box">
        <img
          className="cabin-photo"
          src={require("./submarine.png")}
          alt={"cabin image"}
        />
      </div>
      <div className="box">
        <img
          className="cabin-photo"
          src={require("./game.png")}
          alt={"cabin image"}
        />
      </div>
      <div className="box">
        <img
          className="cabin-photo"
          src={require("./safe.png")}
          alt={"cabin image"}
        />
      </div>
    </div>
  </div>
);
}
export default Portfolio;