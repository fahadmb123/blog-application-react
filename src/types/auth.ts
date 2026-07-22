import type { Dispatch, ReactNode, SetStateAction } from "react";


export type User = {
    id?: string,
    email : string,
    password : string
}

export type UserProviderProps = {
  children: ReactNode;
};

export type UserContextType = {
    user:User | undefined,
    setUser:Dispatch<SetStateAction<User | undefined>>
}