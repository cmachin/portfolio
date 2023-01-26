import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export default function Navigation(props) {
	return (
		<Navbar bg="dark" variant="dark" expand="lg" sticky="top" collapseOnSelect>
			<Container>
				<Navbar.Brand className="brand-name">Carlos's Porfolio</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="me-auto">
						<Nav.Link href="#" onClick={() => props.setContent("home")}>
							Home
						</Nav.Link>
						<Nav.Link href="#" onClick={() => props.setContent("projects")}>
							Projects
						</Nav.Link>
						<Nav.Link href="#" onClick={() => props.setContent("work")}>
							Work
						</Nav.Link>
						<Nav.Link href="#" onClick={() => props.setContent("research")}>
							Research
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}
