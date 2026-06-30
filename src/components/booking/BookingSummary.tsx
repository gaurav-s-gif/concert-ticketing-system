import type { Seat } from "../../types/seat";

interface Props {
  seats: Seat[];
}

export default function BookingSummary({ seats }: Props) {
  const subtotal = seats.reduce((sum, seat) => sum + seat.price, 0);

  const bookingFee = seats.length > 0 ? 150 : 0;

  const gst = Math.round((subtotal + bookingFee) * 0.18);

  const total = subtotal + bookingFee + gst;

  return (
    <div className="sticky top-28 rounded-2xl border border-slate-700 bg-slate-900 p-6 shadow-xl">

      <h2 className="mb-6 text-2xl font-bold">
        Booking Summary
      </h2>

      {seats.length === 0 ? (
        <div className="rounded-xl border border-dashed border-slate-600 py-8 text-center text-slate-400">
          No seats selected
        </div>
      ) : (
        <>
          {/* Selected Seats */}

          <div>

            <h3 className="mb-3 text-lg font-semibold text-purple-400">
              Selected Seats
            </h3>

            <div className="space-y-2">

              {seats.map((seat) => (
                <div
                  key={seat.id}
                  className="flex items-center justify-between rounded-lg bg-slate-800 px-3 py-2"
                >
                  <div>
                    <p className="font-semibold">
                      {seat.seatNumber}
                    </p>

                    <p className="text-xs text-slate-400">
                      {seat.seatType}
                    </p>
                  </div>

                  <span className="font-semibold">
                    ₹{seat.price}
                  </span>
                </div>
              ))}

            </div>

          </div>

          <hr className="my-6 border-slate-700" />

          {/* Price Breakdown */}

          <div className="space-y-3">

            <div className="flex justify-between">
              <span className="text-slate-400">
                Subtotal
              </span>

              <span>
                ₹{subtotal}
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-slate-400">
                Booking Fee
              </span>

              <span>
                ₹{bookingFee}
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-slate-400">
                GST (18%)
              </span>

              <span>
                ₹{gst}
              </span>
            </div>

          </div>

          <hr className="my-6 border-slate-700" />

          <div className="flex justify-between text-xl font-bold">

            <span>Total</span>

            <span className="text-green-400">
              ₹{total}
            </span>

          </div>
        </>
      )}
    </div>
  );
}