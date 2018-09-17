import React from "react";
import Link from "gatsby-link";
import nyc from "../assets/images/nycbw.jpg";
import JumbotronX from "../components/JumbotronX";

const IndexPage = () => (
  <div>
    <JumbotronX />
    <div>
      <img
        src={nyc}
        style={{
          maxHeight: "35.5vh"
        }}
      />
    </div>
  </div>
);
export default IndexPage;
