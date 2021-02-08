import Group from "./components/group/Group.jsx";
import ColorPage from "./components/colorPage/ColorPage.jsx";
import { Switch, Route } from "react-router-dom";
import "./app.scss";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={Group} />
        <Route path="/color" component={ColorPage} />
      </Switch>
    </div>
  );
}

export default App;
