import React from "react";
import HomeHeader from "../components/HomeHeader";

export default function Home() {
  return (
    <React.Fragment>
      <HomeHeader />
      <div className="max-w-7xl mx-auto px-4 sm:px-6  bg-gradient-to-r from-blue-600 to-purple-600 h-screen">
        <div className="flex justify-between py-10">
          <div className="ml-24 ">
            <h1 className="text-5xl font-medium text-white mt-10 font-sans leading-normal">
              Trello helps teams work more collaboratively and get more done.
            </h1>
            <p className="text-2xl font-normal text-white mt-2 font-sans leading-normal">
              Trello’s boards, lists, and cards enable teams to organize and
              prioritize projects in a fun, flexible, and rewarding way
            </p>
          </div>
          <div className="mr-24 w-11/12 ">
            <img
              src="https://d2k1ftgv7pobq7.cloudfront.net/meta/p/res/images/308998dcb3ed5ab3d01217a4d24ffa03/hero-a.svg"
              alt="icon"
            ></img>
          </div>
        </div>
        <form class="quick-signup pt-5 ml-24  mt-10">
          <input
            name="email"
            className="appearance-none rounded-none relative  w-4/12 px-4 py-4 border border-gray-300 placeholder-gray-500 placeholder-text-2xl  font-thin text-gray-900 rounded-t-md rounded-b-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5 "
            type="email"
            placeholder="Email"
          />

          <button
            type="submit"
            className="text-2xl font-thin ml-2 py-4 px-4 border
        border-transparent  leading-5 rounded-md text-white
        bg-green-600 hover:bg-green-500 
        transition duration-150 ease-in-out"
          >
            Sign Up – It’s Free!
          </button>
        </form>
      </div>
    </React.Fragment>
  );
}
