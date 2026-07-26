import React from "react";

function EducationCard({ course, university, year }) {
  return (
    <div className=" p-5 rounded-2xl flex flex-col gap-2 bg-slate-900 border border-slate-800">
      <h3 className="font-bold text-slate-400 text-lg">{course}</h3>

      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
        <p className="text-slate-500 font-medium">{university}</p>
        <span className="text-sm font-semibold bg-slate-950 text-slate-300 border border-slate-800 px-3 py-2 rounded-full w-fit">
          {year}
        </span>
      </div>
    </div>
  );
}

export default EducationCard;
