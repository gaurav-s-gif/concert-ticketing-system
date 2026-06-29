import type { Concert } from "../../types/concert";

interface Props {
  concert: Concert;
}

const ConcertCard = ({ concert }: Props) => {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition hover:border-purple-500 hover:-translate-y-1">

      <h2 className="text-2xl font-bold">
        {concert.title}
      </h2>

      <p className="mt-2 text-purple-400">
        {concert.artistName}
      </p>

      <p className="mt-4 text-slate-400">
        {concert.description}
      </p>

      <div className="mt-6 flex justify-between text-sm text-slate-300">
        <span>
          {new Date(concert.dateTime).toLocaleDateString()}
        </span>

        <span className="font-bold text-white">
          ₹{concert.basePrice}
        </span>
      </div>

      <button className="mt-6 w-full rounded-xl bg-purple-600 py-3 font-semibold transition hover:bg-purple-700">
        Book Now
      </button>

    </div>
  );
};

export default ConcertCard;