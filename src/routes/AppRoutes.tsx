import { Routes , Route } from "react-router-dom";
import { lazy } from "react";
import Layout from "../components/Layout/Layout";

import ProtectedRoute from "../components/ProtectedRoute";
import PublicRoute from "../components/PublicRoute";

const Home = lazy(() => import("../pages/Home/Home"));
const MyBlog = lazy(() => import("../pages/MyBlog/MyBlog"));
const AddBlog = lazy(() => import("../pages/AddBlog/AddBlog"));
const Login = lazy(() => import("../pages/Login/Login"));
const Signup = lazy(() => import("../pages/Signup/Signup"));
const Error = lazy(() => import("../pages/Error/Error"));

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