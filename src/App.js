import "./App.css";
import { Header } from "./view/components/header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ForSale } from "./view/pages/forSale/ForSale";
import { LearnMore } from "./view/pages/learnmore/LearnMore";
import { Signup } from "./view/components/signup/Signup";
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
            <Signup/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
