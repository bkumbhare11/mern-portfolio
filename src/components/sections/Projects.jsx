import React from "react";
import PrepPilotAI from "@/projects/PrepPilotAI";
import ExpenseTracker from "@/projects/ExpenseTracker";

function Projects() {
  return (
    <section className="mt-20 md:mt-28 px-4 max-w-7xl mx-auto">
      <h1 className="font-bold text-4xl md:text-6xl my-1.5">Projects</h1>

      <PrepPilotAI />
      <ExpenseTracker />
    </section>
  );
}

export default Projects;
