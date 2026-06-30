import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function PageContainer({
  children,
}: Props) {
  return (
    <main className="min-h-screen bg-slate-950 pt-28 pb-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        {children}
      </div>
    </main>
  );
}