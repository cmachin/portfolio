import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useNavigate } from "react-router-dom";

export default function Navigation() {
	const navigate = useNavigate();
	return (
		<Navbar bg="dark" variant="dark" expand="lg" sticky="top" collapseOnSelect>
			<Container>
				<Navbar.Brand className="brand-name">Carlos's Portfolio</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="me-auto">
						<Nav.Link href="#" onClick={() => navigate("/home")}>
							Home
						</Nav.Link>
						<Nav.Link href="#" onClick={() => navigate("/projects")}>
							Projects
						</Nav.Link>
						<Nav.Link href="#" onClick={() => navigate("/work")}>
							Work
						</Nav.Link>
						<Nav.Link href="#" onClick={() => navigate("/research")}>
							Research
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}
