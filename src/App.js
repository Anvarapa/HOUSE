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
import { Information } from "./view/pages/information/Information";




function App() {
  const [user, setUser] = useState(()=>JSON.parse(localStorage.getItem("user")))
  const addUser = (obj)=>{
    setUser(obj)
    localStorage.setItem("user", JSON.stringify(obj))
  }
  return (
      <Router>
        <div className="App forsale__relative">
          <Header addUser={addUser} user={user}/>
          <Switch>
            <PrivatePoute user= {user} path="/dashboard" Component={() =><div>Dashboard</div>}/>
            

            <Route exact path="/learnmore/:id">
              <LearnMore />
            </Route>

        
            <PublickRoute user= {user} path="/signin" Component={Signup}/>
            {/*<Route exact path="/signin">*/}
            {/*  </>*/}
            {/*</Route>*/}
          
            <Route exact path ="/onmap">
              <OnMap />
            </Route>
            
            <Route exact path="/information">
              <Information />
            </Route>
            <Route exact path="/">
              <ForSale />
            </Route>
          </Switch>
          <a className="whatsapp" href="https://api.whatsapp.com/send/?phone=%2B996702300913&text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5+%D1%8F+%D1%81+%D1%81%D0%B0%D0%B9%D1%82%D0%B0%2C+%D0%BC%D0%BE%D0%B3%D1%83+%D0%BB%D0%B8+%D0%BF%D0%BE%D0%BB%D1%83%D1%87%D0%B8%D1%82%D1%8C+%D0%BA%D0%BE%D0%BD%D1%81%D1%83%D0%BB%D1%8C%D1%82%D0%B0%D1%86%D0%B8%D1%8E+%3F&app_absent=0"> <img  src="/img/whatsapp.svg" alt="" style={{width:"60px"}}/></a>
        </div>
      </Router>
  );
}

export default App;
