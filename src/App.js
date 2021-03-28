import UserCardviewContainer from "./components/UserCard/UserCardviewContainer";
import { BrowserRouter, Switch, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path={"/user/:username"}
            component={UserCardviewContainer}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
