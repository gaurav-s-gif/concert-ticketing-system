export interface Seat {
  id: number;
  seatNumber: string;
  seatType: string;
  price: number;

  venueId: number;
  venueName: string;

  booked: boolean;
}