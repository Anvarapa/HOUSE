import "./App.css";
import { Header } from "./view/components/header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ForSale } from "./view/pages/forSale/ForSale";
import LearnMore from "./view/pages/learnmore/LearnMore";
import { Signup } from "./view/components/signup/Signup";
import { OnMap } from "./view/pages/onMap/OnMap";
import  {PrivatePoute} from "./view/router/PrivateRoute";



function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <PrivatePoute path="/dashboard" Component={() =><div>Dashboard</div>}/>
          <Route exact path="/">
            <ForSale />
          </Route>

          <Route exact path="/learnmore/:id">
            <LearnMore />
          </Route>
          <Route exact path="/signin">
            <Signup/>
          </Route>
          <Route>
            <OnMap exact path ="/onmap"/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
