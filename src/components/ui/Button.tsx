import type { ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
}

export default function Button({
  children,
  loading,
  className = "",
  ...props
}: Props) {
  return (
    <button
      {...props}
      className={`
        w-full
        rounded-xl
        bg-gradient-to-r
        from-purple-600
        to-indigo-600
        px-6
        py-3
        font-semibold
        text-white
        transition-all
        duration-300
        hover:scale-[1.02]
        hover:shadow-lg
        hover:shadow-purple-600/30
        disabled:cursor-not-allowed
        disabled:opacity-60
        ${className}
      `}
    >
      {loading ? "Loading..." : children}
    </button>
  );
}