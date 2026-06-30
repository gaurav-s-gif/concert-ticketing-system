import { useMemo, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

import SeatGrid from "../components/booking/SeatGrid";
import BookingSummary from "../components/booking/BookingSummary";

import { useSeats } from "../hooks/useSeats";
import { useConcert } from "../hooks/useConcert";

import type { Seat } from "../types/seat";

export default function Booking() {
  const navigate = useNavigate();

  const [searchParams] = useSearchParams();

  const concertId = Number(searchParams.get("concertId"));

  const { seats, loading, error } = useSeats(concertId);
  const { concert } = useConcert(concertId);

  const [selectedSeats, setSelectedSeats] = useState<Seat[]>([]);

  const toggleSeat = (seat: Seat) => {
    setSelectedSeats((prev) => {
      const exists = prev.find((s) => s.id === seat.id);

      if (exists) {
        return prev.filter((s) => s.id !== seat.id);
      }

      return [...prev, seat];
    });
  };

  const subtotal = useMemo(() => {
    return selectedSeats.reduce((sum, seat) => sum + seat.price, 0);
  }, [selectedSeats]);

  const bookingFee = selectedSeats.length > 0 ? 150 : 0;
  const gst = Math.round((subtotal + bookingFee) * 0.18);
  const total = subtotal + bookingFee + gst;

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-950 text-white">
        Loading Seats...
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-950 text-red-500">
        {error}
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-28 text-white">

      <div className="mx-auto max-w-7xl">

        {/* Concert Header */}

        {concert && (
          <div className="mb-10 overflow-hidden rounded-3xl border border-slate-700 bg-slate-900 shadow-xl">

            {concert.bannerImage && (
              <img
                src={concert.bannerImage}
                alt={concert.title}
                className="h-72 w-full object-cover"
              />
            )}

            <div className="space-y-4 p-8">

              <div className="flex flex-wrap items-center justify-between gap-6">

                <div>

                  <h1 className="text-4xl font-bold">
                    {concert.title}
                  </h1>

                  <p className="mt-2 text-lg text-purple-300">
                    {concert.artistName}
                  </p>

                </div>

                <div className="rounded-xl bg-purple-600 px-5 py-3 text-center">

                  <p className="text-sm uppercase tracking-widest">
                    Starting From
                  </p>

                  <p className="text-2xl font-bold">
                    ₹{concert.basePrice}
                  </p>

                </div>

              </div>

              <div className="flex flex-wrap gap-6 text-slate-300">

                <span>
                  📍 {concert.venueName}, {concert.city}
                </span>

                <span>
                  📅{" "}
                  {new Date(concert.dateTime).toLocaleDateString()}
                </span>

                <span>
                  🕒{" "}
                  {new Date(concert.dateTime).toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </span>

              </div>

            </div>

          </div>
        )}

        {/* Stage */}

        <div className="mb-12 flex justify-center">

          <div className="w-3/4 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 py-3 text-center text-lg font-bold shadow-lg">
            STAGE
          </div>

        </div>

        <div className="grid gap-10 lg:grid-cols-3">

          {/* Seat Grid */}

          <div className="lg:col-span-2">

            <SeatGrid
              seats={seats}
              selectedSeats={selectedSeats}
              toggleSeat={toggleSeat}
            />

            {/* Legend */}

            <div className="mt-10 flex flex-wrap justify-center gap-8">

              <div className="flex items-center gap-2">
                <div className="h-5 w-5 rounded bg-green-500"></div>
                <span>Available</span>
              </div>

              <div className="flex items-center gap-2">
                <div className="h-5 w-5 rounded bg-blue-500"></div>
                <span>Selected</span>
              </div>

              <div className="flex items-center gap-2">
                <div className="h-5 w-5 rounded bg-red-500"></div>
                <span>Booked</span>
              </div>

            </div>

          </div>

          {/* Booking Summary */}

          <div>

            <BookingSummary seats={selectedSeats} />

            <button
              disabled={selectedSeats.length === 0}
              onClick={() =>
                navigate("/payment", {
                  state: {
                    concert,
                    selectedSeats,
                    total,
                  },
                })
              }
              className="mt-6 w-full rounded-xl bg-purple-600 py-4 text-lg font-semibold transition hover:bg-purple-700 disabled:cursor-not-allowed disabled:opacity-50"
            >
              Continue to Payment →
            </button>

          </div>

        </div>

      </div>

    </main>
  );
}