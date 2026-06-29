import ConcertCard from "./ConcertCard";
import heroImage from "../../assets/hero.png";

const concerts = [
  {
    id: 1,
    title: "World Tour",
    artist: "Coldplay",
    venue: "Mumbai Stadium",
    date: "20 July 2026",
    price: 2499,
    image: heroImage,
  },
  {
    id: 2,
    title: "Night Vibes",
    artist: "Imagine Dragons",
    venue: "Delhi Arena",
    date: "5 August 2026",
    price: 1999,
    image: heroImage,
  },
  {
    id: 3,
    title: "Soul Live",
    artist: "Arijit Singh",
    venue: "Bangalore Palace",
    date: "18 August 2026",
    price: 1499,
    image: heroImage,
  },
];

const ConcertSection = () => {
  return (
    <section className="bg-slate-950 py-24">

      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-14 text-center">

          <p className="font-semibold uppercase tracking-widest text-purple-400">
            Featured Events
          </p>

          <h2 className="mt-3 text-5xl font-bold text-white">
            Upcoming Concerts
          </h2>

        </div>

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