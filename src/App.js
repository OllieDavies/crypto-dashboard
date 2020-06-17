import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CryptoListView from "./routes/CryptoListView";
import CryptoSingleView from "./routes/CryptoSingleView";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <CryptoListView />
          </Route>
          <Route path="/:id" children={<CryptoSingleView />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
