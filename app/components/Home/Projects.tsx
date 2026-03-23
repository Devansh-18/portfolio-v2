"use client";
import Image from "next/image";
import { projectData } from "../../../lib/projectData";

export default function Project() {
  return (
    <section className="mx-auto flex flex-col items-center pb-14 pt-8 w-[80%] md:w-1/2">
     
      <div className="grid md:grid-cols-2 gap-8 items-stretch">
        {projectData.slice(0,2).map((project) => (
          <div key={project.id} className="group relative h-full rounded-2xl p-[1px] overflow-hidden">

            <div className="absolute inset-0 rotating-border opacity-40 group-hover:opacity-100 transition duration-500"></div>

            <div className="relative h-full flex flex-col rounded-2xl 
              bg-[#0b0f1a]/80 backdrop-blur-xl 
              border border-white/10 
              transition-all duration-500 
              group-hover:scale-[1.02] 
              group-hover:[transform:rotateX(3deg)_rotateY(-3deg)]
            ">

              <div className="relative h-[180px] overflow-hidden rounded-t-2xl">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  
                  className="object-cover transition duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              </div>

              <div className="p-6 flex flex-col flex-grow">

                <h3 className="text-white font-semibold text-lg 
                  ">
                  {project.name}
                </h3>

                <p className="text-sm text-gray-400 mt-1">
                  {project.duration}
                </p>

                <div className="flex flex-wrap gap-2 mt-4">
                  {project.stacks.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs rounded-full 
                      bg-white/5 backdrop-blur-md
                      border border-white/10
                      text-blue-200
                      transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-auto pt-6 flex gap-4">

                  <a href={project.live}
                    target="_blank" className="text-center flex-1 py-2 rounded-lg 
                    bg-white/10 border border-white/10 
                    text-white text-sm
                    backdrop-blur-md
                    transition-all duration-300
                    cursor-pointer hover:border-white/30">
                    🔗 Website
                  </a>

                  <a href={project.github}
                    target="_blank" className="text-center flex-1 py-2 rounded-lg 
                    border border-white/10 
                    text-white text-sm
                    transition-all duration-300
                    cursor-pointer hover:border-white/40">
                    💻 Source
                  </a>

                </div>
              </div>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
