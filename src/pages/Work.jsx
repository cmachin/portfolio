import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import ListGroup from "react-bootstrap/ListGroup";
import { getWork } from "../api/fetcher";
import Separator from "../components/Separator";

export default function Work() {
	return (
		<Container fluid>
			{getWork().map((item, index) => {
				return (
					<div key={index} className="timelines">
						<Card className="timeline">
							<Card.Header>{item.date}</Card.Header>
							<Card.Body>
								<Card.Title>{item.title}</Card.Title>
								<Card.Subtitle>{item.subtitle}</Card.Subtitle>
								<Card.Text></Card.Text>
								<ListGroup variant="flush">
									{item.description.map((desc, i) => {
										return <ListGroup.Item key={i}>{desc}</ListGroup.Item>;
									})}
								</ListGroup>
							</Card.Body>
						</Card>
						{index !== getWork().length - 1 ? <Separator /> : null}
					</div>
				);
			})}
		</Container>
	);
}
