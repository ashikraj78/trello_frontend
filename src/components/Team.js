import React, { useState } from "react";
import VisuallyHidden from "@reach/visually-hidden";
import { NavLink, useHistory } from "react-router-dom";
import AddBoard from "./AddBaord";
import Dialog from "@reach/dialog";

export default function Team({ team, teams }) {
  const [showDialog, setShowDialog] = useState(false);

  const open = () => setShowDialog(true);
  const close = () => setShowDialog(false);
  let history = useHistory();

  function handleDelete() {
    fetch(`/api/v1/teams/${team._id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        credentials: "include",
      },
    })
      .then((res) => res.json())
      .then((delteTeam) => {
        return history.push("/boards");
      });
  }

  return (
    <li key={team._id} className="mb-10 list-none">
      <div className="flex justify-between items-center">
        <div className="flex font-medium mb-5">
          <img src="/images/users.svg" className="w-5 mr-3 " alt="icon"></img>
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
            <img src="/images/user.svg" className="w-5 mr-1 " alt="icon"></img>
            <p>Members(1)</p>
          </div>
          <button
            onClick={handleDelete}
            activeClassName="bg-gray-900"
            className="flex bg-gray-300 hover:bg-gray-400 py-1 px-2 opacity-20 rounded-md ml-5 mt-2 mb-5"
          >
            <img
              src="/images/settings.svg"
              className="w-5 mr-1 "
              alt="icon"
            ></img>
            <p>Delete</p>
          </button>
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
            return (
              <NavLink to={"/boards/" + board._id}>
                <div className="bg-yellow-600 w-48 h-24 rounded-md px-2 py-2 text-white mr-5 hover:bg-yellow-700">
                  <p>{board.name}</p>
                </div>
              </NavLink>
            );
          })}

        <div>
          <div className="flex">
            <button
              onClick={open}
              className="bg-gray-300 w-48 h-24 rounded-md px-2 py-2  flex items-center justify-center text-black mr-5 hover:bg-gray-400"
            >
              create new board
            </button>
            <Dialog isOpen={showDialog} onDismiss={close} className="modal">
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
}
