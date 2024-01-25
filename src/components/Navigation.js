
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";


const Navigation = () => {



    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand as={Link} to="/">
                    Dogs App
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className="justify-content-between">
                    <Nav md={6}>
                        <Nav.Link as={Link} to="/">
                            Home Page
                        </Nav.Link>
                        <Nav.Link as={Link} to="/history">
                            History Page
                        </Nav.Link>
                        <Nav.Link as={Link} to="/cart">
                            Cart Page
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navigation;
