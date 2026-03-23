import React from "react";

type Props = {
  text: string;
};

function Separator({ text }: Props) {
  return (
    <div className="py-20 mt-12 flex items-center justify-center">
      
      {/* LEFT LINE */}
      <div className="relative w-full max-w-[100px] md:max-w-[250px] h-[1px] bg-gradient-to-r from-transparent via-purple-500/40 to-blue-500/60">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-blue-500 rotate-45 rounded-sm shadow-[0_0_10px_#3b82f6]"></div>
      </div>

      {/* TEXT BADGE */}
      <div className="mx-6 text-center  px-5 py-2 rounded-full 
        bg-white/5 backdrop-blur-md 
        border border-white/30 
        text-blue-100 text-xs md:text-sm font-semibold tracking-wide 
       
        hover:scale-105 transition-all duration-300
      ">
        {text}
      </div>

      {/* RIGHT LINE */}
      <div className="relative w-full max-w-[100px] md:max-w-[250px] h-[1px] bg-gradient-to-l from-transparent via-purple-500/40 to-blue-500/60">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-purple-500 rotate-45 rounded-sm shadow-[0_0_10px_#a855f7]"></div>
      </div>

    </div>
  );
}

export default Separator;