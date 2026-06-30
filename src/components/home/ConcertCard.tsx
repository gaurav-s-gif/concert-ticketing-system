import {
  CalendarDays,
  IndianRupee,
  MapPin,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import type { Concert } from "../../types/concert";

interface Props {
  concert: Concert;
}

export default function ConcertCard({ concert }: Props) {
  const date = new Date(concert.dateTime);

  return (
    <Link
      to={`/concert/${concert.id}`}
      className="group block"
    >
      <article className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-purple-500 hover:shadow-2xl hover:shadow-purple-500/20">

        {/* Poster */}

        <div className="relative h-80 overflow-hidden">

          <img
            src={concert.posterImage}
            alt={concert.title}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
          />

          {/* Dark Overlay */}

          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

          {/* Price Badge */}

          <div className="absolute right-4 top-4 rounded-full bg-purple-600/90 px-4 py-2 text-sm font-semibold text-white backdrop-blur">

            From ₹{concert.basePrice}

          </div>

          {/* Bottom Info */}

          <div className="absolute bottom-6 left-6">

            <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-medium text-white backdrop-blur">

              LIVE EVENT

            </span>

            <h2 className="mt-4 text-3xl font-black text-white">

              {concert.title}

            </h2>

            <p className="mt-1 text-purple-200">

              {concert.artistName}

            </p>

          </div>

        </div>

        {/* Content */}

        <div className="space-y-5 p-6">

          <p className="line-clamp-3 leading-7 text-slate-400">

            {concert.description}

          </p>

          <div className="space-y-3">

            <div className="flex items-center gap-3 text-slate-300">

              <CalendarDays
                size={18}
                className="text-purple-400"
              />

              <span>

                {date.toLocaleDateString()} •{" "}
                {date.toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}

              </span>

            </div>

            <div className="flex items-center gap-3 text-slate-300">

              <MapPin
                size={18}
                className="text-purple-400"
              />

              <span>

                {concert.venueName}, {concert.city}

              </span>

            </div>

            <div className="flex items-center gap-3 text-green-400">

              <IndianRupee size={18} />

              <span className="font-semibold">

                Starting from ₹{concert.basePrice}

              </span>

            </div>

          </div>

          <div className="pt-2">

            <div className="flex items-center justify-between rounded-2xl bg-slate-800 px-5 py-4 transition group-hover:bg-slate-700">

              <span className="font-semibold text-white">

                View Details

              </span>

              <ArrowRight className="transition group-hover:translate-x-1 text-purple-400" />

            </div>

          </div>

        </div>

      </article>
    </Link>
  );
}