import { lazy, Suspense } from "react";
import Spinner from "react-bootstrap/Spinner";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./App.css";
import Footer from "./components/Footer";
import Navigation from "./components/Navbar";
const Home = lazy(() => import("./components/Home"));
const Projects = lazy(() => import("./components/Projects"));
const Research = lazy(() => import("./components/Research"));
const Work = lazy(() => import("./components/Work"));

function App() {
	const location = useLocation();

	return (
		<>
			<Navigation />
			<TransitionGroup component={null}>
				<CSSTransition key={location.key} classNames="fade" timeout={300}>
					<Suspense
						fallback={<Spinner animation="border" className="loader" />}
					>
						<Routes>
							<Route
								exact
								path="/*"
								element={<Navigate to="/portfolio/home" />}
							/>
							<Route
								exact
								path="/portfolio"
								element={<Navigate to="/portfolio/home" />}
							/>
							<Route exact path="/portfolio/home" element={<Home />} />
							<Route exact path="/portfolio/projects" element={<Projects />} />
							<Route exact path="/portfolio/work" element={<Work />} />
							<Route exact path="/portfolio/research" element={<Research />} />
						</Routes>
					</Suspense>
				</CSSTransition>
			</TransitionGroup>
			<Footer></Footer>
		</>
	);
}

export default App;
