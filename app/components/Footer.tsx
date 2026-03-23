import { Github, Linkedin, Mail, Youtube } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-32 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-12">
        
        <div>
          <h2 className="text-xl font-semibold text-white mb-4">
            Devansh Dubey
          </h2>
          <p className="text-gray-400 leading-relaxed">
            Building intelligent systems, scalable web applications,
            and thoughtful digital experiences.
          </p>
        </div>

        <div>
          <h3 className="text-sm text-blue-400 mb-4 tracking-widest">
            NAVIGATION
          </h3>
          <ul className="space-y-2 text-gray-400 flex flex-col">
            <Link href={"/"}  className="hover:text-white transition">Home</Link>
            <Link href={"/projects"} className="hover:text-white transition">Projects</Link>
            <Link href={"/contact"} className="hover:text-white transition">Contact</Link>
          </ul>
        </div>

        <div>
          <h3 className="text-sm text-blue-400 mb-4 tracking-widest">
            CONNECT
          </h3>

          <div className="space-y-3">
            <a href="https://github.com/Devansh-18"
                target="_blank" className="flex items-center gap-3 text-gray-400 hover:text-white transition cursor-pointer" >
              <Github size={18} /> GitHub
            </a >
            <a href="https://www.linkedin.com/in/devanshdubey18/"
                target="_blank" className="flex items-center gap-3 text-gray-400 hover:text-white transition cursor-pointer" >
              <Linkedin size={18} /> LinkedIn
            </a >
            <a href="mailto:devanshdubey1827@gmail.com"
                target="_blank" className="flex items-center gap-3 text-gray-400 hover:text-white transition cursor-pointer" >
              <Mail size={18} /> Gmail
            </a >
           
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-6 px-6 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
        <p>© 2026 Devansh Dubey. Built with Next.js</p>
        <p className="mt-2 md:mt-0">
          Designed & Developed with intention ✨
        </p>
      </div>
    </footer>
  );
}