import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Signup from "./pages/SignupPage";
import HomePage from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/ProfilePage";
import SearchPage from "./pages/SearchPage";
import SearchArtist from "./pages/SearchArtist";
import SearchEvent from "./pages/SearchEvent";
import { setContext } from "@apollo/client/link/context";

import Auth from "./utils/auth";

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

        <Route exact path="/Signup">
          <Signup />
        </Route>

        <Route exact path="/Login">
          <Login />
        </Route>

        <Route
          exact
          path="/Profile"
          render={() =>
            Auth.loggedIn() ? <Profile /> : <Redirect to="/Login" />
          }
        />
        <Route
          exact
          path="/SearchPage"
          render={() =>
            Auth.loggedIn() ? <SearchPage /> : <Redirect to="/Login" />
          }
        />
        <Route
          exact
          path="/SearchArtist"
          render={() =>
            Auth.loggedIn() ? <SearchArtist /> : <Redirect to="/Login" />
          }
        />
        <Route
          exact
          path="/SearchEvent"
          render={() =>
            Auth.loggedIn() ? <SearchEvent /> : <Redirect to="/Login" />
          }
        />

        <Footer />
      </Router>
    </ApolloProvider>
  );
}

export default App;
