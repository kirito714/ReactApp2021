import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import Navbar from "./components/Navbar";
import Signup from "./pages/SignupPage";
import Container from "./components/Container";

function App() {
  return (
    //  <ApolloProvider>
    <Router>
      <Navbar />
      <Container />
      {/* <Signupform /> */}
      <Route exact path="/Signup">
        <Signup />
      </Route>
      {/*<Route  exact path="/" component={} /> */}
      {/* <Footer/> */}
      {/* <script */}
    </Router>
    //  </ApolloProvider>
  );
}

export default App;
