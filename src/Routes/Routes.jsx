import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home";
import Alljobs from "../Pages/Alljobs";
import Addjobs from "../Pages/Addjobs";
import Appliedjobs from "../Pages/Appliedjobs";
import Myjobs from "../Pages/Myjobs";
import Blogs from "../Pages/Blogs";

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
        ]
    },
]);

export default router;