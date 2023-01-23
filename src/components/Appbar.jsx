import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export default function Appbar() {
	return (
		<Navbar bg="dark" expand="lg">
			<Container>
				<Navbar.Brand href="#home">Carlos's Porfolio</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto">
						<Nav.Link href="#projects">Projects</Nav.Link>
						<Nav.Link href="#work">Work</Nav.Link>
						<Nav.Link href="#research">Research</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}
