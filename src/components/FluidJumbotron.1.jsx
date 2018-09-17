import React from "react";
import Link from "gatsby-link";

import { Button, Jumbotron, Container } from "reactstrap";
import JumbotronModal from "../components/JumbotronModal";

const FluidJumbotron = props => {
  return (
    <div>
      <Jumbotron fluid>
        <Container>
          <h1 className="display-6">{`Home of <JJ Clements />`}</h1>
          <div className="float-left button-group">
            <JumbotronModal buttonLabel="Wisc" />
          </div>
          <div className="float-right button-group">
            <Link to="/">
              <Button color="primary">Home</Button>
            </Link>
            <Link to="/about/">
              <Button color="primary">About</Button>
            </Link>
          </div>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default FluidJumbotron;
