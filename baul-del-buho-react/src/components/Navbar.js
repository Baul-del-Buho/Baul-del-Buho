import { useState } from 'react';
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
import Logo from './../img/logo.png';
import '../index.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//Esta es para icono estaticos fa
import { faSignInAlt, faSearch } from '@fortawesome/free-solid-svg-icons';

const NavBar = ({busqueda, setBusqueda, modo, setModo}) => {
  const [isOpen, setIsOpen] = useState(false);
  const cambiarModo = () => {
    if(modo === "dark"){
      setModo("light");
    }
    if(modo === "light"){
      setModo("dark");
    }
  }
  const toggle = () => {
    setIsOpen(!isOpen);
  }
  
    return (
      <div className="navbar-class">
        <Navbar dark expand="md">
          <NavbarBrand href="/">
            <img src={Logo} alt="logo"/>
            <strong> Baúl del Búho</strong>
            </NavbarBrand>
            <form action="" onSubmit={(e) => e.preventDefault()}>
              <label htmlFor="searchInput"></label>
              <input id="searchInput"
                type="text"
                placeholder='Buscar Proyectos'
                value={busqueda}
                onChange={(e) => setBusqueda(e.target.value)}
              />
              <button id="searchButton"><FontAwesomeIcon icon={faSearch}/></button>
            </form>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ms-auto" navbar>
              <NavItem>
                <NavLink href="/proyectos">Proyectos</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/nuevo">Nuevo Proyecto</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/">¿Quienes somos?</NavLink>
              </NavItem>
              <NavItem>
                <Button color="primary">
                  <FontAwesomeIcon icon={faSignInAlt}/>
                  <NavLink href="/login">Iniciar Sesión</NavLink>
                </Button>
                <Button onClick={cambiarModo}>{modo==="light"? "Cambiar a modo oscuro": "Cambiar a modo claro" }</Button>
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

export default NavBar;
