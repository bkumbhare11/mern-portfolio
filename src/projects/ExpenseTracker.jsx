import React, { useState } from "react";
import { BsArrowUpRightCircle } from "react-icons/bs";
import { SiGithub } from "react-icons/si";
import { AllSkills } from "@/components/AllSkills";
import { GoDotFill } from "react-icons/go";

import budget from "../assets/expenseTracker/budget.png";
import dashboard from "../assets/expenseTracker/dashboard.png";
import profile from "../assets/expenseTracker/profile.png";
import reports from "../assets/expenseTracker/reports.png";
import transactions from "../assets/expenseTracker/transactions.png";

function ExpenseTracker() {
  const techStack = AllSkills.filter((skill) =>
    [
      "JavaScript",
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "Tailwind CSS",
      "shadcn/ui",
      "JWT",
      "Zod",
      "Nodemailer",
    ].includes(skill.name),
  );

  const highlights = [
    "Secure user authentication using JWT and HTTP-only cookies",
    "Password reset functionality through email",
    "Add, edit, delete, and manage daily transactions",
    "Create monthly budgets with fixed expense management",
    "Dashboard to monitor expenses and financial summaries",
    "Spending reports to analyze expense patterns",
    "Responsive UI for desktop and mobile devices",
    "Account deletion with associated user data cleanup",
  ];

  const images = [dashboard, budget, transactions, profile, reports];

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
          <h2 className="font-bold text-2xl mt-2 md:text-3xl">
            Expense Tracker
          </h2>
          <p className="font-semibold text-slate-500">
            Full-Stack Personal Finance Management Application
          </p>
        </div>

        <p className="text-slate-400 md:text-lg">
          A full-stack MERN application designed to help users manage their
          personal finances by tracking daily expenses, setting monthly budgets,
          and monitoring spending activities through a clean and responsive
          interface.
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
            href="https://expense-tracker-amber-seven-60.vercel.app/"
            target="_blank"
            className="font-semibold flex items-center gap-2.5 cursor-pointer transition-all duration-300 ease-in-out text-slate-100 hover:text-violet-700"
          >
            Live Demo
            <span>
              <BsArrowUpRightCircle />
            </span>
          </a>

          <a
            href="https://github.com/bkumbhare11/Expense-Tracker"
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

export default ExpenseTracker;
