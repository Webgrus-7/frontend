import Join from "./join";
import Join2 from "./join2";
import Join3 from "./join3";
import { BrowserRouter, Route, Switch } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/join" component={Join} />
          <Route exact path="/join2" component={Join2} />
          <Route exact path="/join3" component={Join3} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
