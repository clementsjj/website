import React from "react";
import Link from "gatsby-link";
import { Button, Jumbotron, Container } from "reactstrap";
import JumbotronX2 from "../components/JumbotronX2";

const bgColors = {
  Blue: "#A9D0F5",
  Purple: "#BCA9F5",
  Other: "#8181F7"
};

const btnStyle = {
  color: "black",
  backgroundColor: bgColors.Blue
};

const About = () => (
  <div>
    <JumbotronX2 />
    <div
      style={{
        margin: "0 auto",
        maxWidth: 960,
        padding: "0px 1.0875rem 1.45rem",
        paddingTop: "1.45rem"
      }}>
      <h1>About</h1>
      <hr />
      <Link to="/about-this-site/">
        <Button color="primary" style={btnStyle}>
          About This Site
        </Button>
      </Link>
    </div>
  </div>
);

export default About;
