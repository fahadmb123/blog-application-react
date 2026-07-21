import { useState } from "react";
import { userContext } from "../context/AuthContext";
import type { User ,UserProviderProps} from "../types/auth";



export function UserProvider({ children }: UserProviderProps) {
  const [user, setUser] = useState<User | undefined>(undefined);

  return (
    <userContext.Provider value={{user, setUser }}>
      {children}
    </userContext.Provider>
  );
}