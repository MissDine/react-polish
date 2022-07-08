
import "./index.css"
import Navbar from './components/Navbar';
import Home from "./components/Home";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom" ;
import Create from "./components/Create";
import BlogDetails from "./components/BlogDetails";
// npx json-server --watch data/db.json --port 8000-to use the json server
function App() {
  return (
    <Router>
      <div className="App">
      <Navbar/>
      <Switch>
        <Route exact path = "/">
          <Home/>
        </Route>
        <Route exact path = "/create">
          <Create/>
        </Route>
        <Route exact path = "/blogs/:id">
          <BlogDetails/>
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
