import Carousel from "react-bootstrap/Carousel";
import { useNavigate } from "react-router-dom";
import projects from "../images/projects.png";
import research from "../images/research.png";
import work from "../images/work.png";

export default function Home(props) {
	const navigate = useNavigate();

	return (
		<>
			<Carousel variant="dark" interval={3000} className="carousel-slides">
				<Carousel.Item
					className="slide"
					onClick={() => navigate("/portfolio/projects")}
				>
					<img src={projects} alt="projects slide" />
					<Carousel.Caption className="caption">
						<h3>Projects</h3>
						<p>See the projects I've worked on</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item
					className="slide"
					onClick={() => navigate("/portfolio/work")}
				>
					<img src={work} alt="work slide" />

					<Carousel.Caption className="caption">
						<h3>Work</h3>
						<p>Know my work experience</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item
					className="slide"
					onClick={() => navigate("/portfolio/research")}
				>
					<img src={research} alt="research slide" />

					<Carousel.Caption className="caption">
						<h3>Research</h3>
						<p>Check out my research</p>
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>
			<div className="mission">
				<i>
					"My mission is to infuse expertise into every line of code I write,
					crafting software that functions flawlessly and brings efficiency to
					users. My goal is to make a meaningful impact in the tech industry and
					to continuously learn and improve my skills, while seeking new
					opportunities to showcase my abilities."
					<br />
					<br />- ChatGPT
				</i>
			</div>
		</>
	);
}
