import type { Seat } from "../../types/seat";

interface Props {
  seats: Seat[];
}

export default function BookingSummary({
  seats,
}: Props) {
  const total = seats.reduce(
    (sum, seat) => sum + seat.price,
    0
  );

  return (
    <div className="rounded-2xl bg-slate-900 p-6">

      <h2 className="mb-6 text-2xl font-bold">
        Booking Summary
      </h2>

      <p className="mb-2">
        Seats
      </p>

      <div className="mb-6 flex flex-wrap gap-2">

        {seats.map((seat) => (
          <span
            key={seat.id}
            className="rounded bg-purple-600 px-3 py-1"
          >
            {seat.seatNumber}
          </span>
        ))}

      </div>

      <h3 className="text-xl font-bold text-green-400">
        ₹{total}
      </h3>

    </div>
  );
}