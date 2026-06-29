import api from "./api";
import type { Concert } from "../types/concert";

export const getAllConcerts = async (): Promise<Concert[]> => {
  const response = await api.get("/concerts");
  return response.data;
};

export const getConcertById = async (id: number): Promise<Concert> => {
  const response = await api.get(`/concerts/${id}`);
  return response.data;
};