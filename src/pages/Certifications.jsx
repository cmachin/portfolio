import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { getCertifications } from "../api/fetcher";

export default function Certifications() {
	return (
		<div className="certifications">
			{getCertifications().map((item, index) => {
				return (
					<Container key={index}>
						<h1>{item.title}</h1>
						<Row className="item-cards">
							<img src={item.image} alt={item.title} />
						</Row>
					</Container>
				);
			})}
		</div>
	);
}
