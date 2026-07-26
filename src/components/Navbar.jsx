import React from "react";
import Hamburger from "./Hamburger";

function Navbar() {
  return (
    <header className="flex w-full justify-between items-center py-4 bg-slate-950 fixed top-0 px-7">
      <a href="#home" className="flex items-center gap-2">
        <span
          className="font-black text-2xl md:text-4xl bg-linear-to-r from-[#a855f7] via-[#6366f1] to-[#06b6d4] bg-clip-text text-transparent
"
        >
          BK
        </span>
        <span className="font-bold hidden md:block">Bhavesh Kumbhare</span>
      </a>
      <nav className="font-semibold hidden md:block">
        <ul className="flex gap-8 text-lg text-slate-300">
          <li className="hover:text-violet-400 transition-all">
            <a href="#home">Home</a>
          </li>

          <li className="hover:text-violet-400 transition-all">
            <a href="#about">About</a>
          </li>

          <li className="hover:text-violet-400 transition-all">
            <a href="#projects">Projects</a>
          </li>
        </ul>
      </nav>
      <a
        href="https://drive.google.com/file/d/1pNuM--bo3acp88bQnSpsCD_1gp98cIZI/view?usp=sharing"
        target="_blank"
        className="bg-violet-600 font-semibold text-white px-3 py-2 rounded-lg transition-all duration-300 active:scale-95 hover:bg-violet-700 hidden md:block"
      >
        Resume
      </a>
      <div className="md:hidden">
        <Hamburger />
      </div>
    </header>
  );
}

export default Navbar;
