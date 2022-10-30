import React from "react";
import "./style.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="margin">
        <div className="social">
          <div className="single">twitter</div>
          <div className="single">instagram</div>
          <div className="single">pinterest</div>
        </div>
        <div className="copyright">
          © 2022 theDrinkBlog.com. All rights reserved.
        </div>
        <div className="help">
          <div className="helpone">recipes</div>
          <div className="helpone">about</div>
          <div className="helptwo">contact</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
