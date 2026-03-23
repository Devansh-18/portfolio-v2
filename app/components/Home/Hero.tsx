"use client";
import React, { useEffect, useState } from "react";
import profile from "../../../public/devansh.jpeg";
import Image from "next/image";
import India from "../../../public/india.svg";
import { links } from "../../../lib/contactData";
import { motion } from "framer-motion";
import IntroText from "../ui/IntroText";
import { FileDown } from "lucide-react";
import { Tiles } from "../ui/tiles";
import { ShinyButton } from "../ui/shiny-button";
import { Boxes } from "../ui/home-bg";
import { cn } from "@/lib/utils";

const RESUME_LINK = process.env.NEXT_PUBLIC_RESUME_LINK;

function page() {
  const [wave, setWave] = useState(false);

  React.useEffect(() => {
    setWave(true);
  }, []);
  return (
    <>
      <div className="h-96 relative w-full min-h-screen overflow-hidden flex flex-col items-center justify-center rounded-lg">
        <div className="absolute inset-0 w-full min-h-screen  z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

        <Boxes />
        <div className="relative z-10 flex md:flex-nowrap flex-wrap-reverse justify-center gap-10 w-[80%] sm:w-[80%] md:w-[75vw] mx-auto mt-12">
          <div className="w-full">
            <p className="text-4xl text-white font-semibold">
              Hi, I am Devansh!{" "}
              <span className={`wave ${wave ? "animate-once" : ""}`}>👋</span>
            </p>

            <p className="py-4 text-sm flex items-center gap-2 text-gray-400 font-medium">
              <Image alt="Indian-Flag" src={India} width={20} height={20} />
              <span>Based in India | 22 Years Old</span>
            </p>

            <p className="text-sm text-gray-300 leading-relaxed">
              Full-Stack Developer specializing in Next.js, AI-driven
              applications, WebRTC, scalable backend systems & modern UI
              engineering. I am exploring opportunities in the field of
              technology, where I can contribute to building valuable products.
            </p>

            <div className="flex flex-wrap py-8 justify-start gap-4 items-center">
              <ShinyButton
                onClick={() => window.open(RESUME_LINK, "_blank")}
                className="flex justify-center items-center gap-2"
              >
                <FileDown width={16} height={16} />
                <span>Resume</span>
              </ShinyButton>

              <div className="flex gap-3 items-center">
                {links.map((link) => (
                  <motion.div
                    key={link.id}
                    whileHover={{ y: -4 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="cursor-pointer text-gray-400 hover:text-white transition"
                    onClick={() => window.open(link.url, "_blank")}
                  >
                    {link.logo}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
          <motion.div className="relative z-10 ">
            <Image
              alt="Profile Photo"
              src={profile}
              className="rounded-xl sm:w-[28vw] shadow-[0_20px_60px_-20px_rgba(255,215,0,0.25)]"
              width={450}
              height={450}
            />
          </motion.div>
        </div>
      </div>
    
    </>
  );
}

export default page;
