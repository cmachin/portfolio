import { lazy, Suspense } from "react";
import Spinner from "react-bootstrap/Spinner";
import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
const Home = lazy(() => import("./components/Home"));
const Projects = lazy(() => import("./components/Projects"));
const Research = lazy(() => import("./components/Research"));
const Work = lazy(() => import("./components/Work"));

function App() {
	return (
		<HashRouter>
			<Navigation />
			<Suspense fallback={<Spinner animation="border" className="loader" />}>
				<Routes>
					<Route exact path="/" element={<Navigate to="/home" />} />
					<Route exact path="/home" element={<Home />} />
					<Route exact path="/projects" element={<Projects />} />
					<Route exact path="/work" element={<Work />} />
					<Route exact path="/research" element={<Research />} />
				</Routes>
			</Suspense>
			<Footer></Footer>
		</HashRouter>
	);
}

export default App;
