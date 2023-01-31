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
		<Container>
			<Row className="item-cards">
				<Col sm={12} md={6}>
					<Card className="item-card">
						<Card.Header>Dec 2021 - May 2023</Card.Header>
						<Card.Img variant="top" src={bob} />
						<Card.Body>
							<Card.Title>Bathymetry ASV</Card.Title>

							<Accordion>
								<Accordion.Item defaultactivekey="0" eventKey="0">
									<Accordion.Header>More info</Accordion.Header>
									<Accordion.Body>
										Autonomous surface vehicle designed for gathering bathymetry
										data. <br /> <br />I was in charge of developing the
										official laboratory website and also developed data
										visualization tools for bathymetry data.
									</Accordion.Body>
								</Accordion.Item>
							</Accordion>
							<br />
							<Button
								variant="primary"
								href="https://sites.google.com/view/bio-optics/projects/bob?authuser=0"
								target="_blank"
							>
								Website
							</Button>
						</Card.Body>
					</Card>
				</Col>
				<Col>
					<Card className="item-card">
						<Card.Header>Jan 2020 - Dec 2021</Card.Header>
						<Card.Img variant="top" src={serrt} />
						<Card.Body>
							<Card.Title>Solar-Powered Race Car</Card.Title>
							<Accordion>
								<Accordion.Item defaultactivekey="0" eventKey="0">
									<Accordion.Header>More info</Accordion.Header>
									<Accordion.Body>
										University of Puerto Rico’s (SERRT) project aimed at solar
										energy research with a focus on transportation.
										<br /> <br />
										As part of the telemetry division, I developed telemetry
										gathering and monitoring software.
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
	);
}
