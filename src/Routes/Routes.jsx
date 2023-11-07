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
import Updatejobs from "../Pages/Updatejobs";
import Errorpage from "../Pages/Errorpage";
import PrivateRoutes from "../PrivateRoute";
const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <Errorpage></Errorpage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/alljobs",
                element: <Alljobs></Alljobs>,
            },
            {
                path: "/appliedjobs",
                element: <PrivateRoutes><Appliedjobs></Appliedjobs></PrivateRoutes>,
            },
            {
                path: "/addjobs",
                element: <PrivateRoutes><Addjobs></Addjobs></PrivateRoutes>,
            },
            {
                path: "/myjobs",
                element: <PrivateRoutes><Myjobs></Myjobs></PrivateRoutes>,
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
                element: <PrivateRoutes><Profile></Profile></PrivateRoutes>,
            },
            {
                path: "/jobdetails/:id",
                element: <PrivateRoutes><Jobdetails></Jobdetails></PrivateRoutes>,
                loader: ({params}) => fetch(`https://khujo-developers-server.vercel.app/jobs/${params.id}`)
            },
            {
                path: "/updatejobs/:id",
                element: <PrivateRoutes><Updatejobs></Updatejobs></PrivateRoutes>,
                loader: ({ params }) => fetch(`https://khujo-developers-server.vercel.app/jobs/${params.id}`)
              },
        ]
    },
]);

export default router;