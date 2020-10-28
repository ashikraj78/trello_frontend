import React, { useState } from "react";
import ShowCard from "./ShowCard";
import Dialog from "@reach/dialog";

export default function Card({ singleCard }) {
  const [showDialog, setShowDialog] = useState(false);

  const open = () => setShowDialog(true);
  const close = () => setShowDialog(false);
  return (
    <div>
      <button
        onClick={open}
        className="py-2 px-2 bg-gray-300 rounded-md border-b-2 border-gray-600 hover:bg-gray-500 "
      >
        {singleCard.name}
      </button>
      <Dialog isOpen={showDialog} onDismiss={close} className="cardModal">
        <ShowCard close={close} card={singleCard} />
      </Dialog>
    </div>
  );
}
