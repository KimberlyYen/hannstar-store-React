import './App.css';
import Nav from './components/Nav';
import Carousel from './components/Carousel';
import ChartTopper from './components/ChartTopper';

function App() {
	return (
		<div className="container p-6 mx-auto">
			<Nav />
			<Carousel />
			<ChartTopper />
		</div>
	);
}

export default App;
