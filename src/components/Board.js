import React, { useEffect, useState } from "react";

import AddList from "./AddList";
import List from "./List";

import { useParams, useHistory } from "react-router-dom";
import { useFormik } from "formik";
import BaordContext from "./BoardContext";
import { useContext } from "react";

function validator(values) {
  const errors = {};
  if (!values.name) {
    errors.name = "*Board name is required";
  }
  return errors;
}

export default function Board() {
  const [showAddList, setShowAddList] = useState(false);
  // const [board, setBoard] = useState(null);
  const [nameForm, setNameForm] = useState(false);
  let history = useHistory();
  let context = useContext(BaordContext);
  let board = context.boards;
  let setBoard = context.setBoards;

  const params = useParams();
  const { handleSubmit, handleChange, values, errors } = useFormik({
    initialValues: {
      name: board && board.name,
    },
    validateOnBlur: false,
    validateOnChange: false,
    enableReinitialize: true,
    validate: validator,
    onSubmit: (values) => {
      handleClick();
    },
  });
  function handleClick() {
    fetch(`${process.env.REACT_APP_API_URL}/api/v1/boards/${params.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        credentials: "include",
      },
      body: JSON.stringify({ board: values }),
    })
      .then((res) => res.json())
      .then(({ board }) => {
        context.setBoards(board);
      });
  }

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/api/v1/boards/${params.id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        credentials: "include",
      },
    })
      .then((res) => res.json())
      .then(({ board }) => {
        setBoard(board);
      });
  }, []);

  function handleDelete() {
    fetch(`${process.env.REACT_APP_API_URL}/api/v1/boards/${params.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        credentials: "include",
      },
    })
      .then((res) => res.json())
      .then((delteBoard) => {
        return history.push("/boards");
      });
  }
  // console.log(boardName, "setting board name");
  return (
    <div className="ml-8">
      {board && (
        <div className="flex mt-10">
          <div className="bg-gray-300 bg-opacity-15 px-2 py-2 rounded-md mr-2">
            <h1>Boards</h1>
          </div>
          {!nameForm ? (
            <button
              onDoubleClick={() => setNameForm((prevState) => !prevState)}
            >
              <div className=" bg-opacity-15 px-2 py-2 rounded-md mr-2 font-bold text-xl">
                <h1>{board.name}</h1>
              </div>
            </button>
          ) : (
            <form
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSubmit();
                }
              }}
              className="w-2/12 mr-0"
            >
              <input
                type="text"
                name="name"
                value={values.name}
                onChange={handleChange}
                className="w-8/12 h-12"
              />
              <small className="pb-10 text-red-700">{errors.name}</small>
            </form>
          )}

          <div className="bg-gray-300 bg-opacity-15 px-2 py-2 rounded-md mr-2 ">
            <h1>{board.team.name}</h1>
          </div>
          <div className="bg-gray-300 bg-opacity-15 px-2 py-2 rounded-md mr-2 ">
            <h1>Team Visible</h1>
          </div>
          <button
            onClick={handleDelete}
            className="bg-gray-300 bg-opacity-15 px-2 py-2 rounded-md mr-2 flex  "
          >
            <img
              src="./images/settings.svg"
              className="w-5 mr-1 "
              alt="icon"
            ></img>
            <h1>Delete</h1>
          </button>
        </div>
      )}

      {/* lists */}

      <div className="flex flex-wrap">
        <div className="flex">
          {board &&
            board.list &&
            board.list.map((singleList) => {
              return (
                <List
                  singleList={singleList}
                  board={board}
                  setBoard={setBoard}
                />
              );
            })}
        </div>

        <div className=" w-2/12">
          {!showAddList ? (
            <button
              onClick={() => setShowAddList((prevState) => !prevState)}
              className="bg-gray-300 px-2 py-2 rounded-md mr-2  w-full  mt-5"
            >
              + Add another list
            </button>
          ) : (
            <AddList
              setShowAddList={setShowAddList}
              board={board}
              setBoard={setBoard}
            />
          )}
        </div>
      </div>
    </div>
  );
}
