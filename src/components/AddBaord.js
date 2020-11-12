import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useFormik } from "formik";
import { useContext } from "react";
import BoardContext from "../components/BoardContext";
import TeamContext from "./TeamContext";

function validator(values) {
  const errors = {};
  if (!values.name) {
    errors.email = "*Board name is required";
  }
  return errors;
}

export default function AddBoard({ teams, close }) {
  let context = useContext(BoardContext);
  let contextTeam = useContext(TeamContext);
  const history = useHistory();
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

  // function handleUpperChange(v) {
  //   console.log("called", v, values);
  //   handleChange(v);
  // }

  useEffect(() => {
    // fetch team information
  }, []);

  function handleClick() {
    fetch("/api/v1/boards", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        credentials: "include",
      },
      body: JSON.stringify({ board: values }),
    })
      .then((res) => res.json())
      .then(({ board }) => {
        let id = board._id;
        history.push(`/boards/${id}`);
        close();
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
      className="bg-gray-400 h-56 px-2 pr-10 py-2 rounded-md "
    >
      <input
        type="text"
        name="name"
        value={values.name}
        onChange={handleChange}
        placeholder="Add Board Title"
        className="appearance-none block px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
      ></input>

      {/* team  selection option */}
      <select
        name="team"
        value={values.team}
        onChange={handleChange}
        className="block mt-2 w-full py-1 rounded-md"
      >
        <option>select team name</option>
        {contextTeam.teams &&
          contextTeam.teams.map((team) => {
            return <option value={team._id}>{team.name}</option>;
          })}
      </select>

      <select name="visibility" className="block  mt-2 w-full py-1 rounded-md">
        <option value="private">Private</option>
        <option value="team">Team </option>
        <option value="public">Public</option>
      </select>
      <button
        type="submit"
        className="block bg-gray-500 hover:bg-gray-600 mt-2 py-1 px-1 rounded-md"
      >
        Create Board
      </button>
    </form>
  );
}
