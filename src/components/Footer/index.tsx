import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="margin">
        <div className="social">
          <a href="https://twitter.com/thedrinkblog" className="single">
            TWITTER
          </a>
          <a href="https://www.instagram.com/thedrinkblog/" className="single">
            INSTAGRAM
          </a>
          <a href="https://www.pinterest.com/thedrinkblog/" className="single">
            PINTEREST
          </a>
        </div>
        <div className="copyright">
          © 2022 theDrinkBlog.com. All rights reserved.
        </div>
        <div className="help">
          <Link to="/recipes" style={{ textDecoration: "none" }}>
            <div className="helpone">recipes</div>
          </Link>
          <Link to="/about" style={{ textDecoration: "none" }}>
            <div className="helpone">about</div>
          </Link>
          <Link to="/contact" style={{ textDecoration: "none" }}>
            <div className="helptwo">contact</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
