import { Routes , Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Layout from "../components/Layout/Layout";
import MyBlog from "../pages/MyBlog/MyBlog";
import AddBlog from "../pages/AddBlog/AddBlog";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";
import Error from "../pages/Error/Error";
import ProtectedRoute from "../components/ProtectedRoute";
import PublicRoute from "../components/PublicRoute";

function AppRoutes () {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />}/>
                <Route path="add-blog" element={<ProtectedRoute><AddBlog /></ProtectedRoute>}/>
                <Route path="add-blog/:id" element={<ProtectedRoute><AddBlog /></ProtectedRoute>}/>
                <Route path="my-blog" element={<ProtectedRoute><MyBlog /></ProtectedRoute>}/>
            </Route>
            <Route path="/login" element={<PublicRoute><Login /></PublicRoute>}/>
            <Route path="/signup" element={<PublicRoute><Signup /></PublicRoute>}/>
            <Route path="*" element={<Error />}/>
        </Routes>
    )
}



export default AppRoutes