import React from "react";

export interface ExperienceI {
  duration: string;
  titleAndOrg: string;
  desc: string;
  location?: string;
}

// Any new experience entry shall be added at the beginning of the list
const experience: ExperienceI[] = [
  {
    duration: "January 2024 - Present",
    titleAndOrg: "Technical Intern @ F5 Networks",
    desc: "Working with React on the frontend and Go on the backend.",
    location: "Hyderabad, IN",
  },
  {
    duration: "February 2022 - June 2022",
    titleAndOrg: "Flutter Developer Intern @ Fosterate",
    desc: "Implemented user on-boarding and developed part of the merchant application using Flutter and Firebase.",
    location: "Remote, IN",
  },
];

const Exp = (exp: ExperienceI) => {
  return (
    <li className="mb-6 ms-4">
      <div className="absolute w-3 h-3 bg-slate-300 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
      <time className="mb-1 text-sm font-normal leading-none text-slate-600 dark:text-slate-300">
        {exp.duration}
      </time>
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
        {exp.titleAndOrg}
      </h3>
      <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
        {exp.desc}
      </p>
    </li>
  );
};

const Experience = () => {
  return (
    <div className="mt-6">
      <h2 className="font-semibold">Experience:</h2>
      <ol className="my-2 relative border-s border-slate-300 dark:border-gray-700">
        {experience.map((exp, i) => {
          return <Exp key={i} {...exp} />;
        })}
      </ol>
    </div>
  );
};

export default Experience;
