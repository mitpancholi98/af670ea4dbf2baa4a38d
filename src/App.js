import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import CountryInfo from "./components/CountryInfo";
import CountrySearch from "./components/CountrySearch";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={CountrySearch} />
        <Route path="/country" exact component={CountryInfo} />
      </Switch>
    </Router>
  );
};

export default App;
