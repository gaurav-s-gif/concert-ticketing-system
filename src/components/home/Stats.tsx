import { Users, Ticket, Music2, Star } from "lucide-react";

const stats = [
  {
    icon: <Music2 size={36} />,
    value: "500+",
    label: "Concerts",
  },
  {
    icon: <Ticket size={36} />,
    value: "50K+",
    label: "Tickets Sold",
  },
  {
    icon: <Users size={36} />,
    value: "20K+",
    label: "Happy Customers",
  },
  {
    icon: <Star size={36} />,
    value: "4.9",
    label: "Average Rating",
  },
];

export default function Stats() {
  return (
    <section className="bg-slate-950 py-20">

      <div className="mx-auto grid max-w-7xl gap-6 px-6 md:grid-cols-2 xl:grid-cols-4">

        {stats.map((stat) => (

          <div
            key={stat.label}
            className="rounded-3xl border border-slate-800 bg-slate-900 p-8 text-center transition hover:border-purple-500 hover:-translate-y-2"
          >

            <div className="flex justify-center text-purple-400">
              {stat.icon}
            </div>

            <h2 className="mt-5 text-5xl font-black text-white">
              {stat.value}
            </h2>

            <p className="mt-3 text-slate-400">
              {stat.label}
            </p>

          </div>

        ))}

      </div>

    </section>
  );
}