import "./App.css";
import { Header } from "./view/components/header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ForSale } from "./view/pages/forSale/ForSale";
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <ForSale/>
      </div>
    </Router>
  );
}

export default App;
