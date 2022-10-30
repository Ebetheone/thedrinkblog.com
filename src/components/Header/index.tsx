import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="main">
      <Link to="/" style={{ textDecoration: "none" }}>
        <div className="logo">THE DRINK BLOG</div>
      </Link>
      <div className="subtitles">
        <Link to="/recipes" style={{ textDecoration: "none" }}>
          <div className="sub1">RECIPES</div>
        </Link>
        <Link to="/about" style={{ textDecoration: "none" }}>
          <div className="sub1">ABOUT</div>
        </Link>
        <Link to="/contact" style={{ textDecoration: "none" }}>
          <div className="sub1">CONTACT</div>
        </Link>
        <a href="https://twitter.com/thedrinkblog" className="sub2">
          TWITTER
        </a>
        <a href="https://www.instagram.com/thedrinkblog/" className="sub2">
          INSTAGRAM
        </a>
      </div>
    </div>
  );
};

export default Header;
