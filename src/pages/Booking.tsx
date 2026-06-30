import { useMemo, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

import SeatGrid from "../components/booking/SeatGrid";
import BookingSummary from "../components/booking/BookingSummary";

import { useSeats } from "../hooks/useSeats";

import type { Seat } from "../types/seat";

export default function Booking() {
  const navigate = useNavigate();

  const [searchParams] = useSearchParams();

  const concertId = Number(searchParams.get("concertId"));

  const { seats, loading, error } = useSeats(concertId);

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

  const total = useMemo(() => {
    return selectedSeats.reduce(
      (sum, seat) => sum + seat.price,
      0
    );
  }, [selectedSeats]);

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

        <h1 className="mb-10 text-center text-4xl font-bold">
          Select Your Seats
        </h1>

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

            <div className="mt-10 flex justify-center gap-8">

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

          {/* Summary */}

          <div>

            <BookingSummary
              seats={selectedSeats}
            />

            <button
              disabled={selectedSeats.length === 0}
              onClick={() =>
                navigate("/payment")
              }
              className="mt-6 w-full rounded-xl bg-purple-600 py-4 text-lg font-semibold transition hover:bg-purple-700 disabled:cursor-not-allowed disabled:opacity-50"
            >
              Continue
            </button>

            <p className="mt-4 text-center text-lg font-semibold text-green-400">
              Total: ₹{total}
            </p>

          </div>

        </div>

      </div>

    </main>
  );
}