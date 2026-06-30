import { CheckCircle2, Download, Home, Ticket } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

import type { Concert } from "../types/concert";
import type { Seat } from "../types/seat";

interface SuccessState {
  concert: Concert;
  selectedSeats: Seat[];
  bookingIds: number[];
  total: number;
  transactionId: string;
  paymentMethod: string;
}

export default function BookingSuccess() {
  const navigate = useNavigate();
  const location = useLocation();

  const {
    concert,
    selectedSeats,
    bookingIds,
    total,
    transactionId,
    paymentMethod,
  } = location.state as SuccessState;

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-28 text-white">

      <div className="mx-auto max-w-4xl">

        <div className="rounded-3xl border border-green-500/30 bg-slate-900 p-10 shadow-2xl">

          <div className="flex flex-col items-center">

            <CheckCircle2
              size={90}
              className="mb-5 text-green-400"
            />

            <h1 className="text-4xl font-bold">
              Booking Successful!
            </h1>

            <p className="mt-3 text-slate-400">
              Your tickets have been booked successfully.
            </p>

          </div>

          <hr className="my-8 border-slate-700" />

          <div className="grid gap-8 md:grid-cols-2">

            <div>

              <h2 className="mb-5 text-2xl font-bold">
                Concert Details
              </h2>

              <div className="space-y-3">

                <p>
                  <strong>Concert:</strong>{" "}
                  {concert.title}
                </p>

                <p>
                  <strong>Artist:</strong>{" "}
                  {concert.artistName}
                </p>

                <p>
                  <strong>Venue:</strong>{" "}
                  {concert.venueName}
                </p>

                <p>
                  <strong>Date:</strong>{" "}
                  {new Date(
                    concert.dateTime
                  ).toLocaleDateString()}
                </p>

              </div>

            </div>

            <div>

              <h2 className="mb-5 text-2xl font-bold">
                Booking Details
              </h2>

              <div className="space-y-3">

                <p>
                  <strong>Seats:</strong>{" "}
                  {selectedSeats
                    .map((seat) => seat.seatNumber)
                    .join(", ")}
                </p>

                <p>
                  <strong>Booking IDs:</strong>{" "}
                  {bookingIds.join(", ")}
                </p>

                <p>
                  <strong>Payment:</strong>{" "}
                  {paymentMethod}
                </p>

                <p>
                  <strong>Transaction:</strong>{" "}
                  {transactionId}
                </p>

                <p>
                  <strong>Total Paid:</strong>{" "}
                  ₹{total}
                </p>

              </div>

            </div>

          </div>

          <hr className="my-8 border-slate-700" />

          <div className="flex flex-wrap justify-center gap-4">

            <button
              className="flex items-center gap-2 rounded-xl bg-purple-600 px-6 py-3 font-semibold transition hover:bg-purple-700"
            >
              <Download size={20} />

              Download Ticket
            </button>

            <button
              onClick={() => navigate("/")}
              className="flex items-center gap-2 rounded-xl bg-green-600 px-6 py-3 font-semibold transition hover:bg-green-700"
            >
              <Home size={20} />

              Home
            </button>

            <button
              onClick={() => navigate("/profile")}
              className="flex items-center gap-2 rounded-xl border border-slate-600 px-6 py-3 font-semibold transition hover:border-purple-500"
            >
              <Ticket size={20} />

              My Bookings
            </button>

          </div>

        </div>

      </div>

    </main>
  );
}