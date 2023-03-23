import { Navigate, Route, Routes } from "react-router-dom"
import { AuthRoutes } from "../auth/routes/AuthRoutes"
import { HelproRoutes } from "../helpro/routes/HelproRoutes"

export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/*" element={ <HelproRoutes /> } />
            <Route path="/auth/*" element={ <AuthRoutes /> } />

            <Route path="/*" element={ <Navigate to="/auth/login" /> } />
        </Routes>
    )
}
