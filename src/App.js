import { AnimatePresence } from "framer-motion";
import { lazy, Suspense } from "react";
import Spinner from "react-bootstrap/Spinner";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Animation from "./components/Animation";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";

// Lazy imports
const Home = lazy(() => import("./components/Home"));
const Projects = lazy(() => import("./components/Projects"));
const Research = lazy(() => import("./components/Research"));
const Work = lazy(() => import("./components/Work"));

function App() {
	const location = useLocation();

	return (
		<>
			<Navigation />
			<AnimatePresence>
				<Suspense
					fallback={
						<Animation>
							<Spinner animation="border" className="loader" />
						</Animation>
					}
				>
					<Routes location={location} key={location.pathname}>
						{/* <Route path="/" element={<Animation></Animation>}> */}
						<Route exact path="/" element={<Navigate to="/home" />} />
						<Route
							exact
							path="/home"
							element={
								<Animation>
									<Home />
								</Animation>
							}
						/>
						<Route
							exact
							path="/projects"
							element={
								<Animation>
									<Projects />
								</Animation>
							}
						/>
						<Route
							exact
							path="/work"
							element={
								<Animation>
									<Work />
								</Animation>
							}
						/>
						<Route
							exact
							path="/research"
							element={
								<Animation>
									<Research />
								</Animation>
							}
						/>
						{/* </Route> */}
					</Routes>
				</Suspense>
			</AnimatePresence>
			<Footer></Footer>
		</>
	);
}

export default App;
