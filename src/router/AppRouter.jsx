import { Navigate, Route, Routes } from "react-router-dom"
import { AuthRoutes } from "../auth/routes/AuthRoutes"
import { HelproRoutes } from "../helpro/routes/HelproRoutes"
import { useSelector } from "react-redux";

export const AppRouter = () => {

    const { status } = useSelector( state => state.auth );

    return (
        <Routes>
            <Route path="/*" element={ <HelproRoutes /> } />
            {
                status !== "authenticated"
                ?
                <Route path="/auth/*" element={ <AuthRoutes /> } />
                :
                ""
            }
            

            <Route path="/*" element={ <Navigate to="/home" /> } />
        </Routes>
    )
}
