import { Route, Routes } from "react-router-dom";
import { LoginPage, RegisterPage, PasswordPage } from "../pages";

export const AuthRoutes = () => {
    
    return (
        <Routes>
            <Route path="login" element={ <LoginPage /> } />
            <Route path="register" element={ <RegisterPage /> } />
            <Route path="recover_password" element={ <PasswordPage /> } />
        </Routes>
    )
}
