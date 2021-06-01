import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App(): JSX.Element {
  const [count, setCount] = useState<number>(0);

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/help">
          <p>Help</p>
        </Route>
        <Route path="/">
          <p>Home</p>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
