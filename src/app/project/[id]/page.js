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
import { useRouter } from "next/router";

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
    <section
      id={project.name}
      className="py-10 sm:py-16 flex flex-col justify-center items-center text-center p-auto"
    >
      <div className="flex flex-col justify-center items-center text-center">
        <div className="flex justify-center w-full sm:w-2/4">
          <Image
            src={project.image}
            alt={`${project.name} screenshot`}
            className="w-full h-full "
          />
        </div>
        <div className="w-full text-center text-sm sm:flex sm:flex-row sm:justify-center sm:w-2/4 sm:m-auto sm:mt-6">
          <div className="my-3 text-lg sm:w-2/4 sm:text-start sm:text-1xl sm:tracking-[1rem]">
            <p className="mb-3 sm:mb-6">{project.name}</p>
            <div className="flex flex-wrap flex-row justify-center items-center sm:justify-start">
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
                    className={`w-10 h-10 mr-3 sm:mr-5 ${
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
          <div className="sm:w-2/4">
            <p className="my-3 sm:text-start">
              <span className="mr-3">github</span>|
              <span className="ml-3">live site</span>
            </p>
            <p className="my-3 sm:text-justify">{project.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
