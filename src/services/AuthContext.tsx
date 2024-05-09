import axios from "axios";
import React, {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { BASE_API_URL, LOGIN_API, SIGNUP_API } from "../constants";

interface User {
  id: string;
  name: string;
  email: string;
}

interface AuthContextType {
  currentUser: User | null;
  login: (inputs: any) => Promise<void>;
  logout: () => Promise<void>;
  signup: (inputs: any) => Promise<void>;
}

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

export const AuthContextProvider: React.FC<any> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(
    JSON.parse(localStorage.getItem("user") || "null")
  );

  const login = useCallback(async (inputs: any) => {
    const res = await axios.post(BASE_API_URL + LOGIN_API, inputs);
    setCurrentUser(res.data);
  }, []);

  const logout = useCallback(async () => {
    await axios.post(BASE_API_URL + LOGIN_API);
    setCurrentUser(null);
  }, []);

  const signup = useCallback(async (inputs: any) => {
    const res = await axios.post(BASE_API_URL + SIGNUP_API, inputs);
    setCurrentUser(res.data);
  }, []);

  useEffect(() => {
    if (currentUser) {
      localStorage.setItem("user", JSON.stringify(currentUser));
    } else {
      localStorage.removeItem("user");
    }
  }, [currentUser]);

  const authContextValue = useMemo(
    () => ({ currentUser, signup, login, logout }),
    [currentUser, signup, login, logout]
  );

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};
