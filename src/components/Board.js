import React, { useEffect, useState } from "react";

import AddList from "./AddList";
import List from "./List";

import { useParams } from "react-router-dom";

export default function Board() {
  const [showAddList, setShowAddList] = useState(false);
  const [board, setBoard] = useState(null);

  const params = useParams();

  useEffect(() => {
    fetch(`/api/v1/boards/${params.id}`, {
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

  return (
    <div className="ml-8">
      {board && (
        <div className="flex mt-10">
          <div className="bg-gray-300 bg-opacity-15 px-2 py-2 rounded-md mr-2">
            <h1>Boards</h1>
          </div>
          <div className="bg-gray-300 bg-opacity-15 px-2 py-2 rounded-md mr-2 ">
            <h1>{board.name}</h1>
          </div>
          <div className="bg-gray-300 bg-opacity-15 px-2 py-2 rounded-md mr-2 ">
            <h1>{board.team.name}</h1>
          </div>
          <div className="bg-gray-300 bg-opacity-15 px-2 py-2 rounded-md mr-2 ">
            <h1>Team Visible</h1>
          </div>
        </div>
      )}

      {/* lists */}

      <div className="flex flex-wrap">
        {board &&
          board.list &&
          board.list.map((singleList) => {
            return <List singleList={singleList} />;
          })}

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
