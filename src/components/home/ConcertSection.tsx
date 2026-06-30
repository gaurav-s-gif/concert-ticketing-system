import { useConcerts } from "../../hooks/useConcerts";
import ConcertCard from "./ConcertCard";

export default function ConcertSection() {
  const { concerts, loading, error } = useConcerts();

  if (loading) {
    return (
      <section className="bg-slate-950 py-24">
        <div className="mx-auto max-w-7xl px-6">

          <h2 className="mb-12 text-center text-4xl font-black text-white">
            Featured Concerts
          </h2>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="h-[470px] animate-pulse rounded-3xl bg-slate-800"
              />
            ))}

          </div>

        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="bg-slate-950 py-20 text-center text-red-400">
        {error}
      </section>
    );
  }

  return (
    <section className="bg-slate-950 py-24">

      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-16 text-center">

          <span className="rounded-full bg-purple-600/20 px-5 py-2 text-sm font-medium text-purple-300">
            LIVE EVENTS
          </span>

          <h2 className="mt-6 text-5xl font-black text-white">
            Featured Concerts
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-400">
            Discover unforgettable performances from India's biggest
            artists and experience live entertainment like never before.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {concerts.map((concert) => (
            <ConcertCard
              key={concert.id}
              concert={concert}
            />
          ))}

        </div>

      </div>

    </section>
  );
}