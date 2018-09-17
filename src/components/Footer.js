import React from "react";
import Link from "gatsby-link";

import { Button, Jumbotron, Container } from "reactstrap";
import JumbotronModal from "../components/JumbotronModal";

const style = {
  backgroundColor: "#8181F7",
  height: "5vh",
  width: "100vw",
  color: "black"
};

const Footer = props => {
  return (
    <div style={style}>
      <div className="footer">
        <div className="float-left">
          <p>Created by JJ Clements. Find me on Github.</p>
        </div>
        <div className="float-right">
          <p>Enjoy!</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
