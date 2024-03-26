import LoginScreen  from "../Screen/Login/LoginScreen";
import {createBrowserRouter} from "react-router-dom";
import APP from "../App";

const routes =  createBrowserRouter([
        {
            path: "/",
            element: <APP />,
        },
        {
            path: "/login",
            element: <LoginScreen />,
        },
        {
            path: "/privacy",
            element: <div>Privacy Policy</div>,
        },
        {
            path:"/home/{id}",
            element:<div>Home</div>
        },
        {

            path: "*",
            element: <div>404 Not Found</div>,
        }
]);
export default routes;