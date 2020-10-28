import React, { useState, useEffect } from "react";
import AddCard from "./AddCard";
import Card from "./Card";

export default function List({ singleList }) {
  const [showAddCard, setShowAddCard] = useState(false);
  const [list, setList] = useState(null);

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
        console.log(list);
        setList(list);
      });
  }, []);
  console.log(singleList);

  return (
    <div className="mt-5 bg-gray-400 px-5 py-2 w-2/12 rounded-md mr-3">
      <h1 className="py-3">{singleList.name}</h1>
      {list &&
        list.card &&
        list.card.map((singleCard) => {
          return (
            <Card singleCard={singleCard} />
            // <div>
            //   <button
            //     onClick={open}
            //     className="py-2 px-2 bg-gray-300 rounded-md border-b-2 border-gray-600 hover:bg-gray-500 "
            //   >
            //     {singleCard.name}
            //   </button>
            //   <Dialog
            //     isOpen={showDialog}
            //     onDismiss={close}
            //     className="cardModal"
            //   >
            //     <ShowCard close={close} card={singleCard} />
            //   </Dialog>
            // </div>
          );
        })}

      <div className=" mt-2">
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
  );
}
