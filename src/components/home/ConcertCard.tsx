import { Link } from "react-router-dom";
import type { Concert } from "../../types/concert";

interface ConcertCardProps {
  concert: Concert;
}

export default function ConcertCard({ concert }: ConcertCardProps) {
  return (
    <Link to={`/concert/${concert.id}`}>
      <div className="group overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 transition-all duration-300 hover:-translate-y-2 hover:border-purple-500 hover:shadow-xl hover:shadow-purple-900/20">

        {/* Placeholder Image */}
        <div className="flex h-52 items-center justify-center bg-gradient-to-br from-purple-700 via-purple-600 to-indigo-700">
          <h2 className="px-4 text-center text-3xl font-bold text-white">
            {concert.title}
          </h2>
        </div>

        <div className="space-y-4 p-6">

          <div>
            <h3 className="text-2xl font-bold text-white">
              {concert.title}
            </h3>

            <p className="mt-1 text-purple-400">
              {concert.artistName}
            </p>
          </div>

          <p className="line-clamp-3 text-sm text-slate-400">
            {concert.description}
          </p>

          <div className="space-y-2 text-sm">

            <div className="flex justify-between">
              <span className="text-slate-400">
                Date
              </span>

              <span className="text-white">
                {new Date(concert.dateTime).toLocaleString()}
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-slate-400">
                Starting From
              </span>

              <span className="font-semibold text-green-400">
                ₹{concert.basePrice}
              </span>
            </div>

          </div>

          <button
            className="w-full rounded-xl bg-purple-600 py-3 font-semibold text-white transition hover:bg-purple-700"
          >
            View Details
          </button>

        </div>
      </div>
    </Link>
  );
}