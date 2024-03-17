"use client";
import Image from "next/image";
import { useState } from "react";
import js from "/public/js.png";
import html from "/public/html.png";
import css from "/public/css.png";
import node from "/public/node.png";
import express from "/public/express.png";
import react from "/public/react.png";
import pg from "/public/pg.png";
import git from "/public/git.png";
import vercel from "/public/vercel.png";
import postman from "/public/postman.png";
import next from "/public/next.png";
import tailwind from "/public/tailwind.png";
import mui from "/public/mui.png";
import stripe from "/public/stripe.png";

const techStack = {
  javascript: js,
  html: html,
  css: css,
  tailwind: tailwind,
  node: node,
  express: express,
  react: react,
  next: next,
  postgres: pg,
  git: git,
  vercel: vercel,
  postman: postman,
  mui: mui,
  stripe: stripe,
};

export default function Project({ project }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (idx) => {
    setHoveredIndex(idx);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <section className="w-full h-screen flex flex-col justify-center items-center text-center p-auto">
      <div className="flex flex-col justify-center items-center text-center">
        <div className="flex justify-center w-full">
          <Image
            src={project.image}
            alt={`${project.name} screenshot`}
            className="sm:w-[42rem] sm:h-[25rem] "
          />
        </div>
        <div className="w-full text-center text-sm sm:flex sm:flex-row sm:justify-center sm:w-2/3 sm:m-auto sm:mt-6">
          <div className="my-3 sm:text-center sm:pr-10 sm:text-3xl sm:tracking-[1rem]">
            <p>{project.name}</p>
          </div>
          <div className="sm:w-1/3">
            <p className="my-3 sm:text-start">
              <span className="mr-3">github</span>|
              <span className="ml-3">live site</span>
            </p>
            <p className="my-3 sm:text-justify">{project.description}</p>
            <div className="px-10 grid grid-cols grid-cols-3 items-center sm:grid-cols-4 sm:px-0 sm:flex sm:text-start sm:justify-start sm:items-starts">
              {project.techUsed.map((tech, idx) => (
                <div
                  key={idx}
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(idx)}
                  onMouseLeave={handleMouseLeave}
                >
                  <Image
                    src={techStack[tech]}
                    alt={tech}
                    className={`w-10 h-10 sm:mr-10 ${
                      hoveredIndex === idx ? "transform scale-150" : ""
                    }`}
                  />
                  {hoveredIndex === idx && (
                    <p className="absolute top-0 left-0 bg-accent rounded-md text-xs p-1 tracking-[0.1rem] shadow">
                      {tech}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
