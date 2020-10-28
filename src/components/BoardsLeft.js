import React from "react";

import Dialog from "@reach/dialog";
import AddTeam from "./AddTeam";

export default function BoardsLeft({ teams, addNewTeam }) {
  const [showDialog, setShowDialog] = React.useState(false);
  const open = () => setShowDialog(true);
  const close = () => setShowDialog(false);
  return (
    <div className=" ml-48 w-2/12 mr-5">
      <div
        activeClassName="bg-gray-900"
        className="flex hover:bg-gray-300 py-1 px-2 opacity-20 rounded-md mt-2"
      >
        <img src="/images/trello.svg" className="w-5 mr-1 " alt="icon"></img>
        <p>Boards</p>
      </div>
      <div
        activeClassName="bg-gray-900"
        className="flex hover:bg-gray-300 py-1 px-2 opacity-20 rounded-md mt-2"
      >
        <img src="/images/template.svg" className="w-5 mr-1 " alt="icon"></img>
        <p>Templates</p>
      </div>
      <div
        activeClassName="bg-gray-900"
        className="flex hover:bg-gray-300 py-1 px-2 opacity-20 rounded-md mt-2"
      >
        <img src="/images/heartbeat.svg" className="w-5 mr-1 " alt="icon"></img>
        <p>Home</p>
      </div>
      <div
        activeClassName="bg-gray-900"
        className="flex justify-between text-gray-600 py-1 px-2 opacity-20  mt-2"
      >
        <p>TEAMS</p>

        <div>
          <button
            onClick={open}
            className="hover:bg-gray-300 rounded-md px-2 text-xl"
          >
            +
          </button>
          <Dialog isOpen={showDialog} onDismiss={close} className="team_modal">
            <AddTeam teams={teams} addNewTeam={addNewTeam} close={close} />
          </Dialog>
        </div>

        {/* <p className="hover:bg-gray-300 rounded-md px-2 text-xl">+</p> */}
      </div>
      {teams &&
        teams.map((team) => {
          return (
            <li key={team._id} className="list-none">
              <div
                activeClassName="bg-gray-900"
                className="flex hover:bg-gray-300 py-1 px-2 opacity-20 rounded-md mt-2"
              >
                <img
                  src="/images/users.svg"
                  className="w-5 mr-1 "
                  alt="icon"
                ></img>
                <p>{team.name}</p>
              </div>
            </li>
          );
        })}
    </div>
  );
}
