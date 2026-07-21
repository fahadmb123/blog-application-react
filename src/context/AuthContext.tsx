import { createContext, useContext } from "react";
import type {User} from "../types/auth"

export const userContext = createContext<User | undefined>(undefined)
export function useUserContext(){
    const user = useContext(userContext)

    if (user === undefined) {
        throw new Error("useUserContext must be used with userContext")
    }
    return user
}
