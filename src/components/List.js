import React, { useState, useEffect } from "react";
import AddCard from "./AddCard";
import Card from "./Card";
import ListDropDown from "./ListDropDown";

export default function List({ singleList, board, setBoard }) {
  const [showAddCard, setShowAddCard] = useState(false);
  const [list, setList] = useState(null);
  const [listDropDown, setListDropDown] = useState(false);

  useEffect(() => {
    fetch(`/api/v1/lists/${singleList._id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        credentials: "include",
      },
    })
      .then((res) => res.json())
      .then(({ list }) => {
        setList(list);
      });
  }, []);
  // console.log(list);
  // console.log(board, "finding the board in the list component");
  return (
    <div className="mt-5 bg-gray-400 px-5 py-2 w-auto rounded-md mr-3">
      <div className="flex flex-col">
        <div className="flex justify-between">
          <h1 className="py-3">{list?.name}</h1>
          {!listDropDown ? (
            <button onClick={() => setListDropDown((prevState) => !prevState)}>
              <img
                src="/images/threedots.svg"
                className="w-5 mr-1 "
                alt="icon"
              ></img>
            </button>
          ) : (
            <ListDropDown
              setListDropDown={setListDropDown}
              list={list}
              setList={setList}
              board={board}
              setBoard={setBoard}
            />
          )}
        </div>
        <div>
          {list &&
            list.card &&
            list.card.map((singleCard) => {
              return (
                <Card singleCard={singleCard} list={list} setList={setList} />
              );
            })}
        </div>
        <div>
          {!showAddCard ? (
            <button
              onClick={() => setShowAddCard((prevState) => !prevState)}
              className="hover:bg-gray-300 py-2 px-2 pr-10 rounded-md "
            >
              + Add another card
            </button>
          ) : (
            <AddCard
              setShowAddCard={setShowAddCard}
              list={list}
              setList={setList}
            />
          )}
        </div>
      </div>
    </div>
  );
}
