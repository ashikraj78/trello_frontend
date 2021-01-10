import React, { useState, useRef, useContext } from "react";
import { NavLink } from "react-router-dom";
import useOnClickOutside from "../hooks/useOutsideClick";
import UserDropdown from "./dropdown/UserDropdown";
import CreateDropdown from "./dropdown/CreateDropdown";

export default function Header() {
  let [userDropdownActive, setUserDropdownActive] = useState(false);
  let [createDropdownActive, setCreateDropdownActive] = useState(false);
  const ref = useRef();
  useOnClickOutside(ref, () => setUserDropdownActive(false));
  useOnClickOutside(ref, () => setCreateDropdownActive(false));

  return (
    <nav className="bg-blue-600">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8  ">
        <div className="relative flex items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden"></div>
          <div className="flex-1 flex items-center justify-between">
            <div className=" flex items-center">
              <NavLink className="bg-blue-300 py-2 px-2 rounded-md" to="/">
                <img src="./images/menu.svg" className="w-5" alt="icon"></img>
              </NavLink>
              <NavLink
                className="ml-1 bg-blue-300 py-2 px-2 rounded-md"
                to="/boards"
              >
                <img src="./images/home.svg" className="w-5" alt="home"></img>
              </NavLink>

              <NavLink
                className="bg-blue-300 py-1 px-2 rounded-md ml-1 flex"
                to="/boards"
              >
                <img
                  src="./images/trello.svg"
                  className="w-5"
                  alt="board"
                ></img>
                <p className="text-white ml-1 font-medium font-2xl">Boards</p>
              </NavLink>

              <input
                className="bg-blue-300 ml-1 px-1 py-1 rounded-md"
                placeholder="search"
              ></input>
            </div>

            {/* trello logo */}
            <div className="opacity-20 w-20">
              <NavLink to="/boards" className="flex">
                <svg
                  className="d-block"
                  width="130"
                  height="40"
                  viewBox="0 0 885 272"
                  alt="Trello"
                >
                  <g fill="#fff" fillRule="evenodd">
                    <path d="M723.294 178.59c-12.77 5.203-22.85 23.18-38.176 33.4-.95.632-1.9.95-2.534.95-1.267 0-2.85-1.268-2.85-6.97 0-19.642 6.335-29.146 11.72-43.085 18.692-48.47 50.688-89.97 79.2-135.274 2.218-3.484 3.485-7.285 3.485-11.404 0-3.484-1.268-6.336-2.852-9.82C770.02 3.534 764.318 1 757.982 1c-3.484 0-6.652.317-10.77.317-14.89 0-18.058 21.86-21.543 27.56-23.76 40.235-51.006 89.973-64.945 125.137-3.057 7.883-6.36 15.767-8.868 23.857-13.775 3.99-24.095 23.358-40.236 34.12-.95.632-1.9.95-2.534.95-1.267 0-2.85-1.268-2.85-6.97 0-19.642 6.335-29.146 11.72-43.085 18.692-48.47 50.69-89.97 79.2-135.274 2.218-3.484 3.486-7.285 3.486-11.404 0-3.484-1.268-6.336-2.852-9.82C696.523 3.534 690.82 1 684.485 1c-3.485 0-6.653.317-10.77.317-14.89 0-18.06 21.86-21.544 27.56-23.76 40.235-51.004 89.973-64.943 125.137-1.108 2.858-2.248 5.716-3.372 8.584-.346.185-.7.386-1.063.604-16.157 9.504-29.78 26.294-49.42 37.7-3.802 2.216-15.524 10.453-25.028 10.453-2.218 0-4.118-.633-6.02-1.584-2.85-1.266-5.702-7.285-5.702-9.186 0-1.584.317-1.9 3.485-3.802 27.88-16.79 50.688-40.867 70.33-64.944 7.286-8.87 16.79-26.294 16.79-38.966 0-8.237-2.85-17.74-12.672-21.226-6.97-2.534-14.89-3.8-21.225-3.8-16.79 0-29.146 7.602-36.116 14.888-7.095 7.575-13.958 15.353-20.335 23.405-6.663-5.753-16.06-8.2-24.968-8.2-10.454 0-30.096 12.99-40.234 20.593-1.584 1.267-2.534 1.9-3.168 1.9-.316 0-.633-.316-.633-.95 0-.317.633-3.168.633-8.237 0-4.435-.95-10.137-5.068-17.107-.95-1.585-6.653-5.07-13.623-5.07-8.554 0-16.474 4.12-16.474 8.554 0 3.168 2.85 4.435 2.85 7.286 0 1.584-1.266 8.87-3.167 15.84-5.387 20.276-12.04 40.234-19.01 60.192-3.8 11.088-16.473 20.91-16.473 32.948 0 3.8 2.535 8.87 6.02 12.672 5.702 6.336 9.187 8.553 14.255 8.553 2.218 0 4.752-.633 6.97-2.534 4.752-4.118 7.286-8.236 8.554-13.938 8.236-37.383 31.996-62.727 58.29-79.517 8.87-5.703 20.91-11.722 22.494-11.722 1.624 0 4.164.75 6.724 1.48-7.35 11.99-13.306 24.632-17.18 38.12-1.266 4.435-1.9 8.554-1.9 12.99 0 7.285 1.584 14.89 4.12 22.175 3.484 10.138 9.186 19.008 17.106 23.126 14.573 7.604 25.027 11.722 34.53 11.722 5.387 0 9.505-.95 13.94-3.485 20.823-11.78 33.59-20.718 42.807-28.656.253 8.05 1.84 12.508 7.565 18.52 5.702 6.02 14.572 11.404 26.294 13.94 1.9.316 3.802.632 5.702.632 13.41 0 26.318-10.9 36.27-21.706 1.152 2.358 2.827 4.61 5.23 7.134 5.704 6.02 14.574 11.404 26.296 13.94 1.9.316 3.8.632 5.702.632 15.71 0 30.727-14.957 41.114-27.2 3.462 7.162 13.137 14.24 24.78 19.914 3.168 1.584 6.97 2.534 10.455 2.534 13.622 0 23.443-11.088 31.046-19.324 19.643-21.543 30.414-48.154 38.65-81.735.634-2.534 1.585-3.485 2.852-3.485 3.168 0 7.286 0 11.722-.633 8.553-1.267 15.206-4.12 23.126-5.386 4.752-.95 4.118-2.533 8.554-4.117 3.168-1.267 5.702-2.535 5.702-5.703 0-5.385-9.82-11.088-24.71-11.088-11.722 0-18.692.95-23.444.95-7.286 0-9.187-2.217-13.94-14.572 0 0 4.753 12.355 0 0-.95-2.534-1.9-3.802-4.75-6.336-6.654-5.702-14.89-7.603-21.543-7.603-15.84 0-29.464 16.158-38.968 29.78-2.217 3.168-5.385 5.702-7.603 9.187-13.05 19.575-25.545 41.65-27.086 65.443zM318.264 70.696c7.92 0 12.355-.634 13.306-.634.95 0 1.584.317 1.584 1.268 0 .633-.317 1.584-2.535 6.336-19.326 41.5-32.63 83.635-44.353 130.204-.317 1.268-1.267 6.02-1.267 10.772 0 4.435 1.267 9.187 5.702 11.72 8.554 5.07 15.524 7.288 20.276 7.288 6.97 0 10.454-4.436 10.454-11.722 0-6.336.317-12.99 1.267-18.058 8.87-46.57 22.175-83 42.767-121.017 9.82-18.058 11.088-19.008 11.088-20.592 0-.633-.317-1.583-.95-2.534 12.672-2.85 27.878-4.752 41.817-4.752 1.584 0 7.92 2.218 8.87 3.168 2.218 2.218 4.436 4.436 8.238 4.436 3.168 0 8.553-2.218 10.454-3.485 4.435-3.168 6.653-6.653 6.653-12.355 0-5.386-19.96-18.692-33.898-18.692-17.108 0-32.63 2.218-47.204 5.07-6.336 1.266-29.146 4.75-45.62 4.75-15.84 0-14.89-2.216-21.542-2.216-3.8 0-5.702 1.9-7.286 3.484-1.584 1.584-2.534 7.92-2.534 13.623 0 2.85 0 5.07 1.584 6.97 4.752 5.702 13.94 6.97 23.126 6.97 0 0-9.187 0 0 0zm234.75 25.66c0 2.852-.952 4.753-4.753 10.772-3.8 6.02-2.217 6.02-6.97 12.355-9.186 12.355-20.59 24.71-35.48 38.333-4.12 3.802-4.752 3.802-5.386 3.802-.317 0-.95-.317-.95-.95 0-.95.316-2.218 3.484-8.87 9.82-20.593 21.86-34.216 35.165-47.52 7.287-7.288 11.722-9.822 13.306-9.822.95 0 1.583.317 1.583 1.9 0 0 0-1.583 0 0zm243.618 8.238c.317 0 .634.316.95.95.317.95.95 1.9 2.535 3.168 1.267.95 1.267 5.386 1.267 8.87 0 30.73-17.424 56.074-34.53 81.735-3.803 5.702-6.02 6.653-7.92 6.653-1.585 0-4.12-4.12-5.07-6.653-1.267-3.485-1.584-7.603-1.584-9.187 0-24.71 23.443-61.46 38.966-81.735 2.535-3.485 4.436-3.8 5.386-3.8 0 0-.95 0 0 0z"></path>
                    <path d="M75 36c-13.807 0-25 11.2-25 25v150c0 13.806 11.2 25 25 25h150c13.806 0 25-11.2 25-25V61c0-13.807-11.2-25-25-25H75zm99.997 26C168.37 62 163 67.372 163 74.006v63.988c0 6.63 5.373 12.006 11.997 12.006h37.006c6.626 0 11.997-5.372 11.997-12.006V74.006C224 67.376 218.627 62 212.003 62h-37.006zm-87 0C81.37 62 76 67.367 76 74.005v113.99C76 194.625 81.373 200 87.997 200h37.006c6.626 0 11.997-5.367 11.997-12.005V74.005C137 67.375 131.627 62 125.003 62H87.997z"></path>
                  </g>
                </svg>
              </NavLink>
            </div>

            {/* right side header navigation bar */}

            <div className="hidden sm:block sm:ml-6">
              <div className="flex">
                {/* navigation "+" */}

                <div>
                  <button
                    activeClassName="bg-gray-900"
                    className="px-2 py-2 bg-blue-500 rounded-md text-sm font-medium leading-5 text-white  focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
                    onClick={() =>
                      setCreateDropdownActive(!createDropdownActive)
                    }
                  >
                    <img
                      src="./images/plus.svg"
                      className="w-5"
                      alt="icon"
                    ></img>
                  </button>
                  {createDropdownActive && (
                    <div
                      className="origin-top-right absolute right-0 mt-2 w-1/5 rounded-md shadow-lg"
                      ref={ref}
                    >
                      <CreateDropdown ref={ref} />
                    </div>
                  )}
                </div>

                <NavLink
                  activeClassName="bg-gray-900"
                  to="/"
                  className="ml-1 px-2 py-2 bg-blue-500 rounded-md text-sm font-medium leading-5 text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
                >
                  <img
                    src="./images/information.svg"
                    className="w-5"
                    alt="icon"
                  ></img>
                </NavLink>
                <NavLink
                  activeClassName="bg-gray-900"
                  to="/"
                  className="ml-1 px-2 py-2 bg-blue-500 rounded-md text-sm font-medium leading-5 text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
                >
                  <img
                    src="./images/notification.svg"
                    className="w-5"
                    alt="icon"
                  ></img>
                </NavLink>

                {/* user dropdown */}
                <div className="absolute inset-y-0 right-0 flex items-center sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  <div className="relative">
                    <div>
                      <button
                        className="flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-white transition duration-150 ease-in-out"
                        id="user-menu"
                        aria-label="User menu"
                        aria-haspopup="true"
                        onClick={() =>
                          setUserDropdownActive(!userDropdownActive)
                        }
                      >
                        <img
                          className="h-8 w-8 rounded-full"
                          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                          alt=""
                        />
                      </button>
                    </div>
                    {userDropdownActive && (
                      <div
                        className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg"
                        ref={ref}
                      >
                        <UserDropdown ref={ref} />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
