import { createContext, useContext } from "react";
import type {UserContextType} from "../types/auth"


export const userContext = createContext<UserContextType | undefined>(undefined)
export function useUserContext(){
    const user = useContext(userContext)

    if (user === undefined) {
        throw new Error("useUserContext must be used with userContext")
    }
    return user
}
