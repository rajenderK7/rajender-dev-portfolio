import React from "react";
import { Badge } from "./ui/badge";

const languages = ["C++", "Go", "TS"];
const tech = [
  "Flutter",
  "Next JS",
  "MERN stack",
  "MySQL",
  "Firebase",
  "MongoDB",
];

const Skills = () => {
  return (
    <div className="mt-6">
      <h2 className="font-semibold">I work with:</h2>
      <div className="mt-2">
        {languages.map((l, i) => {
          return (
            <Badge key={i} variant={"outline"} className="text-sm mr-4">
              {l}
            </Badge>
          );
        })}
      </div>
      <div className="mt-2">
        {tech.map((t, i) => {
          return (
            <Badge
              key={i}
              variant={"outline"}
              className="text-sm mr-4 mb-2 lg:mb-0"
            >
              {t}
            </Badge>
          );
        })}
      </div>
      {/* <div className="mt-2">
        {dbs.map((d, i) => {
          return (
            <Badge key={i} variant={"outline"} className={style}>
              {d}
            </Badge>
          );
        })}
      </div> */}
    </div>
  );
};

export default Skills;
