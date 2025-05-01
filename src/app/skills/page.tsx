"use client";

import React from "react";
import { IconCloud } from "@/components/magicui/icon-cloud"; // Ensure IconCloud is correctly imported

// Array of skills with names and slugs
const skills = [
  { name: "TypeScript", slug: "typescript" },
  { name: "JavaScript", slug: "javascript" },
  { name: "React", slug: "react" },
  { name: "HTML5", slug: "html5" },
  { name: "CSS3", slug: "css3" },
  { name: "Next.js", slug: "nextdotjs" },
  { name: "Git", slug: "git" },
  { name: "GitHub", slug: "github" },
  { name: "Figma", slug: "figma" },
  { name: "Framer Motion", slug: "framermotion" }, // Animation library
  { name: "shadcn/ui", slug: "shadcnui" }, // UI components
  { name: "Jotai", slug: "jotai" }, // State management
  { name: "BEM", slug: "bem" }, // CSS methodology
  { name: "OOP", slug: "oop" }, // Programming paradigm
  { name: "Tailwind CSS", slug: "tailwindcss" }, // Utility-first CSS
  { name: "Zustand", slug: "zustand" }, // State management
  { name: "React Query", slug: "tanstackquery" }, // Data fetching
  { name: "Storybook", slug: "storybook" }, // UI component development
  { name: "Vite", slug: "vite" }, // Build tool
  { name: "ESLint", slug: "eslint" }, // Linting
  { name: "Prettier", slug: "prettier" } ,
  { name: "SASS/SCSS", slug: "sass" },
  { name: "Webpack", slug: "webpack" },
  { name: "Redux", slug: "redux" },
  { name: "Vercel", slug: "vercel" },
  { name: "NPM", slug: "npm" },
  { name: "Bash", slug: "bash" },
  { name: "REST API", slug: "restapi" },
  { name: "VS Code", slug: "visualstudiocode" },
  { name: "Notion", slug: "notion" },
];

const Skills = () => {
  // Generate images based on the slug
  const images = skills.map(
    (skill) => `https://cdn.simpleicons.org/${skill.slug}/${skill.slug}`
  );

  return (
    <section className="min-h-screen bg-neutral-950 text-white px-4 py-24 flex flex-col items-center justify-center">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-extrabold tracking-tight mb-4">
          My <span className="text-cyan-400">Skills</span>
        </h2>
        <p className="text-lg text-neutral-400 max-w-xl mx-auto">
          A dynamic visual cloud of technologies I use to craft modern, scalable web experiences.
        </p>
      </div>

      <div className="flex w-full max-w-6xl space-x-8 justify-between items-center">
        {/* Left side - IconCloud component renders the images */}
        <div className="w-1/2 flex items-center justify-center">
		  <IconCloud
  images={images}
/>

        </div>

        <div className="w-1/2 grid grid-cols-3 gap-6">
          {skills.slice(0, 9).map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center bg-gradient-to-r from-purple-500 via-blue-500 to-teal-500 p-6 rounded-xl shadow-lg hover:scale-105 transition-all duration-300"
            >
              <img
                src={images[index]}
                alt={skill.name}
                className="w-20 h-20 mb-4"
              />
              <span className="text-xl text-white">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
