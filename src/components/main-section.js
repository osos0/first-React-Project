import React from "react";
import photo from "../images/photo.jpg";
import star from "../images/star.png";

export default function MainSection() {
  return (
    <div className="main-con">
      <div className="main-one">
        <h1> Online Experiences</h1>
        <p>
          I learned css Css and javaScript
          <br />
          and some tools like unit test and GitHub and
          <br /> finaly i have been learning React
        </p>
      </div>
      <div className="main-two">
        <div className="pic1">
          <div className="lastThreeLines">
            <img src={photo} alt="Photo-bride" className="photobride" />
            <p className="sold">sold Out</p>
          </div>
          <img src={star} alt="" width={"30px"} />
          <i>5.0 USA</i>
          <p>I am a discription of the picture</p>
          <h3>
            From $ 100 <small>person</small>
          </h3>
        </div>

        <div className="pic1">
          <div className="lastThreeLines">
            <img src={photo} alt="Photo-bride" className="photobride" />
            <p className="sold">sold Out</p>
          </div>
          <img src={star} alt="" width={"30px"} />
          <i>5.0 USA</i>
          <p>I am a discription of the picture</p>
          <h3>
            From $ 100 <small>person</small>
          </h3>
        </div>

        <div className="pic1">
          <div className="lastThreeLines">
            <img src={photo} alt="Photo-bride" className="photobride" />
            <p className="sold">sold Out</p>
          </div>
          <img src={star} alt="" width={"30px"} />
          <i>5.0 USA</i>
          <p>I am a discription of the picture</p>
          <h3>
            From $ 100 <small>person</small>
          </h3>
        </div>
      </div>
    </div>
  );
}
