"use client";
import Image from "next/image";
import { experience } from "../../../lib/timelineData";

export default function Timeline() {
  return (
    <div className="mx-auto  w-[80%] md:w-1/2 space-y-12">
      {experience.map((exp, id) => (
        
        <div key={id} className="relative group rounded-2xl p-[1px] overflow-hidden">
          
       
          <div className="absolute inset-0 rounded-2xl rotating-border opacity-70 group-hover:opacity-100 transition duration-500"></div>

          
          <div className="relative rounded-2xl overflow-hidden 
            bg-[#0b0f1a]/80 backdrop-blur-xl 
            border border-white/10 
            transition-all duration-500 
            group-hover:scale-[1.02] 
            group-hover:[transform:rotateX(3deg)_rotateY(-3deg)]
          ">

            <div className="relative z-10 p-8 shimmer">
              
              <div className="absolute top-8 right-8 text-sm text-blue-400 tracking-wide">
                {exp.year}
              </div>

              <div className="flex flex-wrap items-start gap-4 mb-4">
                <Image
                  src={exp.logo}
                  height={50}
                  width={50}
                  alt="logo"
                  className="rounded-md object-contain 
                  bg-white/10 p-1 backdrop-blur-md 
                  shadow-[0_0_15px_rgba(255,255,255,0.2)]"
                />

                <div>
                  <div
                    onClick={() => window.open(exp.marksheet, "_blank")}
                    className="flex items-center gap-1 group/title"
                  >
                    <h3 className="md:text-lg text-sm font-semibold text-white 
                      transition-all duration-300 
                      
                      group-hover/title:drop-shadow-[0_0_10px_rgba(59,130,246,0.6)]">
                      {exp.school_name}
                    </h3>

                   
                  </div>

                  <p className="text-blue-300 text-sm">
                    {exp.degree} · Grade {exp.grade}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mt-4">
                {exp.Courses.map((course, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs rounded-full 
                    bg-white/5 backdrop-blur-md
                    border border-white/10
                    text-blue-200
                    transition-all duration-300
                    "
                  >
                    {course}
                  </span>
                ))}
              </div>

              <ul className="mt-4 space-y-2 text-sm text-pink-300">
                {exp.coCurricular.map((activity, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-pink-500 shadow-[0_0_8px_#ff00ff]"></span>
                    <span>{activity}</span>
                  </li>
                ))}
              </ul>

            </div>
          </div>
        </div>

      ))}
    </div>
  );
}