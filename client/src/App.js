
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import Navbar from "./components/Navbar";
import Signup from "./pages/SignupPage";
// import Container from "./components/Container";
import Search from "./pages/SearchPage";

function App() {
  return (
    //  <ApolloProvider>
    <Router>
      <Navbar />
      {/* <Container /> */}
      {/* <Signupform /> */}
      <Route exact path="/Signup">
        <Signup />
      </Route>
      <Route exact path="/Search"> 
      <Search/> 
      </Route>
      {/* <script */}
    </Router>
    //  </ApolloProvider>
  );
}

export default App;
