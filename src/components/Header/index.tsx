import React, { useState } from "react";
import "./style.scss";

const Header = () => {
  return (
    <div className="main">
      <div className="logo">THE DRINK BLOG</div>
      <div className="subtitles">
        <div className="sub1">RECIPES</div>
        <div className="sub1">ABOUT</div>
        <div className="sub1">CONTACT</div>
        <div className="sub2">TWITTER</div>
        <div className="sub2">INSTAGRAM</div>
      </div>
    </div>
  );
};

export default Header;
