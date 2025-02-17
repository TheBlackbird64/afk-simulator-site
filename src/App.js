import './App.css';
import './pages/home.css';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/home.js";

function App() {

	// Choix de la couleur du site
	const cleStorageCol = "col";

	const colors = ["red", "green", "blue"];
	const colStocke = localStorage.getItem(cleStorageCol);
	let colSite = colStocke;
	console.log(colStocke);
	
	while (colSite === colStocke) {
		colSite = colors[Math.floor(Math.random() * colors.length)];
	}
    
	localStorage.setItem(cleStorageCol, colSite);

	// App
	return (
		<Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/tutorial" element={<Home />} />
                <Route path="*" element={<Home />} /> {/* Page 404 */}
            </Routes>
        </Router>
	);
}

export default App;
