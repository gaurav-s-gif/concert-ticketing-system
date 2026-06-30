import type { Seat } from "../../types/seat";
import SeatComponent from "./Seat";

interface Props {
  seats: Seat[];
  selectedSeats: Seat[];
  toggleSeat: (seat: Seat) => void;
}

export default function SeatGrid({
  seats,
  selectedSeats,
  toggleSeat,
}: Props) {
  // Group seats by row (A, B, C...)
  const groupedSeats = seats.reduce<Record<string, Seat[]>>((rows, seat) => {
    const row = seat.seatNumber.charAt(0).toUpperCase();

    if (!rows[row]) {
      rows[row] = [];
    }

    rows[row].push(seat);

    return rows;
  }, {});

  // Sort seats inside each row
  Object.values(groupedSeats).forEach((rowSeats) => {
    rowSeats.sort((a, b) => {
      const seatA = Number(a.seatNumber.slice(1));
      const seatB = Number(b.seatNumber.slice(1));

      return seatA - seatB;
    });
  });

  // Sort rows alphabetically
  const sortedRows = Object.entries(groupedSeats).sort(([a], [b]) =>
    a.localeCompare(b)
  );

  return (
    <div className="space-y-8">

      {sortedRows.map(([row, rowSeats]) => (

        <div
          key={row}
          className="flex items-center justify-center gap-8"
        >
          {/* Row Label */}
          <div className="w-10 text-center text-xl font-bold text-purple-400">
            {row}
          </div>

          {/* Seats */}
          <div className="flex flex-wrap justify-center gap-4">

            {rowSeats.map((seat) => (
              <SeatComponent
                key={seat.id}
                seat={seat}
                selected={selectedSeats.some(
                  (s) => s.id === seat.id
                )}
                onSelect={toggleSeat}
              />
            ))}

          </div>

        </div>

      ))}

    </div>
  );
}