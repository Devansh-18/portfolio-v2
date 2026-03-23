"use client";

import Image from 'next/image';
import { cn } from '../../../lib/utils';
import bg from "../../../public/grid-ellipsis.svg";

export const CardWithGridEllipsis = ({
  children,
}: {
  children: React.ReactNode;
}) => (
  <div className="relative rounded-xl h-32 p-[1px] overflow-hidden">

    <div className="absolute inset-0 rotating-border op0 group-hover:opacity-100 transition duration-500"></div>

    <div className="relative rounded-xl 
      bg-zinc-950/80 backdrop-blur-xl 
      border border-white/10 
      transition-all duration-300 
      group-hover:scale-[1.05] 
      group-hover:shadow-[0_0_25px_rgba(59,130,246,0.3)]
    ">

      <div
        style={{ backgroundImage: `url(${bg.src})` }}
        className="size-full bg-repeat bg-[length:25px_25px]"
      >
        <div className="size-full bg-gradient-to-tr from-zinc-950 via-zinc-950/70 to-zinc-950">
          {children}
        </div>
      </div>

    </div>
  </div>
);

export const CardBody = ({
  title,
  icon,
  className = "",
}: {
  title: string;
  icon: string;
  className?: string;
}) => (
  <div
    className={cn(
      "text-center h-32 p-6 flex flex-col items-center justify-center transition-all duration-300",
      className
    )}
  >
  <Image
  src={icon}
  alt={title}
  width={35}
  height={35}
  className="w-9 h-9 mb-3 transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_10px_rgba(59,130,246,0.7)]"
/>

    <p className="text-sm text-gray-300 group-hover:text-white transition">
      {title}
    </p>
  </div>
);