import React from "react";
import Link from "gatsby-link";

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import github from "../assets/icons/github.svg";
import linkdin from "../assets/icons/linkdin.svg";
import twitter from "../assets/icons/twitter.svg";
import insta from "../assets/icons/insta.svg";

const btnStyle = {
  image: {
    width: "100px",
    height: "100px"
  },
  backgroundColor: "#A9D0F5",
  width: "100px",
  height: "100px"
};

const primaryBtnStyle = {
  color: "black",
  backgroundColor: "#A9D0F5"
};

class ModalX extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <div>
        <Button color="primary" style={primaryBtnStyle} onClick={this.toggle}>
          {this.props.buttonLabel}
        </Button>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Find Me Here!</ModalHeader>

          <ModalFooter>
            <a href="https://github.com/clementsjj" target="_blank">
              <img src={github} style={btnStyle.image} />
            </a>
            <a
              href="https://www.linkedin.com/in/john-clements-084a1811a/"
              target="_blank">
              <img src={linkdin} style={btnStyle.image} />
            </a>
            <a href="https://twitter.com/clementsjj" target="_blank">
              <img src={twitter} style={btnStyle.image} />
            </a>
            <a href="https://www.instagram.com/jj4bucky/" target="_blank">
              <img src={insta} style={btnStyle.image} />
            </a>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default ModalX;
