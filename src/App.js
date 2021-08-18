import "./App.css";
import { Header } from "./view/components/header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ForSale } from "./view/pages/forSale/ForSale";
import LearnMore from "./view/pages/learnmore/LearnMore";
import { Signup } from "./view/components/signup/Signup";
import { OnMap } from "./view/pages/onMap/OnMap";
import  {PrivatePoute} from "./view/router/PrivateRoute";
import {useState} from "react";
import {PublickRoute} from "./view/router/PublickRoute";



function App() {
  const [user, setUser] = useState(()=>JSON.parse(localStorage.getItem("user")))
  const addUser = (obj)=>{
    console.log(obj)
    setUser(obj)
    localStorage.setItem("user", JSON.stringify(obj))
  }
  return (
      <Router>
        <div className="App">
          <Header addUser={addUser} user={user}/>
          <Switch>
            <PrivatePoute user= {user} path="/dashboard" Component={() =><div>Dashboard</div>}/>
            <Route exact path="/">
              <ForSale />
            </Route>

            <Route exact path="/learnmore/:id">
              <LearnMore />
            </Route>

            <PublickRoute user= {user} path="/signin" Component={Signup}/>
            {/*<Route exact path="/signin">*/}
            {/*  </>*/}
            {/*</Route>*/}
            <Route>
              <OnMap exact path ="/onmap"/>
            </Route>
          </Switch>
        </div>
      </Router>
  );
}

export default App;
