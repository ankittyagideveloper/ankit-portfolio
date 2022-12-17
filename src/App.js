import ankitResume from "./Assets/ankit_resume.pdf";
import "./App.css";
import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiOutlineArrowUp,
  AiOutlineGithub,
} from "react-icons/ai";
import { useState } from "react";

function App() {
  function getScreenMode() {
    const darkMode = JSON.parse(localStorage.getItem("darkMode"));
    return darkMode;
  }
  const [darkMode, setDarkMode] = useState(getScreenMode() ?? false);
  getScreenMode();
  const [show, setShow] = useState(false);
  window.onscroll = function () {
    scrollFunction();
  };
  function scrollFunction() {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      setShow(true);
    } else {
      setShow(false);
    }
  }
  const handleDarkMode = () => {
    setDarkMode(!darkMode);
    localStorage.setItem("darkMode", !darkMode);
  };
  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="App bg-white min-h-screen px-10 dark:bg-gray-900">
        <section>
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-burtons dark:text-white">
              Ankit Tyagi
            </h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => handleDarkMode()}
                  className="text-2xl cursor-pointer dark:text-white"
                />
              </li>
              <li>
                <a
                  className="ml-8 bg-gradient-to-r from-cyan-500 to-teal-500 px-4 py-2 rounded-md text-white"
                  href={ankitResume}
                  rel="noreferrer"
                  target="_blank"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center">
            <h2 className="text-5xl py-2 text-teal-600 font-medium ">
              Ankit Tyagi
            </h2>
            <h3 className="text-2xl py-2 dark:text-white">Web Developer</h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-white">
              Extremely motivated to constantly develop my skill and grow
              professionally. I am a passionate front end developer who has
              worked with various types of projects and have mastered multiple
              javascript frameworks.
            </p>
            <div className="text-5xl flex gap-8 md:gap-16 py-3 text-gray-600 justify-center text-center m-2">
              <AiOutlineGithub
                className=" cursor-pointer dark:text-white"
                onClick={() =>
                  window.open("https://github.com/ankittyagi206", "_blank")
                }
              />
              <AiFillLinkedin
                className="  cursor-pointer dark:text-white"
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/thereactdeveloper",
                    "_blank"
                  )
                }
              />
              <AiFillTwitterCircle
                className=" cursor-pointer dark:text-white"
                onClick={() =>
                  window.open("https://twitter.com/AnkitTy54645879", "_blank")
                }
              />
            </div>
            <div className=" flex items-center bg-gradient-to-b from-teal-500 rounded-full w-70 h-70 md:w-80 md:h-80 mt-20 mx-auto overflow-hidden">
              <img
                src="./profile.png"
                alt="profile_photo"
                className="object-cover"
              />
            </div>
          </div>
        </section>
        <section>
          <h3 className="text-3xl py-1 text-left dark:text-white">
            Technologies I know
          </h3>
          <p className="text-md py-2 leading-8 text-gray-800 text-left dark:text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo,{" "}
            <span className="text-teal-500">aliquid!</span>
            Quod nemo consectetur, necessitatibus ea amet deserunt officiis
            labore non, explicabo, nesciunt dolor eos doloremque. Facilis illo
            laboriosam culpa nulla.
          </p>
          <div className="flex md:flex-row flex-col">
            <div className="flex items-center justify-center">
              <img
                className="animate-bounce-slow h-52"
                src="./javascript.png"
                alt="react"
              />
            </div>
            <div className="flex items-center justify-center">
              <img className="animate-pulse h-52" src="./html.png" alt="html" />
            </div>
            <div className="flex items-center justify-center">
              <img
                className="hover:animate-wiggle h-52"
                src="./css3.png"
                alt="css"
              />
            </div>
            <div className="flex items-center justify-center">
              <img
                className="animate-spin-slow h-52"
                src="./react.png"
                alt="react"
              />
            </div>
          </div>
        </section>
        <button
          className={`fixed right-0 bottom-0 bg-teal-500 md:m-14  m-8 rounded-full p-3 text-white font-extrabold overflow-auto ${
            show ? "block" : "hidden"
          }`}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <AiOutlineArrowUp />
        </button>
        <footer className="dark:text-white">@All rights reserved 2023</footer>
      </div>
    </div>
  );
}

export default App;
