import React from "react";
import { SiGithub, SiLinkedin, SiGmail } from "react-icons/si";

function Contact() {
  return (
    <>
      <section className="mt-20 md:mt-28 px-4 max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold text-slate-100">
          Let's Connect!
        </h2>

        <p className="text-slate-400 mt-4 max-w-xl md:text-lg">
          I'm currently open to Full Stack and MERN Stack Developer
          opportunities. Feel free to reach out if you'd like to collaborate or
          discuss exciting projects.
        </p>

        <div className="flex flex-wrap gap-6 mt-10 md:text-lg">
          <a
            href="mailto:bhaveshkumbhare18@gmail.com"
            target="_blank"
            className="flex items-center gap-2 text-slate-400 hover:text-blue-600 transition-all duration-300 ease-in-out"
          >
            <SiGmail className="text-red-400" />
            <span className="text-red-500 font-medium">Email</span>
          </a>

          <a
            href="https://github.com/bkumbhare11"
            target="_blank"
            className="flex items-center gap-2 text-slate-400 hover:text-blue-600 transition-all duration-300 ease-in-out"
          >
            <SiGithub className="text-white" />
            <span className="text-white font-medium">GitHub</span>
          </a>

          <a
            href="https://www.linkedin.com/in/bhavesh-kumbhare-552a4a2b0/"
            target="_blank"
            className="flex items-center gap-2 text-slate-400 hover:text-blue-600 transition"
          >
            <SiLinkedin className="text-blue-400" />
            <span className="text-blue-400 font-medium">LinkedIn</span>
          </a>
        </div>
      </section>
    </>
  );
}

export default Contact;
