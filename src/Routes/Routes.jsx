import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Root from "../Layout/Root";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: "/",
                element: <App></App>,
            }
        ]
    },
]);

export default router;