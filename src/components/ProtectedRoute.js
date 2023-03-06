import { Navigate } from "react-router-dom";


export const ProtectedRoute = ({ children }) => {

    let userRole = localStorage.getItem("userRole");

            if (userRole !== 'ROLE.ADMIN') {

                return <Navigate to="/" />;
            }
            return children;
}