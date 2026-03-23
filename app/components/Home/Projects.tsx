"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Github, Link2Icon } from "lucide-react";
import { projectData } from "../../../lib/projectData";

export default function Project() {
  const router = useRouter();
  return (
    <section className="mx-auto flex flex-col items-center pb-14 pt-8 w-[80%] md:w-1/2">
     

      {/* <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {projectData.slice(0, 2).map((project) => (
          <div className="relative rounded-2xl" key={project.id}>
          

            <CardWithGridEllipsis>
              <div
                key={project.id}
                className="border border-neutral-700 rounded-2xl p-5 cursor-pointer shadow-lg"
              >
                <div className="relative w-full h-40 overflow-hidden mb-4">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className="object-cover rounded-md"
                  />
                </div>

                <h3 className="text-md font-semibold text-white">
                  {project.name}
                </h3>

                <p className="text-xs text-neutral-400 mt-1">
                  {project.duration}
                </p>

                <div className="flex flex-wrap gap-2 my-4">
                  {project.stacks.map((stack, index) => (
                    <span
                      key={index}
                      className="text-xs bg-neutral-800 text-neutral-200 px-2 py-1 rounded-full border border-neutral-700"
                    >
                      {stack}
                    </span>
                  ))}
                </div>

                <div className="flex sm:flex-nowrap flex-wrap gap-3 text-xs">
                  <a
                    href={project.live}
                    target="_blank"
                    className="flex w-full items-center justify-center gap-2 bg-white text-black py-2 rounded-xl text-sm font-medium hover:opacity-90 transition"
                  >
                    <Link2Icon width={18} />
                    Website
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    className="flex w-full items-center justify-center gap-2 border border-neutral-600 text-white py-2 rounded-xl text-sm font-medium hover:bg-neutral-800 transition"
                  >
                    <Github width={18} />
                    Source
                  </a>
                </div>
              </div>
            </CardWithGridEllipsis>
          </div>
        ))}
      </div> */}
       {/* GRID */}
      <div className="grid md:grid-cols-2 gap-8 items-stretch">
        {projectData.slice(0,2).map((project) => (
          <div key={project.id} className="group relative h-full rounded-2xl p-[1px] overflow-hidden">

            {/* 🔥 rotating border */}
            <div className="absolute inset-0 rotating-border opacity-40 group-hover:opacity-100 transition duration-500"></div>

            {/* 💎 card */}
            <div className="relative h-full flex flex-col rounded-2xl 
              bg-[#0b0f1a]/80 backdrop-blur-xl 
              border border-white/10 
              transition-all duration-500 
              group-hover:scale-[1.02] 
              group-hover:[transform:rotateX(3deg)_rotateY(-3deg)]
            ">

              {/* 🖼 IMAGE */}
              <div className="relative h-[180px] overflow-hidden rounded-t-2xl">
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
                <h3 className="text-white font-semibold text-lg 
                  ">
                  {project.name}
                </h3>

                {/* DURATION */}
                <p className="text-sm text-gray-400 mt-1">
                  {project.duration}
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
                      transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* PUSH BUTTONS DOWN */}
                <div className="mt-auto pt-6 flex gap-4">

                  {/* WEBSITE */}
                  <a href={project.live}
                    target="_blank" className="text-center flex-1 py-2 rounded-lg 
                    bg-white/10 border border-white/10 
                    text-white text-sm
                    backdrop-blur-md
                    transition-all duration-300
                    cursor-pointer hover:border-white/30">
                    🔗 Website
                  </a>

                  {/* SOURCE */}
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
