import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";

export default function Work() {
	const separator = (
		<>
			<br /> • <br /> • <br /> •
		</>
	);
	return (
		<Container className="timelines">
			<Card className="timeline">
				<Card.Header>May 2023 - Jul 2023</Card.Header>
				<Card.Body>
					<Card.Title>GE Healthcare</Card.Title>
					<Card.Title>
						<i>Software Engineering Intern</i>
					</Card.Title>
					<Card.Text>
						● Developed browser-based tools for data visualization. <br />●
						Prepared and submitted reports and other documentation about
						software development.
					</Card.Text>
				</Card.Body>
			</Card>
			{separator}
			<Card className="timeline">
				<Card.Header>Jul 2021 - Sep 2021</Card.Header>
				<Card.Body>
					<Card.Title>Instarz</Card.Title>
					<Card.Title>
						<i>Market Research Intern</i>
					</Card.Title>
					<Card.Text>
						● Gathered, arranged, and corrected research data to develop 3D
						models for a lunar habitat. <br />● Utilized job-related software to
						perform descriptive and statistical analysis of data.
					</Card.Text>
				</Card.Body>
			</Card>
			{separator}
			<Card className="timeline">
				<Card.Header>Jun 2019 - Aug 2019</Card.Header>
				<Card.Body>
					<Card.Title>Emsys Design</Card.Title>
					<Card.Title>
						<i>Computer Hardware Intern</i>
					</Card.Title>
					<Card.Text>
						● Performed troubleshooting to correct computer hardware and
						software malfunctions. <br />● Monitored company inventory to keep
						stock levels and databases updated.
					</Card.Text>
				</Card.Body>
			</Card>
		</Container>
	);
}
