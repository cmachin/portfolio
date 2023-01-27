import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import ListGroup from "react-bootstrap/ListGroup";

export default function Work() {
	function Separator() {
		return (
			<>
				<br /> • <br /> • <br /> • <br />
			</>
		);
	}

	const items = [
		{
			date: "May 2023 - Jul 2023",
			title: "GE Healthcare",
			subtitle: "Software Engineering Intern",
			description: [
				"Developed browser-based tools for data visualization.",
				"Prepared and submitted reports and other documentation about software development.",
			],
		},
		{
			date: "Jul 2021 - Sep 2021",
			title: "Instarz",
			subtitle: "Market Research Intern",
			description: [
				"Gathered, arranged, and corrected research data to develop 3D models for a lunar habitat.",
				"Utilized job-related software to perform descriptive and statistical analysis of data.",
			],
		},
		{
			date: "Jun 2019 - Aug 2019",
			title: "Emsys Design",
			subtitle: "Computer Hardware Intern",
			description: [
				"Performed troubleshooting to correct computer hardware and software malfunctions.",
				"Monitored company inventory to keep stock levels and databases updated.",
			],
		},
	];
	return (
		<Container fluid>
			{items.map((item, index) => {
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
						{index !== items.length - 1 ? <Separator /> : null}
					</div>
				);
			})}
		</Container>
	);
}
