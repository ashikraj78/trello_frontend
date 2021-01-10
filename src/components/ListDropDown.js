import React from "react";

export default function ListDropDown({
  setListDropDown,
  list,
  setList,
  board,
  setBoard,
}) {
  function handleDelete() {
    fetch(`${process.env.REACT_APP_API_URL}/api/v1/lists/${list._id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        credentials: "include",
        token: localStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .then((delteList) => {
        let index = board.list.findIndex((x) => {
          return x._id === list._id;
        });
        setListDropDown(false);
        setBoard({
          ...board,
          list: [...board.list.slice(0, index), ...board.list.slice(index + 1)],
        });
      });
  }

  return (
    <ul className=" bg-gray-300 px-2 py-2 rounded-md z-10">
      <li className="bg-gray-400 mb-1 px-1 py-1 rounded-md hover:bg-gray-500">
        Edit
      </li>

      <button
        onClick={handleDelete}
        className="bg-gray-400 mb-1 px-1 py-1 rounded-md hover:bg-gray-500"
      >
        Delete
      </button>

      <button
        onClick={() => setListDropDown(false)}
        className="bg-gray-400  px-1 py-1 rounded-md hover:bg-gray-500"
      >
        close
      </button>
    </ul>
  );
}
