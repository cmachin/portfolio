import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import databased from "../images/databased.png";
import doctor from "../images/doctor.png";
import greenlease from "../images/greenlease.png";
import website from "../images/website.png";

export default function Projects() {
	const items = [
		{
			date: "Jan 2023",
			image: website,
			title: "Porfolio",
			description:
				"Website created using React for documenting my work history, showcasing my research and displaying my coding projects",
			link: "google.com",
		},
		{
			date: "Jan 2023 - May 2023",
			image: greenlease,
			title: "Greenlease",
			description:
				"Web app that helps students from the University of Puerto Rico find rent and lease accomodations near the universtiy",
			link: "https://github.com/cmachin?tab=repositories",
		},
		{
			date: "Aug 2022 - Dec 2022",
			image: databased,
			title: "Databased Email App",
			description:
				"Fully functioning email platform where users can add friends, send emails, edit emails, and see some really cool stats",
			link: "https://github.com/cmachin?tab=repositories",
		},
		{
			date: "Aug 2021 - Dec 2021",
			image: doctor,
			title: "Doctor Finder App",
			description: "Search for doctors near you based on your medical needs",
			link: "https://github.com/cmachin?tab=repositories",
		},
	];

	return (
		<Container>
			<Row className="item-cards">
				{items.map((item, index) => {
					return (
						<Col sm={12} md={6} lg={4} xl={3} key={index}>
							<Card className="item-card">
								<Card.Header>{item.date}</Card.Header>
								<Card.Img variant="top" src={item.image} />
								<Card.Body>
									<Card.Title>{item.title}</Card.Title>
									<Accordion>
										<Accordion.Item defaultactivekey="0" eventKey="0">
											<Accordion.Header>More info</Accordion.Header>
											<Accordion.Body>{item.description}</Accordion.Body>
										</Accordion.Item>
									</Accordion>
								</Card.Body>
							</Card>
						</Col>
					);
				})}
			</Row>
		</Container>
	);
}
