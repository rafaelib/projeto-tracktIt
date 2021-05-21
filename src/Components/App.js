import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import Habits from "./Habits";
import Today from "./Today";
import History from "./History";
import UserContext from "../Components/contexts/UserContext";
import ProgressBar from "../Components/contexts/ProgressBar";

const App = () => {
  const [user, setUser] = useState(null);
  const [progressBar, setProgressBar] = useState(0);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <ProgressBar.Provider value={{ progressBar, setProgressBar }}>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact>
              <Login />
            </Route>
            <Route path="/cadastro" exact>
              <Register />
            </Route>
            <Route path="/habitos" exact>
              <Habits />
            </Route>
            <Route path="/hoje" exact>
              <Today />
            </Route>
            <Route path="/historico" exact>
              <History />
            </Route>
          </Switch>
        </BrowserRouter>
      </ProgressBar.Provider>
    </UserContext.Provider>
  );
};

export default App;
