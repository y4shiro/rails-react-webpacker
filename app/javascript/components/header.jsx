import React from 'react';
import {
  Navbar,
  NavbarBrand
} from 'reactstrap';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // <Header title=' ... で渡された値を表示
    return (
      <Navbar color="dark" dark expand="md">
        <NavbarBrand href="/">{this.props.title}</NavbarBrand>
      </Navbar>
    )
  }
}

export default Header;
