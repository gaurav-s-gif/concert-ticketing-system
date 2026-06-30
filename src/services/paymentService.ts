import api from "./api";

export interface CreatePaymentRequest {
  booking: {
    id: number;
  };
  amount: number;
  paymentMethod: string;
  transactionId: string;
}

export interface PaymentResponse {
  id: number;
  bookingId: number;
  amount: number;
  paymentStatus: string;
  paymentMethod: string;
  transactionId: string;
}

export const createPayment = async (
  request: CreatePaymentRequest
): Promise<PaymentResponse> => {
  const response = await api.post("/payments", request);

  return response.data;
};