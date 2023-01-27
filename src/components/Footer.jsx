import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export default function Footer() {
	return (
		<>
			<div className="divider"></div>
			<Navbar bg="light" variant="light" fixed="bottom">
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="footer">
						<Nav.Link href="https://github.com/cmachin" target="_blank">
							Github
						</Nav.Link>
						<Nav.Link
							href="https://www.linkedin.com/in/carlos-machin/"
							target="_blank"
						>
							Linkedin
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</>
	);
}
