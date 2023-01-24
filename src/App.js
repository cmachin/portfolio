import { useState } from "react";
import Fade from "react-bootstrap/Fade";
import "./App.css";
import Content from "./components/Content";
import Navigation from "./components/Navbar";

function App() {
	const [content, setContent] = useState("Home");
	const [open, setOpen] = useState(true);

	return (
		<>
			<Navigation content={content} setContent={setContent} />
			<Fade in={open}>
				<div>
					<Content
						content={content}
						setContent={setContent}
						open={open}
						setOpen={setOpen}
					/>
				</div>
			</Fade>
		</>
	);
}

export default App;
