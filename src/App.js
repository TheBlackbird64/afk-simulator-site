//import logo from './logo.svg';
import './App.css';
import './components/components.css'
import Navbar from "./components/navbar.js";
import Footer from "./components/footer.js";

function App() {
	let color = ["#6060FF", "#FF6060", "#60FF60"]

	return (
		<div className="App">
			<Navbar col={color}/>

			<main>

			</main>

			<Footer col={color} />
		</div>
	);
}

export default App;
