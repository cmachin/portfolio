import Button from "react-bootstrap/Button";
import Carousel from "react-bootstrap/Carousel";
import { useNavigate } from "react-router-dom";
import Typewriter from "../components/Typewriter";

export default function Home() {
	const navigate = useNavigate();

	return (
		<div className="home">
			<Carousel variant="dark" interval={3000} className="carousel-slides">
				<Carousel.Item className="slide" onClick={() => navigate("/projects")}>
					<img src={"/portfolio/images/projects.png"} alt="projects slide" />
					<Carousel.Caption className="caption">
						<h3>Projects</h3>
						<p>See the projects I've worked on</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item className="slide" onClick={() => navigate("/research")}>
					<img src={"/portfolio/images/research.png"} alt="research slide" />
					<Carousel.Caption className="caption">
						<h3>Research</h3>
						<p>Check out my research</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item className="slide" onClick={() => navigate("/work")}>
					<img src={"/portfolio/images/work.png"} alt="work slide" />
					<Carousel.Caption className="caption">
						<h3>Work</h3>
						<p>Know my work experience</p>
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>
			<Button
				variant="dark"
				href="/portfolio/documents/Resume_Carlos_Machin_23.pdf"
				target="_blank"
			>
				View Resume
			</Button>
			<div className="typewriter">
				<Typewriter>Email: machin.cam@gmail.com</Typewriter>
			</div>
		</div>
	);
}
