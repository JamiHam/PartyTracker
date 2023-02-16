import {
    BrowserRouter as Router,
    Routes, Route
} from "react-router-dom"
import UserPage from "./UserPage";
import AdminPage from "./AdminPage";

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
            </Routes>
        </Router>
    )
}

export default AppRouter