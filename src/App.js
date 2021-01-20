import { ThemeProvider } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import CountryInfo from "./components/CountryInfo";
import CountrySearch from "./components/CountrySearch";
import Navbar from "./components/Navbar";
import theme from "./Theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={CountrySearch} />
          <Route path="/country" exact component={CountryInfo} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default App;
