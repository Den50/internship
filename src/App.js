import Header from "./componets/Header"
import Panel from "./componets/Panel"
import Todos from "./componets/Todos"
import Footer from "./componets/Footer"
import './App.css'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

function App() {
  return (
    <div className="App">
      <Header />
		<div className="container">
			<Panel />
			<Todos />
		</div>
		<Footer />
    </div>
  );
}

export default App
