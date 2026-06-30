import { createContext, useEffect, useState } from "react";
import type { ReactNode } from "react";

import type { AuthResponse } from "../types/auth";

import {
  getToken,
  getUserId,
  getUserName,
  getRole,
  saveAuth,
  logout as logoutService,
} from "../services/authService";

interface AuthContextType {
  isAuthenticated: boolean;
  token: string | null;
  userId: number | null;
  name: string | null;
  role: string | null;
  isAdmin: boolean;
  login: (auth: AuthResponse) => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

interface Props {
  children: ReactNode;
}

export function AuthProvider({ children }: Props) {
  const [token, setToken] = useState<string | null>(null);
  const [userId, setUserId] = useState<number | null>(null);
  const [name, setName] = useState<string | null>(null);
  const [role, setRole] = useState<string | null>(null);

  useEffect(() => {
    setToken(getToken());
    setUserId(getUserId());
    setName(getUserName());
    setRole(getRole());
  }, []);

  const login = (auth: AuthResponse) => {
    saveAuth(auth);

    setToken(auth.token);
    setUserId(auth.userId);
    setName(auth.name);
    setRole(auth.role);
  };

  const logout = () => {
    logoutService();

    setToken(null);
    setUserId(null);
    setName(null);
    setRole(null);
  };

  return (
    <AuthContext.Provider
      value={{
        token,
        userId,
        name,
        role,
        isAuthenticated: !!token,
        isAdmin: role === "ADMIN",
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}