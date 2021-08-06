import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Signup from "./pages/SignupPage";
// import Container from "./components/Container";
import Search from "./pages/SearchPage";
import HomePage from "./pages/Home";
import Login from "./pages/Login";
import { setContext } from "@apollo/client/link/context";

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: "/graphql",
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("id_token");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Navbar />

        <Route exact path="/">
          <HomePage />
        </Route>

        {/* <  /> */}
        {/* <Signupform /> */}

        <Route exact path="/Signup">
          <Signup />
        </Route>
        <Route exact path="/Login">
          <Login/>
        </Route>

        {/* <Route exact path="/Search">
        {" "}
        <Signup />
      </Route> */}
        {/*<Route  exact path="/" component={} /> */}
        <Footer />
        {/* <script */}
      </Router>
    </ApolloProvider>
  );
}

export default App;
