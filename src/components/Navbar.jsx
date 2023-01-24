import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export default function Navigation(props) {
	return (
		<Navbar bg="light" expand="lg">
			<Container>
				<Navbar.Brand
					className="pointer-cursor"
					onClick={() => {
						props.setContent("home");
					}}
				>
					Carlos's Porfolio
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto">
						<Nav.Link onClick={() => props.setContent("projects")}>
							Projects
						</Nav.Link>
						<Nav.Link onClick={() => props.setContent("work")}>Work</Nav.Link>
						<Nav.Link onClick={() => props.setContent("research")}>
							Research
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}
