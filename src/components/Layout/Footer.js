import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <h5 className="text-center">
        All Rights Reserved &copy; Shivanshu Singh
      </h5>
      <p className="text-center mt-3">
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/policy">Privacy and Policy</Link>
      </p>
      <p className="text-center mt-3">
        <Link to="https://www.facebook.com/shivanshu9199/">
          <i class="fab fa-facebook"></i>
        </Link>
        <Link to="https://www.linkedin.com/in/shivaji99/">
          <i class="fab fa-linkedin"></i>
        </Link>
        <Link to="https://www.instagram.com/shiva_ji99/">
          <i class="fab fa-instagram"></i>
        </Link>
      </p>
    </div>
  );
};

export default Footer;
