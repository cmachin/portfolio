import { lazy, Suspense } from "react";
import Spinner from "react-bootstrap/Spinner";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Navigation from "./components/Navbar";
const Home = lazy(() => import("./components/Home"));
const Projects = lazy(() => import("./components/Projects"));
const Research = lazy(() => import("./components/Research"));
const Work = lazy(() => import("./components/Work"));

function App() {
	return (
		<>
			<Navigation />
			<Suspense fallback={<Spinner animation="border" className="loader" />}>
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route exact path="/portfolio" element={<Home />} />
					<Route exact path="/portfolio/projects" element={<Projects />} />
					<Route exact path="/portfolio/work" element={<Work />} />
					<Route exact path="/portfolio/research" element={<Research />} />
				</Routes>
			</Suspense>
			<Footer></Footer>
		</>
	);
}

export default App;
