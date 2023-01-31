import { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { useNavigate } from "react-router-dom";
import projects from "../images/projects.png";
import research from "../images/research.png";
import work from "../images/work.png";

function Typewriter({ speed = 10, delay = 0, children }) {
	const [newChildren, setNewChildren] = useState([]);
	const [innerIndex, setInnerIndex] = useState(0);
	const [outerIndex, setOuterIndex] = useState(0);
	const [start, setStart] = useState(false);

	const type = () => {
		if (!start) {
			return;
		}
		var buffer = [];
		buffer.push(newChildren);

		if (outerIndex > children.length) {
			// console.log(newChildren);
			return;
		}

		if (typeof children[outerIndex] !== "string") {
			// console.log(children[outerIndex], "not string");
			buffer.push(children[outerIndex]);
			setNewChildren(buffer);
			setOuterIndex(outerIndex + 1);
		} else {
			if (innerIndex === children[outerIndex].length) {
				setInnerIndex(0);
				setOuterIndex(outerIndex + 1);
			} else {
				buffer.push(children[outerIndex][innerIndex]);
				setNewChildren(buffer);
				setInnerIndex(innerIndex + 1);
			}
		}
	};

	useEffect(() => {
		setTimeout(() => setStart(true), delay);
		setTimeout(type, speed);
		console.log("inner: ", innerIndex);
		console.log(outerIndex);
	}, [innerIndex, outerIndex, newChildren, start]);

	return <div>{newChildren}</div>;
}

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
			<blockquote className="description">
				<Typewriter>
					"Hey ChatGPT, write an inspiring poem about a software engineering
					student looking to improve the world using software"
				</Typewriter>

				<i>
					<Typewriter delay={5000}>
						<hr />
						I am a student of code with dreams so bright,
						<br /> In a world of ones and zeroes, I see the light. <br />A
						future where technology brings change, <br />
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
						world and truly thrive.
						<footer className="blockquote-footer">
							<cite title="Source Title">ChatGPT</cite>
						</footer>
					</Typewriter>
				</i>
			</blockquote>
		</>
	);
}
