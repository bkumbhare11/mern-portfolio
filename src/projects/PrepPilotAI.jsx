import React, { useState } from "react";
import { BsArrowUpRightCircle } from "react-icons/bs";
import { SiGithub } from "react-icons/si";
import { AllSkills } from "@/components/AllSkills";
import { GoDotFill } from "react-icons/go";
import Login from "../assets/prepPilotAI/Login.jpeg";
import Answers from "../assets/prepPilotAI/Answers.jpeg";
import Dashboard from "../assets/prepPilotAI/Dashboard.jpeg";
import History from "../assets/prepPilotAI/History.jpeg";
import NewSession from "../assets/prepPilotAI/New-Session.jpeg";
import Result from "../assets/prepPilotAI/Result.jpeg";
import SessionRoom from "../assets/prepPilotAI/Session-Room.jpeg";

function PrepPilotAI() {
  const techStack = AllSkills.filter((skill) =>
    [
      "React.js",
      "Node.js",
      "Express.js",
      "Tailwind CSS",
      "MongoDB",
      "JWT Auth",
    ].includes(skill.name),
  );

  const highlights = [
    "JWT Authentication & Protected Routes",
    "AI-generated Interview Questions",
    "Practice & Interview Modes",
    "MCQ & Theory Questions",
    "Google Gemini API Integration",
    "Session History & Progress Tracking",
    "AI-powered Answer Evaluation",
    "Responsive UI",
  ];

  const images = [
    Login,
    Dashboard,
    NewSession,
    SessionRoom,
    Result,
    History,
    Answers,
  ];

  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div className="flex flex-col gap-5 lg:flex-row mt-10">
      <div className="w-full lg:w-1/2 flex flex-col justify-between px-4 py-4 bg-slate-100 border border-slate-900 rounded-xl">
        <img
          src={selectedImage}
          alt="Nexus UMS"
          className="w-full h-full object-contain "
        />

        <div className="flex flex-nowrap overflow-x-scroll gap-2 p-2 mx-auto max-w-full">
          {images.map((image, index) => (
            <img
              src={image}
              key={index}
              className="h-10 w-12 md:h-16 md:w-24 object-cover rounded-md shrink-0 cursor-pointer border border-slate-700 hover:border-violet-500 transition"
              onClick={() => setSelectedImage(image)}
            />
          ))}
        </div>
      </div>

      <div className="space-y-4 w-full lg:w-1/2 ">
        <div>
          <h2 className="font-bold text-2xl mt-2 md:text-3xl">PrepPilot AI</h2>
          <p className="font-semibold text-slate-500">
            AI-Powered Interview Preparation Platform
          </p>
        </div>

        <p className="text-slate-400 md:text-lg">
          PrepPilot AI is a full-stack interview preparation platform built with
          the MERN Stack. It helps users practice technical interviews through
          AI-generated questions, personalized feedback, and detailed
          performance tracking.
        </p>

        <div className="flex gap-2 flex-wrap">
          {techStack.map((skill, index) => (
            <div
              key={index}
              className="bg-slate-900 border border-slate-800 text-white font-bold w-fit flex items-center gap-1.5 px-3 py-1 rounded-sm text-xs md:text-sm"
            >
              {skill.icon}
              <span>{skill.name}</span>
            </div>
          ))}
        </div>

        <div className="text-slate-400 md:text-lg">
          {highlights.map((highlight, index) => (
            <div key={index} className="flex gap-2 items-center my-2">
              <span className="text-xl">
                <GoDotFill />
              </span>
              <p>{highlight}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row gap-4 md:text-xl">
          <a
            href="https://prep-pilot-ai-alpha.vercel.app/"
            target="_blank"
            className="font-semibold flex items-center gap-2.5 cursor-pointer transition-all duration-300 ease-in-out text-slate-100 hover:text-violet-700"
          >
            Live Demo
            <span>
              <BsArrowUpRightCircle />
            </span>
          </a>

          <a
            href="https://github.com/bkumbhare11/prep-pilot-ai.git"
            target="_blank"
            className="font-semibold flex items-center gap-2.5 cursor-pointer transition-all duration-300 ease-in-out text-slate-100 hover:text-violet-700"
          >
            GitHub Repo
            <span>
              <SiGithub />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default PrepPilotAI;
