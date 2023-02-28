import { Container } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import { useLocation } from "react-router-dom";

export default function Navigation() {
	return (
		<Navbar bg="dark" variant="dark" expand="md" fixed="top" collapseOnSelect>
			<Container>
				<Navbar.Brand href="#/">Carlos's Portfolio</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav activeKey={"#" + useLocation().pathname} className="me-auto">
						<Nav.Link href="#/projects">Projects</Nav.Link>
						<Nav.Link href="#/research">Research</Nav.Link>
						<Nav.Link href="#/work">Work</Nav.Link>
						<Nav.Link href="#/certifications">Certifications</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}
