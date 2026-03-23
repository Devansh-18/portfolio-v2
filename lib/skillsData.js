import C from "../public/skills/c.svg";
import c from "../public/skills/c-1.svg";
import web1 from "../public/skills/html.svg";
import web2 from "../public/skills/css.svg";
import web3 from "../public/skills/javascript.svg";
import web4 from "../public/skills/react.png";
import web5 from "../public/skills/nodejs.svg";
import web6 from "../public/skills/express.svg";
import web7 from "../public/skills/mongodb.svg";
import web8 from "../public/skills/github.svg";
import web11 from "../public/skills/vscode.svg";
import web12 from "../public/skills/bootstrap.svg";
import web16 from "../public/skills/redux.svg";
import web20 from "../public/skills/tailwind.svg";
import web21 from "../public/skills/nextjs.svg";
import web23 from "../public/skills/postman.svg";
import web24 from "../public/skills/ts.png";
import web25 from "../public/skills/sql.png";
import web26 from "../public/skills/materialUI.png";
import web27 from "../public/skills/clerk.svg";
import web28 from "../public/skills/postgreSQL.png";
import web29 from "../public/skills/webrtc.png";
import web30 from "../public/skills/socket.png";
import web31 from "../public/skills/prisma.png";
import web32 from "../public/skills/docker.svg";
import web33 from "../public/skills/jwt.jpg";

const skills = [
  {
    id: 1,
    skill: "Programming Language",
    tech: [
      { id: 101, logo: c, name: "C Language" },
      { id: 102, logo: C, name: "C++ Language" },
      { id: 103, logo: web3, name: "Javascript" },
      { id: 104, logo: web24, name: "Typescript" },
      { id: 105, logo: web25, name: "SQL" },
    ],
  },
  {
    id: 2,
    skill: "Web Development",
    tech: [
      { id: 201, logo: web1, name: "HTML" },
      { id: 202, logo: web2, name: "CSS" },
      { id: 203, logo: web4, name: "ReactJS" },
      { id: 204, logo: web16, name: "Redux Toolkit" },
      { id: 205, logo: web21, name: "NextJS" },
      { id: 206, logo: web5, name: "NodeJS" },
      { id: 207, logo: web6, name: "ExpressJS" },
      { id: 208, logo: web29, name: "WebRTC" },
      { id: 209, logo: web30, name: "Socket.IO" },
      // { id: 207, logo: web6, name: "ExpressJS" },
    ],
  },
  {
    id: 3,
    skill: "Styling",
    tech: [
      { id: 301, logo: web12, name: "Bootstrap" },
      { id: 302, logo: web20, name: "Tailwind CSS" },
      // { id: 303, logo: web26, name: "Material UI" },
    ],
  },
  {
    id: 4,
    skill: "Database",
    tech: [
      { id: 401, logo: web7, name: "MongoDB" },
      { id: 402, logo: web28, name: "PostgreSQL" },
      { id: 403, logo: web31, name: "Prisma" },
    ],
  },
  {
    id: 5,
    skill: "Tools / Platforms",
    tech: [
      { id: 501, logo: web11, name: "VS CODE" },
      { id: 502, logo: web23, name: "Postman" },
      { id: 503, logo: web8, name: "Github" },
      { id: 504, logo: web27, name: "Clerk" },
      { id: 505, logo: web32, name: "Docker" },
      { id: 506, logo: web33, name: "JWT" },
    ],
  },
];

export {skills}