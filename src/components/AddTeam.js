import React, { useContext } from "react";
import VisuallyHidden from "@reach/visually-hidden";
import { useFormik } from "formik";
import TeamContext from "./TeamContext";

function validator(values) {
  const errors = {};
  if (!values.name) {
    errors.email = "*Team name is required";
  }
  return errors;
}

export default function AddTeam({ close }) {
  let context = useContext(TeamContext);
  const { handleSubmit, handleChange, values, errors } = useFormik({
    initialValues: {
      name: "",
      description: "",
    },
    validateOnBlur: false,
    validateOnChange: false,
    validate: validator,
    onSubmit: (values) => {
      handleClick();
    },
  });

  function handleClick() {
    fetch(process.env.REACT_APP_API_URL + "/api/v1/teams", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        credentials: "include",
      },
      body: JSON.stringify({ team: values }),
    })
      .then((res) => res.json())
      .then(({ team }) => {
        context.setTeams([...context.teams, team]);
        close();
      })
      .catch((error) => context.setUser(null));
  }

  return (
    <div className="bg-gray-400">
      <button onClick={close}>
        <VisuallyHidden>Close</VisuallyHidden>
        <span aria-hidden>×</span>
      </button>

      <div className="flex  ">
        <form
          onSubmit={handleSubmit}
          className=" w-8/12 px-2 pr-10 py-2 rounded-md "
        >
          <h1 className="font-medium  text-2xl">Let's Build a Team</h1>
          <p className="font-medium  text-xl">
            Boost your productivity by making it easier for everyone to access
            boards in one location.
          </p>
          <div className="mt-5 mb-2">
            <label
              htmlFor="name"
              className="block text-sm font-medium leading-5 text-xl mb-2  text-gray-700"
            >
              Team Name
            </label>
            <input
              type="text"
              name="name"
              value={values.name}
              onChange={handleChange}
              placeholder="Add Team name"
              className="appearance-none block  w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
            ></input>
            <small className="pb-10 text-gray-500">
              This is the name of your company, team or organization.
            </small>
            <small className="pb-10 text-red-700">{errors.name}</small>
          </div>

          <div className="mt-5 mb-2">
            <label
              htmlFor="type"
              className="block text-sm font-medium leading-5 text-xl mb-2 text-gray-700"
            >
              Team Type
            </label>
            <select
              name="visibility"
              className="block bg-gray-100  mt-2 w-full py-2 px-2 rounded-md"
            >
              <option value="Marketing">Marketing </option>
              <option value="Small Business">Small Business</option>
              <option value="Education">Education</option>
              <option value="Operations">Operations</option>
              <option value="Engineering IT">Engineering IT </option>
              <option value="Sales-CRM">Sales-CRM</option>
              <option value="Human Resources">Human Resources</option>
              <option value="Other">Other </option>
            </select>
          </div>
          <div className="mt-5 mb-2">
            <label
              htmlFor="name"
              className="block text-sm font-medium leading-5 text-xl mb-2 text-gray-700"
            >
              Team Description
            </label>
            <input
              type="text"
              name="description"
              value={values.description}
              onChange={handleChange}
              placeholder="Our Team Organize everything here"
              className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
            ></input>
            <small className="pb-10 text-gray-500">
              Get your members on board with a few words about your team.
            </small>
          </div>
          <button
            type="submit"
            className="block w-6/12 bg-green-500 hover:bg-green-600 mt-5 py-2 px-2 rounded-md"
          >
            Create Team
          </button>
        </form>
        <img
          src="https://a.trellocdn.com/prgb/dist./images/organization/empty-board.286f8fc83e01c93ed27e.svg"
          className="w-full"
          alt="icon"
        ></img>
      </div>
    </div>
  );
}
