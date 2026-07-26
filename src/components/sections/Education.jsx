import React from "react";
import EducationCard from "../cards/EducationCard";

function Education() {
  return (
    <>
      <section className="mt-20 md:mt-28 px-4 max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold text-slate-100">
          Education
        </h2>

        <div className="my-8">
          <div className="flex flex-col gap-4">
            <EducationCard
              course=" Post Graduate Diploma in Computer Application (PGDCA)"
              university="Pt. Ravishankar Shukla University"
              year="2022 - 2023"
            />

            <EducationCard
              course="Bachlelor Of Commerce (B.COM)"
              university="Pt. Ravishankar Shukla University"
              year="2018 - 2021"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Education;
