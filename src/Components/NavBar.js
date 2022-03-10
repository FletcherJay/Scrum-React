import { Nav } from "react-bootstrap";
import { NavDropdown } from "react-bootstrap";
import { render } from "@testing-library/react";


function NavBarDropdown() {
  const handleSelect = (eventKey) => alert(`selected ${eventKey}`);

  return (
    <div className="mb-3">
      <Nav variant="pills" activeKey="1" onSelect={handleSelect}>
        <Nav.Item>
          <Nav.Link eventKey="1" href="#/home">
            My Blog
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="2" title="Item">
            My Projects
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="3" disabled>
            Contact
          </Nav.Link>
        </Nav.Item>
        <NavDropdown title="Dropdown" id="nav-dropdown">
          <NavDropdown.Item eventKey="4.1">Github</NavDropdown.Item>
          <NavDropdown.Item eventKey="4.2">Indeed</NavDropdown.Item>
          <NavDropdown.Item eventKey="4.3">Instagram</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item eventKey="4.4">Facebook</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </div>
  );
}


export default NavBarDropdown