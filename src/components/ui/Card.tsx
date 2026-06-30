import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export default function Card({
  children,
  className = "",
}: CardProps) {
  return (
    <div
      className={`
        rounded-3xl
        border
        border-slate-800
        bg-slate-900/80
        backdrop-blur-lg
        shadow-xl
        transition-all
        duration-300
        hover:border-purple-500/40
        hover:shadow-purple-500/10
        ${className}
      `}
    >
      {children}
    </div>
  );
}