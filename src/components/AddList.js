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

export default function AddList({ setShowAddList, board, setBoard }) {
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
    fetch(`/api/v1/lists`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        credentials: "include",
      },
      body: JSON.stringify({ list: { ...values, board: board._id } }),
    })
      .then((res) => res.json())
      .then(({ list }) => {
        setBoard({ ...board, list: [...board.list, list] });
      });
    // .catch((error) => context.setUser(null));
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gray-300 w-full px-2 py-2 mr-2  z-5  mt-5  rounded-md"
    >
      <input
        type="text"
        name="name"
        value={values.name}
        onChange={handleChange}
        placeholder="Enter list title"
        class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
      ></input>
      <small className="pb-10 text-red-700">{errors.name}</small>

      <button
        onClick={() => setShowAddList(false)}
        className="font-medium text-2xl"
      >
        <VisuallyHidden>Close</VisuallyHidden>
        <span aria-hidden>×</span>
      </button>
      <button
        type="submmit"
        className="bg-gray-300 hover:bg-gray-400 px-2 py-2 rounded-md mt-2"
      >
        Add List
      </button>
    </form>
  );
}
