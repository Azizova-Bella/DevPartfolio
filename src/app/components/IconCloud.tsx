"use client";

import React, { JSX } from "react";
import { IconCloud } from "@/components/magicui/icon-cloud";


// Custom styling for each icon with a clean and responsive design
const IconStyle = ({ icon }: { icon: JSX.Element }) => {
  return (
    <div
      className="flex items-center justify-center text-4xl text-teal-500 hover:text-purple-600 transition-all duration-300 transform hover:scale-110 shadow-lg p-4 rounded-lg cursor-pointer"
      style={{
        boxShadow: "0px 4px 16px rgba(0, 128, 128, 0.5)", // Soft shadow for natural effect
        transition: "transform 0.3s, box-shadow 0.3s",
      }}
    >
      {icon}
    </div>
  );
};

const Skills = () => {
  return (
    <section className="min-h-screen bg-gradient-to-b from-[#e0f7fa] via-[#f3e8ff] to-[#f5f5f5] text-gray-900 px-4 py-24 flex flex-col items-center justify-center">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-extrabold tracking-tight mb-4 text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-purple-600">
          My Skills
        </h2>
        <p className="text-lg text-gray-600 max-w-xl mx-auto mb-8">
          These are the technologies I use to bring ideas to life. Explore my proficiency with a dynamic visual cloud.
        </p>
      </div>

      {/* Icon Grid with Responsiveness */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
		<IconCloud
  icons={Skills.map((icon: JSX.Element, index: number) => (
    <IconStyle key={index} icon={icon} />
  ))}
/>

      </div>
    </section>
  );
};

export default Skills;
