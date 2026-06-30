import { CalendarDays, Clock3, IndianRupee, MapPin, Music2 } from "lucide-react";
import type { Concert } from "../../types/concert";

interface Props {
  concert: Concert;
}

export default function ConcertInfo({ concert }: Props) {
  const date = new Date(concert.dateTime);

  return (
    <section className="mb-12">

      <div className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900">

        {/* Top Banner */}
        <div className="bg-gradient-to-r from-purple-700 via-fuchsia-600 to-indigo-700 p-8">

          <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-medium text-white backdrop-blur">

            <Music2 size={16} />

            Live Concert

          </span>

          <h1 className="mt-6 text-4xl font-black text-white md:text-5xl">
            {concert.title}
          </h1>

          <p className="mt-2 text-xl text-purple-100">
            {concert.artistName}
          </p>

        </div>

        {/* Details */}

        <div className="grid gap-6 p-8 md:grid-cols-4">

          <div className="flex items-center gap-4">

            <CalendarDays className="text-purple-400" />

            <div>

              <p className="text-sm text-slate-400">
                Date
              </p>

              <p className="font-medium text-white">
                {date.toLocaleDateString()}
              </p>

            </div>

          </div>

          <div className="flex items-center gap-4">

            <Clock3 className="text-purple-400" />

            <div>

              <p className="text-sm text-slate-400">
                Time
              </p>

              <p className="font-medium text-white">
                {date.toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </p>

            </div>

          </div>

          <div className="flex items-center gap-4">

            <MapPin className="text-purple-400" />

            <div>

              <p className="text-sm text-slate-400">
                Venue
              </p>

              {/* Replace with venueName when your backend returns it */}
              <p className="font-medium text-white">
                {concert.venueName}
              </p>

                <p className="text-sm text-slate-400">
                    {concert.city}
                </p>

            </div>

          </div>

          <div className="flex items-center gap-4">

            <IndianRupee className="text-green-400" />

            <div>

              <p className="text-sm text-slate-400">
                Starting Price
              </p>

              <p className="font-bold text-green-400">
                ₹{concert.basePrice}
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}