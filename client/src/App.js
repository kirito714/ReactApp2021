import logo from "./logo.svg";
import "./App.css";
// import {BrowserRouter as Router, Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import Signupform from "./components/Signupform";


function App() {
  return (
    <div className="App">
      {/* <ApolloProvider> */}
      <Navbar />
      <Signupform />
         {/* <Route  exact path="/" component={}/>
        <Route  exact path="/" component={} /> */}
        {/* <Footer/> */}
      {/* <script */}
     
    {/* </ApolloProvider> */}
    </div>
  );
}

export default App;
