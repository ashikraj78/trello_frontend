import React, { useState } from "react";
import VisuallyHidden from "@reach/visually-hidden";
import Dialog from "@reach/dialog";
import AddBoard from "./AddBaord";

export default function CreateBoard() {
  const [showDialog, setShowDialog] = useState(false);

  const open = () => setShowDialog(true);
  const close = () => setShowDialog(false);

  return (
    <Dialog isOpen={showDialog} onDismiss={close} className="modal">
      <button className="close-button" onClick={close}>
        <VisuallyHidden>Close</VisuallyHidden>
        <span aria-hidden>×</span>
      </button>
      <AddBoard />
    </Dialog>
  );
}
