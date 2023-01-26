import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import bob from "../images/bob.png";
import serrt from "../images/serrt.png";

export default function Research() {
	return (
		<div>
			<Container>
				<Row>
					<Col sm={12} md={6} className="cards-research">
						<Card className="card-research">
							<Card.Header>Dec 2021 - May 2023</Card.Header>
							<Card.Img variant="top" src={bob} />
							<Card.Body>
								<Card.Title>Bathymetry ASV</Card.Title>
								<Card.Text>
									Autonomous surface vehicle designed for gathering bathymetric
									data.
								</Card.Text>
								<Accordion>
									<Accordion.Item defaultActiveKey="0" eventKey="0" flush>
										<Accordion.Header>More info</Accordion.Header>
										<Accordion.Body>
											In charge of developing the official laboratory website
											and also developed data visualization tools for
											bathymetric data.
										</Accordion.Body>
									</Accordion.Item>
								</Accordion>
								<br />
								<Button
									variant="primary"
									href="https://sites.google.com/view/bio-optics/projects/bob?authuser=0"
									target="_blank"
								>
									Wesbsite
								</Button>
							</Card.Body>
						</Card>
					</Col>
					<Col sm={12} md={6} className="cards-research">
						<Card className="card-research">
							<Card.Header>Jan 2020 - Dec 2021</Card.Header>
							<Card.Img variant="top" src={serrt} />
							<Card.Body>
								<Card.Title>Solar Car UPRM (SERRT)</Card.Title>
								<Card.Text>
									University of Puerto Rico’s project aimed at solar energy
									research with a focus on transportation.
								</Card.Text>
								<Accordion>
									<Accordion.Item defaultActiveKey="0" eventKey="0" flush>
										<Accordion.Header>More info</Accordion.Header>
										<Accordion.Body>
											As part of the telemtry division, I developed telemetry
											gathering and monitoring software for a solar powered race
											car.
										</Accordion.Body>
									</Accordion.Item>
								</Accordion>
								<br />
								<Button
									variant="primary"
									href="https://www.facebook.com/Serrt.Uprm/?ref=page_internal"
									target="_blank"
								>
									Website
								</Button>
							</Card.Body>
						</Card>
					</Col>
				</Row>
			</Container>
		</div>
	);
}
