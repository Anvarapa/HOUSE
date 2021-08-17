import "./App.css";
import { Header } from "./view/components/header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ForSale } from "./view/pages/forSale/ForSale";
import { LearnMore } from "./view/pages/learnmore/LearnMore";
import { Signup } from "./view/components/signup/Signup";
import {Information} from "./view/pages/information/Information";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/">
            <ForSale />
          </Route>
          <Route exact path="/learnmore">
            <LearnMore />
          </Route>
          <Route exact path="/signin">
            <Signup />
          </Route>
          <Route exact path="/information">
            <Information/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
