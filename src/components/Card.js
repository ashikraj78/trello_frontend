import React, { useState } from "react";
import ShowCard from "./ShowCard";
import Dialog from "@reach/dialog";
import CardDropdown from "./CardDropDown";

export default function Card({ singleCard, list, setList }) {
  const [showDialog, setShowDialog] = useState(false);
  const [cardDropdown, setCardDorpdown] = useState(false);
  // const [showCardDialog, setShowCardDialog] = useState(false);

  const open = () => setShowDialog(true);
  const close = () => setShowDialog(false);
  return (
    <div>
      <div className="flex w-full justify-between ">
        <button className="h-10  bg-gray-300 mb-2 flex w-full justify-between items-center rounded-md border-b-2 border-gray-600 hover:bg-gray-500">
          <p onClick={open} className="w-10/12 relative">
            {singleCard.name}
          </p>
          {!cardDropdown ? (
            <button onClick={() => setCardDorpdown((prevState) => !prevState)}>
              <img
                src="/images/settings.svg"
                className="w-5 mr-1 "
                alt="icon"
              ></img>
            </button>
          ) : (
            <CardDropdown
              setCardDorpdown={setCardDorpdown}
              singleCard={singleCard}
              list={list}
              setList={setList}
            />
          )}
        </button>

        <Dialog isOpen={showDialog} onDismiss={close} className="cardModal">
          <ShowCard close={close} card={singleCard} />
        </Dialog>
      </div>
    </div>
  );
}
