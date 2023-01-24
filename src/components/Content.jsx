import { useEffect, useState } from "react";
import Home from "./Home";
import Projects from "./Projects";
import Research from "./Research";
import Work from "./Work";

export default function Content(props) {
	const [render, setRender] = useState(
		<Home content={props.content} setContent={props.setContent} />
	);

	useEffect(() => {
		props.setOpen(false);
		setTimeout(function () {
			if (props.content === "home") {
				setRender(
					<Home content={props.content} setContent={props.setContent} />
				);
			}
			if (props.content === "projects") {
				setRender(<Projects />);
			}
			if (props.content === "work") {
				setRender(<Work />);
			}
			if (props.content === "research") {
				setRender(<Research />);
			}
			props.setOpen(true);
		}, 100);
	}, [props.content]);

	return <>{render}</>;
}
