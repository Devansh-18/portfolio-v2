"use client";

import { projectData } from "@/lib/projectData";
import Image from "next/image";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Separator from "../components/ui/Seperator";
import Link from "next/link";
import { Github, GithubIcon, Link2Icon } from "lucide-react";



export default function ProjectsPage() {
  return (
    <>
    <Navbar/>
    <div className="w-[90%] md:w-[75%] mx-auto mt-10 mb-20">

      {/* TITLE */}
      <Separator text={"My Projects"}/>

      {/* GRID */}
      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 items-stretch">

        {projectData.map((project) => (
          <div
            key={project.id}
            className="group relative h-full rounded-2xl p-[1px] overflow-hidden"
          >

            {/* 🔥 rotating border */}
            <div className="absolute inset-0 rotating-border opacity-30 group-hover:opacity-100 transition"></div>

            {/* 💎 card */}
            <div className="relative h-full flex flex-col rounded-2xl 
              bg-[#0b0f1a]/80 backdrop-blur-xl 
              border border-white/10 
              transition-all duration-500 
              group-hover:scale-[1.03] 
              group-hover:[transform:rotateX(3deg)_rotateY(-3deg)]
            ">

              {/* 🖼 IMAGE */}
              <div className="relative h-[240px] overflow-hidden rounded-t-2xl">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              </div>

              {/* 📄 CONTENT */}
              <div className="p-6 flex flex-col flex-grow">

                {/* TITLE */}
                <h2 className="text-white font-semibold text-lg 
                  transition">
                  {project.name}
                </h2>

                {/* DURATION */}
                <p className="text-gray-400 text-sm mt-1">
                  {project.duration}
                </p>

                {/* DESCRIPTION */}
                <p className="text-gray-300 text-sm mt-4 line-clamp-3">
                  {project.desc}
                </p>

                {/* TAGS */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.stacks.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs rounded-full 
                      bg-white/5 backdrop-blur-md 
                      border border-white/10 
                      text-blue-200
                      transition-all duration-300
                      hover:bg-blue-500/20 hover:scale-105"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

              
                 {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 mt-8">
              {project.live &&
                <Link
                  href={project.live}
                  target="_blank"
                  className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-yellow-400 to-orange-500 
              text-black font-semibold 
              hover:scale-105  py-2 rounded-xl text-xs sm:text-sm  hover:opacity-90 transition"
                >
                  <Link2Icon size={16} />
                  Website
                </Link>
              }

              <Link
                href={project.github}
                target="_blank"
                className="flex-1 flex items-center justify-center gap-2 border border-neutral-600 text-white py-2 rounded-xl text-xs sm:text-sm font-medium hover:bg-neutral-800 transition"
              >
                <GithubIcon size={16} />
                Github
              </Link>

            
            </div>

              </div>
            </div>
          </div>
        ))}

      </div>
    </div>
    <Footer/>
    </>
  );
}