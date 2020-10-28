import React from "react";
import VisuallyHidden from "@reach/visually-hidden";

export default function ShowCard({ close, card }) {
  return (
    <div className="bg-white w-6/12 px-4 py-2">
      <button onClick={close}>
        <VisuallyHidden>Close</VisuallyHidden>
        <span aria-hidden>×</span>
      </button>
      <section className="mb-6 flex">
        <img src="/images/tray.svg" className="w-6 mr-2" alt="icon"></img>
        <p className="font-medium  text-2xl">{card.name}</p>
      </section>
      <div className="flex">
        <div className="w-9/12">
          <section className="mb-6">
            <form>
              <label className="block  flex mb-4">
                <img
                  src="/images/fourlines.svg"
                  className="w-6 mr-2"
                  alt="icon"
                ></img>
                <h1 className="font-medium text-2xl"> Description</h1>
              </label>
              <textarea
                placeholder="Add a more detailed description..."
                className="block px-2 py-2 w-full border-gray-500 border-2 bg-gray-300 rounded-md"
              ></textarea>
              <button
                type="submit"
                className="bg-green-500 py-2 px-2  rounded-md mt-2"
              >
                Save
              </button>
            </form>
          </section>
          <section className="mb-6">
            <form>
              <label className="block  flex mb-4">
                <img
                  src="/images/dotlines.svg"
                  className="w-6 mr-2"
                  alt="icon"
                ></img>

                <p className="font-medium  text-2xl">Activity</p>
              </label>
              <textarea
                placeholder="Write a comment..."
                className="block px-2 py-2 w-full border-gray-500 border-2 bg-gray-300 rounded-md"
              ></textarea>
              <button
                type="submit"
                className="bg-green-500 py-2 px-2  rounded-md mt-2"
              >
                Save
              </button>
            </form>
          </section>
        </div>
        <div className="px-2 ">
          <h1>ADD TO CARD</h1>
          <div className="bg-gray-300 w-full px-2 py-2 rounded-md pr-24 mb-3 flex">
            <img src="/images/user.svg" className="w-4 mr-2" alt="icon"></img>
            <p>Members</p>
          </div>
          <div className="bg-gray-300 w-full px-2 py-2 rounded-md pr-24 mb-3 flex">
            <img src="/images/tag.svg" className="w-4 mr-2" alt="icon"></img>
            <p>Labels</p>
          </div>
          <div className="bg-gray-300 w-full px-2 py-2 rounded-md pr-24 mb-3 flex">
            <img
              src="/images/checklist.svg"
              className="w-4 mr-2"
              alt="icon"
            ></img>
            <p>Checklist </p>
          </div>
          <div className="bg-gray-300 w-full px-2 py-2 rounded-md pr-24 mb-3 flex">
            <img src="/images/clock.svg" className="w-4 mr-2" alt="icon"></img>
            <p>Due Date</p>
          </div>
          <div className="bg-gray-300 w-full px-2 py-2 rounded-md pr-24 mb-3 flex">
            <img
              src="/images/attachment.svg"
              className="w-4 mr-2"
              alt="icon"
            ></img>
            <p>Attachment</p>
          </div>
          <div className="bg-gray-300 w-full px-2 py-2 rounded-md pr-24 mb-3 flex">
            <img src="/images/tray.svg" className="w-4 mr-2" alt="icon"></img>
            <p>Cover</p>
          </div>
        </div>
      </div>
    </div>
  );
}
