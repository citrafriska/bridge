import "./App.css";
import Home from "./views/home";
import ApplyBeta from "./views/apply-beta";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/beta" component={ApplyBeta} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
