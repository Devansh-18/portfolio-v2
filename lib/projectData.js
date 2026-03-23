import Image1 from '../public/projects/1.png'
import Image2 from '../public/projects/2.png'
import Image3 from '../public/projects/3.png'

const projectData = [
   {
    id: 1,
    name: "AI Powered Quiz App",
    desc:"Scalable full-stack quiz platform supporting dynamic quizzes and AI-generated questions.",
    slug: "drawtool-whiteboard",
    duration: "Jan 2026 - Mar 2026",
    stacks: [
      "Next.js",
      "PostgreSQL",
      "Prisma",
      "Google Gemini",
    ],
    image: Image1,
    
    github: "https://github.com/Devansh-18/pariksha-app",
    live: "https://pariksha-app.vercel.app/"
  },
    {
    id: 2,
    name: "AI Face Recognition Attendance System",
    desc: "This project helps automate attendance using facial recognition and geolocation tracking.",
    slug: "ai-face-recognition-attendance",
    duration: "Oct 2025 – Dec 2025",
    stacks: [
        "ReactJS",        
        "Node.js",
      "Express.js",
      "MongoDB",
      "Azure",
    ],
    image: Image2,
    
    github: "https://github.com/Devansh-18/Attendance-App",
    live: "https://attendance-app-olive.vercel.app/"
  },

  {
    id: 3,
    name: "Video Chat Application",
    desc: "A real-time video chat application built for seamless and real-time video communication",
    slug: "",
    duration: "Jan 2025 - Feb 2025",
    stacks: [
      "React",
      "Node.js",
      "Socket.IO",
      "WebRTC",
    ],
    image: Image3,
    github: "https://github.com/Devansh-18/Video-Call-App",
    live: "https://seeyouhere.netlify.app/"
  },

  
];

export { projectData };