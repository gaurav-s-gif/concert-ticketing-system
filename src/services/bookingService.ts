import api from "./api";

export interface CreateBookingRequest {
  user: {
    id: number;
  };
  concert: {
    id: number;
  };
  seat: {
    id: number;
  };
  status: string;
}

export interface BookingResponse {
  id: number;
  userName: string;
  concertTitle: string;
  seatNumber: string;
  status: string;
  bookingTime: string;
}

export const createBooking = async (
  booking: CreateBookingRequest
): Promise<BookingResponse> => {
  const response = await api.post("/bookings", booking);

  return response.data;
};