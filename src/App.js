import React, { useState, useEffect } from "react";
import Home from "./components/Home";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import LogIn from "./components/Login";
import Signup from "./components/Signup";
import Boards from "./components/Boards";
import Board from "./components/Board";
import Header from "./components/Header";
import UserContext from "./components/UserContext";
import TeamContext from "./components/TeamContext";
import BoardContext from "./components/BoardContext";
import Team from "./components/Team";

function NotFound() {
  return <h2>Page Not found</h2>;
}

function Private() {
  return (
    <Switch>
      <Route path="/" exact>
        <Redirect to="/boards" />
      </Route>
      <Route path="/boards" exact>
        <Header />
        <Boards />
      </Route>
      <Route path="/boards/:id">
        <Header />
        <Board />
      </Route>
      <Route component={NotFound} />
    </Switch>
  );
}
function Public() {
  return (
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
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  let [user, setUser] = useState(null);
  let [teams, setTeams] = useState(null);
  let [boards, setBoards] = useState(null);
  console.log(boards, "this is the boards");

  useEffect(() => {
    // getting user
    fetch(process.env.REACT_APP_API_URL + "/api/v1/users/me")
      .then((res) => res.json())
      .then(({ user }) => {
        setUser(user);
      });
  }, []);

  return (
    <BrowserRouter basename="/trello_frontend">
      <UserContext.Provider value={{ user, setUser }}>
        <TeamContext.Provider value={{ teams, setTeams }}>
          <BoardContext.Provider value={{ boards, setBoards }}>
            {user ? <Private /> : <Public />}
          </BoardContext.Provider>
        </TeamContext.Provider>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
