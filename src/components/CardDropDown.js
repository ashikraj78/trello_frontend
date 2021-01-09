import React from "react";

export default function CardDropDown({
  setCardDorpdown,
  singleCard,
  list,
  setList,
}) {
  // console.log(singleCard);

  function handleDelete() {
    fetch(`${process.env.REACT_APP_API_URL}/api/v1/cards/${singleCard._id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        credentials: "include",
      },
    })
      .then((res) => res.json())
      .then((delteCard) => {
        let index = list.card.findIndex((x) => {
          return x._id === delteCard.card._id;
        });
        setCardDorpdown(false);
        setList({
          ...list,
          card: [...list.card.slice(0, index), ...list.card.slice(index + 1)],
        });
      });
  }

  return (
    <ul className=" bg-gray-300 px-2 py-2 rounded-md z-10">
      <li className="bg-gray-400 mb-1 px-1 py-1 rounded-md hover:bg-gray-500">
        Edit
      </li>
      <li className="bg-gray-400 mb-1 px-1 py-1 rounded-md hover:bg-gray-500">
        Change Member
      </li>
      <li className="bg-gray-400 mb-1 px-1 py-1 rounded-md hover:bg-gray-500">
        Move
      </li>
      <li className="bg-gray-400 mb-1 px-1 py-1 rounded-md hover:bg-gray-500">
        Copy
      </li>
      <button
        onClick={handleDelete}
        className="bg-gray-400 mb-1 px-1 py-1 rounded-md hover:bg-gray-500"
      >
        Delete
      </button>

      <button
        onClick={() => setCardDorpdown(false)}
        className="bg-gray-400  px-1 py-1 rounded-md hover:bg-gray-500"
      >
        close
      </button>
    </ul>
  );
}
