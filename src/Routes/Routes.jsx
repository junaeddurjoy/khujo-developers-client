import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home";
import Alljobs from "../Pages/Alljobs";
import Addjobs from "../Pages/Addjobs";
import Appliedjobs from "../Pages/Appliedjobs";
import Myjobs from "../Pages/Myjobs";
import Blogs from "../Pages/Blogs";
import Login from "../Pages/Login";
import Registration from "../Pages/Registration";
import Profile from "../Pages/Profile";
import Jobdetails from "../Pages/Jobdetails";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/alljobs",
                element: <Alljobs></Alljobs>
            },
            {
                path: "/appliedjobs",
                element: <Appliedjobs></Appliedjobs>,
            },
            {
                path: "/addjobs",
                element: <Addjobs></Addjobs>,
            },
            {
                path: "/myjobs",
                element: <Myjobs></Myjobs>,
            },
            {
                path: "/blogs",
                element: <Blogs></Blogs>,
            },
            {
                path: "/login",
                element: <Login></Login>,
            },
            {
                path: "/registration",
                element: <Registration></Registration>,
            },
            {
                path: "/profile",
                element: <Profile></Profile>,
            },
            {
                path: "/jobdetails/:id",
                element: <Jobdetails></Jobdetails>,
                loader: ({params}) => fetch(`http://localhost:5000/jobs/${params.id}`)
            },
        ]
    },
]);

export default router;