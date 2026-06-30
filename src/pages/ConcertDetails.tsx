import { useNavigate, useParams } from "react-router-dom";
import { Calendar, IndianRupee, Music } from "lucide-react";
import { useConcert } from "../hooks/useConcert";

export default function ConcertDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { concert, loading, error } = useConcert(Number(id));

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-950 text-white">
        <h2 className="text-2xl font-semibold animate-pulse">
          Loading Concert...
        </h2>
      </div>
    );
  }

  if (error || !concert) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-950 text-red-500">
        <h2 className="text-2xl font-semibold">
          {error || "Concert not found"}
        </h2>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-slate-950 pt-28 pb-16 text-white">
      <div className="mx-auto max-w-6xl px-6">

        {/* Hero Banner */}
        <div className="overflow-hidden rounded-3xl bg-gradient-to-r from-purple-700 via-purple-600 to-indigo-700">

          <div className="flex min-h-[320px] flex-col justify-center px-10 py-12">

            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-purple-200">
              Live Concert
            </p>

            <h1 className="text-5xl font-bold">
              {concert.title}
            </h1>

            <p className="mt-4 text-xl text-purple-100">
              {concert.artistName}
            </p>

          </div>

        </div>

        {/* Details */}
        <div className="mt-10 grid gap-8 lg:grid-cols-3">

          {/* Left */}
          <div className="space-y-6 lg:col-span-2">

            <div className="rounded-2xl bg-slate-900 p-8">

              <h2 className="mb-4 text-2xl font-bold">
                About Concert
              </h2>

              <p className="leading-8 text-slate-300">
                {concert.description}
              </p>

            </div>

          </div>

          {/* Right */}
          <div>

            <div className="rounded-2xl bg-slate-900 p-8 shadow-lg">

              <h2 className="mb-6 text-2xl font-bold">
                Event Details
              </h2>

              <div className="space-y-6">

                <div className="flex items-center gap-4">

                  <Calendar className="text-purple-400" />

                  <div>
                    <p className="text-sm text-slate-400">
                      Date & Time
                    </p>

                    <p className="font-medium">
                      {new Date(concert.dateTime).toLocaleString()}
                    </p>

                  </div>

                </div>

                <div className="flex items-center gap-4">

                  <Music className="text-purple-400" />

                  <div>
                    <p className="text-sm text-slate-400">
                      Artist
                    </p>

                    <p className="font-medium">
                      {concert.artistName}
                    </p>

                  </div>

                </div>

                <div className="flex items-center gap-4">

                  <IndianRupee className="text-green-400" />

                  <div>
                    <p className="text-sm text-slate-400">
                      Starting Price
                    </p>

                    <p className="text-xl font-bold text-green-400">
                      ₹{concert.basePrice}
                    </p>

                  </div>

                </div>

              </div>

              <button
                onClick={() =>
                  navigate(`/booking?concertId=${concert.id}`)
                }
                className="mt-8 w-full rounded-xl bg-purple-600 py-3 text-lg font-semibold transition hover:bg-purple-700"
              >
                Book Tickets
              </button>

            </div>

          </div>

        </div>
      </div>
    </main>
  );
}