import { frontendSkills } from "../AllSkills";
import { backendSkills } from "../AllSkills";
import { databaseSkills } from "../AllSkills";
import { toolsSkills } from "../AllSkills";

function Skills() {
  return (
    <section className="mt-20 md:mt-28 px-4 max-w-7xl mx-auto">
      <h1 className="font-bold text-4xl md:text-6xl mb-8 text-slate-100">
        Skills
      </h1>

      <div className="flex flex-col md:flex-row md:justify-between gap-5">
        <div>
          <h3 className="font-semibold text-2xl mb-2 md:mb-3 text-slate-100 ">
            Frontend
          </h3>
          {frontendSkills.map((skill, index) => (
            <div key={index} className="flex items-center gap-1.5 md:text-lg">
              <p className="my-2">{skill.icon}</p>
              <p className="text-slate-400">{skill.name}</p>
            </div>
          ))}
        </div>

        <div>
          <h3 className="font-semibold text-2xl mb-2 md:mb-3 text-slate-100">
            Backend
          </h3>
          {backendSkills.map((skill, index) => (
            <div key={index} className="flex items-center gap-1.5 md:text-lg">
              <p className="my-2">{skill.icon}</p>
              <p className="text-slate-400">{skill.name}</p>
            </div>
          ))}
        </div>

        <div>
          <h3 className="font-semibold text-2xl mb-2 md:mb-3 text-slate-100">
            Database
          </h3>
          {databaseSkills.map((skill, index) => (
            <div key={index} className="flex items-center gap-1.5 md:text-lg">
              <p className="my-2">{skill.icon}</p>
              <p className="text-slate-400">{skill.name}</p>
            </div>
          ))}
        </div>

        <div>
          <h3 className="font-semibold text-2xl mb-2 md:mb-3 text-slate-100">
            Tools
          </h3>
          {toolsSkills.map((skill, index) => (
            <div key={index} className="flex items-center gap-1.5 md:text-lg">
              <p className="my-2">{skill.icon}</p>
              <p className="text-slate-400">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
