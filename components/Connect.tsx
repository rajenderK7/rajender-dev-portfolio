import Link from "next/link";
import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

interface ConnectI {
  link: string;
  icon: React.ReactNode;
}

const connect: ConnectI[] = [
  {
    link: "https://www.linkedin.com/in/rajender-katkuri-90865421b/",
    icon: <FaLinkedin />,
  },
  {
    link: "https://www.github.com/rajenderK7",
    icon: <FaGithub />,
  },
  {
    link: "mailto:rajenderkatkuri123@gmail.com",
    icon: <IoMail />,
  },
];

const Connect = () => {
  return (
    <div className="mt-3 lg:mt-5 flex gap-4 text-2xl">
      {connect.map((c) => {
        return (
          <Link key={c.link} href={c.link} target="_blank">
            {c.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Connect;
