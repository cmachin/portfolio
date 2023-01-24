import Carousel from "react-bootstrap/Carousel";
import projects from "../images/projects.png";
import research from "../images/research.png";
import work from "../images/work.png";

export default function Home(props) {
	return (
		<>
			<Carousel variant="dark" interval={3000}>
				<Carousel.Item
					className="slide"
					onClick={() => props.setContent("projects")}
				>
					<img src={projects} alt="projects slide" />
					<Carousel.Caption className="caption">
						<h3>Projects</h3>
						<p>See the projects I've worked on</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item
					className="slide"
					onClick={() => props.setContent("work")}
				>
					<img src={work} alt="work slide" />

					<Carousel.Caption className="caption">
						<h3>Work</h3>
						<p>Know my work experience</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item
					className="slide"
					onClick={() => props.setContent("research")}
				>
					<img src={research} alt="research slide" />

					<Carousel.Caption className="caption">
						<h3>Research</h3>
						<p>Check out my research</p>
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>
			<div className="center-text">
				<i>
					"To use my skills and knowledge in software engineering to develop
					innovative solutions for real-world problems, while continuously
					learning and growing as a professional in the field."
					<br />
					<br />- ChatGPT
				</i>
			</div>
		</>
	);
}
