import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import { lazy } from "react";

// Lazy imports
const Home = lazy(() => import("./pages/Home"));
const Research = lazy(() => import("./pages/Research"));
const Projects = lazy(() => import("./pages/Projects"));
const Work = lazy(() => import("./pages/Work"));
const Certifications = lazy(() => import("./pages/Certifications"));

function App() {
	return (
		<Routes>
			<Route element={<Layout />}>
				<Route path="/" element={<Home />} />
				<Route path="/projects" element={<Projects />} />
				<Route path="/research" element={<Research />} />
				<Route path="/work" element={<Work />} />
				<Route path="/certifications" element={<Certifications />} />
			</Route>
		</Routes>
	);
}

export default App;
