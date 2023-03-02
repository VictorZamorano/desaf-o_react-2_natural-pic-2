// CSS
import "./styles.css";

// Components
import Navbar from "./components/Navbar";

//Context
import PhotosContextProvider from "./context/UseContext";

// Hooks
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Views
import Home from "./views/Home";
import Favoritos from "./views/Favoritos";

export default function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<PhotosContextProvider>
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/favoritos" element={<Favoritos />} />
					</Routes>
				</PhotosContextProvider>
			</BrowserRouter>
		</div>
	);
}
