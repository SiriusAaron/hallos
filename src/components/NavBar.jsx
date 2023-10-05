import { Container, Nav, Navbar, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Navbar bg="dark" className="mb-4" style={{ height: "4rem" }}>
      <Container>
        <h2>
          <Link to="/" className="link-blue text-decoration-none">
            Chatting
          </Link>
        </h2>
        <span className="text-warning">Logged in as sasa</span>
        <Nav>
          <Stack direction="horizontal" gap={4}>
            <Link to="/login" className="link-light text-decoration-none">
              Login
            </Link>
            <Link to="/register" className="link-light text-decoration-none">
              Register
            </Link>
          </Stack>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;
