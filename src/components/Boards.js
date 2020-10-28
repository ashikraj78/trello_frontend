import React, { useState, useEffect } from "react";

import Dialog from "@reach/dialog";
import VisuallyHidden from "@reach/visually-hidden";
import AddBoard from "./AddBaord";
import BoardsLeft from "./BoardsLeft";
import { NavLink } from "react-router-dom";
import CreateBoard from "./CreateBoard";

export default function Board() {
  const [showDialog, setShowDialog] = useState(false);
  const [teams, setTeams] = useState(null);
  const open = () => setShowDialog(true);
  const close = () => setShowDialog(false);

  useEffect(() => {
    fetch("/api/v1/teams", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        credentials: "include",
      },
    })
      .then((res) => res.json())
      .then(({ team }) => {
        // console.log(team);
        setTeams(team);
      });
  }, []);

  function addNewTeam(team) {
    return setTeams([...teams, team]);
  }

  return (
    <div className="flex mt-10">
      {/* left side navigation */}
      <BoardsLeft teams={teams} addNewTeam={addNewTeam} />

      {/* main  */}

      <main className="w-10/12 mr-24">
        {/* recently board */}
        <section className="mb-10">
          <div className="flex font-medium mb-5">
            <img src="/images/clock.svg" className="w-5 mr-3 " alt="icon"></img>
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
            <img src="/images/user.svg" className="w-5 mr-3 " alt="icon"></img>
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

        {teams &&
          teams.map((team) => {
            return (
              <li key={team._id} className="mb-10 list-none">
                <div className="flex justify-between items-center">
                  <div className="flex font-medium mb-5">
                    <img
                      src="/images/users.svg"
                      className="w-5 mr-3 "
                      alt="icon"
                    ></img>
                    <p>{team.name}</p>
                  </div>

                  {/* boards name */}
                  <div className="flex opacity-20">
                    <div
                      activeClassName="bg-gray-900"
                      className="flex bg-gray-300 hover:bg-gray-400 py-1 px-2 opacity-20 rounded-md ml-5 mt-2 mb-5"
                    >
                      <img
                        src="/images/trello.svg"
                        className="w-5 mr-1 "
                        alt="icon"
                      ></img>
                      <p>Boards</p>
                    </div>
                    <div
                      activeClassName="bg-gray-900"
                      className="flex bg-gray-300 hover:bg-gray-400 py-1 px-2 opacity-20 rounded-md ml-5 mt-2 mb-5"
                    >
                      <img
                        src="/images/user.svg"
                        className="w-5 mr-1 "
                        alt="icon"
                      ></img>
                      <p>Members(1)</p>
                    </div>
                    <div
                      activeClassName="bg-gray-900"
                      className="flex bg-gray-300 hover:bg-gray-400 py-1 px-2 opacity-20 rounded-md ml-5 mt-2 mb-5"
                    >
                      <img
                        src="/images/settings.svg"
                        className="w-5 mr-1 "
                        alt="icon"
                      ></img>
                      <p>Settings</p>
                    </div>
                    <div
                      activeClassName="bg-gray-900"
                      className="flex bg-gray-300 hover:bg-gray-400 py-1 px-2 opacity-20 rounded-md ml-5 mt-2 mb-5"
                    >
                      <img
                        src="/images/hand-bag.svg"
                        className="w-5 mr-1 "
                        alt="icon"
                      ></img>
                      <p>Upgrade</p>
                    </div>
                  </div>
                </div>
                <div className="flex">
                  {team.board &&
                    team.board.map((board) => {
                      console.log(team.board);
                      return (
                        <NavLink to={"/boards/" + board._id}>
                          <div className="bg-yellow-600 w-48 h-24 rounded-md px-2 py-2 text-white mr-5 hover:bg-yellow-700">
                            <p>{board.name}</p>
                          </div>
                        </NavLink>
                      );
                    })}

                  {/* <div className="bg-yellow-600 w-48 h-24 rounded-md px-2 py-2 text-white mr-5 hover:bg-yellow-700">
                    <p>what trello does</p>
                  </div> */}
                  <div>
                    <div className="flex">
                      <button
                        onClick={open}
                        className="bg-gray-300 w-48 h-24 rounded-md px-2 py-2  flex items-center justify-center text-black mr-5 hover:bg-gray-400"
                      >
                        create new board
                      </button>
                      <Dialog
                        isOpen={showDialog}
                        onDismiss={close}
                        className="modal"
                      >
                        <button className="close-button" onClick={close}>
                          <VisuallyHidden>Close</VisuallyHidden>
                          <span aria-hidden>×</span>
                        </button>
                        <AddBoard teams={teams} close={close} />
                      </Dialog>
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
      </main>
    </div>
  );
}
