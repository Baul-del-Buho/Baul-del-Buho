import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button,
  //UncontrolledDropdown,
  //DropdownToggle,
  //DropdownMenu,
  //DropdownItem
} from 'reactstrap';
import Logo from '../img/logo.png';
import '../index.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//Esta es para icono estaticos fa
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';

export default class navbar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div className="navbar-class">
        <Navbar dark expand="md">
          <NavbarBrand href="/">
            <img src={Logo} alt="logo"/>
            <strong> Baúl del Búho</strong>
            </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ms-auto" navbar>
              <NavItem>
                <NavLink href="/proyectos">Proyectos</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/">¿Quienes somos? &nbsp; </NavLink>
              </NavItem>
              <NavItem>
                <Button color="primary">
                  <FontAwesomeIcon icon={faSignInAlt}/>
                   &nbsp;&nbsp;&nbsp;Iniciar Sesión
                </Button>
                {/*<NavLink href="/">Iniciar Sesión</NavLink>*/}
              </NavItem>

              {/*<UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Options
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Option 1
                  </DropdownItem>
                  <DropdownItem>
                    Option 2
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Reset
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>*/}
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
