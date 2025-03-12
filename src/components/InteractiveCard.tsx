"use client";

interface InteractiveCardProps {
  children: React.ReactNode;
}

export default function InteractiveCard({ children }: InteractiveCardProps) {
  function handleMouseAction(event: React.MouseEvent<HTMLDivElement>) {
    if (event.type === "mouseover") {
      event.currentTarget.classList.add("shadow-2xl", "bg-neutral-200");
    } else {
      event.currentTarget.classList.remove("shadow-2xl", "bg-neutral-200");
    }
  }

  return (
    <div
      className="flex flex-col w-[300px] rounded-lg transition-all overflow-hidden shadow-lg bg-white"
      onMouseOver={handleMouseAction}
      onMouseOut={handleMouseAction}
    >
      {children}
    </div>
  );
}
