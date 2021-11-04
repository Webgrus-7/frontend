import Feed1 from "./feed_1";
import Feed2 from "./feed_2";
import Feed3 from "./feed_3";
import { BrowserRouter, Route, Switch } from "react-router-dom"; 
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/feed1" component={Feed1} />
          <Route exact path="/feed2" component={Feed2} />
          <Route exact path="/feed3" component={Feed3} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;