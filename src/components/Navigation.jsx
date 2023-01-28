import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export default function Navigation() {
	return (
		<Navbar bg="dark" variant="dark" expand="lg" sticky="top" collapseOnSelect>
			<Container>
				<Navbar.Brand>Carlos's Portfolio</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto">
						<Nav.Link href="#/home">Home</Nav.Link>
						<Nav.Link href="#/projects">Projects</Nav.Link>
						<Nav.Link href="#/work">Work</Nav.Link>
						<Nav.Link href="#/research">Research</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}
