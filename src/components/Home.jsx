import Carousel from "react-bootstrap/Carousel";
import { useNavigate } from "react-router-dom";
import projects from "../images/projects.png";
import research from "../images/research.png";
import work from "../images/work.png";

export default function Home() {
	const navigate = useNavigate();

	return (
		<>
			<Carousel variant="dark" interval={3000} className="carousel-slides">
				<Carousel.Item className="slide" onClick={() => navigate("/projects")}>
					<img src={projects} alt="projects slide" />
					<Carousel.Caption className="caption">
						<h3>Projects</h3>
						<p>See the projects I've worked on</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item className="slide" onClick={() => navigate("/work")}>
					<img src={work} alt="work slide" />

					<Carousel.Caption className="caption">
						<h3>Work</h3>
						<p>Know my work experience</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item className="slide" onClick={() => navigate("/research")}>
					<img src={research} alt="research slide" />

					<Carousel.Caption className="caption">
						<h3>Research</h3>
						<p>Check out my research</p>
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>
			<blockquote className="poem">
				<i>
					"I am a student of code with dreams so bright,
					<br /> In a world of ones and zeroes, I see the light. <br />A future
					where technology brings change, <br />
					For the betterment of all, I feel compelled to arrange.
					<br />
					<br /> With every line of code I write, <br />I aim to improve the
					world, day and night. <br />
					Innovative solutions to problems old, <br />
					With software technology, my story is told. <br />
					<br />I strive to make the world a better place, <br />
					With each new feature and every space. <br />
					Through my work, I will touch lives,
					<br /> And leave a lasting impact that truly thrives. <br />
					<br />
					So let me be an inspiration, <br />
					To all those who seek to bring innovation. <br />
					For with hard work, dedication and drive, <br />I will change the
					world and truly thrive."
				</i>
				<footer className="blockquote-footer">
					<cite title="Source Title">ChatGPT</cite>
				</footer>
			</blockquote>
		</>
	);
}
