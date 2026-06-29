import type { Concert } from "../../types/concert";
import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

interface ConcertCardProps {
  concert: Concert;
}

const ConcertCard = ({ concert }: ConcertCardProps) => {
  return (
    <div className="group overflow-hidden rounded-2xl bg-slate-900 border border-slate-800 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-purple-500 hover:shadow-purple-500/20">

      <div className="overflow-hidden">
        <img
          src={concert.image}
          alt={concert.title}
          className="h-60 w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      <div className="p-5">

        <h3 className="text-2xl font-bold text-white">
          {concert.title}
        </h3>

        <p className="mt-1 text-purple-400">
          {concert.artist}
        </p>

        <div className="mt-4 flex items-center gap-2 text-gray-400 text-sm">
          <FaCalendarAlt />
          {concert.date}
        </div>

        <div className="mt-2 flex items-center gap-2 text-gray-400 text-sm">
          <FaMapMarkerAlt />
          {concert.venue}
        </div>

        <div className="mt-6 flex items-center justify-between">

          <span className="text-2xl font-bold text-white">
            ₹{concert.price}
          </span>

          <button className="rounded-lg bg-purple-600 px-5 py-2 font-semibold transition hover:bg-purple-700">
            Book Now
          </button>

        </div>

      </div>

    </div>
  );
};

export default ConcertCard;