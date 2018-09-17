import React from "react";
import Link from "gatsby-link";

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import github from "../assets/icons/github.svg";

class ModalExample extends React.Component {
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
        <Button color="danger" onClick={this.toggle}>
          {this.props.buttonLabel}
        </Button>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Social Media</ModalHeader>
          <ModalBody>Find me at the following:</ModalBody>
          <ModalFooter>
            <Link to="/">
              <Button color="primary" onClick={this.toggle}>
                {/* <img src={github} /> */}
                Something
              </Button>
            </Link>
            <Link to="/page-2/">
              <Button color="primary" onClick={this.toggle}>
                Outdoor Cameras
              </Button>
            </Link>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default ModalExample;
