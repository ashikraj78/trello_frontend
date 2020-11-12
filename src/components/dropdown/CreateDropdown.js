import React, { useState } from "react";
import CreateBoard from "../CreateBoard";
import Dialog from "@reach/dialog";
import VisuallyHidden from "@reach/visually-hidden";

import AddTeam from "../AddTeam";
import AddBoard from "../AddBaord";
import TeamContext from "../TeamContext";
import BoardContext from "../BoardContext";
import { useContext } from "react";

export default function CreateDropdown() {
  const [showDialog, setShowDialog] = useState(false);
  const open = () => setShowDialog(true);
  const close = () => setShowDialog(false);
  const [showBoard, setShowBoard] = useState(false);
  const openBoard = () => setShowBoard(true);
  const closeBoard = () => setShowBoard(false);
  let context = useContext(TeamContext);
  let contextBoard = useContext(BoardContext);
  return (
    <div
      className="py-1 rounded-md bg-white shadow-xs"
      role="menu"
      aria-orientation="vertical"
      aria-labelledby="user-menu"
    >
      <h1 className="text-xl text-center border-b-4 ">Create</h1>

      <div>
        <button
          onClick={openBoard}
          className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"
          role="menuitem"
        >
          <p className="text-base text-black">Create Board</p>
          <small>
            A board is made up of cards ordered on lists. Use it to manage
            projects, track information, or organize anything.
          </small>
        </button>
        <Dialog isOpen={showBoard} onDismiss={closeBoard} className="modal">
          <button className="close-button" onClick={closeBoard}>
            <VisuallyHidden>Close</VisuallyHidden>
            <span aria-hidden>×</span>
          </button>
          <AddBoard teams={context.teams} close={closeBoard} />
        </Dialog>
      </div>

      <a
        href="#"
        className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"
        role="menuitem"
      >
        <p className="text-base text-black">Start with a template</p>
        <small>Get started faster with a board template.</small>
      </a>
      <div>
        <button
          onClick={open}
          className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"
          role="menuitem"
        >
          <p className="text-base text-black">Create Team</p>
          <small>
            A team is a group of boards and people. Use it to organize your
            company, side hustle, family, or friends.
          </small>
        </button>
        <Dialog isOpen={showDialog} onDismiss={close} className="team_modal">
          <AddTeam teams={context.teams} close={close} />
        </Dialog>
      </div>
      <a
        href="#"
        className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"
        role="menuitem"
      >
        <p className="text-base text-black">Create Business Team</p>
        <small>
          With Business Class your team has more security, administrative
          controls, and unlimited Power-Ups.
        </small>
      </a>
    </div>
  );
}
