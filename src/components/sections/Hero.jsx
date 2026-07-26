import React from "react";
import profilePic from "../../assets/my-photo.jpg";

function Hero() {
  return (
    <section className="my-20 md:my-32 px-4 max-w-7xl mx-auto">
      <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
        <div className="w-full lg:w-1/2 text-left">
          <span className="text-slate-400 text-lg md:text-xl mb-1.5 font-light block">
            Hi, I'm
          </span>

          <h1 className="font-bold text-3xl md:text-5xl lg:text-6xl tracking-tighter text-white">
            Bhavesh Kumbhare
          </h1>

          <h2 className="font-bold text-violet-400 text-xl md:text-4xl lg:text-5xl tracking-tighter mt-1">
            MERN Stack Developer
          </h2>

          <p className="text-slate-400 font-light mt-4 text-base md:text-xl max-w-lg">
            I build responsive, full-stack web applications using MongoDB,
            Express.js, React, and Node.js. Passionate about creating secure,
            scalable, and user-friendly solutions while continuously learning
            modern web technologies.
          </p>

          <div className="flex flex-wrap gap-4 mt-8">
            <a
              href="#contact"
              className="bg-violet-600 text-white text-xs md:text-sm font-semibold px-5 md:px-6 py-3 rounded-md transition-all duration-300 ease-in-out hover:bg-violet-700 text-center w-full md:w-fit"
            >
              Let's Connect!
            </a>

            <a
              href="#projects"
              className="border-slate-700 border text-slate-200 text-xs md:text-sm font-semibold px-5 md:px-6 py-3 rounded-md transition-all duration-300 ease-in-out hover:bg-slate-900 text-center w-full md:w-fit"
            >
              Browse Projects
            </a>
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex justify-center items-center mt-6 lg:mt-0">
          <div className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 border border-slate-700 rounded-full p-3 md:p-6 flex justify-center items-center bg-slate-900/50 shadow-sm shrink-0">
            <div className="w-full h-full rounded-full overflow-hidden border-4 border-slate-800">
              <img
                src={profilePic}
                alt="Bhavesh Kumbhare"
                className="w-full h-full object-cover object-[center_25%]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
