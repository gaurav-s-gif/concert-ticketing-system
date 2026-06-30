import { useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { CreditCard, Landmark, Smartphone, Wallet } from "lucide-react";
import { toast } from "sonner";

import { createPayment } from "../services/paymentService";

import type { Concert } from "../types/concert";
import type { Seat } from "../types/seat";

interface PaymentState {
  concert: Concert;
  selectedSeats: Seat[];
  bookingIds: number[];
  total: number;
}

const paymentMethods = [
  {
    id: "UPI",
    title: "UPI",
    icon: Smartphone,
  },
  {
    id: "CARD",
    title: "Credit / Debit Card",
    icon: CreditCard,
  },
  {
    id: "NET_BANKING",
    title: "Net Banking",
    icon: Landmark,
  },
  {
    id: "WALLET",
    title: "Wallet",
    icon: Wallet,
  },
];

export default function Payment() {
  const navigate = useNavigate();
  const location = useLocation();

  const {
    concert,
    selectedSeats,
    bookingIds,
    total,
  } = location.state as PaymentState;

  const [method, setMethod] = useState("UPI");

  const [processing, setProcessing] = useState(false);

  const bookingFee =
    selectedSeats.length > 0 ? 150 : 0;

  const subtotal = useMemo(() => {
    return selectedSeats.reduce(
      (sum, seat) => sum + seat.price,
      0
    );
  }, [selectedSeats]);

  const gst = Math.round(
    (subtotal + bookingFee) * 0.18
  );

  const transactionId = useMemo(() => {
    return (
      "TXN" +
      Date.now() +
      Math.floor(Math.random() * 1000)
    );
  }, []);
    const handlePayment = async () => {
    try {
      setProcessing(true);

      for (const bookingId of bookingIds) {
        await createPayment({
          booking: {
            id: bookingId,
          },
          amount: total,
          paymentMethod: method,
          transactionId,
        });
      }

      toast.success("Payment Successful!");

      navigate("/booking-success", {
        state: {
          concert,
          selectedSeats,
          bookingIds,
          total,
          transactionId,
          paymentMethod: method,
        },
      });
    } catch (error: any) {
      console.error(error);

      toast.error(
        error?.response?.data?.message ??
          "Payment failed."
      );
    } finally {
      setProcessing(false);
    }
  };

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-28 text-white">
      <div className="mx-auto max-w-6xl">

        <h1 className="mb-10 text-center text-4xl font-bold">
          Payment
        </h1>

        <div className="grid gap-10 lg:grid-cols-3">

          {/* Left */}

          <div className="space-y-8 lg:col-span-2">

            {/* Concert */}

            <div className="rounded-2xl border border-slate-700 bg-slate-900 p-6">

              <h2 className="mb-5 text-2xl font-bold">
                Concert Information
              </h2>

              <div className="space-y-2">

                <h3 className="text-xl font-semibold">
                  {concert.title}
                </h3>

                <p className="text-purple-300">
                  {concert.artistName}
                </p>

                <p className="text-slate-400">
                  📍 {concert.venueName}, {concert.city}
                </p>

                <p className="text-slate-400">
                  📅{" "}
                  {new Date(
                    concert.dateTime
                  ).toLocaleDateString()}
                </p>

              </div>

            </div>

            {/* Seats */}

            <div className="rounded-2xl border border-slate-700 bg-slate-900 p-6">

              <h2 className="mb-5 text-2xl font-bold">
                Selected Seats
              </h2>

              <div className="flex flex-wrap gap-3">

                {selectedSeats.map((seat) => (
                  <div
                    key={seat.id}
                    className="rounded-lg bg-purple-600 px-4 py-2 font-semibold"
                  >
                    {seat.seatNumber}
                  </div>
                ))}

              </div>

            </div>

            {/* Payment Method */}

            <div className="rounded-2xl border border-slate-700 bg-slate-900 p-6">

              <h2 className="mb-6 text-2xl font-bold">
                Payment Method
              </h2>

              <div className="grid gap-4">

                {paymentMethods.map((item) => {
                  const Icon = item.icon;

                  return (
                    <button
                      key={item.id}
                      onClick={() => setMethod(item.id)}
                      className={`flex items-center gap-4 rounded-xl border p-5 transition ${
                        method === item.id
                          ? "border-purple-500 bg-purple-600/20"
                          : "border-slate-700 hover:border-purple-500"
                      }`}
                    >
                      <Icon size={24} />

                      <span className="font-semibold">
                        {item.title}
                      </span>
                    </button>
                  );
                })}

              </div>

            </div>

          </div>

          {/* Right */}

          <div>

            <div className="sticky top-28 rounded-2xl border border-slate-700 bg-slate-900 p-6">

              <h2 className="mb-6 text-2xl font-bold">
                Order Summary
              </h2>

              <div className="space-y-4">

                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>₹{subtotal}</span>
                </div>

                <div className="flex justify-between">
                  <span>Booking Fee</span>
                  <span>₹{bookingFee}</span>
                </div>

                <div className="flex justify-between">
                  <span>GST</span>
                  <span>₹{gst}</span>
                </div>

                <hr className="border-slate-700" />

                <div className="flex justify-between text-xl font-bold">

                  <span>Total</span>

                  <span className="text-green-400">
                    ₹{total}
                  </span>

                </div>

              </div>

              <button
                onClick={handlePayment}
                disabled={processing}
                className="mt-8 w-full rounded-xl bg-purple-600 py-4 text-lg font-semibold transition hover:bg-purple-700 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {processing
                  ? "Processing..."
                  : `Pay ₹${total}`}
              </button>

              <p className="mt-4 text-center text-sm text-slate-400">
                🔒 Secure Payment
              </p>

            </div>

          </div>

        </div>

      </div>

    </main>
  );
}