import React from "react";
import VisuallyHidden from "@reach/visually-hidden";
import { useFormik } from "formik";

function validator(values) {
  const errors = {};
  if (!values.name) {
    errors.email = "*Team name is required";
  }
  return errors;
}

export default function AddCard({ setShowAddCard, list, setList }) {
  const { handleSubmit, handleChange, values, errors } = useFormik({
    initialValues: {
      name: "",
    },
    validateOnBlur: false,
    validateOnChange: false,
    validate: validator,
    onSubmit: (values) => {
      handleClick();
    },
  });
  function handleClick() {
    fetch(`${process.env.REACT_APP_API_URL}/api/v1/cards`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        credentials: "include",
      },
      // body: JSON.stringify({ card: values }),
      body: JSON.stringify({
        card: { ...values, list: list._id, board: list.board },
      }),
    })
      .then((res) => res.json())
      .then(({ card }) => {
        console.log(card);
        setList({ ...list, card: [...list.card, card] });
      });
    // .catch((error) => context.setUser(null));
  }
  return (
    <form
      onSubmit={handleSubmit}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          handleSubmit();
        }
      }}
      className="bg-gray-300 w-full px-2 py-2 mr-2  z-5  mt-5  rounded-md"
    >
      <input
        type="text"
        name="name"
        value={values.name}
        onChange={handleChange}
        placeholder="Enter a title for this card"
        className="appearance-none block w-full h-16 px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
      ></input>
      <small className="pb-10 text-red-700">{errors.name}</small>

      <button
        onClick={() => setShowAddCard(false)}
        className="font-medium text-2xl"
      >
        <VisuallyHidden>Close</VisuallyHidden>
        <span aria-hidden>×</span>
      </button>
      <button
        type="submit"
        className="bg-green-500 hover:bg-green-600 px-2 py-2 rounded-md mt-2"
      >
        Add Card
      </button>
    </form>
  );
}
