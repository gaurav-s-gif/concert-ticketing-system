import { createContext, useEffect, useState, ReactNode } from "react";
import { getToken, saveToken, logout as logoutService } from "../services/authService";

interface AuthContextType {
  isAuthenticated: boolean;
  token: string | null;
  login: (token: string) => void;
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

  useEffect(() => {
    const savedToken = getToken();

    if (savedToken) {
      setToken(savedToken);
    }
  }, []);

  const login = (jwt: string) => {
    saveToken(jwt);
    setToken(jwt);
  };

  const logout = () => {
    logoutService();
    setToken(null);
  };

  return (
    <AuthContext.Provider
      value={{
        token,
        isAuthenticated: !!token,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}