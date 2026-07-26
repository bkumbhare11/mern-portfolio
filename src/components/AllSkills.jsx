import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiRedux,
  SiReactrouter,
  SiReacthookform,
  SiTailwindcss,
  SiShadcnui,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMongoose,
  SiFirebase,
  SiZod,
  SiGit,
  SiGithub,
  SiPostman,
  SiVite,
  SiNpm,
} from "react-icons/si";
import { MdApi } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { VscVscode } from "react-icons/vsc";

export const AllSkills = [
  // --- Frontend ---
  { name: "React.js", icon: <SiReact className="text-[#61DAFB]" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-[#F7DF1E]" /> },
  { name: "HTML5", icon: <SiHtml5 className="text-[#E34F26]" /> },
  { name: "CSS3", icon: <SiCss3 className="text-[#1572B6]" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#06B6D4]" /> },
  { name: "React Router", icon: <SiReactrouter className="text-[#CA4245]" /> },
  { name: "Redux Toolkit", icon: <SiRedux className="text-[#764ABC]" /> },
  {
    name: "React Hook Form",
    icon: <SiReacthookform className="text-[#EC5990]" />,
  },
  { name: "shadcn/ui", icon: <SiShadcnui className="text-white" /> },

  // --- Backend ---
  { name: "Node.js", icon: <SiNodedotjs className="text-[#339933]" /> },
  { name: "Express.js", icon: <SiExpress className="text-white" /> },
  { name: "REST APIs", icon: <MdApi className="text-sky-400" /> },
  { name: "JWT Auth", icon: <RiLockPasswordLine className="text-[#FFCA28]" /> },
  { name: "Zod Validation", icon: <SiZod className="text-[#3E67B1]" /> },

  // --- Database ---
  { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" /> },
  { name: "Mongoose", icon: <SiMongoose className="text-[#880000]" /> },
  { name: "Firebase", icon: <SiFirebase className="text-[#FFCA28]" /> },

  // --- Tools ---
  { name: "Git", icon: <SiGit className="text-[#F05032]" /> },
  { name: "GitHub", icon: <SiGithub className="text-white" /> },
  { name: "Postman", icon: <SiPostman className="text-[#FF6C37]" /> },
  { name: "Vite", icon: <SiVite className="text-[#646CFF]" /> },
  { name: "npm", icon: <SiNpm className="text-[#CB3837]" /> },
  { name: "VS Code", icon: <VscVscode className="text-[#007ACC]" /> },
];

export const frontendSkills = [
  { name: "React.js", icon: <SiReact className="text-[#61DAFB]" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-[#F7DF1E]" /> },
  { name: "HTML5", icon: <SiHtml5 className="text-[#E34F26]" /> },
  { name: "CSS3", icon: <SiCss3 className="text-[#1572B6]" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#06B6D4]" /> },
  { name: "React Router", icon: <SiReactrouter className="text-[#CA4245]" /> },
  { name: "Redux Toolkit", icon: <SiRedux className="text-[#764ABC]" /> },
  {
    name: "React Hook Form",
    icon: <SiReacthookform className="text-[#EC5990]" />,
  },
  { name: "shadcn/ui", icon: <SiShadcnui className="text-white" /> },
];

export const backendSkills = [
  { name: "Node.js", icon: <SiNodedotjs className="text-[#339933]" /> },
  { name: "Express.js", icon: <SiExpress className="text-white" /> },
  { name: "REST APIs", icon: <MdApi className="text-sky-400" /> },
  { name: "JWT Auth", icon: <RiLockPasswordLine className="text-[#FFCA28]" /> },
  { name: "Zod Validation", icon: <SiZod className="text-[#3E67B1]" /> },
];

export const databaseSkills = [
  { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" /> },
  { name: "Mongoose", icon: <SiMongoose className="text-[#880000]" /> },
  { name: "Firebase", icon: <SiFirebase className="text-[#FFCA28]" /> },
];

export const toolsSkills = [
  { name: "Git", icon: <SiGit className="text-[#F05032]" /> },
  { name: "GitHub", icon: <SiGithub className="text-white" /> },
  { name: "Postman", icon: <SiPostman className="text-[#FF6C37]" /> },
  { name: "Vite", icon: <SiVite className="text-[#646CFF]" /> },
  { name: "npm", icon: <SiNpm className="text-[#CB3837]" /> },
  { name: "VS Code", icon: <VscVscode className="text-[#007ACC]" /> },
];
