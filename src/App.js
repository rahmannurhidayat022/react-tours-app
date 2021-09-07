import "./App.css";
import Tours from "./components/Tours";
const URL = "https://course-api.com/react-tours-project";

function App() {
	return (
		<div className="App relative bg-blue-200 py-8">
			<Tours url={URL} />
		</div>
	);
}

export default App;
