import { Navigate } from "react-router-dom";
import { useUserContext } from "../context/AuthContext";
import type { UserProviderProps } from "../types/auth";


export default function ProtectedRoute({children} :UserProviderProps ){
    const {user} = useUserContext()
    

    if (!user) {
        return <Navigate to="/login" replace/>
    }
    return <>{children}</>
}