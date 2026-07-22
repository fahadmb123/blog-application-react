import type { Dispatch, ReactNode, SetStateAction } from "react";
import type { User as fireBaseUserType} from "firebase/auth";

export type User = {
    id?: string,
    email : string,
    password : string
}

export type UserProviderProps = {
  children: ReactNode;
};

export type UserContextType = {
    user:fireBaseUserType | undefined,
    setUser:Dispatch<SetStateAction<fireBaseUserType | undefined>>,
    load:boolean
}
