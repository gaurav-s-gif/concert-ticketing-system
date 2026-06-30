import { useNavigate, useParams } from "react-router-dom";
import {
  ArrowLeft,
  CalendarDays,
  Clock3,
  IndianRupee,
  MapPin,
  Music2,
} from "lucide-react";
import { useConcert } from "../hooks/useConcert";

export default function ConcertDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { concert, loading, error } = useConcert(Number(id));

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-950 text-white">
        <div className="text-center">
          <div className="mx-auto h-16 w-16 animate-spin rounded-full border-4 border-purple-600 border-t-transparent" />
          <p className="mt-6 text-xl">Loading Concert...</p>
        </div>
      </div>
    );
  }

  if (error || !concert) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-950 text-white">
        <div className="text-center">

          <h2 className="text-3xl font-bold text-red-500">
            {error || "Concert not found"}
          </h2>

          <button
            onClick={() => navigate("/")}
            className="mt-8 rounded-xl bg-purple-600 px-6 py-3 hover:bg-purple-700"
          >
            Back Home
          </button>

        </div>
      </div>
    );
  }

  const date = new Date(concert.dateTime);

  return (
    <main className="min-h-screen bg-slate-950 pt-24 pb-20 text-white">

      {/* Back */}

      <div className="mx-auto max-w-7xl px-6">

        <button
          onClick={() => navigate(-1)}
          className="mb-8 flex items-center gap-2 text-slate-300 transition hover:text-white"
        >
          <ArrowLeft size={18} />
          Back
        </button>

      </div>

      {/* Banner */}

      <section className="mx-auto max-w-7xl px-6">

        <div className="relative overflow-hidden rounded-[32px]">

          <img
            src={concert.bannerImage}
            alt={concert.title}
            className="h-[460px] w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-black/60 to-transparent" />

          <div className="absolute bottom-10 left-10">

            <span className="rounded-full bg-purple-600 px-4 py-2 text-sm font-semibold">
              LIVE EVENT
            </span>

            <h1 className="mt-5 text-6xl font-black">
              {concert.title}
            </h1>

            <p className="mt-3 text-2xl text-purple-200">
              {concert.artistName}
            </p>

          </div>

        </div>

      </section>

      {/* Main Layout */}

      <section className="mx-auto mt-14 grid max-w-7xl gap-10 px-6 lg:grid-cols-[2fr_1fr]">

        {/* LEFT COLUMN */}

        <div className="space-y-8">

          {/* Event Details */}

          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">

            <h2 className="mb-8 text-3xl font-bold">
              Event Details
            </h2>

            <div className="grid gap-8 md:grid-cols-2">

              <div className="flex items-center gap-4">

                <CalendarDays className="text-purple-400" />

                <div>

                  <p className="text-sm text-slate-400">
                    Date
                  </p>

                  <p className="font-semibold">
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

                  <p className="font-semibold">
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

                  <p className="font-semibold">
                    {concert.venueName}
                  </p>

                  <p className="text-slate-400">
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

                  <p className="text-2xl font-bold text-green-400">
                    ₹{concert.basePrice}
                  </p>

                </div>

              </div>

            </div>

          </div>

          {/* About */}

          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">

            <h2 className="mb-6 text-3xl font-bold">
              About Concert
            </h2>

            <p className="leading-8 text-slate-300">
              {concert.description}
            </p>

          </div>

          {/* Venue */}

          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">

            <h2 className="mb-6 text-3xl font-bold">
              Venue Information
            </h2>

            <div className="flex items-center gap-4">

              <MapPin
                className="text-purple-400"
                size={26}
              />

              <div>

                <h3 className="text-xl font-semibold">
                  {concert.venueName}
                </h3>

                <p className="text-slate-400">
                  {concert.city}
                </p>

              </div>

            </div>

            <div className="mt-6 rounded-2xl bg-slate-800 p-5">

              <p className="leading-7 text-slate-300">
                Enjoy a premium concert experience with comfortable seating,
                immersive sound systems, spectacular lighting and world-class
                stage production.
              </p>

            </div>

          </div>
                    {/* Seat Categories */}

          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">

            <h2 className="mb-6 text-3xl font-bold">
              Seat Categories
            </h2>

            <div className="space-y-5">

              <div className="flex items-center justify-between rounded-2xl border border-yellow-500/20 bg-gradient-to-r from-yellow-500/10 to-yellow-500/5 p-5">

                <div>

                  <h3 className="text-xl font-semibold text-yellow-300">
                    VIP
                  </h3>

                  <p className="mt-1 text-slate-400">
                    Front row • Complimentary lounge access • Premium view
                  </p>

                </div>

                <span className="text-2xl font-bold text-green-400">
                  ₹5000
                </span>

              </div>

              <div className="flex items-center justify-between rounded-2xl border border-purple-500/20 bg-gradient-to-r from-purple-500/10 to-purple-500/5 p-5">

                <div>

                  <h3 className="text-xl font-semibold text-purple-300">
                    Premium
                  </h3>

                  <p className="mt-1 text-slate-400">
                    Excellent stage view • Best value
                  </p>

                </div>

                <span className="text-2xl font-bold text-green-400">
                  ₹3000
                </span>

              </div>

              <div className="flex items-center justify-between rounded-2xl border border-slate-700 bg-slate-800 p-5">

                <div>

                  <h3 className="text-xl font-semibold">
                    Standard
                  </h3>

                  <p className="mt-1 text-slate-400">
                    Comfortable seating with a great atmosphere
                  </p>

                </div>

                <span className="text-2xl font-bold text-green-400">
                  ₹1500
                </span>

              </div>

            </div>

          </div>

        </div>

        {/* RIGHT COLUMN */}

        <div>

          <div className="sticky top-28">

            <div className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 shadow-2xl">

              {/* Header */}

              <div className="bg-gradient-to-r from-purple-600 to-indigo-600 p-6">

                <span className="rounded-full bg-white/20 px-4 py-2 text-sm font-semibold">
                  BOOK NOW
                </span>

                <h2 className="mt-5 text-4xl font-black">
                  Reserve Your Seat
                </h2>

              </div>

              {/* Body */}

              <div className="space-y-6 p-8">

                <div className="flex justify-between">

                  <span className="text-slate-400">
                    Artist
                  </span>

                  <span className="font-semibold">
                    {concert.artistName}
                  </span>

                </div>

                <div className="flex justify-between">

                  <span className="text-slate-400">
                    Venue
                  </span>

                  <span className="font-semibold">
                    {concert.venueName}
                  </span>

                </div>

                <div className="flex justify-between">

                  <span className="text-slate-400">
                    City
                  </span>

                  <span className="font-semibold">
                    {concert.city}
                  </span>

                </div>

                <div className="flex justify-between">

                  <span className="text-slate-400">
                    Date
                  </span>

                  <span className="font-semibold">
                    {date.toLocaleDateString()}
                  </span>

                </div>

                <div className="flex justify-between">

                  <span className="text-slate-400">
                    Time
                  </span>

                  <span className="font-semibold">
                    {date.toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </span>

                </div>

                <hr className="border-slate-700" />

                <div className="flex items-center justify-between">

                  <span className="text-lg">
                    Starting From
                  </span>

                  <span className="text-4xl font-black text-green-400">
                    ₹{concert.basePrice}
                  </span>

                </div>

                <button
                  onClick={() =>
                    navigate(`/booking?concertId=${concert.id}`)
                  }
                  className="w-full rounded-2xl bg-gradient-to-r from-purple-600 to-indigo-600 py-4 text-lg font-bold transition duration-300 hover:scale-[1.03] hover:shadow-xl hover:shadow-purple-600/30"
                >
                  Book Tickets
                </button>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* Bottom CTA */}

      <section className="mt-24 border-t border-slate-800">

        <div className="mx-auto max-w-6xl px-6 py-20 text-center">

          <Music2
            size={60}
            className="mx-auto text-purple-400"
          />

          <h2 className="mt-8 text-5xl font-black">
            Ready for an Unforgettable Night?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-400">

            Experience incredible live performances, stunning production,
            and unforgettable memories with thousands of fans.

          </p>

          <button
            onClick={() =>
              navigate(`/booking?concertId=${concert.id}`)
            }
            className="mt-10 rounded-2xl bg-gradient-to-r from-purple-600 to-indigo-600 px-12 py-5 text-lg font-bold transition duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-600/30"
          >
            Book Tickets Now
          </button>

        </div>

      </section>

    </main>
  );
}