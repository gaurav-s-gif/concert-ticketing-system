import api from "./api";
import type { AuthResponse, LoginRequest } from "../types/auth";

export const login = async (
  request: LoginRequest
): Promise<AuthResponse> => {
  const response = await api.post("/auth/login", request);
  return response.data;
};

/**
 * Save complete authentication data
 */
export const saveAuth = (auth: AuthResponse) => {
  localStorage.setItem("token", auth.token);
  localStorage.setItem("userId", auth.userId.toString());
  localStorage.setItem("userName", auth.name);
  localStorage.setItem("role", auth.role);
};

/**
 * Logout user
 */
export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("userId");
  localStorage.removeItem("userName");
  localStorage.removeItem("role");
};

/**
 * Getters
 */
export const getToken = () => {
  return localStorage.getItem("token");
};

export const getUserId = () => {
  const id = localStorage.getItem("userId");
  return id ? Number(id) : null;
};

export const getUserName = () => {
  return localStorage.getItem("userName");
};

export const getRole = () => {
  return localStorage.getItem("role");
};

export const isAdmin = () => {
  return getRole() === "ADMIN";
};

export const isAuthenticated = () => {
  return !!getToken();
};