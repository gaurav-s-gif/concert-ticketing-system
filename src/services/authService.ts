import api from "./api";
import type { AuthResponse, LoginRequest } from "../types/auth";

export const login = async (
  request: LoginRequest
): Promise<AuthResponse> => {
  const response = await api.post("/auth/login", request);
  return response.data;
};

export const logout = () => {
  localStorage.removeItem("token");
};

export const saveToken = (token: string) => {
  localStorage.setItem("token", token);
};

export const getToken = () => {
  return localStorage.getItem("token");
};

export const isAuthenticated = () => {
  return !!localStorage.getItem("token");
};