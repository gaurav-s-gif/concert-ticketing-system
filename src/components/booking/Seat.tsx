import type { Seat as SeatType } from "../../types/seat";

interface SeatProps {
  seat: SeatType;
  selected: boolean;
  onSelect: (seat: SeatType) => void;
}

export default function Seat({
  seat,
  selected,
  onSelect,
}: SeatProps) {
  const base =
    "relative flex h-14 w-14 items-center justify-center rounded-t-xl rounded-b-md border-2 text-xs font-bold transition-all duration-300";

  let style = "";

  if (seat.booked) {
    style =
      "cursor-not-allowed border-red-500 bg-red-600 text-white opacity-80";
  } else if (selected) {
    style =
      "border-purple-300 bg-purple-600 text-white scale-110 ring-4 ring-purple-400/40 shadow-xl shadow-purple-600/40";
  } else {
    switch (seat.seatType.toUpperCase()) {
      case "VIP":
        style =
          "border-yellow-400 bg-yellow-500/20 hover:bg-yellow-500 hover:text-black hover:scale-110 hover:shadow-lg hover:shadow-yellow-500/30";
        break;

      case "PREMIUM":
        style =
          "border-blue-400 bg-blue-500/20 hover:bg-blue-500 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/30";
        break;

      default:
        style =
          "border-green-400 bg-green-500/20 hover:bg-green-500 hover:scale-110 hover:shadow-lg hover:shadow-green-500/30";
    }
  }

  return (
    <button
      disabled={seat.booked}
      onClick={() => onSelect(seat)}
      title={`${seat.seatNumber} • ${seat.seatType} • ₹${seat.price}`}
      className={`${base} ${style}`}
    >
      {/* Seat Back */}
      <div className="absolute -top-2 h-3 w-8 rounded-t-md border-2 border-inherit bg-inherit" />

      <span>{seat.seatNumber}</span>
    </button>
  );
}