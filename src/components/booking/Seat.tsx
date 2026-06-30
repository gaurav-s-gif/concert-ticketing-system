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
    "relative flex h-14 w-14 items-center justify-center rounded-t-xl rounded-b-md border-2 font-semibold transition-all duration-300";

  let style =
    "border-slate-600 bg-slate-700 hover:border-purple-400 hover:bg-slate-600 hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-500/20";

  if (selected) {
    style =
      "border-purple-400 bg-purple-600 text-white shadow-lg shadow-purple-600/40 scale-105";
  }

  if (seat.booked) {
    style =
      "cursor-not-allowed border-red-500 bg-red-600 text-white opacity-80";
  }

  return (
    <button
      disabled={seat.booked}
      onClick={() => onSelect(seat)}
      className={`${base} ${style}`}
    >
      {/* Seat Back */}
      <div className="absolute -top-2 h-3 w-8 rounded-t-md border-2 border-inherit bg-inherit"></div>

      <span className="text-xs font-bold">
        {seat.seatNumber}
      </span>
    </button>
  );
}