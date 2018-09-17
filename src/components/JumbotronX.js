import React from "react";
import Link from "gatsby-link";

import { Button, Jumbotron, Container } from "reactstrap";
import Modal from "./ModalX";

const bgColors = {
  Blue: "#A9D0F5",
  Purple: "#BCA9F5",
  Other: "#8181F7"
};

const btnStyle = {
  color: "black",
  backgroundColor: bgColors.Blue
};

const hackerStyle = {
  color: "black",
  backgroundColor: bgColors.Other
};

const JumbotronX = props => {
  return (
    <div>
      <Jumbotron fluid style={hackerStyle}>
        <Container>
          <h1 className="display-3">{`Home of <JJ Clements />`}</h1>
          <div className="float-left button-group">
            <Modal buttonLabel="Social Media" style={btnStyle} />
          </div>
          <div className="float-right button-group">
            <Link to="/">
              <Button color="primary" style={btnStyle}>
                Home
              </Button>
            </Link>
            <Link to="/about/">
              <Button color="primary" style={btnStyle}>
                About
              </Button>
            </Link>
            <Link to="/markdown-files/">
              <Button color="primary" style={btnStyle}>
                md-Files
              </Button>
            </Link>
            <Link to="/my-files/">
              <Button color="primary" style={btnStyle}>
                All Files
              </Button>
            </Link>
            <Link to="/blog/">
              <Button color="primary" style={btnStyle}>
                Blog
              </Button>
            </Link>
            <Link to="/about-this-site/">
              <Button color="primary" style={btnStyle}>
                About This Site
              </Button>
            </Link>
          </div>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default JumbotronX;
