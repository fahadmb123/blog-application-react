import { Routes , Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Layout from "../components/Layout/Layout";
import MyBlog from "../pages/MyBlog/MyBlog";
import AddBlog from "../pages/AddBlog/AddBlog";


function AppRoutes () {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />}/>
                <Route path="add-blog" element={<AddBlog />}/>
                <Route path="my-blog" element={<MyBlog />}/>
            </Route>
        </Routes>
    )
}



export default AppRoutes