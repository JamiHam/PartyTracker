import {
    BrowserRouter as Router,
    Routes, Route
} from "react-router-dom"
import UserPage from "./UserPage";
import AdminPage from "./AdminPage";
import Register from "./Register";
import Login from "./Login";

const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={
                    <UserPage />
                }/>
                <Route path="/edit" element={
                    <AdminPage />
                }/>
                <Route path="/register" element={
                    <Register />
                }/>
                <Route path="/login" element={
                    <Login />
                }/>

            </Routes>
        </Router>
    )
}

export default AppRouter