import "./App.css";
import { Header } from "./view/components/header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Router>
          
        </Router>
      </div>
    </Router>
  );
}

export default App;
