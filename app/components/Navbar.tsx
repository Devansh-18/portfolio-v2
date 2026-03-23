"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Briefcase, BookOpen, Mail } from "lucide-react";

function Navbar() {
  const pathname = usePathname();

  const links = [
  { name: "Home", href: "/", icon: Home },
  { name: "Projects", href: "/projects", icon: Briefcase },
  { name: "Contact", href: "/contact", icon: Mail },
];

  const [showNav, setShowNav] = useState(true);

  useEffect(() => {
    let lastScroll = window.scrollY;

    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll > lastScroll && currentScroll > 100) {
        setShowNav(false);
      } else {
        setShowNav(true);
      }

      lastScroll = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
   <nav
  className={`fixed 
  bottom-auto 
  top-6
  inset-x-0 flex justify-center 
  z-50 
  transition-transform duration-300
  ${showNav ? "translate-y-0" : "-translate-y-[150%]"}`}
>
      <div className="bg-[#0f172a]/80 backdrop-blur-xl border border-white/10 
shadow-[0_8px_30px_rgba(0,0,0,0.4)] 
rounded-full px-8 py-4 
flex items-center justify-between sm:justify-center gap-8">
        <div className="hidden sm:flex md:flex  items-center gap-10 text-md font-medium">
          {links.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link key={link.name} href={link.href} className="relative group">
                <span
                  className={` w-full transition-colors duration-300 ${
                    isActive ? "text-white" : "text-gray-400"
                  } group-hover:text-white`}
                >
                  {link.name}
                </span>

                <span
                  className={`absolute left-0 -bottom-1 h-[2px] w-full bg-gradient-to-r from-blue-500 to-purple-500 transform origin-left transition-transform duration-300 ${isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`}
                />
              </Link>
            );
          })}
        </div>

        <div className="flex sm:hidden items-center justify-between gap-8 ">
          {links.map((link) => {
            const isActive = pathname === link.href;

            return (
               <Link key={link.name} href={link.href} className="relative group">
                <span
                  className={` w-full transition-colors duration-300 ${
                    isActive ? "text-white" : "text-gray-400"
                  } group-hover:text-white`}
                >
                  {link.name}
                </span>

                <span
                  className={`absolute left-0 -bottom-1 h-[2px] w-full bg-gradient-to-r from-blue-500 to-purple-500 transform origin-left transition-transform duration-300 ${isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`}
                />
              </Link>
            )
          })}
        </div>

       </div>
       </nav>
  );
}

export default Navbar;
