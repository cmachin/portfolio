import Navigation from "./Navigation";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import { Spinner } from "react-bootstrap";

export default function Layout() {
	return (
		<>
			<Navigation />
			<Suspense fallback={<Spinner animation="border" role="status" />}>
				<div className="content">
					<Outlet />
				</div>
			</Suspense>
			<Footer />
		</>
	);
}
