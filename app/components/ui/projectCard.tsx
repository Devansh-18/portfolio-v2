"use client";
import bg from "../../public/grid-ellipsis.svg";

export const CardWithGridEllipsis = ({
  children,
}: {
  children: React.ReactNode;
}) => (
  <div className="relative rounded-2xl bg-zinc-950 border border-zinc-900">
    <div  style={{ backgroundImage: `url(${bg.src})` }} className="size-full bg-repeat bg-[length:25px_25px]">
      <div className="size-full rounded-2xl bg-gradient-to-tr from-zinc-950 via-zinc-950/70 to-zinc-950">
        {children}
      </div>
    </div>
  </div>
);

