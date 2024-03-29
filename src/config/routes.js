import LoginScreen  from "../Screen/Login/LoginScreen";
import RegisterScreen from "../Screen/Register/RegisterScreen";
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
            path: "/register",
            element: <RegisterScreen />,
        },
        {
            path: "/about",
            element: <div>About</div>,
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