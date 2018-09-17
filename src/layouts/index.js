import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import Helmet from "react-helmet";

import "./index.css";

// require('bootstrap');
import "./bootstrap.min.css";
import ReactNavbar from "../components/ReactNavbar";
import JumbotronX from "../components/JumbotronX";
import Footer from "../components/Footer";

const Header = () => <ReactNavbar />;

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Website of JJ Clements"
      meta={[
        { name: "description", content: "JJ Clements" },
        { name: "keywords", content: "Gatsby.js, reactstrap, Bootstrap 4" }
      ]}
    />
    <Header />

    {/* <div
      style={{
        margin: "0 auto",
        maxWidth: 960,
        padding: "0px 1.0875rem 1.45rem",
        paddingTop: "1.45rem"
      }}> */}
    <div style={{ minHeight: "72.1vh" }}>{children()}</div>
    <Footer />
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
