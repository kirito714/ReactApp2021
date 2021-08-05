import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Signupform from "./components/Signupform";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Signupform />
      <header className="App-header"></header>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
    </div>
  );
}

export default App;
