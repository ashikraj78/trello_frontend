import React, { useState, useEffect } from "react";

import BoardsLeft from "./BoardsLeft";
import CreateBoard from "./CreateBoard";
import Team from "./Team";
import TeamContext from "./TeamContext";
import { useContext } from "react";

export default function Boards() {
  const [showDialog, setShowDialog] = useState(false);
  const open = () => setShowDialog(true);
  const close = () => setShowDialog(false);
  const context = useContext(TeamContext);

  useEffect(() => {
    fetch(process.env.REACT_APP_API_URL + "/api/v1/teams", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        credentials: "include",
      },
    })
      .then((res) => res.json())
      .then(({ team }) => {
        context.setTeams(team);
        // setTeams(team);
      });
  }, []);

  function addNewTeam(team) {
    return context.setTeams([...context.teams, team]);
  }

  return (
    <div className="flex mt-10">
      {/* left side navigation */}
      <BoardsLeft teams={context.teams} />

      {/* main  */}

      <main className="w-10/12 mr-24">
        {/* recently board */}
        <section className="mb-10">
          <div className="flex font-medium mb-5">
            <img
              src="./images/clock.svg"
              className="w-5 mr-3 "
              alt="icon"
            ></img>
            <p>Recently Viewed</p>
          </div>
          <div className="flex">
            <div className="bg-yellow-600 w-48 h-24 rounded-md px-2 py-2 text-white mr-5 hover:bg-yellow-700">
              <p>hello world</p>
            </div>
            <div className="bg-yellow-600 w-48 h-24 rounded-md px-2 py-2 text-white mr-5 hover:bg-yellow-700">
              <p>what to do in the detail coding</p>
            </div>
          </div>
        </section>

        {/* personal board */}
        <section className="mb-10">
          <div className="flex font-medium mb-5">
            <img src="./images/user.svg" className="w-5 mr-3 " alt="icon"></img>
            <p>Personal Boards</p>
          </div>
          <div className="flex">
            <button
              onClick={open}
              className="bg-gray-300 w-48 h-24 rounded-md px-2 py-2  flex items-center justify-center text-black mr-5 hover:bg-gray-400"
            >
              create new board
            </button>
            <CreateBoard />
          </div>
        </section>

        {/* team board */}

        {context.teams &&
          context.teams.map((team) => {
            return <Team team={team} />;
          })}
      </main>
    </div>
  );
}
