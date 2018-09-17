import React from "react";
import Link from "gatsby-link";
import menu from "../assets/icons/menu.svg";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button
} from "reactstrap";

const bgColors = {
  Blue: "#A9D0F5"
};

const btnStyle = {
  color: "black",
  backgroundColor: bgColors.Blue
};

const headerStyle = {
  color: "green",
  backgroundImage: `url(${menu})`,
  borderColor: "green"
};

export default class ReactNavbar extends React.Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render() {
    return (
      <div>
        <Navbar color="dark" light>
          <NavbarBrand to="/" className="mr-auto" style={headerStyle}>
            {`<JJ Clements />`}
          </NavbarBrand>
          <NavbarToggler
            onClick={this.toggleNavbar}
            className="mr-2"
            style={headerStyle}
          />
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav navbar>
              <NavItem>
                <Link to="/">
                  <Button style={btnStyle} block>
                    {/* color="primary" */}
                    Home
                  </Button>
                </Link>
              </NavItem>
              <NavItem>
                <Link to="/page-2/">
                  <Button style={btnStyle} block>
                    About
                  </Button>
                </Link>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/clementsjj" target="_blank">
                  <Button style={btnStyle} block>
                    Projects
                  </Button>
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
