import ConcertCard from "./ConcertCard";
import { useConcerts } from "../../hooks/useConcerts";
const ConcertSection = () => {

  const { concerts, loading, error } = useConcerts();

  if (loading)
    return (
      <h2 className="py-20 text-center text-white">
        Loading concerts...
      </h2>
    );

  if (error)
    return (
      <h2 className="py-20 text-center text-red-500">
        {error}
      </h2>
    );

  return (
    <section className="bg-slate-950 py-20">

      <div className="mx-auto max-w-7xl px-6">

        <h2 className="mb-12 text-center text-5xl font-bold">
          Upcoming Concerts
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

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
};

export default ConcertSection;