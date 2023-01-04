import React from "react";
import pho from "../images/kid.jpg";

export default function pics() {
  return (
    <div className="pics-section">
      <div className="pic-con">
        <img src={pho} alt="" className="kid" />
      </div>
      <div className="pic-con single">
        <img src={pho} alt="" className="kid" />
        <img src={pho} alt="" className="kid" />
      </div>
      <div className="pic-con dub">
        <img src={pho} alt="" className="kid" />
        <img src={pho} alt="" className="kid" />
      </div>
      <div className="pic-con single">
        <img src={pho} alt="" className="kid" />
        <img src={pho} alt="" className="kid" />
      </div>
      <div className="pic-con dub">
        <img src={pho} alt="" className="kid" />
        <img src={pho} alt="" className="kid" />
      </div>
    </div>
  );
}
