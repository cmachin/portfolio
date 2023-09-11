import { Nav } from "react-bootstrap";
import { Navbar } from "react-bootstrap";

export default function Footer() {
	return (
		<Navbar
			bg="light"
			variant="light"
			fixed="bottom"
			className="justify-content-center"
		>
			<Nav activeKey={""}>
				<Nav.Link href="https://github.com/cmachin" target="_blank">
					Github
				</Nav.Link>
				<Nav.Link
					href="https://www.linkedin.com/in/carlos-machin/"
					target="_blank"
				>
					LinkedIn
				</Nav.Link>
			</Nav>
		</Navbar>
	);
}
