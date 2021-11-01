import logo from "./logo.svg";
import BackgroundSVG from "./img/imgbg.js";
import "./App.css";
import "./style/container.css";
import "./style/content.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Content from "./components/Content";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import FormPage from './components/FormPage';
import { AddUser } from "./screens";
function App() {
/*   const svgString = encodeURIComponent(renderToStaticMarkup(<BackgroundSVG />));
  console.log();
  let images = (folder) => {
    let arr = [];
    for (let i = 1; i <= 24; i += 2) {
      arr.push(`${folder}/_ (${i}).png`);
    }
    return arr;
  }; */
  return (
    <Router>
        <Switch>
          <Route exact path="/">
            <Content />
          </Route>
    <Route exact path="/AddUser">
    <AddUser />
    </Route>
        </Switch>
        </Router>
  );
}

export default App;
