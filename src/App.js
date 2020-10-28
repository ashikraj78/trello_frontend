import React, { useState, useEffect } from "react";
import Home from "./components/Home";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LogIn from "./components/Login";
import Signup from "./components/Signup";
import Boards from "./components/Boards";
import Board from "./components/Board";
import Header from "./components/Header";
import UserContext from "./components/UserContext";

function App() {
  let [user, setUser] = useState(null);
  useEffect(() => {
    fetch("/api/v1/users/me")
      .then((res) => res.json())
      .then(({ user }) => setUser(user));
  }, []);

  return (
    <BrowserRouter>
      <UserContext.Provider value={{ user, setUser }}>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/login" exact>
            <LogIn />
          </Route>
          <Route path="/signup" exact>
            <Signup />
          </Route>
          <Route path="/boards" exact>
            <Header />
            <Boards />
          </Route>
          <Route path="/boards/:id">
            <Header />
            <Board />
          </Route>
        </Switch>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
